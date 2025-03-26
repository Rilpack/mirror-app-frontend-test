import { useState } from 'react';
import { getPosts } from '@/api/posts';
import { Post } from '@/typescript/interfaces';

export const usePosts = ({ limit }: { limit: number }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const data = await getPosts({
        _page: 1,
        _limit: limit,
        _expand: 'user',
      });
      setPosts(data);
    } catch (err: any) {
      setError(err.message || 'Ошибка при загрузке постов');
    } finally {
      setLoading(false);
    }
  };

  return { posts, fetchPosts, loading, error };
};
