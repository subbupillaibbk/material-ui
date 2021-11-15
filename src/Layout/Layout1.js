import React from 'react';
import clsx from 'clsx';
import { hexToRgb, rgbToHex } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {HomeOutlined, MailOutlined, ViewModuleOutlined, SettingsOutlined, LockOutlined  } from '@mui/icons-material/';
import logo from '../assets/button-bg.png'
import Table from '../components/CustomizedTable'
import { Container } from '@mui/material';
const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    "& .MuiPaper-root": {
      backgroundColor: '#16CC7B'
    },
    "& .MuiListItem-root": {
      display: 'block',
      textAlign: 'center'
    },
    "& .MuiListItemIcon-root": {
      minWidth: "0",
      color: "#ECFBF2"
    },
    "& .MuiListItemText-root": {
      color: "#ECFBF2"
    },
    "@media screen and (max-width: 600px)": {
      "& .MuiListItemText-root": {
        display: "none"
      },
    },
    "& .Mui-selected .MuiTypography-colorTextSecondary" : {
      color: '#034D99'
    },
    "& .Mui-selected div" : {
      color: '#034D99'
    },
    "& .Mui-selected" : {
      backgroundColor: '#16CC7B',
      backgroundImage: {logo}
    }
  },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  // },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#16CC7B'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  "@media screen and (max-width: 600px)" :{
    drawerPaper: {
      width: 70,
    },
    drawer: {
      width: 70,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const getIcons = {
    Dashboard: <HomeOutlined fontSize="large" />,
    ProgramOfferings: <ViewModuleOutlined fontSize="large" /> , 
    Messages: <MailOutlined fontSize="large" />, 
    Settings: <SettingsOutlined fontSize="large" />, 
    Logout: <LockOutlined fontSize="large"/>
  }

  return (
    <React.Fragment>
    <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: true,
    })}
  >
    <Toolbar>
      <Typography variant="h6" noWrap>
        Mini variant drawer
      </Typography>
    </Toolbar>

  </AppBar>
    <div className={classes.root}>
      <CssBaseline />
     
      <Drawer
        // className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        InputProps = {{
          className: classes.bg
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: true,
          [classes.drawerClose]: false,
        })}
      >
        
        <Divider />
        <List>
          {['Dashboard', 'Program Offerings', 'Messages', 'Settings', 'Logout'].map((text, index) => (
            <React.Fragment>
            <ListItem 
              button 
              key={text} 
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}>
              <ListItemIcon>{getIcons[text.replace(" ", "")]}</ListItemIcon>
              <ListItemText disableTypography
        secondary={<Typography style={{ fontSize: '0.75rem', fontWeight: 100, lineHeight: 1.2 }}>{text}</Typography>}/>
            </ListItem>
            <Divider/></React.Fragment>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      
      </main>
    </div>
    </React.Fragment>
  );
}
