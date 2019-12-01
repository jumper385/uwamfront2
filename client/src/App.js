import React from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Home from './Pages/Home'
import ArticleCategories from './Pages/Article'
import ArticleView from './Pages/ArticleView'
import CreateArticle from './Pages/CreateArticle'
import EditArticle from './Pages/EditArticle'

const AppDiv = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');
  font-size: 12pt
  font-family: 'Poppins', sans-serif;
  padding:0 32pt;
  letter-spacing:.05em
`
const SiteTitle = styled.h1`
  font-size:36pt
  margin:0
  letter-spacing:.2em
  text-align:center
  text-transform:uppercase; 
  margin:24pt 0;
`
const StyledNav = styled.nav`
  height:64pt
  display:flex
  align-items:center
  justify-content:space-around
  font-weight:600
`
const StyledNavLink = styled(Link)`
  text-decoration:none;
  text-transform:uppercase;
  color:black;
  letter-spacing:.25em
  text-align:center
`

const Footer = styled.footer`
  font-size:12pt
  text-align:center
  height:72pt
  margin-top:24pt
`

const ActionFloater = styled.div`
  margin:32pt
  position:fixed
  bottom:0
  right:0
  display:grid
  grid-template-columns:1fr 1fr
  grid-column-gap:6pt
  border-radius:27pt
  overflow:hidden
`
const ActionContainer = styled.button`
  margin:0
  width:54pt
  height:54pt
  display:flex
  align-items:center
  justify-content:center
  border:none
`
class App extends React.Component {
  render(){
    return (
      <Router>
        <AppDiv className="App">
          <ActionFloater>
            <ActionContainer><Link to='/newArticle'><i className="material-icons">post_add</i></Link></ActionContainer>
            <ActionContainer><Link to='/'><i className="material-icons">add_a_photo</i></Link></ActionContainer>
          </ActionFloater>
          <SiteTitle>UWA Motorsports</SiteTitle>
          <StyledNav>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/articles'>Articles</StyledNavLink>
            <StyledNavLink to='/gallery'>Gallery</StyledNavLink>
          </StyledNav>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/articles'><ArticleCategories /></Route>
            <Route path='/gallery'><h1>Gallery</h1></Route>
            <Route path='/articles/:id' component={ArticleView}/>
            <Route path='/newArticle'><CreateArticle /></Route>
            <Route path='/editArticle/:id' component={EditArticle}></Route>
          </Switch>
          <Footer>
            <p>UWA Motorsports 2019</p>
          </Footer>
        </AppDiv>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App);
