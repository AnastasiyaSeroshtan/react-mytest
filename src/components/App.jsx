import { Box } from "./Box";
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
import { FormFull } from "./FormFull/FormFull";
import {Filter} from "./Filter/Filter";
import React from "react";
import { nanoid } from 'nanoid';
import { ContactsList } from "./ContactsList/ContactsList";
import { Modal } from "./Modal/Modal";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { VideoList } from "./VideoPlayer/VideoList";
import videos  from "./videos.json";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];



export class App extends React.Component {
  state = {
    contacts: [
      {id: nanoid(), name: "Yura", surname: "Seroshtan"},
      {id: nanoid(), name: "Nastya", surname: "Seroshtan"},
      {id: nanoid(), name: "Dima", surname: "Seroshtan"},
      {id: nanoid(), name: "Masha", surname: "Seroshtan"}
    ],
    filter: '',
    showModal: false,
    videoLink: null,
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

  modalToggle = () => {
    this.setState((state) => {
      return (
        {showModal: !state.showModal,}
      )
    })
  };



  componentDidMount(){
    
    const getContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      this.setState({contacts: parseContacts});
    }
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  VideoSelect = link => {
    this.setState({
      videoLink: link,
    })
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box pt={3} pb={3} bg="muted">
        <button type="button" onClick={this.modalToggle}>Open modal window</button>
        {this.state.showModal && <Modal onClose={this.modalToggle}>
          <h1>Hello world!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, velit! Dignissimos porro ea debitis dolorum alias adipisci est, et corrupti. Excepturi quod maxime labore natus ratione sapiente nemo nulla incidunt.</p>
          <button type="button" onClick={this.modalToggle}>Close</button>
        </Modal>}
        <ColorPicker options={colorPickerOptions}/>
       <Counter initialValue={15}/>
       <Dropdown />
       <FormFull onGetFormData={this.getFormData}/>
       <Filter value={this.state.filter} onChange={this.changeFilter}/>
       <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
       <Box border="normal" borderColor="red">
          <h2>Selected video</h2>
          <VideoList videos={videos} onSelect={this.VideoSelect}/>
          <VideoPlayer url={this.state.videoLink}/>
       </Box>
      </Box>
     );
  }
};
