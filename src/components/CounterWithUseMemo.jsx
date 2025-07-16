import React, { useMemo, useState } from "react";

const data = new Array(3_00_00_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i == 2_00_00_000,
  };
});

const CounterWithUseMemo = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(data);

  const magical = useMemo(
    () => numbers.find((item) => item.isMagical),
    [numbers]
  );
  //   const magical = numbers.find((item) => item.isMagical);
  console.log("magical", magical);
  return (
    <div>
      <p>{magical.index}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  );
};

export default CounterWithUseMemo;
