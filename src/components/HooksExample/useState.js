import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  /**
   * 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
   */
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    let timer = setTimeout(() => {
      console.log(111);
    }, 1000);
    return () => {
      console.log(222);
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}
