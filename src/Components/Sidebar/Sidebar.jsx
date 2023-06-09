import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Router from "../../Routes/Routes";
import './Sidebar.css'
import Image from '../Images/logo.jpg'
import { Link } from "react-router-dom";



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    background: "white",
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [collapse, setCollapse] = React.useState(false);
  const [active, setActive] =React.useState(false);
  const[dash,setDash]=React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setCollapse(!collapse);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "white" }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Link to="/Dashboard"><img src={Image} alt="Logo" className="Logo" /></Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", fontFamily: "poppins" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link to="/Dashboard" className="sidebar-links">
            <ListItemButton >
              <ListItemText primary="Dashboard"  />
            </ListItemButton></Link>
          <ListItemButton onClick={handleClick}   style={{ }}>
            <ListItemText primary="Accounts" />
            {collapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>

          <Collapse in={collapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Addincome" className="sidebar-links">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Add Income" />
                </ListItemButton></Link>
              <Link to="/AddExpense"  className="sidebar-links">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Add Expense" />
                </ListItemButton></Link>

            </List>
          </Collapse>
          <Link to="/Transactions" className="sidebar-links">
            <ListItemButton>
              <ListItemText primary="Transactions" />
            </ListItemButton></Link>
          <Link to="/Viewclient" className="sidebar-links">
            <ListItemButton>
              <ListItemText primary="Clients" />
            </ListItemButton></Link>
          <Link to="/Viewinvoice" className="sidebar-links">
            <ListItemButton>
              <ListItemText primary="Invoices" />
            </ListItemButton></Link>
          <ListItemButton>
          <Link to="/Settings" className="sidebar-links">
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography>
          <Router />
        </Typography>
      </Main>
    </Box>
  );
}
export default Sidebar;
