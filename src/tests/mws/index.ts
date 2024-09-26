import { setupWorker } from 'msw/browser';
import { signInMock } from './SignInMock';
import { postsMock } from './postsMock';

const { MODE } = import.meta.env;

export const worker = setupWorker(signInMock, postsMock);

export async function enableMSW() {
  if (MODE !== 'test') return;
  await worker.start();
}
