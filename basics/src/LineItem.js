import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleChange(item.id)}
        checked={item.checked}
      />
      <label>{item.title}</label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
