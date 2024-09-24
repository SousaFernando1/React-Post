import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreatePost, IPost } from 'src/interfaces/post/post';
import { api } from 'src/services/api';
import { handleRequestError } from 'src/utils';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { dispatch }) => {
    try {
      const { data } = await api.backend.get<IPost[]>('/posts');

      return data;
    } catch (error) {
      handleRequestError(error, dispatch);
    }
  },
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post: ICreatePost, { dispatch }) => {
    try {
      const { data } = await api.backend.post<IPost>('/posts', post);

      return data;
    } catch (error) {
      handleRequestError(error, dispatch);
    }
  },
);
