import React from "react";
import { Box } from "components/Box";
import { Button } from "./Dropdown.styled";

export class Dropdown extends React.Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    render () {
        return (
            <Box pt={2} pb={2} bg="white"  width="50%">
                <Box  pt={2} pb={2} bg="white" border="normal" width="50%">
                <Button onClick={this.toggle}> {this.state.visible ? "Hide" : "Show"} </Button>
            </Box>
            {this.state.visible && (
                <Box  pt={4} pb={4} bg="accent" border="normal" width="50%"> Выпадающее меню</Box>
            )}
            </Box>
        )
    }



}