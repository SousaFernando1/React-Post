/* eslint-disable no-undef */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { SignIn } from 'src/pages';

describe('SignIn', () => {
  it('should complete login with valid inputs', async () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>,
    );

    const usernameInput = wrapper.getByLabelText('E-mail');
    const passwordInput = wrapper.getByLabelText('Senha');
    const button = wrapper.getByText('Salvar');

    fireEvent.change(usernameInput, { target: { value: 'sousasousa11' } });
    fireEvent.change(passwordInput, { target: { value: 'Sousa.Fer1' } });

    fireEvent.click(button);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
