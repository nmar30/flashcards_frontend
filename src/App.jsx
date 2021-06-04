import React, { useState, useEffect } from 'react';
import axios from './axios'
import Collections from './components/Collections/Collections'

function App() {

    const [collections , setCollections] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`collection/`);
            setCollections(request.data)
            return request
        }
        fetchData()
    });

    return (
        <div className="container-fluid">
            <h1>Flashcards App</h1>
            <div className="container">
                <Collections collections={collections}/>
            </div>
        </div>
    )
}

export default App;