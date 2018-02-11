import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab, Paper} from 'material-ui';
import Slider from 'material-ui/Slider';
import ChatBot from 'react-simple-chatbot';
import background from './background.png';

import pearlGirl from './pearlGirl.jpeg';
class App extends Component {
  render () {
    return (
      <div className="App">
        <div
          style={{backgroundImage: 'url(' + background + ')', opacity: 0.75}}
        >
          <header className="App-header">
            <h1 style={{fontSize: 50}}>Hacking the Glass Ceiling!</h1>

          </header>
        </div>
        <Tabs>
          <Tab label="Home">
            <div style={{margin: 60}}>
              <h2>About Hacking the Glass Ceiling</h2>
              <p />
              <p>
                Empowering women through resources
              </p>

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
                flexGrow: 1,
                justifyContent: 'space-evenly',
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
              <Paper>
                <ChatBot
                  userAvatar={pearlGirl}
                  recognitionEnable={true}
                  steps={steps}
                />
              </Paper>
              <p> Did you know? blah blah blah </p>
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
    trigger: '4',
  },
  {
    id: '4',
    message: 'What scenario would you like to practice?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      {value: 1, label: 'Salary Negotation', trigger: '6'},
      {value: 2, label: 'Workplace discrimination', trigger: '7'},
      {value: 3, label: 'Asking for promotion', trigger: '8'},
    ],
  },
  {
    id: '6',
    message: 'negotiate wohoo',
    end: true,
  },
  {
    id: '7',
    message: 'discriminatory business',
    end: true,
  },
  {
    id: '8',
    message: 'promotion',
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
