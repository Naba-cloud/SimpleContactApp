import "./styles.css";
import React from 'react';
import Header from './Header';
import AddContacts from "./AddContacts";
import { ContactListProvider } from "./Context";
import Display from "./Display";
export default function App() {
  return (
    <div className="App">
     <Header/>
     <ContactListProvider>
     <AddContacts/>
     <Display/>
     </ContactListProvider>
    </div>
  );
}
