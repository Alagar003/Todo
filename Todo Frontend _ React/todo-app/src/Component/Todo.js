import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Design.css';


    const Todo = (props) => {
        const [data, setData] = useState([]);
    
        const Get_data = () => {
            axios.get(`http://localhost:3008/todo`)
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };


    
    
        useEffect(() => {
        Get_data();
        },[props]);

        const HandleDelete = (item) => {
          axios.delete(`http://localhost:3008/todo/${item._id}`)
              .then((res) => {
                  console.log(res.data);
                  Get_data()
              })
              .catch((err) => {
                  console.error("There was an error deleting the todo:", err);
              });

            }
const HandleEdit = (item) =>{
  console.log(item);
  
  props.etodo(item)
}
  
return(
    <div className="display">
      <h1>Your Todos...</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            Title: {item.title}, Description: {item.description}
            <button class = 'btn'onClick={() => { HandleEdit(item) }}>Edit</button>
            <button class = 'btn' onClick={() => { HandleDelete(item) }} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Todo;