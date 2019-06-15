import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>FABIO SOARES</h2>
            <img
              src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/45320276_1762700573859676_3368581449123889152_n.jpg?_nc_cat=105&_nc_oc=AQkudEa7nuMOPa-uUpkcE3NoU52nO1O3wLXM9rxdII6i0GGWxGfbH-sEE0hy_HA2vTc&_nc_ht=scontent.fmii3-1.fna&oh=facd54ccc66495377683bf13becc80ae&oe=5D87F6E9"
              alt="avatar"
              style={{height: '200px'}, {borderRadius: 150 / 1.5}} />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +55 11 95916-4508
                  </ListItemContent>

                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    fabiosoares@outlook.com.br
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
