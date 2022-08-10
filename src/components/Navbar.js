import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/logoreact.png";
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
      },
      AppBar: {
         backgroundColor: "grey",
         boxShadow: "none",
      },
      
      grow: {
        flexGrow: 1,
      },
    
    
      Button: {
        marginLeft: theme.spacing(2),
      },
      image: {
        marginRight:"5px",
        height:"3rem",
      },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed"className={classes.AppBar}>
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo}className={classes.image} />
          </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" color="black" component="p">
            hello Guest
          </Typography>
          <div className={classes.Button}>
          <Link to="/signin">
            <Button variant="outlined"> 
             <strong>sign in</strong> 
            </Button>
          </Link>
          <Link to="checkout-page">
          <IconButton aria-label='show cart items'color='inherit'>
          <Badge badgeContent={basket.length} color="secondary">
          <ShoppingCart fontSize='large' color='primary'/>
          </Badge>
          </IconButton>
          </Link>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
