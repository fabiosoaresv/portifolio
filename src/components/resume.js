import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import LogoImage from '../assets/images/image2.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{textAlign: 'center'}}>
              <img style={{width: 270}, {height: 270}, {borderRadius: '300px'}}
                src={LogoImage}
                alt="avatar"
                className="avatar-img"
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Fabio Soares Venturelli</h2>
            <h4 style={{color: 'grey'}}>Devops</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
            <p>Bachelor Degree in Computer Science from Universidade Paulista, where I had the privilege of a PROUNI scholarship, a degree in Computer Technician from Escola Técnica Estadual Centro Paula Souza, experience in the area of ​​Information Technology with focused on Identity Access Management and Privileged Access Management, high degree knowledge Server Windows and Linux, excellent resources for analysis, writing, reasoning, communication and information technology, recognized throughout the career for professionalism, fast learning.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
            <h5>Address</h5>
            <p>Piraju, São Paulo, Brasil</p>
            <h5>Phone</h5>
            <p>+55 (11) 9 5916-4508</p>
            <h5>Email</h5>
            <p>fabiosoares@outlook.com.br</p>
            <div className="landing-grid-link">
              <h5>Resume</h5>
              <a href="https://drive.google.com/open?id=1u4oYnhcoSlPvsPdU_aBm02wA43PAqiVn" rel="noopener noreferrer" target="_blank">
                <p><i className="fa fa-link" aria-hidden="true" /> download</p>
              </a>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Universidade Paulista (UNIP)"
              schoolDescription="Bachelor's in Computer Science."
               />

               <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Escola Técnica Estadual (ETEC)"
                 schoolDescription="Computer Technician."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="AutoSeg - Devops"
              jobDescription="Working with support (level 1 to 3), scrum, implementation, development (Ruby on Rails, Power Shell and Shell Script) and POC of the software AutoSeg (IAM - Identity Management Access) or the software Passmonki (PAM, Privileged Access Management), administation and configurarion in servers Linux / Windows / VPN and AWS, database management PostgreSql and MySQL, versioning tool (GitHub), sprint planning and client management."
              />

              <Experience
                startYear={2016}
                endYear={2017}
                jobName="SP System - Analyst Pre Sales"
                jobDescription="Technical presentations, implementation and support of Arcserve backup software and customer management."
                />

              <Experience
                startYear={2016}
                endYear={2017}
                jobName="5F Soluções em TI - Analyst Linux"
                jobDescription="Infrastructure monitoring (networks) with Zabbix and administration (implementation, maintenance and development of templates), development of Shell Scripts for automation of tasks (backups, sending SMS and E-mail), administration of MySQL database, administration of Linux systems and AWS."
                />

              <Experience
                startYear={2012}
                endYear={2013}
                jobName="kPlay - Developer ASP.NET"
                jobDescription="Development and maintenance of web pages and implementation of ERP / CRM systems."
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
                <Experience
                  jobName="Technologies used everyday"
                  jobDescription="Docker, Docker-Compose, MacOS, Linux (CentOS, Red Hat), Windows Server, Ruby on Rails, GitHub, SemaphoreCI, Slack, Redmine, VPN, API, AWS, PFsense, Shell Script, Power Shell, Python, JavaScript, CSS, SOAP."
                  />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                <div style={{textAlign: 'center'}}>
                Linux
                  <Skills progress={99} />
                Windows
                  <Skills progress={90} />
                GitHub
                  <Skills progress={85} />
                Network / Security
                  <Skills progress={80} />
                Ruby on Rails
                  <Skills progress={75} />
                Shell Script
                  <Skills progress={70} />
                Docker / Docker-Compose
                  <Skills progress={65} />
                Python
                  <Skills progress={60} />
                SemaphoreCI
                  <Skills progress={55} />
                Jenkins
                  <Skills progress={50} />
                Puppet
                  <Skills progress={45} />
                React
                  <Skills progress={40} />
                HTML / CSS
                  <Skills progress={40} />
                JavaScript
                  <Skills progress={40} />
                </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
