import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ContactListContext } from "./Context";
import swal from "@sweetalert/with-react";
const Display = () => {
  let { Name, number, contactdetails, delData, setcontactdetails } = useContext(
    ContactListContext
  );

  
  return (
    <>
      <Typography
        style={{
          textAlign: "left",
          marginLeft: "50px",
          color: "white",
          background: "#0000",
          marginTop: "50px"
        }}
        variant="h4"
      >
        Contact Details
      </Typography>
      {contactdetails.map((show, key) => {
        return (
          <>
            <Container
              key={key}
              style={{
                textAlign: "left",
                display: "inlineflex",
                alignItems: "left"
              }}
              key={key}
            >
              <Card
                style={{ width: "320px" }}
                square
                color="secondary"
                variant="outlined"
              >
                <CardContent
                  style={{
                    marginTop: "10px",
                    marginLeft: "0px",
                    paddingLeft: "10px"
                  }}
                >
                  <Typography variant="h6"> {show}</Typography>

                <br/>  <Button variant='contained' color='secondary'
                    onClick={() => {
                      let ar1 = [...contactdetails];
                      ar1.splice(key, 1);
                      console.log(key);
                      setcontactdetails(ar1);
                    }}
                  >
                    Delete
                  </Button>
                
                </CardContent>
              </Card>
            </Container>
          </>
        );
      })}
      {/* <Button>Delete</Button> */}
    </>
  );
};
export default Display;
