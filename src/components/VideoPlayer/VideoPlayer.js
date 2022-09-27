import { Box } from "components/Box";
import React from "react";
import {PlayerWrapper, StyledPlayer } from "./VideoPlayer.styled";



export class VideoPlayer extends React.Component {
    state = {
        isVideoLoaded: false,
    }

    VideoIsLoaded = () => {
        this.setState({isVideoLoaded: true,})
    };

    componentDidUpdate(prevProps){
        if (prevProps.url !== this.props.url) {
            this.setState({isVideoLoaded:false,})
        }
    };

    render() {
        const playerWidthHeight = this.state.isVideoLoaded ? '100%' : 0;
        
        return(
            <Box>
                {this.props.url && !this.state.isVideoLoaded && <h2>Loading...</h2>}
                {this.props.url &&
                    <PlayerWrapper>
                        <StyledPlayer url={this.props.url} controls 
                            onReady={this.VideoIsLoaded}
                            width={playerWidthHeight}
                            height={playerWidthHeight}/>
                    </PlayerWrapper>
                }
            </Box>
        )
    }
};
