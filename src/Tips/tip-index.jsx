import React from 'react';
import TipAccordion from './Tips';
import { tipArrayData } from './tipArray';

const Tip = () => {
  return (
    <div>
      {/* <h1>Tips</h1> */}
      <div className="tip-accordion">
      {/* looping over the using the array map method, and passing the corresponding title and content to the Accordion component. */}
        {tipArrayData.map(({ title, content }) => (
          <TipAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Tip