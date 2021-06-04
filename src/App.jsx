import React, { useState, useEffect } from 'react';
import axios from './axios'
import Collections from './components/Collections/Collections'

function App() {

    const [collections , setCollections] = useState([]);

    async function fetchData() {
        const request = await axios.get(`collection/`);
        setCollections(request.data)
        return request
    }

    useEffect(() => {
        fetchData()
    }, [] );

    function addCollection(values){
        async function postData() {
            await axios.post(`collection/`, values);
        }
        postData()
        fetchData()
    }

    return (
        <div className="container-fluid">
            <h1>Flashcards App</h1>
            <div className="container">
                <Collections collections={collections} addCollection={addCollection.bind(this)} />
            </div>
        </div>
    )
}

export default App;