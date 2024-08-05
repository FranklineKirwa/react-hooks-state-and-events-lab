import Item from "./Item";
import React, {useState} from "react"

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory]=useState("All")

   function handlechange(e){
    setselectedCategory(e.target.value)
   }
   const filteredItems=items.filter((item)=>selectedCategory==="All" || item.category===selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handlechange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
