import { getPosts } from '@/api/posts';
import { Post } from '@/typescript/interfaces';

export const usePosts = () => {
  const fetchPosts = async ({ limit, page }: { limit: number; page: number }): Promise<Post[]> => {
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
    }
  };

  return { fetchPosts };
};
