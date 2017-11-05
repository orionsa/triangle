import React ,{Component} from 'react'

export default class Points extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='points-container'>
                <div className='point-a' className='point'>
                    <p>Point A</p>
                    <input className='a-x' />
                    <input className='a-y' />
                </div>
                <div className='point-b' className='point'>
                    <p>Point B</p>
                    <input className='b-x' />
                    <input className='b-y' />
                </div>
                <div className='point-c' className='point'>
                    <p>Point C</p>
                    <input className='c-x' />
                    <input className='c-y' />
                </div>
                <button className='button' onClick={this.props.draw}> Draw </button>
            </div>
        )
    }
}