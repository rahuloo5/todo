import React, { useState,useEffect } from 'react';
import db from './firebase'
import './App.css';
import firebase from 'firebase'
import DeleteIcon from '@material-ui/icons/Delete';


function App() {

  const [Input , SetInput]= useState('')
  const [toDO , setToDo] = useState([])

 useEffect(() => {

  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setToDo(snapshot.docs.map(doc=>({id:doc.id,task: doc.data().task})))
  })
  
}, [])

  const addTask=(e)=>{

    e.preventDefault();

    db.collection('todos').add({
      task: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    SetInput('')
    

  }
  return (
    <div className="App">
    <h1>What To Do ?</h1>
    <input type='text' value={Input} onChange={(e)=>{SetInput(e.target.value)}} className="input" ></input>
    <button type="submit" onClick={addTask} className="button" disabled={!Input}> ADD TASK</button>
    {toDO.map((item)=>{

      return (
        <div
          style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}
        >
          <ul style={{marginTop: 35}}>
            <li style={{fontSize: 30 , textTransform:'capitalize'}}>{item.task}</li>
          </ul>
          <button className="button1"
            onClick={(event) => db.collection('todos').doc(item.id).delete()}
          ><DeleteIcon/>
          </button>
        </div>
      );
      
    })}
   
     
    </div>
  );
}

export default App;
