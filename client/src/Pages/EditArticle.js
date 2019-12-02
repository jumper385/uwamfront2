import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const BASE_URL = process.env.PORT ? '/' : 'http://localhost:8080/'

const EditingDashboard = styled.div`
    display:grid
    grid-template-columns:1fr 1fr
`

const StyledMarkdownDisplay = styled(ReactMarkdown)`
    overflow-y:scroll
    height:100vh
    img { 
        width:100%
        height:auto
        max-height:1080px
    }
`

class EditArticle extends React.Component{

    constructor(props){
        super(props)
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount = async () => {
        const { match: {params}} = this.props
        console.log(params)
        let articleData = await axios.get(`/api/articles/${params.id}`)
        console.log(articleData.data)
        this.setState({articleId: articleData.data.shortid})
        this.setState({...articleData.data})
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onFormSubmit = async e => {
        e.preventDefault()
        console.log( this.state ? this.state.articlId || 'creating new article' : 'creating new article')
        if(this.state.articleId){
            console.log(this.state)
            let postedData = await axios.put(`/api/articles/${this.state.articleId}`, this.state)
            console.log(postedData)
        } else {
            let postedData = await axios.post(`/api/articles`, this.state)
            this.setState({articleId: postedData.data.shortid})
        }
    }

    render(){
        return(
            <EditingDashboard>
                <div>
                    <h1>Create an Article</h1>
                    <p>{this.state ? this.state.articleId || 'no article id' : 'start making an article first'}</p>
                    <form onSubmit={this.onFormSubmit}>
                        <p>Article Title</p>
                        <input name='title' onChange={this.onInputChange} value={this.state ? this.state.title || 'waiting for values' : 'ummm...'} type='text'/>
                        <p>Article Category</p>
                        <input name='category' onChange={this.onInputChange} value={this.state ? this.state.category || 'waiting for values' : 'ummm...'} type='text'/>
                        <p>Article</p>
                        <textarea name='article' value={this.state ? this.state.article || 'waiting for values' : 'ummm...'} onChange={this.onInputChange} />
                        <br />
                        <input type='submit'/>
                    </form>
                </div>
                <div>
                    <h1>Preview</h1>
                    <StyledMarkdownDisplay source={this.state ? this.state.article || 'no article' : 'ahhh....'}/>
                </div>
            </EditingDashboard>
        )
    }
}

export default EditArticle