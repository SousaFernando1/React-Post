import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  OutlinedInputProps,
} from '@mui/material';
import { MouseEvent, forwardRef, useState } from 'react';

type Props = OutlinedInputProps & {
  label: string;
  helperText?: string;
};

export const PasswordInput = forwardRef(function PasswordInput(
  { label, helperText, className, ...rest }: Props,
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((current) => !current);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined" className={className}>
      <InputLabel htmlFor={`password-${label}`}>{label}</InputLabel>

      <OutlinedInput
        {...rest}
        ref={ref}
        id={`password-${label}`}
        label={label}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="password-visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!rest.error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
});
