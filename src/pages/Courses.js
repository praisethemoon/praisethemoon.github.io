/*
 * Home page, where magic happens
 * 
 */

import React, { Component } from 'react'
import { Alert, Card } from 'antd'

export default class Courses extends Component {
    render() {
        const gridStyle = {
            width: '100%'
        }

        return (
            <div>
                <Card title="C Engineer" bordered={false} style={{ width: "100%", backgroundColor: "#efefef" }}>
                    <Card.Grid style={gridStyle}>
                        <center><img src="/assets/course_logo_rect.png" style={{ maxHeight: "300px" }} /></center>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Alert
                            style={{ paddingTop: "5px" }}
                            message="This course is still work in progress"
                            type="warning" />
                    </Card.Grid>
                        
                    <Card.Grid style={{width: "100%", background: "#fff"}}>
                        <p>C engineer is a C Programming course for those who would like to device deep into the field of computer science and discover the beauty of the C programming. The course is not just another C syntax and pointers tutorial. While it does cover that, it is not the primary goal. The course teaches students how to think in C and build complex data types according to the problem being faced. The course will give students an overview over the multiple fields in computer science and help them decice where will they want to specialize in. The fields covered in the course are the following:</p>
                            <pre><code>Operating systems</code></pre>
                            <pre><code>Compilers</code></pre>
                            <pre><code>Interpreters & virtual machines</code></pre>
                            <pre><code>C Programming language</code></pre>
                            <pre><code>Data structures</code></pre>
                            <pre><code>Graphs and optimizations</code></pre>
                            <pre><code>Search engines</code></pre>
                            <pre><code>Game programming</code></pre>
                            <pre><code>Machine learning</code></pre>
                            <pre><code>Image processing and computer vision</code></pre>
                            <pre><code>GPGPU</code></pre>
                            <pre><code>Web servers</code></pre>
                            <pre><code>Multithreading</code></pre>
                            <pre><code>Sockets and networking</code></pre>
                            <pre><code>Async programming</code></pre>
                        <p>If you have any inquiry, feel free to tweet me at <a href="https://twitter.com/alonnesora">@alonnesora</a>.</p>
                    </Card.Grid>

                </Card>
            </div>

        )
    }
}