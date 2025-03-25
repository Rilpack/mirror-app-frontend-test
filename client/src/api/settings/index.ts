import { api } from '@/api/index';
import { Settings } from '@/typescript/interfaces';

export const getSettings = async (): Promise<Settings> => {
  const response = await api.get<Settings>('/settings');
  return response.data;
};
