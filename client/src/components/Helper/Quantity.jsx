import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../redux/cartSlice";

const Quantity = ({
  quantity = 1,
  price,
  id,
  onUpdate,
  handleChildDataChange,
  need,
}) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();
  const handleCountChange = (newCount) => {
    // console.log("New Count:", newCount);
    setCount(newCount);
    dispatch(update({ pro_id: id, quantity: newCount }));
    if (onUpdate) {
      onUpdate(count);
    }
    // if (need) {
    //   handleChildDataChange(newCount);
    // }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <input
          type="number"
          className="counterInput"
          name="count"
          value={count}
          onChange={(e) => handleCountChange(parseInt(e.target.value))}
        />
      </div>

      <div className="counterArrow">
        <button onClick={() => handleCountChange(count + 1)}>∧</button>
        <button onClick={() => count > 1 && handleCountChange(count - 1)}>
          V
        </button>
      </div>
      {price && <h4>$ {count * price}</h4>}
    </div>
  );
};

export default Quantity;
