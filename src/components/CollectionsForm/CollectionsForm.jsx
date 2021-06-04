import React from 'react';
import useForm from '../../useForm'
import axios from '../../axios'

const CollectionsForm = (props) => {
    const addCollection = props.addCollection
    const { values, handleChange, handleSubmit } = useForm(registerCollection);

    function registerCollection(){
        addCollection(values)
    }
    
    return (
        <div className='col-sm-4'>
            
                <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='name' placeholder='Collection Name' onChange={handleChange} value={values.name} />
                        <input type='text' name='description' placeholder='Collection Description' onChange={handleChange} value={values.description} />
                        <button type='submit' className="btn btn-primary">Add Collection</button>
                    </form>
                </div>
                </div>
            
        </div>
    )
}

export default CollectionsForm;