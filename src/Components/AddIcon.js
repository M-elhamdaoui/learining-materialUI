import React, { useState } from "react";
import {
  Box,
  Button,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  box: {
    position: "absolute",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(3),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  snackbar:{
    zIndex:theme.zIndex.modal+1,
  }
}));

function AddIcon() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <>
      <Tooltip
        title='add Post'
        className={classes.add}
        onClick={() => setOpen(true)}>
        <Fab color='primary'>
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box className={classes.box}>
          <form
            className={classes.form}
            autoComplete='off'
            onSubmit={(e) => {
              e.preventDefault();
              setOpenSnackbar(true);
            }}>
            <div className={classes.item}>
              <TextField
                id='standard-basic'
                label='Title'
                variant='standard'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id='outlined-multiline-static'
                label='Write your story'
                variant='outlined'
                size='small'
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label='visibility' value='Public'>
                <MenuItem value='Public'>Public</MenuItem>
                <MenuItem value='Private'>Private</MenuItem>
                <MenuItem value='Unlisted'>Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <RadioGroup>
                <FormLabel>Who can Comment</FormLabel>
                <FormControlLabel
                  value='Everybody'
                  control={<Radio size='small' />}
                  label='Everybody'
                />
                <FormControlLabel
                  value='Friends'
                  control={<Radio size='small' />}
                  label='Friends'
                />
                <FormControlLabel
                  value='Nobody'
                  control={<Radio size='small' />}
                  label='Nobody'
                />
                <FormControlLabel
                  value='Custom'
                  disabled
                  control={<Radio size='small' />}
                  label='Custom (Primium)'
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant='outlined'
                color='primary'
                type='submit'
                style={{ marginRight: 20 }}>
                Create
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        className={classes.snackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity='success'
          sx={{ width: "100%" }}>
          Post has been added!
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddIcon;
