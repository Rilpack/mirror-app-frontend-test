import { useState } from 'react';
import { getSettings } from '@/api/settings/index';
import { Settings } from '@/typescript/interfaces';

export const useSettings = ({
  setSettings,
}: {
  setSettings: React.Dispatch<React.SetStateAction<Settings | null>>;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (err: any) {
      setError(err.message || 'Ошибка при загрузке настроек');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchSettings };
};
