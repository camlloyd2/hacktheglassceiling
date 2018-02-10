import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ChatBot from 'react-simple-chatbot';
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{fontSize: 32}}>Hack the glass ceiling</h1>
        </header>
        <Tabs>
          <Tab label="Home">
            <div>
              <h2>About Hacking the Glass Ceiling</h2>
              <p />
              <p>
                Empowering women through resources
              </p>

            </div>
          </Tab>
          <Tab label="Resources">
            <div>
              <h2>Resources</h2>
              <p />
              <p>
                Include links to cool stuff here
              </p>

            </div>
          </Tab>
          <Tab label="Chat">
            <div>
              <h2>Chat</h2>
              <p />
              <p>
                chat bot turn up
              </p>
              <ChatBot steps={steps} />

            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
export default App;
