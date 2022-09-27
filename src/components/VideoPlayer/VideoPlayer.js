import { Box } from "components/Box";
import React from "react";
import {PlayerWrapper, StyledPlayer } from "./VideoPlayer.styled";

export class VideoPlayer extends React.Component {
    render() {
        return(
            <Box>
                {this.props.url &&
                    <PlayerWrapper>
                        <StyledPlayer url={this.props.url} controls/>
                    </PlayerWrapper>
                }
            </Box>
        )
    }
};
