import React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledMarkdownDisplay = styled(ReactMarkdown)`
    img { 
        width:100%
        height:auto
        max-height:1080px
    }
`

const ArticleView = props => {
    props.GET_STATE()
    if (props.articles){
        let articleObj = props.articles.filter(obj => {
            let {shortid} = obj
            return obj.shortid == props.match.params.id
        })[0]
        console.log(articleObj)
        return(
            <div>
                <h1>{articleObj.title}</h1>
                <p>{articleObj.category}</p>
                <StyledMarkdownDisplay source={articleObj.article}/>
            </div>
        )
    } else {
        return 'finding article...'
    }
}

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    GET_STATE: () => dispatch({type:'GET_STATE'})
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)