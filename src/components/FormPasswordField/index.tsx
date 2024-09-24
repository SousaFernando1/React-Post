import { OutlinedInputProps } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { PasswordInput } from '../PasswordInput';

type Props = OutlinedInputProps & {
  control: Control<any, any>;
  label: string;
  name: string;
  disabled?: boolean;
  helperText?: string;
};

export function FormPasswordField({ control, name, disabled, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          {...rest}
          {...field}
          helperText={error?.message ?? ''}
          error={!!error}
        />
      )}
    />
  );
}
