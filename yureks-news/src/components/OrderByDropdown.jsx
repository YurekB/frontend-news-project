import * as React from "react";

const OrderByDropdown = ({ setOrder }) => {
  const clickEvent = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div>
      <select onChange={clickEvent}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default OrderByDropdown;
