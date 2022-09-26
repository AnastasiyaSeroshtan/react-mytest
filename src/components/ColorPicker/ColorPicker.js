import React from "react";
import { ColorPickerWrapper, ColorPickerTitle, ColorPickerOption, } from "./ColorPicker.styled";

export class ColorPicker extends React.Component {
    render() {
        return (
            <ColorPickerWrapper>
                <ColorPickerTitle>Color Picker</ColorPickerTitle>
            <div>
                {this.props.options.map(({label, color}) => {
                    return(
                        <ColorPickerOption key={label}
                        style={{backgroundColor: color}}
                        ></ColorPickerOption>
                    )
                })}
            </div>
            </ColorPickerWrapper>
        )
    }
};