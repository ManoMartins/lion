export interface User {
  id: string
  username: string
  person: {
    id: string
    name: string
    email: string
    phoneNumber: string
    socialName?: string
    gender?: 'M' | 'F'
    documentNumber: string
    documentType: string
    birthdate: string
  }
  roleUser: Array<{
    role: {
      name: string
      slug: string
    }
  }>
}

export interface LogInResponse {
  user: User
  token: {
    token: string
    type: string
  }
}

export interface AuthStorage {
  user: User
  token: string
}

export interface LogInPayload {
  username: string
  password: string
  keepConnected: boolean
}

export interface AuthContextValues {
  user: User | null
  changeUser: (user: User) => void
  isLoggedIn: boolean
  isLoading: boolean
  logIn: () => void
  logOut(): void
}
