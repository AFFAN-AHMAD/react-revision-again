import React, { useState } from "react";

const Pagination = () => {
  const data = [...Array(100).keys()].map((i) => `Item ${i + 1}`);
  // console.log("data", data);
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {Array.from({ length: totalPages }, (_, index) => (
        <button onClick={() => goToPage(index + 1)}>{index + 1}</button>
      ))}
    </div>
  );
};

export default Pagination;
