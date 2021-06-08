import React from 'react';
import CollectionsForm from '../CollectionsForm/CollectionsForm';
import axios from '../../axios'

const Collections = (props) => {
    const collections = props.collections
    const addCollection = props.addCollection
    const deleteCollection = props.deleteCollection
    const selectCollection = props.selectCollection
    return (
        <div className="row">
            {collections.map(item => <CollectionsItem key={item.id} item={item} deleteCollection={deleteCollection} selectCollection={selectCollection} />)}
            <CollectionsForm addCollection={addCollection}/>
        </div>    
    )
} 

const CollectionsItem = (props) => {
    const item = props.item
    const deleteCollection = props.deleteCollection
    const selectCollection = props.selectCollection
    return (
        <div className='col-sm-4'>
            <div className="card" style={{width: '18rem'}} >
            <div className="card-body">
                <h5 className="card-title" onClick={() => selectCollection(item)}>{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-danger" onClick={() => deleteCollection(item.id) }>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default Collections;