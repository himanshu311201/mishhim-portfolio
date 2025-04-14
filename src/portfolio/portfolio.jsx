/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { CardGroup, Card } from 'semantic-ui-react'
import {
  GridColumn,
} from 'semantic-ui-react'
import portfolio from '../portfolio/mishhim.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = (props) => (
<Card>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
        <img
          src={props.image}
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>{props.meta}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      { <div>
        <div>Social Media</div>
        <div>
      <Icon name="twitter" size="big" link />
      <Icon name="linkedin" size="big" link />
      <Icon name="instagram" size="big" link />
    </div>
    </div> && <Card.Content extra>{<div><div>Social Media</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3em' ,marginTop: '1em'  }}>
      <a href="https://x.com/himanshu312017" target="_blank">
      <Icon name="twitter" size="big" link />
      </a>
      <a href="https://in.linkedin.com/in/himanshu-mishra-25629a209" target="_blank">
      <Icon name="linkedin" size="big" link /> </a>
      <a href="https://www.instagram.com/himanshu_311201/" target="_blank">
      <Icon name="instagram" size="big" link />
      </a>
    </div>
    <div>Other Platforms</div>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' ,marginTop: '1em'  }}>
    <a href="mailto:himanshu312017@gmail.com" target="_blank">
    <Icon name="mail" size="big" link = "" /> {/* Email */}
    </a>
      <a href="https://github.com/himanshu311201/" target="_blank">
    <Icon name="github" size="big" link />
    </a>
      <a href="tel:+919022176521" target="_blank">
    <Icon name="phone" size="big" link />
    </a>
  </div>
  </div>}</Card.Content>}
    </Card>
)
const CardExampleFluid = (props) => (
  <CardGroup>
    <Card Fluid style={{ width:"1200px"}} >
    <Card.Content>
        <Card.Header style={{ display: 'flex', justifyContent: 'left' }}>{props.header}</Card.Header>
        <Card.Meta style={{ display: 'flex', justifyContent: 'left' }}>{props.meta}</Card.Meta>
        <Card.Description style={{ display: 'flex', justifyContent: 'left' }}>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  </CardGroup>
)
const CardExampleFluidPhone = (props) => (
  <CardGroup>
    <Card Fluid  >
    <Card.Content>
        <Card.Header style={{ display: 'flex', justifyContent: 'left' }}>{props.header}</Card.Header>
        <Card.Meta style={{ display: 'flex', justifyContent: 'left' }}>{props.meta}</Card.Meta>
        <Card.Description style={{ display: 'flex', justifyContent: 'left' }}>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  </CardGroup>
)

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {screen_name:"About", screen_map : mapping_screen["About"]}

  set_screen = (screen) => {
    // your side-effect logic here
    console.log(screen)

    this.setState({ ...this.state,screen_map: mapping_screen[screen],screen_name: screen});
  }

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state


    return (
      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 60, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={'top'}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu.Item position='center' as='a'></Menu.Item>
                <Menu.Item position='center' as='a'></Menu.Item>
                <Menu.Item as='a' onClick={() => this.set_screen("About")} active={this.state.screen_name === 'About'}>
                  About
                </Menu.Item>
                <Menu.Item position='center' as='a' active={this.state.screen_name === 'WorkExperience'} value="WorkExperience"  onClick={() => this.set_screen("WorkExperience")}>Work Experience</Menu.Item>
                <Menu.Item position='center' as='a' active={this.state.screen_name === 'LearningExperience'} onClick={() => this.set_screen("LearningExperience")}>Learning Experience</Menu.Item>
                <Menu.Item position='center' as='a'  active={this.state.screen_name === 'Projects'} onClick={() => this.set_screen("Projects")}>Projects</Menu.Item>
                <Menu.Item position='center' as='a' active={this.state.screen_name === 'Hobbies'} onClick={() => this.set_screen("Hobbies")}>Hobbies & Interests</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </InView>
        <Container fluid style={{width: "100%" ,display: 'flex', justifyContent: 'center' }}>
      <Grid columns={2}  relaxed='very' stackable style={{ width: '1000px' }}>
        <GridColumn  width={5} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
          <CardExampleCardProps image={portfolio} header="Himanshu Mishra" meta="Software Engineer" description="Lets's connect over ">
            {/* // header:"Himanshu Mishra",meta:"Software Engineer",description: "Lets's connect over "}}> */}
          </CardExampleCardProps>
        </GridColumn>
        <GridColumn width={400} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
        {console.log(this.state.screen_map) }
        {this.state.screen_map.map((item, index) => (
      <CardExampleFluid header={item.header} description={item.description} meta = {item.meta}>
          </CardExampleFluid>
        ))}
          
        </GridColumn>
      </Grid>
    </Container>
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {screen_name:"About", screen_map : mapping_screen["About"]}

  set_screen = (screen) => {
    // your side-effect logic here
    console.log(screen)

    this.setState({ ...this.state,screen_map: mapping_screen[screen],screen_name: screen});
  }
  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active={this.state.screen_name === 'About'} value="About"  onClick={() => this.set_screen("About")}>
              Home
            </Menu.Item>
            <Menu.Item as='a' active={this.state.screen_name === 'WorkExperience'} value="WorkExperience"  onClick={() => this.set_screen("WorkExperience")}>Work Experience</Menu.Item>
            <Menu.Item as='a' active={this.state.screen_name === 'LearningExperience'} onClick={() => this.set_screen("LearningExperience")}>Learning Experience</Menu.Item>
            <Menu.Item as='a' active={this.state.screen_name === 'Projects'} onClick={() => this.set_screen("Projects")}>Projects</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 30, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
          <Container fluid style={{display: 'flex', justifyContent: 'center' }}>
      <Grid columns={2}  relaxed='very' stackable >
        <GridColumn  width={16} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
          <CardExampleCardProps image={portfolio} header="Himanshu Mishra" meta="Software Engineer" description="Lets's connect over ">
            {/* // header:"Himanshu Mishra",meta:"Software Engineer",description: "Lets's connect over "}}> */}
          </CardExampleCardProps>
        </GridColumn>
        <GridColumn width={16} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
        {console.log(this.state.screen_map) }
        {this.state.screen_map.map((item, index) => (
      <CardExampleFluidPhone header={item.header} description={item.description} meta = {item.meta}>
          </CardExampleFluidPhone>
        ))}
          
        </GridColumn>
      </Grid>
    </Container>
        </Sidebar.Pushable>
        
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer style={{ backgroundColor: "#1b1c1d" }}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const mapping_screen = {
  "About" :[
    {
      "header": "About",
      "meta" :"",
      "description": "I’m Himanshu Mishra, a passionate Software Developer with hands-on experience in building scalable backend systems, dynamic UI components, and automation frameworks using technologies like Python, SQL, React.js, and Java. I've worked on real-time reporting systems, ETL pipelines, and microservice deployments that have helped streamline operations and boost efficiency. Outside of tech, I enjoy playing and watching cricket, listening to music, driving, swimming, and cooking — hobbies that keep me energized and creative. I believe my curiosity and drive show both in my code and in life, making me a well-rounded individual and a strong team player. I'm always eager to learn, grow, and take on new challenges that help me evolve personally and professionally."
    }
  ],
  "WorkExperience":
  [
    {
      "header": "Software Developer - ISS-Stoxx",
      "meta" : "July 2023 - present",
      "description":<ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Developed and implemented a UI-driven PDF report generation framework using Python and SQL, automating real-time reporting and reducing 80% of the manual effort, with configurable formatting options on UI.</li>
      <li>Created and optimized datapoint-driven dynamic SQL queries for complex business reports, reducing query execution time by 25%.</li>
      <li>Designed and deployed an ETL pipeline in Python, automating data flow from multiple sources into a centralized SQL database, improving efficiency by over 50%.</li>
      <li>Enhanced data integration by troubleshooting and refining ETL workflows for Canadian mutual fund and ETF data, ensuring 100% accurate data inflow.</li>
      <li>Built reusable UI components in React.js for a modular frontend, integrating Spring Boot APIs for smooth backend communication.</li>
      <li>Dockerized Python microservices for scalable ETL processing and implemented CI/CD pipeline using GitLab Runner and a Linux server.</li>
      <li>Worked with SSIS and SSRS for data integration and automated report generation.</li>
      <li>Developed a proof of concept using OpenSearch to enable search functionality within large PDF datasets, improving content accessibility.</li>
    </ul>
    }
  ],
  "LearningExperience" :[
    {
      "header": "Vivekanand Education Society’s Institute of Technology, Mumbai ",
      "meta" :"Jul 2019 - Jul 2023",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Bachelor of Engineering in Information Technology</li>
      <li>CGPA : 8.94</li>
      <li>Technical Courses: Data Structures and Algorithms, Operating Systems, Database Management 
      Systems, Object Oriented Programming, Computer Networks. </li>
      </ul>
    },
    {
      "header": "XII(Science) ",
      "meta" :"Jul 2017 - Jun 2019",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Maharashtra Board of Secondary and Higher Secondary Education</li>
      <li>MHT-CET: 96.75%ile JEE-MAINS Score: 91%ile</li>
      <li>Percentage: 76.15 </li>
      </ul>
    },
    {
      "header": "X(SSC)",
      "meta" :"Jun 2017",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Maharashtra Board of Secondary and Higher Secondary Education</li>
      <li>Percentage: 86.6 </li>
      </ul>
    },
  ],
  "Projects" :[
    {
      "header": <span>Stocker : <a link = "https://github.com/himanshu311201/Stock_Trainer"> Github Link</a> </span>,
      "meta" :"Django, Web Scrapping, NSE tool API, LSTM, Javascript",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Designed and developed a real-time mock stock market web application with an integrated LSTM model for stock 
      trend predictions, improving user decision-making through actionable insights.</li>
      <li>Led both the backend and frontend development, while utilizing Django for rapid development and using third 
      party APIs for near real time financial data. </li>
      </ul>
    },
    {
      "header": <span>Prabandh : <a link = "https://github.com/himanshu311201/Prabandh"> Github Link</a> </span>,
      "meta" :"Django, Python, Javascript",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Engineered a web application to facilitate peer-to-peer product rentals, creating a platform that increased seller 
      revenue by providing them incentive of 5-15% over the price of product. </li>
      <li>Defined the project’s architecture and developed key UI and backend components.</li>
      </ul>
    },
    {
      "header": <span>C2C Auction System : <a href = "https://github.com/himanshu311201/Bidding-Desktop-App"> Github Link</a> </span>,
      "meta" :" JAVA, JDBC, MYSQL, JAVA SWING ",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Developed an online auction system to help users maximize product value based on real-time demand. </li>
      <li>Integrated JDBC and MySQL, and made UI Screen using JAVA SWING. </li>
      </ul>
    },
  ],
  "Hobbies" :[
    {
      "header": "Hobbies",
      "meta" :"",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Driving</li>
      <li>Gym </li>
      <li>Swimming </li>
      <li>Cricket </li>
      <li>Music </li>
      <li>Cooking </li>
      </ul>
    },
    {
      "header": "Interests",
      "meta" :"",
      "description": <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
      <li>Machine Learning</li>
      <li>Stock Market</li>
      <li>Business Models </li>
      <li>Governance</li>
      </ul>
    },
  ],


}

function HomepageLayout () {
  return(
  <ResponsiveContainer>
    {/* <Container fluid style={{width: "100%" ,display: 'flex', justifyContent: 'center' }}>
      <Grid columns={2}  relaxed='very' stackable style={{ width: '1000px' }}>
        <GridColumn  width={5} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
          <CardExampleCardProps image={portfolio} header="Himanshu Mishra" meta="Software Engineer" description="Lets's connect over ">
            {/* // header:"Himanshu Mishra",meta:"Software Engineer",description: "Lets's connect over "}}> */}
          {/* </CardExampleCardProps>
        </GridColumn>
        <GridColumn width={400} style={{ paddingLeft: 0, paddingRight: '0.5rem' }}>
        {console.log(Array.isArray(screen_map))}// should be true
        {console.log(screen_map)}
        {screen_map.map((item, index) => (
      <CardExampleFluid header="About"  description="I’m Himanshu Mishra, a passionate Software Developer with hands-on experience in building scalable backend systems, dynamic UI components, and automation frameworks using technologies like Python, SQL, React.js, and Java. I've worked on real-time reporting systems, ETL pipelines, and microservice deployments that have helped streamline operations and boost efficiency. Outside of tech, I enjoy playing and watching cricket, listening to music, driving, swimming, and cooking — hobbies that keep me energized and creative. I believe my curiosity and drive show both in my code and in life, making me a well-rounded individual and a strong team player. I'm always eager to learn, grow, and take on new challenges that help me evolve personally and professionally.">
          </CardExampleFluid>
        ))}
          
        </GridColumn>
    //   </Grid>
    // </Container> */} 
  </ResponsiveContainer>
  )
}

export default HomepageLayout