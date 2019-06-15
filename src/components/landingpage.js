import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img style={{width: 270}, {height: 270}, {borderRadius: 150 / 1.5}}
              src="https://instagram.fmii3-1.fna.fbcdn.net/vp/82646ee1774dd4da9135fe538fba5265/5D9CDE1F/t51.2885-15/e35/56913508_2160844253963519_2414300729945258772_n.jpg?_nc_ht=instagram.fmii3-1.fna.fbcdn.net"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>DevOps</h1>

            <hr/>

          <p>DevOps | Development | Infra Agile | InfoSec | Scrum</p>

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
          <a href="fabiosoares@outlook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
