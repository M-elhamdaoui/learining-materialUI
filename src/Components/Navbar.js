import React from "react";
import { Search ,  Mail, Notifications } from "@material-ui/icons";
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import image from "../assets/images/Webp.net-compress-image.jpg";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  logoLG: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSM: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchIcon: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLG}>
          MY LOGO
        </Typography>
        <Typography variant='h6' className={classes.logoSM}>
          ML
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder='search...' className={classes.input} />
        </div>
        <div className={classes.icons}>
            <Search className={classes.searchIcon} />
          <Badge badgeContent={1} color='secondary' className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color='secondary'  className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt='Mohammed EL hamdaoui' src={image} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
