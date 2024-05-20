import ItemList from "./ItemList";

const Content = ({ items, handleChange, handleDelete, searchText }) => {
  return (
    <section>
      {items.length ? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : searchText.length === 0 && items.length === 0 ? (
        `List is empty`
      ) : (
        `No matches found`
      )}
    </section>
  );
};

export default Content;
