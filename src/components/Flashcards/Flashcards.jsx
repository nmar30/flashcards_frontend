import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import FlashcardsForm from './FlashcardsForm'

const Flashcards = (props) => {
    const selected_collection = props.selected_collection

    const [flashcards , setFlashcards] = useState([]);
    const [selected_flashcard, setSelectedFlashcard] = useState([]);

    async function fetchFlashcards() {
        const request = await axios.get(`collection/${selected_collection.id}/flashcard/`);
        setFlashcards(request.data)
        return request
    }

    useEffect(() => {
        fetchFlashcards();
    }, [] );

    async function addFlashcard(values){
        async function postData() {
        try{
            await axios.post(`collection/${selected_collection.id}/flashcard/`, values);    
        } catch (er){
            console.log('ERROR in addFlashcards', er)
            }
        }
        await postData();
        await fetchFlashcards();
    }

    async function deleteFlashcard(id){
        async function deleteData() {
            await axios.delete(`collection/${selected_collection.id}/flashcard/${id}`)
        }
        await deleteData();
        await fetchFlashcards();
    }

    console.log(flashcards)
    return (
        <React.Fragment>
            <div className='containter'>
                <h1>{selected_collection.name}</h1>
                <h2>{selected_collection.description}</h2>
            </div>
            <div className='container'>
                <FlashcardsForm selected_collection={selected_collection} addFlashcard={addFlashcard.bind(this)} />
                <button className="btn btn-danger" onClick={() => deleteFlashcard(selected_flashcard.id) }>Delete</button>
            </div>
            <div className='container'>

            </div>
        </React.Fragment>
    )
}

export default Flashcards;