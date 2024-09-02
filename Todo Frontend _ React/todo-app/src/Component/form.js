import React, { useState, useEffect } from 'react';
import './Design.css';
import axios from 'axios';


const Form = (props) => {
    const [tit, setTitle] = useState('');
    const [des, setDescription] = useState('');

    console.log(tit);
    useEffect(() => {
        if (props.edata) {
            setTitle(props.edata.title);
            setDescription(props.edata.description);
        }
    }, [props.edata]);




    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };



    const handleSubmit = () => {
        const data ={title:tit, description:des}
        if (props.edata) {
            axios.put(`http://localhost:3008/todo/${props.edata._id}`, data)
                .then((res) => {  
                    console.log('Update:', res.data);
                    props.udata();
                    setTitle('')
                    setDescription('')
                });
        } else {
            axios.post('http://localhost:3008/todo', data)
                .then((res) => {
                    console.log("Post:", res.data);
                    props.udata(); 
                    setTitle('');
                    setDescription('');
                });
        }
    };

       
       
    
return ( 
    <div className='main'>
        <div className="user">
            <h1> Welcome Todo</h1>
            <label>Title:</label>
            <input type="text" placeholder="Title" onChange={handleTitleChange} value={tit} 
            /><br/><br/>
            <label>Description:</label>
            <input type="text" placeholder="Description" onChange={handleDescriptionChange} value={des} 
            /><br/><br/><br/>
            <button className='btn1 btn ' onClick={handleSubmit} >Save</button>
        </div>
    </div>
);
};

export default Form;
