import React from "react";

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: "250px",
        [theme.breakpoints.down("sm")]:{
            height:150,
        }
    },
    card:{
        marginBottom:theme.spacing(5),
    }

}));
function Post() {
    const classes = useStyles();
    return (
        <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="my post"
                />
                <CardContent>
                    <Typography  gutterBottom variant="h5" >My ferst Post</Typography>
                    <Typography variant="body2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam quo iure quos fuga, vitae recusandae. Odit repellat eius, tempore ipsum, doloribus est corporis esse deserunt tempora assumenda quis eos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam quo iure quos fuga, vitae recusandae. Odit repellat eius, tempore ipsum, doloribus est corporis esse deserunt tempora assumenda quis eos.</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" >Share</Button>
                    <Button size="small" color="primary" >Learn more</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default Post;
