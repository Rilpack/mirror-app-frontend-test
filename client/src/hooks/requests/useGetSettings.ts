import { useState } from 'react';
import { getSettings } from '@/api/settings/index';
import { Settings } from '@/typescript/interfaces';

export const useSettings = ({
  setSettings,
}: {
  setSettings: React.Dispatch<React.SetStateAction<Settings | null>>;
}) => {
  const [loading, setLoading] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error('Неизвестная ошибка при загрузке постов');
      }
    } finally {
      setLoading(false);
    }
  };

  return { fetchSettings, loading };
};
