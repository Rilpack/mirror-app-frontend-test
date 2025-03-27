import { getPosts } from '@/api/posts';
import { Post } from '@/typescript/interfaces';
import { useState } from 'react';

export const usePosts = () => {
  const [loading, setLoading] = useState(false);

  const fetchPosts = async ({ limit, page }: { limit: number; page: number }): Promise<Post[]> => {
    setLoading(true);
    try {
      const data = await getPosts({
        _page: page,
        _limit: limit,
        _expand: 'user',
      });
      return data as Post[];
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

  return { fetchPosts, loading };
};
