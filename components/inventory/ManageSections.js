import React, { useEffect, useState } from "react";
import {
  Button,
  ClickAwayListener,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddInventory from "./AddInventory";
import Paper from "@mui/material/Paper";
import Axios from "axios";
import { EditAttributes } from "@mui/icons-material";

function ManageSections() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const [sectionDetails, setSectionDetails] = React.useState({
    sectionName: "",
    Description: "",
  });

  function handleAddSection() {
    setAdd(true);
  }

  function handleOnEdit(e) {
    // let next = e.target.nextSibling.firstChild;
    // console.log(next.firstChild);
    // next.firstChild.disabled = false;
    // next.nextSibling.nextSibling.disabled = false;
    setEdit(true);
  }

  const [sectionItems, setSectionItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3005/inventory").then((res) => {
      setSectionItems(res.data);
    });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Manage Sections
      </h2>
      {add ? (
        <AddInventory
          setAdd={setAdd}
          sectionDetails={sectionDetails}
          setSectionDetails={setSectionDetails}
        />
      ) : (
        <>
          <Typography sx={{ display: "inline-flex", m: 1 }}>
            Want To Add Section Here?
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ m: 1 }}
            onClick={handleAddSection}
          >
            Click Here
          </Button>
        </>
      )}

      <hr />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ m: 2 }}
      >
        {sectionItems?.map((val, index) => {
          // const [edit, setEdit] = useState(false);

          // const handleClick = React.useCallback(() => {
          //   setEdit(!edit);
          // }, [edit, setEdit]);

          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item
                onDoubleClick={() => {
                  setEdit(true);
                }}
              >
                <Button
                  variant="small"
                  className="waah"
                  onClick={(e) => handleOnEdit(e)}
                  // onClick={() => handleClick}
                >
                  Edit
                </Button>

                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEdit(false);
                  }}
                >
                  <strong>
                    <input
                      disabled={edit ? false : true}
                      value={val.name}
                      onChange={(e) => {
                        let ll = e.target.value;
                        var pp = [...sectionItems];
                        pp[index].name = ll;
                        return setSectionItems(pp);
                      }}
                      style={{ border: "none" }}
                    />
                  </strong>

                  <br />

                  <TextareaAutosize
                    disabled={edit ? false : true}
                    value={val.Description}
                    onChange={(e) => {
                      var pp = [...sectionItems];
                      pp[index].Description = e.target.value;
                      return setSectionItems(pp);
                    }}
                    style={{ border: "none", margin: "5px", padding: "5px" }}
                  />
                  {edit ? <Button type="submit">Submit</Button> : null}
                </form>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ManageSections;
