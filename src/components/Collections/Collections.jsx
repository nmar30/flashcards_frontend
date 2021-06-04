import React, { useState, useEffect } from 'react';
import axios from '../../axios'

function Collections() {
    const [collections , setCollections] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`collection/`);
            setCollections(request.data)
            return request
        }
        fetchData()
    },[])

    console.log(collections)

    return (
        <div>

        </div>
    )
}

export default Collections;