// Vendors
import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

// Functions
import api from '../../services/api'


// Types
import {
  User,
  AuthStorage,
  LogInPayload,
  LogInResponse,
  AuthContextValues,
} from './interfaces'

export const STORAGE_KEYS = '@tfy:ath'

const AuthContext = createContext({} as AuthContextValues)

export const AuthContextProvider: React.FC = ({ children }) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants.
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | States.
  |-----------------------------------------------------------------------------
  |
  |
  */

  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  /*
  |-----------------------------------------------------------------------------
  | Functions.
  |-----------------------------------------------------------------------------
  |
  |
  */

  const setAuthDataToCookie = useCallback(({token}) => {
    setCookie(null, STORAGE_KEYS, btoa(JSON.stringify(token)), {
      maxAge: 60 * 60 * 24, // 24 hours
    })
  }, [])

  const getAuthDataFromCookie = useCallback(() => {
    const authDataString = get(parseCookies(), STORAGE_KEYS)
    if (!authDataString) return

    return JSON.parse(atob(authDataString))
  }, [])

  const clearAuthDataFromStorage = useCallback(() => {
    destroyCookie(null, STORAGE_KEYS)
  }, [])

  const logIn = useCallback(
    async () => {
      setIsLoading(true)

      try {
        const apiResponse = 'nada'

        api.defaults.headers.common.Authorization = `Bearer ${apiResponse}`

        setAuthDataToCookie({ token:apiResponse })

        if (router.query.redirectPath) {
          router.push(`/${router.query.redirectPath}`)
        } else {
          router.push('/log')
        }

      } catch (error: unknown) {
        let errorMessage =
          'Infelizmente houve uma falha no seu login. Reveja os dados e tente novamente.'

        if (axios.isAxiosError(error)) {
          if (error.response?.data?.errors) {
            errorMessage = error.response.data.errors
              .map((err: { [key: string]: string }) => err.message)
              .join('\n')
          }

          const apiErrorString = get(error, 'response.data')
          if (typeof apiErrorString === 'string') {
            errorMessage = apiErrorString
          }
        }

      } finally {
        setIsLoading(false)
      }
    },
    [setAuthDataToCookie, router]
  )

  const logOut = useCallback(() => {
    clearAuthDataFromStorage()
    setUser(null)
    router.push('/')
    api.defaults.headers.common.Authorization = ''
  }, [clearAuthDataFromStorage, router])

  const changeUser = useCallback(
    (user: User): void => {
      if (!api.defaults.headers.common.Authorization) return
      const token = (api.defaults.headers.common.Authorization as string).split(' ')[1]
      setUser(user)
      setAuthDataToCookie({ user, token: token })
    },
    [setAuthDataToCookie]
  )

  /*
  |-----------------------------------------------------------------------------
  | Effects.
  |-----------------------------------------------------------------------------
  |
  |
  */
  useEffect(() => {
    /**
     * Get auth data from storage. If finds something, set values to state.
     */

    setIsLoading(true)

    const authData = getAuthDataFromCookie()
    if (!authData) return setIsLoading(false)
    const { token, user } = authData

    setUser(user)
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setIsLoading(false)
  }, [getAuthDataFromCookie])

  /*
  |-----------------------------------------------------------------------------
  | Memos.
  |-----------------------------------------------------------------------------
  |
  |
  */
  const authContextValue: AuthContextValues = useMemo(
    () => ({
      user,
      changeUser,
      isLoggedIn: !!user,
      logIn,
      logOut,
      isLoading,
    }),
    [changeUser, isLoading, logIn, logOut, user]
  )

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
