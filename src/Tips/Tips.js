import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const TipAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="tip-accordion-item">
      {/* //inserting the isActive state - if isActive is false, we set it to true, and if it's true, we set it to false */}
      <div className="tip-accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {/* showing up or down icons depending on isActive state */}
        <div>{isActive ? <HiChevronUp/> : <HiChevronDown/>}</div>
      </div>
      {/* if the isActive state is true, we show the accordion content */}
      {isActive && <div className="tip-accordion-content">{content}</div>}
    </div>
  );
};

export default TipAccordion;