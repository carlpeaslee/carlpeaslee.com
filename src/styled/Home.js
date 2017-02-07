import styled from 'styled-components'
import {blue} from './index'
import media from './media'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 150px;
  font-weight: 200;
  ${media.handheld`
    flex-direction: column;
    margin: 10px;
    align-items: flex-start;
  `}
`

export const Want = styled.span`
  display: flex;
  font-size: 40px;
  transition: all .25s;
  opacity: ${({want}) => want ? 1 : 0};
  align-items: ${({options}) => options ? 'flex-start' : 'center'};
  margin-top: ${({selection}) => selection * 65}px;
  color:  ${({selectionMade}) => selectionMade ? 'rgb(200,200,200)' : ''};
  font-weight: 200;
  min-width: 136px;
  ${media.handheld`
    font-size: 30px;
    line-height: 30px;
    margin: 0;
  `}
`

export const Options = styled.ul`
  display: flex;
  opacity: ${({options}) => options ? 1 : 0};
  font-size: 40px;
  margin:  ${({selection, selectionMade}) => (selectionMade && selection !== 3) ? '0 0 0 9px' : '0 0 0 190px' } ;
  flex-direction: column;
  transition: all .25s;
  align-items: flex-start;
  line-height: 65px;
  padding: 0;
  ${media.handheld`
    font-size: 30px;
    line-height: 30px;
    margin: 20px 0 0 20px;
  `}
`

export const Choice = styled.li`
  display: flex;
  align-self: flex-start;
  transition: all .25s;
  box-sizing: border-box;
  font-weight: 200;
  font-family: 'Oswald', 'Helvetica', sans-serif;
  line-height: 65px;
  border-bottom: ${({selectionMade, selection, position}) => (selectionMade && (selection === position)) ? `1px solid ${blue}` : 'none' };
  color: ${({selectionMade, selection, position}) => (selectionMade && (selection !== position)) ? 'rgb(200,200,200)' : '' };

  &:hover {
    border-bottom: 1px solid ${blue};
  }

  &:after {
    content: " ${({after})=>after}";
    position: absolute;
    margin-left: 9px;
    color: rgb(200,200,200);
    font-weight: 200;
    display: ${({selection, position}) => (selection === position) ? 'inline-block' : 'none'};
    font-family: 'Oswald', 'Helvetica', sans-serif;

  }

  &:hover:after {
    display: ${({selectionMade, selection, position}) => (selectionMade && (selection !== position)) ? 'none' : 'inline-block'};
  }

  &:before {
    content: "${({before})=>before}";
    font-weight: 200;
    position: absolute;
    margin-left: -${({before}) => (typeof before === 'string') ? before.length * 18 : 100 }px;
    color: rgb(200,200,200);
    display: ${({selection, position}) => (selection === position) ? 'block' : 'none'};
    font-family: 'Oswald', 'Helvetica', sans-serif;
  }

  &:hover:before {
    display: ${({selectionMade, selection, position}) => (selectionMade && (selection !== position)) ? 'none' : 'inline-block'};
  }

  ${media.handheld`
    font-size: 30px;
    line-height: 30px;
    margin: 0;
    margin-left: ${({before, selection}) => (typeof before === 'string' && selection === 3 && before) ? before.length * 14 : 0 }px;
    &:before {
      margin-left: -${({before, selection}) => (typeof before === 'string' && selection === 3) ? before.length * 14 : 0 }px;
      position: relative;
    }
  `}
`

export const Options2 = styled.ul`
  display: flex;
  opacity: ${({selectionMade2}) => selectionMade2 ? 1 : 0};
  font-size: 40px;
  margin: ${({selection2, selection})=> ((selection2 - selection) * -65)}px 0 0 ${({message2}) => message2}px;
  flex-direction: column;
  transition: all .25s;
  align-items: flex-start;
  line-height: 65px;
  padding: 0;

  ${media.handheld`
    font-size: 30px;
    line-height: 30px;
    margin: 10px 0 0 40px;
  `}
`

export const Choice2 = styled.li`
  display: flex;
  align-self: flex-start;
  transition: all .25s;
  box-sizing: border-box;
  font-weight: 200;
  font-family: 'Oswald', 'Helvetica', sans-serif;
  line-height: 65px;
  border-bottom: ${({selectionMade2, selection2, position}) => (selectionMade2 && (selection2 === position)) ? `1px solid ${blue}` : 'none' };
  color: ${({selectionMade2, selection2, position}) => (selectionMade2 && (selection2 !== position)) ? 'rgb(200,200,200)' : '' };

  &:hover {
    border-bottom: 1px solid ${blue};
  }

  &:after {
    content: " ${({after})=>after}";
    position: absolute;
    margin-left: 9px;
    color: rgb(200,200,200);
    font-weight: 200;
    display: ${({selection2, position2}) => (selection2 === position2) ? 'inline-block' : 'none'};
    font-family: 'Oswald', 'Helvetica', sans-serif;
  }

  &:hover:after {
    display: inline-block;
  }

  &:before {
    content: "${({before})=>before}";
    font-weight: 200;
    position: absolute;
    margin-left: -${({before}) => (typeof before === 'string') ? before.length * 18 : 100 }px;
    color: rgb(200,200,200);
    display: ${({selection2, position2}) => (selection2 === position2) ? 'block' : 'none'};
    font-family: 'Oswald', 'Helvetica', sans-serif;
  }

  &:hover:before {
    display: block;
  }
  ${media.handheld`
    font-size: 30px;
    line-height: 30px;
    margin: 0;
  `}
`

export const More = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  display: flex;
  margin-top: 50%;
`
