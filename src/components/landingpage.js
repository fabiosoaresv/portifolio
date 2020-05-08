import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/image3.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img style={{width: 270}, {height: 270}, {borderRadius: 150 / 1.5}}
              src={LogoImage}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Desenvolvedor de Software</h1>

            <hr/>

            <p>Devops | Development | Infra Agile | InfoSec | Scrum | Ruby on Rails</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/fabio-soaresv/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/fabiosoaresv" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* WhatsApp */}
                <a href="https://api.whatsapp.com/send?phone=5511959164508" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/faasoaresv" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/fbosoave" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>

                {/* Outlook */}
                <Link to="/contact">
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
