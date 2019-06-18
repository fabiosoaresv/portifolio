import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img style={{width: 270}, {height: 270}, {borderRadius: 150 / 1.5}}
              src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/45320276_1762700573859676_3368581449123889152_n.jpg?_nc_cat=105&_nc_oc=AQkudEa7nuMOPa-uUpkcE3NoU52nO1O3wLXM9rxdII6i0GGWxGfbH-sEE0hy_HA2vTc&_nc_ht=scontent.fmii3-1.fna&oh=facd54ccc66495377683bf13becc80ae&oe=5D87F6E9"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">

            <div className="contact-list">
            <h1>Contact</h1>
            <hr/>
            <List>

            <h2><i className="fa fa-whatsapp" aria-hidden="true"/>
            +55 11 95916-4508</h2>
            <h3><i className="fa fa-envelope" aria-hidden="true"/>
            fabiosoares@outlook.com.br</h3>

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
