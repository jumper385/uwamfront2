import React from 'react'
import axios from 'axios'

const BASE_URL = process.env.PORT || 'localhost:8080'

class CreateArticle extends React.Component{

    constructor(props){
        super(props)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onFormSubmit = async e => {
        e.preventDefault()
        console.log( this.state ? this.state.articlid || 'creating new article' : 'creating new article')
        if(this.state.articleId){
            console.log(this.state)
            let postedData = await axios.put(`http://${BASE_URL}/api/articles/${this.state.articlId}`, this.state)
        } else {
            let postedData = await axios.post(`http://${BASE_URL}/api/articles`, this.state)
            this.setState({articleId: postedData.data.shortid})
        }
    }

    render(){
        return(
            <div>
                <h1>Create an Article</h1>
                <p>{this.state ? this.state.articleId || 'no article id' : 'start making an article first'}</p>
                <form onSubmit={this.onFormSubmit}>
                    <p>Article Title</p>
                    <input name='title' onChange={this.onInputChange} type='text'/>
                    <p>Article Category</p>
                    <input name='category' onChange={this.onInputChange} type='text'/>
                    <p>Article</p>
                    <textarea name='article' onChange={this.onInputChange} />
                    <br />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default CreateArticle