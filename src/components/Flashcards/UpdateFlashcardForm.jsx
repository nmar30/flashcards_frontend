import React from 'react';
import useForm from '../../useForm';
import axios from '../../axios';

const UpdateFlashcardForm = (props) => {
    const updateFlashcard = props.updateFlashcard
    const selected_collection = props.selected_collection
    const selected_flashcard = props.selected_flashcard

    const { values, handleChange, handleSubmit } = useForm(registerFlashcard);

    function registerFlashcard(){
        updateFlashcard({...values, collection: selected_collection.id, id: selected_flashcard })
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input type='text' name='front' placeholder='Front' onChange={handleChange} value={values.front} /><br />
                <input type='text' name='back' placeholder='Back' onChange={handleChange} value={values.back} /><br />
                <button type='submit' className="btn btn-primary">Update Flashcard</button>
            </form>
)
}

export default UpdateFlashcardForm;