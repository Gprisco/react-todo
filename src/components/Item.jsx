import React from "react";

const Item = props => {
  const { activity, onDelete, onCheck } = props;

  //let the item appear disabled if it is checked
  const getItemClasses = activity => {
    let classes = "list-group-item mx-auto col-6 ";

    classes += activity.checked ? "disabled App-deleted-text" : "";

    return classes;
  };

  return (
    <div className="row mb-2">
      <li
        onClick={() => onCheck(activity._id)}
        className={getItemClasses(activity)}
        style={{ cursor: "pointer" }}
      >
        {activity.name}
      </li>
      <button
        onClick={() => onDelete(activity._id)}
        className="btn btn-danger btn-sm ml-2 col-3"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
