import React, { Component } from 'react';
import Points from './Points'
import Tringle from './Tringle'
import Data from './Data'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ax: 0,
            ay: 0,
            bx: 0,
            by: 0,
            cx: 0,
            cy: 0,
            abEdge: 0,
            bcEdge: 0,
            caEdge: 0,
            area: 0,
            angA: 0,
            angB: 0,
            angC: 0
        }
        this.draw = this.draw.bind(this)
        this.calcLength = this.calcLength.bind(this)
        this.calcArea = this.calcArea.bind(this)
        this.calcAllAngles = this.calcAllAngles.bind(this)
    }
    draw() {
        this.setState({
            ax: document.querySelector('.a-x').value,
            ay: document.querySelector('.a-y').value,
            bx: document.querySelector('.b-x').value,
            by: document.querySelector('.b-y').value,
            cx: document.querySelector('.c-x').value,
            cy: document.querySelector('.c-y').value
        }, () => {
            //console.log('this.state inside draw function', this.state)
            this.setState({
                abEdge: this.calcLength(this.state.ax, this.state.ay, this.state.bx, this.state.by),
                bcEdge: this.calcLength(this.state.bx, this.state.by, this.state.cx, this.state.cy),
                caEdge: this.calcLength(this.state.cx, this.state.cy, this.state.ax, this.state.ay),
            },
                () => {
                    //console.log('second check', this.state)
                    this.setState({ area: this.calcArea(this.state.abEdge, this.state.bcEdge, this.state.caEdge) }
                        , () => {
                            let ang = this.calcAllAngles(this.state.area, this.state.abEdge, this.state.bcEdge, this.state.caEdge)
                            this.setState({
                                angA: ang[0],
                                angB: ang[1],
                                angC: ang[2]
                            })
                        })
                })
        })
    }
    calcLength(p1x, p1y, p2x, p2y) {
        console.log('check calc length')
        console.log('points is ', p1x, p1y, p2x, p2y)
        let xs = 0;
        let ys = 0;
        let cmLength = 0

        xs = p2x - p1x;
        xs = xs * xs;

        ys = p2y - p1y;
        ys = ys * ys;
        //1 cm	= 37.795275590551 pixel - 1 pixel = 0.02645833 cm
        return Math.sqrt(xs + ys) * 0.02645833
    }

    calcArea(a, b, c) { //accordin to Heron's formula
        let area = 0.25 * (Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c)));
        console.log('area is ', area);
        return area
    }

    calcAllAngles(area, edge1, edge2, edge3) {
        let x = Math.asin(area / (edge1 * edge2 / 2)) * 180 / Math.PI
        //console.log('calcAllAngleX', x)
        let y = Math.asin(area / (edge2 * edge3 / 2)) * 180 / Math.PI
        //console.log('calcAllAngleY', y)
        let z = Math.asin(area / (edge3 * edge1 / 2)) * 180 / Math.PI
        //console.log('calcAllAngleZ', z)
        if (x + y + z < 179) {
            let arr = [edge1, edge2, edge3];
            switch (arr.indexOf(Math.max(...arr))) {
                case 0: console.log('edge1', y, y = 180 - y)
                    break;
                case 1: console.log('edge2', z, z = 180 - z)
                    break;
                case 2: console.log('edge3', x, x = 180 - x)
                    break;
            }
        }
        //console.log('sum of angles', x + y + z)
        return [x, y, z]
    }
    render() {
        return (
            <Router>
                <div className='app'>
                    <ul className='top-bar'>
                        <li className='top-bar__button'><Link to='/'>Triangle</Link></li>
                        <li className='top-bar__button'><Link to='/points'>Points</Link></li>
                    </ul>
                    <Route exact path='/' render={props => 
                        <div className='main-body'>
                            <Data data={this.state} />
                            <Tringle ax={this.state.ax}
                                     ay={this.state.ay}
                                     bx={this.state.bx}
                                     by={this.state.by}
                                     cx={this.state.cx}
                                     cy={this.state.cy}
                            />
                        </div>} />
                    <Route path='/points' render={(props)=> 
                        <Points draw={this.draw}/>      
                } />
                </div>
            </Router>
        )
    }
}
