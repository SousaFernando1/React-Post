import { Box, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sesiSenaiLogo from 'src/assets/sesi-senai-logo.svg';
import { muiResponsiveValues } from 'src/utils';

export function LogoSesiSenai() {
  const navigate = useNavigate();

  const handleClickLogo = () => navigate('/');

  return (
    <Box display={muiResponsiveValues('none', 'block')}>
      <ButtonBase onClick={handleClickLogo}>
        <img src={sesiSenaiLogo} alt="logo" />
      </ButtonBase>
    </Box>
  );
}
