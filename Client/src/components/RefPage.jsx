import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const RefPage = () => {
  const count = useRef(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h5>Ref Input Count Example :{count.current} </h5>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        value={value}
        noValidate
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
      >
        <TextField
          id="outlined-basic"
          label="Ref input count"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default RefPage;
