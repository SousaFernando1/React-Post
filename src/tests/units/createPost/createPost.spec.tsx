/* eslint-disable no-undef */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CreatePost } from '../../../components/CreatePost';

const createPost = vi.fn();

describe('CreatePost', () => {
  it('should call createPost function on button click', async () => {
    const wrapper = render(<CreatePost onCreatePost={createPost} />);

    const titleInput = wrapper.getByLabelText('Título');
    const descriptionInput = wrapper.getByLabelText('Descrição');
    const button = wrapper.getByText('Criar');

    fireEvent.change(titleInput, { target: { value: 'asdasdasd' } });
    fireEvent.change(descriptionInput, { target: { value: 'asdsdasdasd' } });

    fireEvent.click(button);

    await waitFor(() => {
      expect(createPost).toHaveBeenCalled();
    });
  });
});
