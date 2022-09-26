import React from "react";
import {Backdrop, ModalStyles} from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
    componentDidMount() {
        // console.log("didMount")
        window.addEventListener("keydown", this.handleKeyDown)
    };

    componentWillUnmount() {
        // console.log("didUpdate");
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = (e) => {
        if(e.code === "Escape") {
            this.props.onClose()
        }
    };

    handleClickBackdrop = e => {
        if(e.currentTarget === e.target) (
            this.props.onClose()
        )
    }
    
    render() {
        
        return createPortal(
            <Backdrop onClick={this.handleClickBackdrop}>
                <ModalStyles>{this.props.children}</ModalStyles>
            </Backdrop>,
            modalRoot
        )
    }
}