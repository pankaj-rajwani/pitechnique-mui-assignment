import { useState } from 'react';
import Proptype from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Menu,
  InventoryOutlined,
  SettingsSuggestOutlined,
} from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: theme.palette.sidebar.background.main,
  color: theme.palette.sidebar.color.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: theme.palette.sidebar.background.main,
  color: theme.palette.sidebar.color.main,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: 'none',
  background: theme.palette.background.default,
  color: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open
    ? {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
        width: `calc(100% - ${theme.spacing(7)} - 1px)`,
        marginLeft: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${theme.spacing(8)} - 1px)`,
          marginLeft: `calc(${theme.spacing(8)} + 1px)`,
        },
      }),
}));

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

/*------------------------------------------Layout----------------------------*/
export const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar position='fixed' open={open}>
        <Toolbar>
          <Typography variant='h5' noWrap component='div'>
            Procurement
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant='permanent' open={open}>
        <StyledHeader>
          <IconButton
            aria-label='open drawer'
            onClick={toggleDrawer}
            edge='start'
            sx={{
              color: '#fff',
              '&:focus': {
                border: 'none',
                outline: 'none',
              },
            }}
          >
            <Menu />
          </IconButton>
        </StyledHeader>
        <List>
          {[
            'Orders',
            'Settings',
            'Invoices',
            'Help',
            'Inventory',
            'Products',
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: theme.palette.sidebar.color.main,
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? (
                    <InventoryOutlined />
                  ) : (
                    <SettingsSuggestOutlined />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <StyledHeader />
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: Proptype.node.isRequired,
};
