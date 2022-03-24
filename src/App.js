import React from "react";
import { Button } from "@material-ui/core";
import {Person} from "@material-ui/icons"
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  btn:{
    fontSize:12,
    color:"red",
  }
})
function App() {
 const classes=useStyles();
 console.log(classes.btn)
  return (
    
    <div>
      
      <Button
      
      className={classes.btn}
      startIcon={<Person />}
      variant='contained'
       size='large'
       color="Primary"
      
       
       >
        Material UI
      </Button>
    </div>
  );
}

export default App;
