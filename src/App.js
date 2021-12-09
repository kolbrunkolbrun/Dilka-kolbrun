import React from 'react';
// import Faq from './index-faq.jsx'
import About from './About-Form/Form.js'
import Tip from './Tips/tip-index.jsx'
import Info from './Info/info-index.jsx'


const App = () => {
  return (
    <div>
        <Info />
        <Tip />
        {/* <Faq /> */}
        <About />
    </div>
  );
};

export default App;