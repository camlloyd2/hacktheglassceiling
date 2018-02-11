import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab, Paper} from 'material-ui';
import Slider from 'material-ui/Slider';
import ChatBot from 'react-simple-chatbot';
import background from './background.png';
import brokenglass from './brokenglass.png';
import homePicture from './homePicture.jpg';
import info1 from './info1.png';
import info2 from './info2.png';
import info3 from './info3.jpg';
import info4 from './info4.png';
import Linkify from 'react-linkify';
import pearlGirl from './pearlGirl.jpeg';
import rosietech from './rosietech.jpg';
import womenTech from './womenintech.jpg';
import womenIntern from './womenIntern.jpg';
import miscTech from './miscData.jpg';
import ted from './ted.jpg';

import book from './bookCard.jpeg';

import grace from './grace.jpg';

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
          <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', background: '#daebf2'}}>
            
            <div style = {{width: '90%', alignSelf: 'center', flexDirection: 'column', padding: 8}}>
            <Paper style = {{paperStyle, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'row'}}>
              <div style={{alignItem: 'left'}}>
              <img src={homePicture} style = {{padding: 16}}/>
              </div>
              <div style={{padding: 40, textAlign: 'center'}}>
              <h2> About: </h2>
              <p>
              The goal of Hacking the Glass Ceiling is to inform and empower women in tech. We want to increase awareness of diversity issues concerning women and minorities in STEM fields, and provide resources to help navigate these issues.  
              </p>
              </div>
            </Paper>
            </div>

            
            <div style = {{width: '90%', alignSelf: 'center', flexDirection: 'column', padding: 8}}>
              <Paper style = {{paperStyle, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'row'}}>
              <div style = {{padding: 40, textAlign: 'center'}}>
              <h2> Did you know? </h2>
              <p>
              Women feel like they need to be 100% qualified to apply for a job, while men feel that they need to be 60% qualified to apply.
              </p>
              </div>
              <div>
              <img src={info1} style = {{width: '95%', height: '90%', padding: 16, alignSelf: 'right'}}/>
              </div>
              </Paper>
              </div>
             
            
              <div style = {{width: '90%', alignSelf: 'center', flexDirection: 'column', padding: 8}}>
              <Paper style = {{paperStyle, display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexDirection: 'row'}}>
                <div style={{alignItem: 'left'}}>
                <img src={info2} style = {{width: '95%', height: '90%', padding: 16}}/>
                </div>
                <div style={{padding: 40, textAlign: 'center'}}>
                <h2> Did you know? </h2>
                <p>
                  One of the the factors that may contribute to the wage gap is that women are less likely to ask for raises and negotiate their salaries. Don’t be afraid to ask! 
                </p>
                </div>
              </Paper>
              </div>

              <div style = {{width: '90%', alignSelf: 'center', flexDirection: 'column', padding: 8}}>
              <Paper style = {{paperStyle, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'row'}}>
              <div style = {{padding: 40, textAlign: 'center'}}>
              <h2> Did you know? </h2>
              <p>
              There is a lack of female role models/mentors and many women find themselves having to prove their competence in a work setting.
              </p>
              </div>
              <div>
              <img src={info3} style = {{width: '95%', height: '90%', padding: 16, alignSelf: 'right'}}/>
              </div>
              </Paper>
              </div>

               <div style = {{width: '90%', alignSelf: 'center', flexDirection: 'column', padding: 8}}>
              <Paper style = {{paperStyle, display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexDirection: 'row'}}>
                <div style={{alignItem: 'left'}}>
                <img src={info4} style = {{width: '95%', height: '90%', padding: 16}}/>
                </div>
                <div style={{padding: 40, textAlign: 'center'}}>
                <h2> Advice: </h2>
                <p>
                Don’t be the default option for “office housework”
                </p>
                <p>
                  Be vocal about other women’s accomplishments. REmind others of their contributions and strengths. 
                </p>
                <p>
                  Don’t let people interrupt you.
                </p>
                <p>
                  Take and accept credit for your work. DON’T minimize your accomplishments. 
                </p>
                <p> 
                  Don’t apologize when you don’t need to. 
                  </p>
                </div>
              </Paper>
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
                      <Linkify>
                        https://www.computerscienceonline.org - This is a general database of colleges with Computer Science programs.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://www.computerscience.org/degrees/bachelors/ - Another general database that also has available scholarships.
                      </Linkify>
                    </p>
                    <h2>Scholarships</h2>
                    <p>
                      <Linkify>
                        http://www.dodstem.us/stem-programs/scholarships - Department of Defense scholarships provide cash awards to students who have demonstrated ability and aptitude for excelling in STEM fields in disciplines of importance to DoD.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://societyofwomenengineers.swe.org/scholarships - Society of Women Scholarships
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://www.womentechmakers.com/scholars - Anita Borg Scholars Program
                        {' '}
                      </Linkify>
                    </p>

                  </CardText>

                </Card>
                <Card style={{padding: 20, marginTop: 20, marginBottom: 20}}>
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
                        https://girlswhocode.com/ - This website provides links to summer internships, after school coding programs for girls in grades 6-12, and 2 week beginner and intermediate coding bootcamps for girls in college!
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://bit.ly/2BR4RyS - This has a list of internships compiled by Carnegie Melon's school of computer science for students.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://www.redhat.com/en/jobs/categories/internships - Internships with RedHat.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://careers.jpmorgan.com/careers/US/en/programs - Various college student programs with JP Morgan Chase & Co.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://careers.blizzard.com/en-us/students - Interships, post graduation jobs, and contests hosted by Blizzard Entertainment.
                      </Linkify>
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
                      <Linkify>
                        https://careers.jpmorgan.com/careers/US/en/programs?type=Full-Time - JP Morgan Chase & Co Post Graduate Opportunities
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://careers.blizzard.com/en-us/openings/all/all/all/new-grad-roles/1 - Blizzard Entertainment Post Graduate Opportunities
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        https://www.redhat.com/en/jobs/categories/technology - RedHat Post Graduate Opportunities
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://rewritingthecode.org - This organization was created to connect students like you to companies that have the same interests.
                      </Linkify>
                    </p>
                  </CardText>

                </Card>
                <Card style={{padding: 20, marginTop: 20, marginBottom: 20}}>
                  <CardMedia>
                    <img src={ted} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="TED Talks"
                    subtitle="Great talks by figures in tech"
                  />
                  <CardText>
                    {' '}
                    Check out these inspirational Ted Talks on a variety of topics and conversations surrounding technology.
                    <p>
                      <Linkify>
                        http://bit.ly/2i1Wrec- Economist Andrew McAfee suggests that, yes, probably, droids will take our jobs -- or at least the kinds of jobs we know now. In this far-seeing talk, he thinks through what future jobs might look like, and how to educate coming generations to hold them.
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://bit.ly/XXGyrc - In this talk about the future of work, economist David Autor addresses the question of why there are still so many jobs and comes up with a surprising, hopeful answer.
                      </Linkify>
                    </p>
                  </CardText>
                </Card>
              </div>
              <div style={{width: '28%'}}>
                <Card style={{padding: 20}}>
                  <CardMedia>
                    <img src={grace} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="Important Women in STEM History"
                    subtitle="Women Who Pathed the Way"
                  />
                  <CardText>
                    <h2>
                      Ada Lovelace - 1815-1852; The Prophet of the Computer Age
                    </h2>
                    <p>
                      <Linkify>
                        Ada is considered to be the first computer programmer. She translated and extended onto article on Babbage's analytical engine that was published in 1843, however its significance was not recognized until after her death.
                        {' '}
                      </Linkify>
                    </p>
                    <h2>
                      Rear Admiral Grace Hopper - 1906-1992 (Pictured Above)
                    </h2>
                    <p>
                      <Linkify>
                        Grace created the first compiler for computer languages, which renders worded instructions into code that can be read by computers. She joined the US Navy in 1943, joined the reserves after WWII, retired in 1966, and then returned in 1967 and served another 19 years before officially retiring in 1986. Grace was awarded the National Medal of Technology in 1991—becoming the first female individual recipient of the honor.
                      </Linkify>
                    </p>
                    <h2>
                      Katherine Johnson, Dorothy Vaughan, and Mary Jackson
                    </h2>
                    <p>
                      <Linkify>
                        Katherine, Dorothy, and Mary were all involved in John Glenn's trip around the globe in 1962. Katherine calculated the trajectories needed for a save takeoff and splashdown for the trip. Dorothy became the National Advisory Committee for Aeronautics's first black computing supervisor as well as their first expert FORTAN programmer. Mary was original assisting Kazimierz Czarnecki in aeronautic research engineering before petitioning & winning the right to take engineering courses at Hampton High School, which was at the time segregated. She then became NASA's first female African-American engineer.
                      </Linkify>
                    </p>
                  </CardText>

                </Card>
                <Card style={{padding: 20, marginTop: 20}}>
                  <CardMedia>
                    <img src={book} alt="" />
                  </CardMedia>
                  <CardTitle
                    title="Top books to read"
                    subtitle="Engage with iconic books about technology in our world today."
                  />
                  <CardText>
                    <p>
                      <Linkify>
                        http://amzn.to/2lInJ78 - Feminist Fight Club: An Office Survival Manual for a Sexist Workplace by Jessica Bennett
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://amzn.to/2sqOYJM - Lean In: Women, Work, and the Will to Lead by Sheryl Sandberg
                      </Linkify>
                    </p>
                    <p>
                      <Linkify>
                        http://amzn.to/2BRswz5 - The Design of Everyday Things by Don Norman
                      </Linkify>
                    </p>
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
              <h2 style={{padding: 10}}>
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
                <Paper style={{padding: 20}}>
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
                </Paper>
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

const paperStyle = {
  height: '95%',
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  zDepth : 2,
  background: '##f9f9f9',
};

export default App;
