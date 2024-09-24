import { createSlice } from '@reduxjs/toolkit';
import { IThunkLoading, ThunkLoadingEnum } from 'src/interfaces';
import { IPost } from 'src/interfaces/post/post';
import { createPost, getPosts } from './thunks';

type InitialState = {
  posts: IPost[];

  postsLoading: IThunkLoading;
  createPostLoading: IThunkLoading;
};

const initialState = {
  posts: [],

  postsLoading: ThunkLoadingEnum.IDLE,
  createPostLoading: ThunkLoadingEnum.IDLE,
} as InitialState;

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.postsLoading = ThunkLoadingEnum.PENDING;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload!;
        state.postsLoading = ThunkLoadingEnum.SUCCEEDED;
      })
      .addCase(getPosts.rejected, (state) => {
        state.posts = [];
        state.postsLoading = ThunkLoadingEnum.FAILED;
      })

      .addCase(createPost.pending, (state) => {
        state.createPostLoading = ThunkLoadingEnum.PENDING;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.createPostLoading = ThunkLoadingEnum.SUCCEEDED;
      })
      .addCase(createPost.rejected, (state) => {
        state.createPostLoading = ThunkLoadingEnum.FAILED;
      });
  },
});

export * from './thunks';
