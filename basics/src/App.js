import { useState, useEffect } from "react";

import Header from "./Header.js";
import AddItem from "./AddItem.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import SearchItems from "./SearchItems.js";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      title: "Alpha Bravo Charlie",
    },
    {
      id: 2,
      checked: false,
      title: "Royal Blue Dragon",
    },
    {
      id: 3,
      checked: false,
      title: "Me Gusta",
    },
  ]);
  const [newItem, setNewItem] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    return false;
  };

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    if (!newItem) return;
    AddNewItem(newItem);
    setNewItem("");
  };

  const AddNewItem = (newItem) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = [...items, { id: id, checked: false, title: newItem }];
    setItems(listItems);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItems searchText={searchText} setSearchText={setSearchText} />
        <Content
          items={items.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
          searchText={searchText}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
