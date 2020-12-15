import React from 'react'
import { CgClose } from "react-icons/cg"
import {IoCreateOutline} from "react-icons/io5"
import Select from "react-select"
import chroma from 'chroma-js';

export default function CreateList(props) {

    const colourOptions = [
        { value: "#A8D0EE", label: "Blue", colour: "#A8D0EE" },
        { value: "#A8ADEE", label: "Violet", colour: "#A8ADEE" },
        { value: "#C6A8EE", label: "Purple", colour: "#C6A8EE" },
        { value: "#E9A8EE", label: "Pink", colour: "#E9A8EE" },
        { value: "#EEA8D0", label: "Rose", colour: "#EEA8D0" },
        { value: "#EEA8AD", label: "Peach", colour: "#EEA8AD" }
    ]

    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const colour = chroma(data.colour);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? data.colour
                        : isFocused
                            ? colour.alpha(0.2).css()
                            : null,
                colour: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(colour, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.colour,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled && (isSelected ? data.colour : colour.alpha(0.3).css()),
                },
            };
        },
        input: styles => ({ ...styles, ...dot() }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.colour) }),
    };

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <CgClose className="close-button" size="30" onClick={props.closePopup} />
                <h1>Create a new todo list</h1>
                <form onSubmit={props.addList}>
                    <h5>Give your list a title</h5>
                    <input type="text" name="title" className="list-create-field" required={true} />
                    <h5>Choose a list colour</h5>
                    <Select
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        styles={colourStyles}
                        name="colour"
                        className="list-create-field"
                    />
                    <button type="submit" className="list-create-button"><IoCreateOutline size="20"/></button>
                </form>
            </div>
        </div>
    )
}
