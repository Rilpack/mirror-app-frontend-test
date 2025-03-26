import { useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.extend(relativeTime);
dayjs.locale('ru');

export const useFormatDate = (date: string): string => {
  return useMemo(() => {
    const now = dayjs();
    const dateText = dayjs(date);
    const diffInDays = now.diff(dateText, 'day');

    if (diffInDays < 7) {
      return dateText.fromNow();
    }

    return dateText.format('DD/MM/YYYY');
  }, [date]);
};
