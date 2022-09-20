import { Box } from "./Box";
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
import { FormFull } from "./FormFull/FormFull";
import React from "react";
import { nanoid } from 'nanoid';
import { ContactsList } from "./ContactsList/ContactsList";



export class App extends React.Component {
  state = {
    contacts: [
      {id: nanoid(), name: "Yura", surname: "Seroshtan"},
      {id: nanoid(), name: "Nastya", surname: "Seroshtan"},
      {id: nanoid(), name: "Dima", surname: "Seroshtan"},
      {id: nanoid(), name: "Masha", surname: "Seroshtan"}
    ]
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  getFormData = (contact) => {
    // console.log(data);
   

    this.setState(prevState => (
      {contacts: [contact, ...prevState.contacts]}
    ))
  };

  render() {
    return (
      <Box pt={3} pb={3} bg="muted">
       <Counter initialValue={15}/>
       <Dropdown />
       <FormFull onGetFormData={this.getFormData}/>
       <ContactsList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
      </Box>
     );
  }
};
