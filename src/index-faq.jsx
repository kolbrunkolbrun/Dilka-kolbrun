import React from 'react';
import Accordion from './Accordion';
import { faqArrayData } from './faqArray';

const Faq = () => {
  return (
    <div>
      <h1>Frequently asked questions</h1>
      <div className="accordion">
      {/* looping over the using the array map method, and passing the corresponding title and content to the Accordion component. */}
        {faqArrayData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq