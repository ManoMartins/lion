import { formatDistance as  dateFnsFormatDistance} from 'date-fns';

export function formatDistance(to: string | Date) {
  return dateFnsFormatDistance(new Date(to), new Date());
}