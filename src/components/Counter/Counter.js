import { Box } from "components/Box";
import React from "react";
import { Controls } from "./Controls/Controls";
import { Value } from "./Value/Value";

export class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncreament = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    };

    handleDecreament = () => {
        this.setState(prevState => (
            {value: prevState.value - 1,}
        ))
    };

    render() {
        return (
            <Box pt={2} pb={2} bg="white" border="normal" width="50%">
            <Value value={this.state.value}/>
            <Controls onIncrement={this.handleIncreament} onDecrement={this.handleDecreament}/>
        </Box>
          )
    }

}

