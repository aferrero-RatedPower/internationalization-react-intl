import React from 'react';
import './App.css';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <FormattedHTMLMessage 
          id="app.text"
          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
          description="Welcome header on app main page"
          values={{ what: 'react-intl' }}/>
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <FormattedMessage 
          id="app.learn-react-link"
          defaultMessage="Learn React"
          description="Link on react page"/>
      </a>
      </header>
    </div>
  );
}

export default App;
