import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, deleteItem}) {

  const allItems = items.map( item => {return ( <ListingCard key={item.id} item={item} deleteItem={deleteItem}/>)})

  return (
    <main>
      <ul className="cards">
        {allItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
