import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function AddInventory({ setAdd, sectionDetails, setSectionDetails }) {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSectionDetails({ ...sectionDetails, [name]: value });
  };

  const handleOnAdd = () => {
    setAdd(false);
  };

  const handleOnReset = () => {
    setSectionDetails({ ...sectionDetails, sectionName: "", description: "" });
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-required"
            name="sectionName"
            label="Section Name"
            //   defaultValue="Write Something Here .."
            onChange={handleOnChange}
            value={sectionDetails.sectionName}
          />
          <Button onClick={() => setAdd(false)}>X</Button>
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            minRows={3}
            maxRows={5}
            name="description"
            label="Section Description"
            //   defaultValue="Write Something Here .."
            onChange={handleOnChange}
            value={sectionDetails.description}
          />
        </div>
        <Button variant="contained" sx={{ m: 1 }} onClick={handleOnAdd}>
          Add
        </Button>
        <Button sx={{ m: 1 }} onClick={handleOnReset}>
          Reset
        </Button>
      </Box>
    </>
  );
}

export default AddInventory;
