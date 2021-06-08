import React from 'react';
import useForm from '../../useForm';
import axios from '../../axios';

const FlashcardsForm = (props) => {
    const addFlashcard = props.addFlashcard
    const selected_collection = props.selected_collection

    const { values, handleChange, handleSubmit } = useForm(registerFlashcard);

    function registerFlashcard(){
        addFlashcard({...values, collection: selected_collection.id})
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input type='text' name='front' placeholder='Front' onChange={handleChange} value={values.front} /><br />
                <input type='text' name='back' placeholder='Back' onChange={handleChange} value={values.back} /><br />
                <button type='submit' className="btn btn-primary">Add Flashcard</button>
            </form>
)
}

export default FlashcardsForm;