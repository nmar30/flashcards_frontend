import React from 'react';
import CollectionsForm from '../CollectionsForm/CollectionsForm'

const Collections = (props) => {
    const collections = props.collections
    const fetchData = props.fetchData
    return (
        <div className="row">
            {collections.map(item => <CollectionsItem key={item.id} item={item} />)}
            <CollectionsForm fetchData={fetchData}/>
        </div>    
    )
} 

const CollectionsItem = (props) => {
    const item = props.item
    return (
        <div className='col-sm-4'>
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
            </div>
        </div>
    )
}

export default Collections;