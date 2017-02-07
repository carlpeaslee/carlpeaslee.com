import styled from 'styled-components'
import {H1, blue} from './index.js'

export const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
  font-family: 'Oswald', 'Helvetica', sans-serif;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  border-bottom: 2px solid ${blue};
  background-color: white;
  z-index: 1;
`

const h1Size = ({loaded, shrink}) => {
  if (!loaded && !shrink) {
    return '12vw'
  } else if (loaded && !shrink) {
    return '14vw'
  } else if (loaded && shrink) {
    return '30px'
  }
}


export const Title = styled(H1)`
  color: rgb(50,50,50);
  font-size: ${props => h1Size(props)};
  opacity: ${({loaded}) => loaded ? 1 : 0};
  transition: all .25s;

`

export const Com = styled(H1)`
  color: rgb(230,230,230);
  font-size: ${props => h1Size(props)};
  opacity: ${({loaded}) => loaded ? 1 : 0};
  transition: all .25s;
`
