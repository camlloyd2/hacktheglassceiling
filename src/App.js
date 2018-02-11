import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ChatBot from 'react-simple-chatbot';
import background from './background.png';
import brokenglass from './brokenglass.png'
class App extends Component {
  render () {
    return (
      <div className="App">
        <div style={{backgroundImage: 'url(' + background + ')'}}>
          <header className="App-header">

            <h1 style={{fontSize: 50}}>Hacking the Glass Ceiling!</h1>

          </header>
        </div>

        <Tabs>
          <Tab label="Home">
          <div style={{backgroundImage: 'url(' + brokenglass + ')'}}>
               
            <div style={{margin: 60}}>
              <h2>About Hacking the Glass Ceiling</h2>
              <p />
              <p>
                Empowering women through resources
              </p>

              </div>
            </div>
          </Tab>
          <Tab label="Resources">
            <div style={{margin: 60}}>
              <h2>Resources</h2>
              <p />
              <p>
                Include links to cool stuff here
              </p>

            </div>
          </Tab>
          <Tab label="Chat">
            <div
              style={{
                margin: 60,
                display: 'flex',
                justifyContent: 'space-evenly',

                flexGrow: 1,
              }}
            >
              <ChatBot recognitionEnable={true} steps={steps} />
             
                <div>
                  <h1> Don't Say This: </h1>
                      <p>I can't afford to live in _______. (Your boss doesn't care) 
                        </p>
                      <p> I have student loans. (Ditto)
                        </p>
                      <p> I'm getting married. (Nope)
                        </p>
                      <p> I'm trying to get pregnant. (NOOOOO!)
                        </p>
                      <p> I've been working overtime. (We all work hard.)
                        </p>
                      <p> This is what I want and I'll take nothing less. (Negotiation is about compromise.)
                        </p>
                      <p> I need _____. (OK, but do you really need it? Try I'd like or I propose)
                        </p>
                      <p> I'm sorry, I just want _______. (Do not-- repeat: do not!-- apologize for talking about money)
                        </p>

                  </div>

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
    message: 'Welcome to Hacking the Glass ceiling!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'What is your name?',
    trigger: 2,
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
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
