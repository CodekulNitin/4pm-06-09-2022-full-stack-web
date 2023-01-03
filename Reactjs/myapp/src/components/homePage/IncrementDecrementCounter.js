
import React, { useEffect, useState } from "react";

function IncrementDecrementCounter(props) {
  const [count, setCount] = useState(0);
 const [info, setInfo] = useState();

  useEffect(() => {
    document.title = ` ${count}`;
    setInfo(props.dataResult);
  }, [props.data]);

  return (
    <div className="mt-12 flex justify-center ">
      <h1>{count}</h1>
      <div>
        <button
          className="p-2 rounded bg-indigo-900 text-white"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className="p-2 rounded bg-indigo-900 text-white"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        {info && info.firstName}
        {info && info.lastName}
      </div>
    </div>
  );
}

export default IncrementDecrementCounter;
