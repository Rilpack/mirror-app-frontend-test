import { api } from '@/api/index';
import { Post } from '@/typescript/interfaces';

export const getPosts = async (params?: Record<string, string | number>): Promise<Post[]> => {
  const response = await api.get<Post[]>('/posts', { params });
  return response.data;
};
