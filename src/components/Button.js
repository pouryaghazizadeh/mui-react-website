import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Container from "@mui/material/Container";
import React from "react";
function Buttons() {
  ////////Container API//////
  // variant=>"contained","outlined"
  //  disableElevation =>drop shadow
  //   ButtonGroup is a tagand use when you want have one style for some button
  return (
    <div>
      {/* defult type */}
      <Button color="primary">Link</Button>
      <Button color="primary" variant="outlined">
        Link
      </Button>

      <ButtonGroup color="secondary">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" variant="contained">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>
    </div>
  );
}

export default Buttons;
