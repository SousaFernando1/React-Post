import { http, HttpResponse } from 'msw';
import { LoginParams, LoginResponse } from 'src/redux/slices';

export const signInMock = http.post<never, LoginParams, LoginResponse>(
  '/login',
  async ({ request }) => {
    const { username, password }: LoginParams = await request.json();

    if (username === 'test@test.com' && password === 'Test.123') {
      return HttpResponse.json(
        {
          token: '123abc456def',
          user: {
            id: 1,
            name: 'testeSuccess',
          },
        },
        { status: 200 },
      );
    }
  },
);
