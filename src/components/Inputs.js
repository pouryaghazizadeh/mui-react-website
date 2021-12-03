import { RadioGroup, TextField } from "@mui/material";
import { Radio } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import React from "react";

function Inputs() {



  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          label="UserName"
          sx={{
            marginTop: 5,
          }}
          fullWidth
        />

        <TextField
          label="note "
          variant="filled"
          sx={{
            marginTop: 5,
          }}
          fullWidth
        />
        <RadioGroup>
          <FormControlLabel control={<Radio />} label="man" value="man" />
            <FormControlLabel control={<Radio />} label="woman" value="woman" />
          {/* <Radio  value="hello"/>
        <Radio value="bay" /> */}
        </RadioGroup>
      </form>
    </div>

    //   examples =>
    //    <TextField label="user" variant="outlined" />
    //       <TextField label="password" variant="standard" />
  );
}

export default Inputs;
