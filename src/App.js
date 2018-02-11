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
import rosietech from './rosietech.jpg';
import womenTech from './womenintech.jpg';
import womenIntern from './womenIntern.jpg';
import miscTech from './miscData.jpg';
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
            <h2 style={{fontsize: 32, alignSelf: 'center', padding: 20}}>
              Resources to help further your career{' '}
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <div style={{width: '28%'}}>
                <Card style={{padding: 20}}>
                  <CardMedia>
                    <img src={rosietech} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="Academics"
                    subtitle="Internships, Scholarships, and more!"
                  />
                  <CardText>
                    As an upcoming or current undergraduate in heavily male-dominated fields like Computer Science & Technology, finding scholarships and even the right college for you can be difficult.
                    Below are links to scholarships specifically for women in the STEM field and college repositories!
                    <h2>Colleges</h2>
                    <p>
                      <Linkify>https://www.computerscienceonline.org - This is a general database of colleges with Computer Science programs.</Linkify>
                    </p>
                    <p>
                      <Linkify>https://www.computerscience.org/degrees/bachelors/ - Another general database that also has available scholarships.</Linkify>
                    </p>
                    <h2>Scholarships</h2>
                    <p>
                      <Linkify>
                        http://www.dodstem.us/stem-programs/scholarships - Department of Defense scholarships provide cash awards to students who have demonstrated ability and aptitude for excelling in STEM fields in disciplines of importance to DoD.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>http://societyofwomenengineers.swe.org/scholarships - Society of Women Scholarships</Linkify>
                    </p>
                    <p>
                      <Linkify>https://www.womentechmakers.com/scholars - Anita Borg Scholars Program </Linkify>
                    </p>

                  </CardText>

                </Card>
                <Card style={{padding:20, marginTop: 20}}>
                <CardMedia>
                    <img src={womenIntern} alt="" />
                  </CardMedia> 
                  <CardTitle
                    title="Internships"
                    subtitle="Experience Gathering Opportunities"
                  />
                  <CardText>
                    Here are some companies that offer great experience while getting your degree!
                    <p>
                    <Linkify>
                        http://rewritingthecode.org - This orginization was created to connect students like you to companies that have the same interests.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://girlswhocode.com/ - This website provides links to summer internships, after school coding programs for girls in grades 6-12, and 2 week beginner and intermediate coding bootcamps for girls in college!
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://bit.ly/2BR4RyS - This has a list of internships compiled by Carnegie Melon's school of computer science for students.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>https://www.redhat.com/en/jobs/categories/internships - Internships with RedHat.</Linkify>
                    </p>
                    <p>
                      <Linkify>https://careers.jpmorgan.com/careers/US/en/programs - Various college student programs with JP Morgan Chase & Co.</Linkify>
                    </p>
                    <p>
                      <Linkify>https://careers.blizzard.com/en-us/students - Interships, post graduation jobs, and contests hosted by Blizzard Entertainment.</Linkify>
                    </p>
                    <p>
                      <Linkify>http://bit.ly/2EizLlB - BAE Systems Summer Internships</Linkify>
                    </p>

                  </CardText>

                </Card>

              </div>
              <div style={{width: '28%'}}>
                <Card style={{padding: 20}}>
                  <CardMedia>
                    <img src={womenTech} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="Professional"
                    subtitle="Post College Opportunities!"
                  />
                  <CardText>
                    Finding a job straight out of college is difficult, especially in the Computer Science & Technology industries. Here are some tips on how to beef up your LinkedIn profile and companies that are college graduate friendly!
                    <h2>LinkedIn Tips & Tricks</h2>
                    <p>
                      <Linkify>
                        http://bit.ly/2krUk06 - 17 steps to a better LinkedIn profile
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://www.linkedin.com/title/computer-science-student - Great CS student LinkedIn examples
                      </Linkify>
                    </p>
                    <h2>College Grad Opportunities</h2>
                    <p>
                      <Linkify>This is a placeholder.</Linkify>
                    </p>
                  </CardText>

                </Card>
              </div>
              <div style={{width: '28%'}}>
                <Card style={{padding: 20}}>
                  <CardMedia>
                    <img src={miscTech} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="Miscellaneous"
                    subtitle="Various resources to help hack the glass ceiling!"
                  />
                  <CardText>
                    This is a placeholder.
                    <h2>Placeholder</h2>
                    <p>
                      <Linkify>This is a placeholder.</Linkify>
                    </p>
                    <h2>College Grad Opportunities</h2>
                  </CardText>

                </Card>

              </div>
            </div>
          </Tab>
          <Tab label="Chat">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2>
                {' '}
                Use this chat bot to help you practice what to say in scenarios associated with gender bias.
              </h2>
            </div>
            <div
              style={{
                margin: 60,
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'space-around',
              }}
            >
              <div>
                <h3> Don't Say This When Discussing Your Salary: </h3>
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
            <div>
              <h4> Script from Feminist Fight Club by Jessica Bennett </h4>
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
    message: 'Welcome to Hacking the Glass Ceiling!',
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
      {value: 2, label: 'Discuss a promotion', trigger: '9'},
      {value: 3, label: 'Confronting workplace discrimination', trigger: '12'},
    ],
  },
  {
    id: '6',
    message: 'Employer: After mulitple rounds of negotitation: "I am sorry, we can only offer---." (type your response)',
    trigger: 7,
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: 'Nice work! You also could have asked them what they can do to make up the difference (stock, flexibility, benefits, something else) or ask them to reasses in a couple months.',
    trigger: '15',
  },
  {
    id: '9',
    message: 'Employer: "We do not feel that you are ready for that role." (type your response)',
    trigger: 10,
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'Great response! You also could have said "Help me understand what I can do to be ready."',
    trigger: '15',
  },
  {
    id: '12',
    message: 'Employer/Colleague: "Are you sure you can handle that? You do not seem capable." (type your response)',
    trigger: '13',
  },
  {
    id: '13',
    user: true,
    trigger: '14',
  },
  {
    id: '14',
    message: 'Great idea! You also could have said "I am qualified for this assignment, and I can hold my own."',
    trigger: '15',
  },
  {
    id: '15',
    message: 'Select another scenario.',
    trigger: '5',
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
