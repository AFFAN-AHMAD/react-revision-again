import React, { useState } from "react";

function Pagination2() {
  const data = [...Array(100).keys()].map((i) => `Item ${i + 1}`);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);
  const gotoPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {Array.from({ length: totalPages }, (_, index) => (
        <button onClick={() => gotoPage(index + 1)}>{index + 1}</button>
      ))}
    </div>
  );
}

export default Pagination2;
