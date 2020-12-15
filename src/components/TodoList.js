import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io"

export default function TodoList(props) {
    return (
        <section className="column">
            <div className="add" onClick={props.openPopup}>
                <IoIosAddCircleOutline size="30" />
                <span className="addText">Add new list</span>
            </div>
        </section>
    )
}


