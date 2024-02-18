import React from 'react';

const Item = ({ id, value, onChange }) => {
  return (
    <form className="Item">
      <h5 className="Item-render">RE-RENDER {(Math.random() * 100).toFixed()}</h5>
      <label className="Item-label" htmlFor="text">Item</label>
      <input
        className="Item-input"
        type="text"
        name="text"
        id="text"
        onChange={e => onChange(id, e.target.value)}
        value={value}
      />
    </form>
  );
};

export default Item;
