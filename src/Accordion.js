import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);



  return (
    <div className="accordion-item">
      {/* //inserting the isActive state - if isActive is false, we set it to true, and if it's true, we set it to false */}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {/* showing up or down icons depending on isActive state */}
        <div>{isActive ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}</div>
      </div>
      {/* if the isActive state is true, we show the accordion content */}
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;