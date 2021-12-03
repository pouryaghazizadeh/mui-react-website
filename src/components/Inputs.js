import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'


const style = makeStyles({
    field:{
        margin: "20px",
        color: "red"
    }
})
function Inputs() {
 const classes = style()
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField label="note totles" className={classes.field} />
          <TextField label="note " variant="filled" />
          <TextField label="user" variant="outlined" />
          <TextField label="password" variant="standard" />
        </form>
      </div>
    );
}

export default Inputs
