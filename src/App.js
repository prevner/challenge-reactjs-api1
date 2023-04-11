import { useState, useEffect } from "react";
import Form from "./components/Forms/Form";
import List from "./components/List/List";
import Table from "./components/Table/Table";

function App() {

  const API_URL ='https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    
      const fetchItems= async()=>{
        try {
              const response = await fetch(`${API_URL}${reqType}`);
              const data = await response.json()             
              setItems(data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchItems()

  },[reqType])

  return (
    <div className="App">
        <Form reqType = {reqType} setReqType = {setReqType} />
        {/* <List items = {items} /> */}
        <Table items = {items}/>
    </div>
  );
}

export default App;
