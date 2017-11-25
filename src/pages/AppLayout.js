/*
 * Application layout component
 * Contains main UI components
 */

import React, { Component } from 'react'
import {Route} from 'react-router'
import {Switch, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

// importing ui pages
import Home from './Home'
import MarkdownPage from '../components/MarkdownPage'

const { Header, Content, Footer } = Layout;

function importMD(pageName){
	return require(`../static/mdpages/${pageName}.md`)
}

export default class AppLayout extends Component {
	constructor(props){
		super(props)

		this.state= { activeItem: -1 }
	}

	render() {
		return (
			<Layout>
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={[]}
					style={{ lineHeight: '64px', paddingLeft: "50px", paddingRight: "50px" }}
				>
					<Menu.Item key="1"><Link to="/"><Icon type="home" /> Home</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/blog"><Icon type="notification" /> Blog</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/projects"><Icon type="rocket" /> Projects</Link></Menu.Item>
					<Menu.Item key="4"><Link to="/pubs"><Icon type="solution" /> Publications & articles</Link></Menu.Item>
					<Menu.Item key="5"><Link to="/portfolio"><Icon type="idcard" /> Portfolio</Link></Menu.Item>
					<Menu.Item key="6"><Link to="/contact"><Icon type="message" /> Contact</Link></Menu.Item>
				</Menu>
				<Content style={{ padding: '0 50px', marginTop: 64 }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
						<Switch>
							<Route exact path="/" render={() => <MarkdownPage file={importMD('home')}/>}/>
						</Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Soulaymen CHOURI ©2017 Powered by Ant UED
				</Footer>
			</Layout>
		)
	}
}