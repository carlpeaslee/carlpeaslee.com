import React, {Component} from 'react'
import {Container, Want, Options, Choice, Options2, Choice2, More, Link} from '../styled/Home'

class Home extends Component {

  state = {
    want: false,
    selectionMade: false,
    selection2: 0,
    selectionMade2: true
  }

  componentDidMount () {
    let {timer} = this
    timer(2000, 'want')
    timer(2250, 'options')
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

  choice = (selection) => {
    this.setState({
      selection,
      selectionMade: true,
      selection2: 0,
    })
  }

  choice2 = (selection2) => {
    this.setState({
      selection2,
      selectionMade2: true
    })
  }

  showOptions = (selection) => {
    let {state} = this
    switch (selection) {
      case 0: {
        return (
          <Options2
            {...state}
            message2={85}
          >
            <Choice2
              {...state}
              position={0}
              onClick={()=>this.choice2(0)}
            >
              programmer.
            </Choice2>
            <Choice2
              {...state}
              position={1}
              onClick={()=>this.choice2(1)}
            >
              writer.
            </Choice2>
            <Choice2
              {...state}
              position={2}
              onClick={()=>this.choice2(2)}
            >
              ????
            </Choice2>
          </Options2>
        )
      }
      case 1: {
        return (
          <Options2
            {...state}
            message2={265}
          >
            <Choice2
              {...state}
              position={0}
              onClick={()=>this.choice2(0)}
            >
              politics.
            </Choice2>
            <Choice2
              {...state}
              position={1}
              onClick={()=>this.choice2(1)}
            >
              fiction.
            </Choice2>
            <Choice2
              {...state}
              position={2}
              onClick={()=>this.choice2(2)}
            >
              technology.
            </Choice2>
            <Choice2
              {...state}
              position={3}
              onClick={()=>this.choice2(3)}
            >
              ????
            </Choice2>
          </Options2>
        )
      }
      case 2: {
        return (
          <Options2
            {...state}
            message2={225}
          >
            <Choice2
              {...state}
              position={0}
              onClick={()=>this.choice2(0)}
            >
              email.
            </Choice2>
            <Choice2
              {...state}
              position={1}
              onClick={()=>this.choice2(1)}
            >
              linkedin.
            </Choice2>
            <Choice2
              {...state}
              position={2}
              onClick={()=>this.choice2(2)}
            >
              github.
            </Choice2>
            <Choice2
              {...state}
              position={3}
              onClick={()=>this.choice2(3)}
            >
              twitter.
            </Choice2>
            <Choice2
              {...state}
              position={4}
              onClick={()=>this.choice2(4)}
            >
              instagram.
            </Choice2>
            <Choice2
              {...state}
              position={5}
              onClick={()=>this.choice2(5)}
            >
              facebook.
            </Choice2>
            <Choice2
              {...state}
              position={6}
              onClick={()=>this.choice2(6)}
            >
              snapchat.
            </Choice2>
          </Options2>
        )
      }
      default: {
        return null
      }

    }
  }


  more = () => {
    let {selection, selection2} = this.state
    let more = []
    switch (selection) {
      case 0: {
        switch (selection2) {
          case 0: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.github.com/carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 1: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.medium.com/@carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          default: {
            return null
          }
        }
        break
      }
      case 1: {
        switch (selection2) {
          case 0: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.medium.com/@carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 1: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.medium.com/@carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 2: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.medium.com/@carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 3: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.medium.com/@carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          default: {
            return null
          }
        }
        break
      }
      case 2: {
        switch (selection2) {
          case 0: {
            more.push(
              <Link
                key={selection2}
              >
                cpeaslee@gmail.com
              </Link>
            )
          }
          break
          case 1: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.linkedin.com/in/peaslee'}
              >
                in/peaslee
              </Link>
            )
          }
          break
          case 2: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.github.com/carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 3: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.twitter.com/carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 4: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.instagram.com/carlpeaslee'}
              >
                @carlpeaslee
              </Link>
            )
          }
          break
          case 5: {
            more.push(
              <Link
                key={selection2}
                href={'https://www.facebook.com/peaslee'}
              >
                @peaslee
              </Link>
            )
          }
          break
          case 6: {
            more.push(
              <Link
                key={selection2}
              >
                @minnetonka
              </Link>
            )
          }
          break
          default: {
            return null
          }
        }
        break
      }
      case 3: {
        more.push(
          <div
            key={0}
          >
            Hello my name is Carl. I'll be putting more up here soon.
          </div>
        )
        break
      }
      default: {
        return null
      }

    }
    return (
      <More>
        {more}
      </More>
    )

  }


  render () {
    let {
      state
    } = this
    return (
      <Container>
        <Want
          {...state}
        >
          I want to
        </Want>
        <Options
          {...state}
        >
          <Choice
            after={"carl as a"}
            onClick={()=>this.choice(0)}
            {...state}
            position={0}
          >
            hire
          </Choice>
          <Choice
            after={"carl's writing about"}
            onClick={()=>this.choice(1)}
            {...state}
            position={1}
          >
            read
          </Choice>
          <Choice
            after={"with carl over"}
            onClick={()=>this.choice(2)}
            {...state}
            position={2}
          >
            connect
          </Choice>
          <Choice
            after={"this carl character."}
            before={"learn more"}
            onClick={()=>this.choice(3)}
            {...state}
            position={3}
          >
            about
          </Choice>

        </Options>

        {this.showOptions(state.selection)}
        {this.more()}

      </Container>
    )
  }
}

export default Home
