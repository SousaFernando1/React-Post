import { Button, Divider, Popover, Stack } from '@mui/material';
import { signOut } from 'src/redux/slices';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { MouseEvent, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { muiResponsiveValues } from 'src/utils';
import { ArrowDownIcon, Container, HeaderContainer } from './styles';
import { LogoSesiSenai } from '../LogoSesiSenai';

export function Layout() {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const { user } = useAppSelector((state) => state.session);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => dispatch(signOut());

  return (
    <Container>
      <HeaderContainer flex={1}>
        <Stack
          direction="row"
          justifyContent={muiResponsiveValues('flex-end', 'space-between')}
          alignItems="center"
          ml={3}
        >
          <LogoSesiSenai />

          <Button
            onClick={handlePopoverOpen}
            variant="text"
            color="inherit"
            endIcon={<ArrowDownIcon />}
          >
            {user?.name}
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            onClose={handlePopoverClose}
          >
            <Button
              onClick={handleSignOut}
              variant="text"
              color="error"
              size="small"
            >
              Deslogar
            </Button>
          </Popover>
        </Stack>
        <Divider />
      </HeaderContainer>
      <Outlet />
    </Container>
  );
}
