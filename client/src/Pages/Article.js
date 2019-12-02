import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'

const BASE_URL = process.env.PORT ? '/' : 'http://localhost:8080/'

const ArticleHolder = styled.div`
    padding:32pt
    box-shadow: 0px 2pt 4pt rgba(0,0,0,.18);
    border-radius:6pt
`
const ArticleRow = styled(Link)`
    text-decoration:none
    display:grid
    grid-template-columns: 3fr 1fr 1fr 1fr
    color:rgba(0,0,0,.96);
    align-items:center
`
const StyledArticleRowLink = styled(Link)`
    text-decoration:none
`
const ArticleHolderHeading = styled.div`
    display:grid
    grid-template-columns: 3fr 1fr 1fr 1fr
    border-top:1pt solid rgba(0,0,0,.18);
    border-bottom:1pt solid rgba(0,0,0,.18);
`
const ActionButtonHolder = styled.div`
    display:grid
    grid-template-columns:1fr 1fr
    grid-align-columns:center
`
const ArticleHolderHeadingText = styled.p`
    font-weight:600
    text-transform:uppercase
`
const ArticleActionButton = styled.button`
    border:none
    height:100%
    display:flex
    align-items:center
    justify-content:center
    margin:0
    height:24pt
    width:24pt
`
const ArticleLoader = (props) => {
    let {articles} = props
    console.log(props)

    const DeleteArticle = async e => {
        e.preventDefault()
        const id = e.target.name
        let deleteData = await axios.delete(`${BASE_URL}api/articles/${id}`)
        if (deleteData) props.DELETE_ARTICLE(id)
    }

    if(articles){
        let ArticleMap = articles.map(article => (
            <ArticleRow key={article.shortid} to={`/articles/${article.shortid}`}>
                <p>{article.title}</p>
                <p>{article.category}</p>
                <p>{article.shortid}</p>
                <ActionButtonHolder>
                    <ArticleActionButton className='material-icons' name={article.shortid} onClick={DeleteArticle}>
                        delete_forever
                    </ArticleActionButton>
                    <Link className='material-icons' to={`/editArticle/${article.shortid}`}>
                        create
                    </Link>
                </ActionButtonHolder>
            </ArticleRow>
        ))
        return ArticleMap
    } else {
        return 'loading articles...'
    }
}

class ArticleCategories extends Component {

    componentDidMount = async() => {
        const articles = await axios.get(`${BASE_URL}/api/articles`)
        console.log(this.props)
        this.props.UPDATE_ARTICLES(articles)
    }

    render(){
        return(
            <div>
                <ArticleHolder>
                    <ArticleHolderHeading>
                        <ArticleHolderHeadingText>Article Title</ArticleHolderHeadingText>
                        <ArticleHolderHeadingText>Cateogory</ArticleHolderHeadingText>
                        <ArticleHolderHeadingText>ID</ArticleHolderHeadingText>
                        <ArticleHolderHeadingText>Actions</ArticleHolderHeadingText>
                    </ArticleHolderHeading>
                    {/* {this.props ? this.props.articles.map( article => (<p>{article.title}</p>)) : 'nothing' } */}
                    <ArticleLoader {...this.props}/>
                </ArticleHolder>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    UPDATE_ARTICLES: httpPayload => dispatch({type:'UPDATE_ARTICLES', payload: {articles: httpPayload.data}}),
    DELETE_ARTICLE: articleid => dispatch({type:'DELETE_ARTICLE', payload: articleid}),
    GET_STATE: () => dispatch({type:'GET_STATE'})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCategories)