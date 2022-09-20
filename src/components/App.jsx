import { Box } from "./Box";
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
import { FormFull } from "./FormFull/FormFull";
import {Filter} from "./Filter/Filter";
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
    ],
    filter: '',
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  getFormData = (contact) => {
    console.log(contact);
   

    this.setState(prevState => (
      {contacts: [contact, ...prevState.contacts]}
    ))
  };

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  };

  getVisibleContacts = () => {
    const normolizedFilter = this.state.filter.toLocaleLowerCase();

    return (
      this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normolizedFilter))
    )
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box pt={3} pb={3} bg="muted">
       <Counter initialValue={15}/>
       <Dropdown />
       <FormFull onGetFormData={this.getFormData}/>
       <Filter value={this.state.filter} onChange={this.changeFilter}/>
       <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </Box>
     );
  }
};
