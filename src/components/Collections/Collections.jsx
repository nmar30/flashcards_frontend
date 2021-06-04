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
    },[]);

    const renderCollections = () => {
        return (
            <div>
                {collections.map(item => <CollectionsItem key={item.id} item={item} />)}
            </div>
        )
    } 

    const CollectionsItem = (props) => {
        const item = props.item
        return (
            <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            </div>

        )
    }

    return (
        <div>
            {renderCollections()}
        </div>
    )
}

export default Collections;