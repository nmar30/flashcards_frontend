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

    return (
        <div className="container-fluid">
            <h1>Flashcards App</h1>
            <div className="container">
                <Collections collections={collections} fetchData={fetchData.bind(this)} />
            </div>
        </div>
    )
}

export default App;