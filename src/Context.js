import React, { useState, createContext } from "react";
import { Button, Container } from "@material-ui/core";

import swal from "sweetalert";

let ContactListContext = createContext();
let ContactListProvider = (props) => {
  const [Name, setName] = useState();
  const [number, setNumber] = useState();
  const [btn, setbtn] = useState();
  const [contactdetails, setcontactdetails] = useState([]);
  
  const getName = (val) => {
    setName(val);
    
  };

  const getNumber = (val) => {
    setNumber(val);
  };
  const data = [Name, " ", number];

  const saveData = () => {
    let regex = /^(\+92|0|92)[0-9]{10}$/gm;
    // let regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (Name && number !== "") {
      if (String(number).match(regex)) {
        setcontactdetails([...contactdetails, data]);
        setName("");
        setNumber("");
        // swal("Correct Number");
      } else {
        swal("Enter correct number");
      }
    } else {
      swal("kindly fill above inputs");
    }
  };

  return (
    <ContactListContext.Provider
      value={{
        Name,
        number,
        getName,
        getNumber,
        saveData,
        contactdetails,
        setcontactdetails
      }}
    >
      {props.children}
    </ContactListContext.Provider>
  );
};
export { ContactListContext, ContactListProvider };
