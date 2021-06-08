import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import FlashcardsForm from './FlashcardsForm';


const Flashcards = (props) => {
    const selected_collection = props.selected_collection

    const [flashcards, setFlashcards] = useState(null);
    const [selected_flashcard, setSelectedFlashcard] = useState(0);
    const [current_side, setCurrentSide] = useState('front');
    const [dataReady, setReady] = useState(false);

    useEffect(() => {
        initializePage()
    });

    function initializePage() {
        if(dataReady === false){
            fetchFlashcards();
        }
        else{   
            
        }  
    }

    async function fetchFlashcards() {  
        try{
            let request = null;
            request = await axios.get(`collection/${selected_collection.id}/flashcard/`);
            setFlashcards(request.data)
            setReady(true)
        } catch(er) {
            console.log('ERROR in fetchFlashcards', er)
        }
    }

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
        setSelectedFlashcard(flashcards.length)
    }

    async function deleteFlashcard(){
        async function deleteData() {
            await axios.delete(`collection/${selected_collection.id}/flashcard/${flashcards[selected_flashcard].id}`)
        }
        await deleteData();
        setSelectedFlashcard(selected_flashcard - 1)
        await fetchFlashcards();
        
    }

    function nextFlashcard () {
        const next_card = selected_flashcard + 1
        if (flashcards[next_card] === undefined) {
            alert('No more cards!')
        } else {
            setSelectedFlashcard(next_card)
            setCurrentSide('front')
        }
    }

    function previousFlashcard () {
        const next_card = selected_flashcard - 1
        if (flashcards[next_card] === undefined) {
            alert('No more cards!')
        } else {
            setCurrentSide('front')
            setSelectedFlashcard(selected_flashcard - 1)
        }
    }

    function flipFlashcard () {
        if (current_side === 'front'){
            setCurrentSide('back')
        } else if (current_side === 'back') {
            setCurrentSide('front')
        }
    }

    if(dataReady){
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-3'>
                        <FlashcardsForm selected_collection={selected_collection} addFlashcard={addFlashcard.bind(this)} />
                    </div>
                    <div className='col-8'>                        
                        <h2>{selected_collection.name}</h2>
                        <h3>{selected_collection.description}</h3>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-danger" onClick={() => deleteFlashcard() }>Delete</button>
                    </div>       
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='flashcard' onClick={() => flipFlashcard()}>
                        {current_side === 'front' &&
                            <h1>{flashcards[selected_flashcard].front}</h1>
                        }
                        {current_side === 'back' &&
                            <h1>{flashcards[selected_flashcard].back}</h1>
                        }
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'><button className="btn btn-secondary" onClick={() => previousFlashcard()}>Previous</button></div>
                    <div className='col-8'>
                        <h3>{selected_flashcard + 1} / {flashcards.length}</h3>
                    </div>
                    <div className='col'><button className="btn btn-secondary" onClick={() => nextFlashcard()}>next</button></div>
                </div>
                <div className='row'>
                    <div className='col'>

                    </div>
                </div>
            </React.Fragment>
        )
    }
    else{return (<div></div>)}
   
}

export default Flashcards;