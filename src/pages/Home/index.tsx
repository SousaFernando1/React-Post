import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { CreatePost, Post } from 'src/components';
import { useSuccessModal } from 'src/hooks/successModal';
import { ICreatePost } from 'src/interfaces/post/post';
import { createPost, getPosts } from 'src/redux/slices';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

export function Home() {
  const dispatch = useAppDispatch();
  const { openSuccessModal } = useSuccessModal();

  const { posts } = useAppSelector((state) => state.post);

  const handleGetPosts = () => dispatch(getPosts());

  const handleCreatePost = async (newPost: ICreatePost) => {
    const createdPost = await dispatch(createPost(newPost)).unwrap();

    if (createdPost) {
      openSuccessModal({
        title: 'Criado!',
        description: 'O post foi criado com sucesso!',
        onClose: () => handleGetPosts(),
      });
    }
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <Stack gap={3} my={5} justifyContent="center" alignItems="center">
      <CreatePost onCreatePost={handleCreatePost} />
      {posts.map((post) => (
        <Post key={`${post.id}-${post.createdAt}`} post={post} />
      ))}
    </Stack>
  );
}
