/*
 * Mark down page, where magic happens
 * 
 */

import React, { Component } from 'react'
import marked from 'marked'

export default class MarkdownPage extends Component {
    constructor(props){
        super(props)
        this.state = {markdown: "Preparing for awesomeness"}
    }

    componentWillMount() {
        const readmePath = this.props.file
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }

    render(){
        return(
            <div dangerouslySetInnerHTML={{__html: this.state.markdown}}></div>
        )
    }
}