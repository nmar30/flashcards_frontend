import React, { useState, useEffect } from 'react';
import axios from '../../axios'

const Flashcards = (props) => {
    const selected_collection = props.selected_collection

    const [flashcards , setFlashcards] = useState([]);

    return (
        <div>
            <h1>Flashcards component</h1>
            <h2>{selected_collection.name}</h2>
        </div>
    )
}

export default Flashcards;