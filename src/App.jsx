import React, { useState, useEffect } from 'react';
import axios from './axios';
import Collections from './components/Collections/Collections';
import Flashcards from './components/Flashcards/Flashcards';
import './App.css'


function App() {

    const [collections , setCollections] = useState([]);
    const [selected_collection , setSelectedCollection] = useState(null);

    async function fetchCollections() {
        const request = await axios.get(`collection/`);
        setCollections(request.data)
        return request
    }

    useEffect(() => {
        fetchCollections()
    }, [] );

    async function addCollection(values){
        async function postData() {
            await axios.post(`collection/`, values);
        }
        await postData();
        await fetchCollections();
    }

    async function deleteCollection(id){
        async function deleteData() {
            await axios.delete(`collection/${id}`)
        }
        await deleteData();
        await fetchCollections();
    }

    function selectCollection(collection_object){
        setSelectedCollection(collection_object)
        setCollections(null)
    }

    function resetPage(){
        fetchCollections();
        setSelectedCollection(null);
    }


    return (
        <div className="container">
            <div className='header' onClick={() => resetPage()}>
                <h1>Flashcards App</h1>
            </div>
            <div className="container">
                {collections != null &&
                    <Collections collections={collections} addCollection={addCollection.bind(this)} deleteCollection={deleteCollection.bind(this)} selectCollection={selectCollection.bind(this)} />
                }
                {selected_collection != null &&
                    <Flashcards selected_collection={selected_collection} />
                }   
            </div>
        </div>
    )
}

export default App;