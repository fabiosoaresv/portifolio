import React, { Component } from 'react';
import { Grid, Cell, List } from 'react-mdl';
import LogoImage from '../assets/images/image2.jpg';

class Contact extends Component {
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

            <div className="banner-text" >
              <div className="contact-list">
                <h4>Contact</h4>
                <hr/>
                  <List>
                    <h2><i className="fa fa-whatsapp" aria-hidden="true"/></h2>
                    <h2>+55 11 95916-4508</h2>
                    <h3><i className="fa fa-envelope" aria-hidden="true"/></h3>
                    <h3>fabiosoares@outlook.com.br</h3>
                  </List>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
