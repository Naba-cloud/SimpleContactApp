import React from "react";
import { Container,Paper, Typography, Box } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Header = () => {
  return (
    <>
      <Container style={{paddingTop:'6px'}}>
        
        <Paper style={{color:'#F9DFDC',background:'#0C4271'}}square component={Box} pt={3}>
 <Typography style={{fontFamily:'monospace'}}variant="h4">
   <AccountCircleIcon fontSize="medium" />Contact List Application</Typography>
          <Typography variant="subtitle1">
            You Can Add Contacts Of Your Loved Ones
          </Typography>
        </Paper>
      </Container>
    </>
  );
};
export default Header;
