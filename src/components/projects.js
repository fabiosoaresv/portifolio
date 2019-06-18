import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project Onefood */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59531406-396dbe00-8ebc-11e9-9355-237f7cd29752.png) center / cover'}} >ONEFOOD</CardTitle>
            <CardText>
              iFood based app, where you can buy food online in several restaurants.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/1food" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Photogram */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59495401-92f6ce00-8e65-11e9-978e-b1022aa7f8aa.gif) center / cover'}} >PHOTOGRAM</CardTitle>
            <CardText>
              Instagram based app, where you can make uploads from your photos, and like others photos.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/photogram" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Portfolio */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59555897-802ce800-8f90-11e9-9f26-f61386dcf89c.png) center / cover'}} >PORTFÓLIO</CardTitle>
            <CardText>
              This is my project about my portfolio.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/portfolio" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored><a href="http://fabiosoares.herokuapp.com" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project Onefood API */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/56941030-23f92c00-6ae8-11e9-88fa-33bcd4285bf0.png) center / cover'}} >ONEFOOD API</CardTitle>
            <CardText>
              App based in microservices as Server and Client to work, to development I used the Ruby on Rails.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/onefood_api" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Photogram API */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59320161-ac501c80-8ca3-11e9-9455-e1a6c9956ee0.png) center / cover'}} >PHOTOGRAM API</CardTitle>
            <CardText>
              App based in microservices as Server and Client to work, to development I used the Node.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/photogram" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project Do it now */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59542465-67fb9100-8edc-11e9-8777-03e29abda023.gif) center / cover'}} >DO IT NOW</CardTitle>
            <CardText>
              Checklist based app in things what you have to do, and use authentication with e-mail and password, making the privacy activities each user.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/doitnow" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored><a href="https://doitn0w.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Schedule */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59577039-59f26f80-9098-11e9-8dc8-f78f329f539d.png) center / cover'}} >SCHEDULE</CardTitle>
            <CardText>
              Schedule based app, where you can add your contacts.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/schedule" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored><a href="https://sch3dule.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Envurban */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/45659390-9c1b6000-baca-11e8-96fa-30e800aa0d8d.png) center / cover'}} >ENVURBAN</CardTitle>
            <CardText>
              This is a simple project mobile made in College, about urban sustainability.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/envurban" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project Camgnition */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/59542266-5665b980-8edb-11e9-9415-376cc4125faf.gif) center / cover'}} >CAMGNITION</CardTitle>
            <CardText>
              This is project to study Intelligence Artificial by recognition facial.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/camgnition" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Pyhooma */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://user-images.githubusercontent.com/31450742/56823004-1e21f300-6829-11e9-9742-3dc1c82c756b.png) center / cover'}} >PYHOOMA</CardTitle>
            <CardText>
              This is project to study Machine Learning with numbers.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/pyhooma" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Ventcoin */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#6495ED', height: '176px', background: 'url(https://img.icons8.com/cotton/2x/bitcoin--v1.png) center / cover'}} >VENTCOIN</CardTitle>
            <CardText>
              This is project to study Blockchain cryptography.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/fabiosoaresv/ventcoin" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>API</Tab>
          <Tab>Ruby</Tab>
          <Tab>Scripts</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
