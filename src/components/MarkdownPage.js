/*
 * Mark down page, where magic happens
 * 
 */

import React, { Component } from 'react'
import marked from 'marked'

export default class MarkdownPage extends Component {
    constructor(props) {
        super(props)
        this.state = { markdown: "Preparing for awesomeness" }
        this.loadMdFile = this.loadMdFile.bind(this)
    }

    loadMdFile(filepath) {

        fetch(filepath)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }

    componentWillMount() {
        const filepath = this.props.file
        this.loadMdFile(filepath)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.file && (nextProps.file != this.props.file)) {
            this.loadMdFile(nextProps.file)
        }
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.markdown }}></div>
        )
    }
}