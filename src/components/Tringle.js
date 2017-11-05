import React, {Component} from 'react';

export default class Tringle extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let canvas = document.querySelector('.canvas');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#FFEA87";
        ctx.moveTo(this.props.ax, this.props.ay);
        ctx.lineTo(this.props.bx, this.props.by);
        ctx.lineTo(this.props.cx, this.props.cy);
        ctx.fill();
    }

    render () {
        return(
                <canvas className="canvas" width="900" height="600"></canvas>
        )
    }
}