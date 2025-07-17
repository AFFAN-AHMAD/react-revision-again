import React, { useState } from "react";

const Pagination3 = () => {
  const data = [...Array(100).keys()].map((i) => `Item ${i + 1}`);
  //   console.log("data", data);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const newData = data.slice(firstIndex, lastIndex);

  return (
    <div>
      <ul>
        {newData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {Array.from({ length: totalPages }, (_, index) => (
        <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
      ))}
    </div>
  );
};

export default Pagination3;
