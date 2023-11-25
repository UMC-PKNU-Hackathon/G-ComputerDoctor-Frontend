import { format } from 'date-fns';

export const formattedDate = (date: Date | string) => {
  const d = date instanceof Date ? date : new Date(date);

  return format(d, 'MMMM d, yyyy');
};
