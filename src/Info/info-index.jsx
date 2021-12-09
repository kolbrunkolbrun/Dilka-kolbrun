import React from 'react';
import InfoAccordion from './Info';
import { infoArrayData } from './infoArray';

const Info = () => {
  return (
    <div>
      {/* <h1>Info</h1> */}
      <div className="info-accordion">
      {/* looping over the using the array map method, and passing the corresponding title and content to the Accordion component. */}
        {infoArrayData.map(({ title, content }) => (
          <InfoAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Info