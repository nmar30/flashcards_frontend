import React from 'react';

const Collections = (props) => {
    const collections = props.collections
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

export default Collections;