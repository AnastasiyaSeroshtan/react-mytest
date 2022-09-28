import { Box } from "components/Box";
import React from "react";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

export class Reader extends React.Component {
    state = {
        publicationIndex: 0
      }

    makeClick = (value) => {
        this.setState(prevState => {
            return ({
                publicationIndex: prevState.publicationIndex + value,
            })
        })
    }

    render() {
        const currentItem = this.props.items[this.state.publicationIndex];
        console.log(currentItem);
        return (
          <Box>
              <Controls current={this.state.publicationIndex+1} total={this.props.items.length} handleClick={this.makeClick}/>
                <Progress current={this.state.publicationIndex +1} total={this.props.items.length}/>
                <Publication item={currentItem}/>
          </Box>
        )
    }
}