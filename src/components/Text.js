import Typography from "@mui/material/Typography";
import React from "react";


// use Typography for write text 
// variant Some predefine styles can be used with variant
// align =>like align content
// color
// noWrap
// gutterBottom =>If true, the text will have a bottom margin.

// if you want better understand what is different between variant and component
// try this code
  //  <Typography variant="h1" component="h5" color="darkred">
  //    helooo
  //  </Typography>;

  // note you will see type element in inspect is h5 but size is like h1



function Text() {
  return (
    <div>
      <Typography variant="h1" component="h5" color="darkred">
        helooo
      </Typography>
      <Typography color="red" gutterBottom="false">
        henkd kdfjie gkrneo kvjdno kdveon
      </Typography>
    </div>
  );
}

export default Text;
