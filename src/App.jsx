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
    },[]);

    return (
        <div>
            <Collections collections={collections}/>
        </div>
    )
}

export default App;