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
        <div className='col-sm-4'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='front' placeholder='Front' onChange={handleChange} value={values.front} />
                <input type='text' name='back' placeholder='Back' onChange={handleChange} value={values.back} />
                <button type='submit' className="btn btn-primary">Add Flashcard</button>
            </form>
        </div>
)
}

export default FlashcardsForm;