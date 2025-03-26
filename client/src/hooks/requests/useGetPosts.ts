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
    } catch (err: any) {
      throw new Error(err.message || 'Ошибка при загрузке постов');
    }
  };

  return { fetchPosts };
};
