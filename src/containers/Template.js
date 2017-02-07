import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {All, Header, Title, Com} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {

  state = {
    loaded: false,
    shrink: false,
  }

  componentDidMount () {

    this.timer(500, 'loaded')
    this.timer(2000, 'shrink')
  }

  timer = (delay,state) => {
    setTimeout( ()=>{
      this.setState( (prevState, props) => {
        let newState = {}
        newState[state] = true
        return {
          ...newState
        }
      })
    }, delay)
  }

  render () {
    let {
      state
    } = this
    return (
      <MuiThemeProvider>
        <All>
          <Header>
            <Title
              {...state}
            >
              CARLPEASLEE
            </Title>
            <Com
              {...state}
            >
              .COM
            </Com>
          </Header>

          {this.props.children}
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Template
