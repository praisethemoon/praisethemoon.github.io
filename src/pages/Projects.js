/*
 * Home page, where magic happens
 * 
 */

import React, { Component } from 'react'
import { 
    Alert, 
    Card,
    Row,
    Col,
    Button,
    Icon
} from 'antd'
import {Link} from 'react-router-dom'
export default class Projects extends Component {
    render() {
        const gridStyle = {
            width: '100%'
        }

        
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={18} type="flex" justify="space-around" align="middle">
                    <Col span={8} a>
                        <Card title="Mana Programming Language" bordered={false}>
                            <Card.Grid style={gridStyle}>
                                <center><img src="/assets/mana.png" style={{ maxHeight: "300px" }} /></center>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <p>Mana is a general purpose programming language that boosts productivity and code reuse. It aims to be clean, expressive and full-featured.</p>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Button type="primary" style={{width: "100%"}}><a href="https://github.com/manaproject" target="_blank"><Icon type="github" /> View Project</a></Button>
                            </Card.Grid>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Ryu Virtual Machine" bordered={false}>
                            <Card.Grid style={gridStyle}>
                                <center><img src="/assets/japanese-dragon.png" style={{ maxHeight: "300px" }} /></center>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <p>Ryu is an experimental virtual machine, developed to teach my self how does VM and JITs work</p>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Button type="primary" style={{width: "100%"}}><a href="https://github.com/unlimitedsoftwareworks/ryu" target="_blank"><Icon type="github" /> View Project</a></Button>
                            </Card.Grid>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Whale Core" bordered={false}>
                            <Card.Grid style={gridStyle}>
                                <center><img src="/assets/whale_logo.png" style={{ width: "100%" }} /></center>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <p>Whale is a machine learning library developed entirely in Lua. It currently supports basic ML algorithms such linear and multi-variate logistic regression.</p>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Button type="primary" style={{width: "100%"}}><a href="https://github.com/praisethemoon/whale-core" target="_blank"><Icon type="github" /> View Project</a></Button>
                            </Card.Grid>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Goey" bordered={false}>
                            <Card.Grid style={gridStyle}>
                                <center><img src="/assets/igo_logo_s.png" style={{ maxHeight: "300px" }} /></center>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <p>Geoy is a PVP Go game, built with LOVE game engine, it features a game client and server.</p>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Button type="primary" style={{width: "100%"}}><a href="https://github.com/praisethemoon/goey" target="_blank"><Icon type="github" /> View Project</a></Button>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}