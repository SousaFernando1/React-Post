import { Stack } from '@mui/material';
import styled from 'styled-components';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import { rgba } from 'polished';

export const HeaderContainer = styled(Stack)`
  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const ArrowDownIcon = styled(KeyboardArrowDownRounded)`
  color: ${({ theme }) => theme.COLORS.grey_500};
`;

export const Container = styled(Stack)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.COLORS.primary_100, 0.16)};
`;
