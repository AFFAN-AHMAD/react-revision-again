import React, { useState } from "react";

const AccordianItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {title}
      </div>
      {isOpen ? <div>{content}</div> : ""}
    </div>
  );
};

const Accordian = () => {
  const items = [
    {
      title: "section 1",
      content: "Content for section1",
    },
    {
      title: "section 2",
      content: "Content for section2",
    },
    {
      title: "section 3",
      content: "Content for section3",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <AccordianItem {...item} />
        // <></>
      ))}
    </div>
  );
};

export default Accordian;
