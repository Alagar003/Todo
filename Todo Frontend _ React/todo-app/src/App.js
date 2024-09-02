//import React, { useState } from 'react';
import Todo from './Component/Todo.js';
import Form from './Component/form.js';
import './Component/Design.css';
import { useState } from 'react';


const App = () => {

const[data,setdata] =useState(false)
const [edata,rdata] =useState('')

const sv = () =>{
  setdata(data?false:true)
  rdata('')
}

const  edittodo = (item)=>{
  rdata(item);
  console.log(item);
  

}
  return(


<div className='container'>

<Form   class = 'user' udata={sv}  edata={edata} />
<Todo class = 'dislplay'sv={data} etodo ={edittodo}/>
</div>
)
}
export default App;
