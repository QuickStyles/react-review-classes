import React from 'react';
import logo from './logo.svg';
import './App.css';

// A React Component is a function or a Class that returns a React Element (JXS)
function App() {

  function add(a, b) {
    return a + b;
  }

  // JSX is the html/javascript syntax found in the return statements or render methods of a React Component.
  // Javascript/Browsers do not understand JSX. This code gets run through a compiler that turns it into javascript that the browsers will understand.
  // All the JSX is turned into a bunch of React.createElement() function calls.
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.shopify.com/s/files/1/0084/9282/products/Webp.net-resizeimage_2_2400x.png?v=1570638297" className="App-logo" alt="logo" />
        <p>
          Hello World. { add(5, 10) }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
