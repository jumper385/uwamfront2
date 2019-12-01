import React from 'react'
import styled from 'styled-components'

const ResponsiveImage = styled.img`
  width:100%
  height:auto
  margin:0
  padding:0
`
const LandingDiv = styled.div`
  border-radius:12pt
  box-sizing:border-box
  display:flex
  align-items:center
  justify-content:center
  box-shadow: 0px 2pt 4pt rgba(0,0,0,.18);
  overflow:hidden
`

class Home extends React.Component {
  render() {
    return (
      <LandingDiv>
        <ResponsiveImage src='https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'/>
      </LandingDiv>
    )
  }
}

export default Home