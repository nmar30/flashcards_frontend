import React from 'react';
import CollectionsForm from '../CollectionsForm/CollectionsForm';
import axios from '../../axios'

const Collections = (props) => {
    const collections = props.collections
    const addCollection = props.addCollection
    const deleteCollection = props.deleteCollection
    return (
        <div className="row">
            {collections.map(item => <CollectionsItem key={item.id} item={item} deleteCollection={deleteCollection} />)}
            <CollectionsForm addCollection={addCollection}/>
        </div>    
    )
} 

const CollectionsItem = (props) => {
    const item = props.item
    const deleteCollection = props.deleteCollection
    return (
        <div className='col-sm-4'>
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger" onClick={() => deleteCollection(item.id) }>Delete {item.id}</button>
            </div>
            </div>
        </div>
    )
}

export default Collections;