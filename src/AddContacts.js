import React, { useContext } from "react";
import {
  Paper,
  Box,
  TextField,
  Container,
  Button,
  Typography,
  Card
} from "@material-ui/core";
import { ContactListContext } from "./Context";

const AddContacts = () => {
  let { Name, getName, number, getNumber, saveData } = useContext(
    ContactListContext
  );
  return (
    <Container>
      <Paper square component={Box} pt={5} mt={0}>
       
        <TextField
          value={Name}
          onChange={(e) => {
            console.log(e.target.value);
            getName(e.target.value);
          }}
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
        />
        <br />

        <TextField
        
        style={{marginTop:'30px'}}
          id="outlined-basic"
          placeholder="Enter Phone Number"
          variant="outlined"
          label="Enter Phone"
          value={number}
          onChange={(e) => {
            console.log(e.target.value);
            getNumber(e.target.value);
          }}
        ></TextField>
        <br />
        <Button
       
          onClick={saveData}
          size="large"
          style={{ width: "150px", margin: "4px" ,marginTop:'40px'}}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </Paper>
    </Container>
  );
};
export default AddContacts;
