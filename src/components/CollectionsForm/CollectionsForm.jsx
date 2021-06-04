import React from 'react';
import useForm from '../../useForm'
import axios from '../../axios'

const CollectionsForm = () => {
    const { values, handleChange, handleSubmit } = useForm(addCollection);

    function addCollection(){
        async function postData() {
            await axios.post(`collection/`, values);
        }
        postData()
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