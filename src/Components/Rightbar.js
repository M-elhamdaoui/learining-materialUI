import React from "react";

import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    height: "100vh",
  },
  link:{
    marginRight:theme.spacing(1),
    color: "#555",
  }
}));
function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h5' gutterBottom>
        Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "10px" }}>
        <Avatar
          alt='Remy Sharp'
          src='https://mui.com/static/images/avatar/1.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://mui.com/static/images/avatar/2.jpg'
        />
        <Avatar alt='Cindy Baker' src='' />
        <Avatar
          alt='Agnes Walker'
          src='https://mui.com/static/images/avatar/4.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://mui.com/static/images/avatar/5.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://mui.com/static/images/avatar/6.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://mui.com/static/images/avatar/7.jpg'
        />
      </AvatarGroup>
      <Typography variant='h5' gutterBottom>
        Gallery
      </Typography>
      <ImageList cols={2} rowHeight={100} style={{marginBottom:10}} >
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format'
            alt=''
            className={classes.image}
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="h5" gutterBottom >Hobbies</Typography>
      <Link href="#" className={classes.link} >Programming</Link>
      <Link href="#" className={classes.link} >Gaming</Link>
      <Link href="#" className={classes.link} >Traveling</Link>
      <Divider flexItem style={{marginBottom:10}} />
      <Link href="#" className={classes.link} >Reading</Link>
      <Link href="#" className={classes.link} >Sport</Link>
      <Link href="#" className={classes.link} >sky dive</Link>
    </Container>
  );
}

export default Rightbar;
