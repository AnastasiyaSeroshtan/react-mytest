import { Box } from "components/Box";
import React from "react";
import { nanoid } from 'nanoid';

export class FormFull extends React.Component {
    state = {
        name: "",
        surname: "",
    }

    handleInput = (e) => {
        // console.log(e.currentTarget.name);
        this.setState({
            // id: nanoid(),
            [e.currentTarget.name]: e.currentTarget.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const contact = {
            id: nanoid(),
            name: e.currentTarget.name.value,
            surname: e.currentTarget.surname.value,
          }
        this.props.onGetFormData(contact);
        this.reset();
    };

    reset = () => {
        return (
            this.setState({
                name: "",
                surname: "",
            })
        )  
    }; 

    render() {
        return (
            <Box onSubmit={this.handleSubmit} as="form" mt={5} bg="white" border="normal">
                <label>
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                </label>
                <label>
                    Surname
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleInput} />
                </label>

                <button type="submit">Send</button>
            </Box>
        )
    }
};