import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

type Props = TextFieldProps & {
  control: Control<any, any>;
  name: string;
  disabled?: boolean;
};

export function FormTextField({ control, name, disabled, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...rest}
          {...field}
          helperText={error?.message ?? ''}
          error={!!error}
        />
      )}
    />
  );
}
