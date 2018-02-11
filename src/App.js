import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab, Paper} from 'material-ui';
import Slider from 'material-ui/Slider';
import ChatBot from 'react-simple-chatbot';
import background from './background.png';
import brokenglass from './brokenglass.png';
import Linkify from 'react-linkify';
import pearlGirl from './pearlGirl.jpeg';
import {ThemeProvider} from 'styled-components';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class App extends Component {
  render () {
    return (
      <div className="App">
        <div style={{backgroundImage: 'url(' + background + ')', opacity: 0.8}}>
          <header className="App-header">
            <h1
              style={{
                fontSize: 60,
                fontFamily: 'didot',
                fontStyle: 'bold',
                textShadow: '3px 3px 3px  #04080f',
              }}
            >
              HACKING THE GLASS CEILING
            </h1>
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
              <h2 style={{fontsize: 32}}>Resources</h2>
              <Card>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                />
                <CardMedia
                  overlay={
                    <CardTitle
                      title="Overlay title"
                      subtitle="Overlay subtitle"
                    />
                  }
                >
                  <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
              <Card>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                />
                <CardMedia
                  overlay={
                    <CardTitle
                      title="Overlay title"
                      subtitle="Overlay subtitle"
                    />
                  }
                >
                  <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </div>
          </Tab>
          <Tab label="Chat">
            <div
              style={{
                margin: 60,
                display: 'flex',

                flexGrow: 1,
              }}
            >
              <div>
                <h1> Don't Say This: </h1>
                <p>
                  I can't afford to live in _______. (Your boss doesn't care)
                  {' '}
                </p>
                <p>
                  {' '}I have student loans. (Ditto)
                </p>
                <p>
                  {' '}I'm getting married. (Nope)
                </p>
                <p>
                  {' '}I'm trying to get pregnant. (NOOOOO!)
                </p>
                <p>
                  {' '}I've been working overtime. (We all work hard.)
                </p>
                <p>
                  {' '}
                  This is what I want and I'll take nothing less. (Negotiation is about compromise.)
                </p>
                <p>
                  {' '}
                  I need _____. (OK, but do you really need it? Try I'd like or I propose)
                </p>
                <p>
                  {' '}
                  I'm sorry, I just want _______. (Do not-- repeat: do not!-- apologize for talking about money)
                </p>

              </div>
              <Paper>
                <ThemeProvider theme={theme}>
                  <ChatBot
                    userAvatar={pearlGirl}
                    recognitionEnable={true}
                    steps={steps}
                  />
                </ThemeProvider>
              </Paper>
            </div>

          </Tab>
        </Tabs>
      </div>
    );
  }
}

const theme = {
  background: '#f5f8fb',
  fontFamily: 'didot',
  headerBgColor: '#00BCD4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00BCD4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

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
    message: "Let's run through a scenario, which one would you like to practice?",
    trigger: '5',
  },
  {
    id: '5',
    options: [
      {
        value: 1,
        label: 'Negotiate a salary',
        trigger: '6',
      },
      {value: 2, label: 'Discuss a promotion', trigger: '7'},
      {value: 3, label: 'Confronting workplace discrimination', trigger: '8'},
    ],
  },
  {
    id: '6',
    message: 'Employer: "I am sorry, we can only offer---',
    end: true,
  },
  {
    id: '7',
    message: 'Employer: "We do not feel that you are ready for that role."',
    end: true,
  },
  {
    id: '8',
    message: 'Employer/Colleague: "Are you sure you can handle that? You do not seem capable."',
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
