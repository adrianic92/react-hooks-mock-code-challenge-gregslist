import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState([])
  
  useEffect( () => {

    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setItems(data))

  }, [])

  function deleteItem(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => {
      const updatedItems = items.filter( item => item.id !== id);
      setItems(updatedItems)
    })
  }

  const filteredItems = items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      {items? <ListingsContainer items={filteredItems} deleteItem={deleteItem}/> : <h1>Loading...</h1> }
    </div>
  );
}

export default App;
