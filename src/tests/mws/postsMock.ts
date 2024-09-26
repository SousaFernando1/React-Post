import { http, HttpResponse } from 'msw';
import { IPost } from 'src/interfaces/post/post';

export const postsMock = http.get<never, never, IPost[]>('/posts', async () => {
  return HttpResponse.json([
    {
      id: 0,
      title: 'title',
      description: 'description',
      author: 'author',
      createdAt: new Date() as unknown as string,
    },
  ]);
});
