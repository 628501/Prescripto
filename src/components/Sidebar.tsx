import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const DrawerList = (
    <Box >
      <List >
        <Link to='dashboard' style={{textDecoration:"none" , color:"black"}}>
          <ListItem disablePadding >
            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='add-doctor' style={{textDecoration:"none" , color:"black"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Add Doctor' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='appointments' style={{textDecoration:"none" , color:"black"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Appointments' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='doctors-list' style={{textDecoration:"none" , color:"black"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Doctors List' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{ 
        '.MuiDrawer-paper': {
          width: 300,
          paddingTop: '75px',
          zIndex:'0'
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}