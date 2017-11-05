import React from 'react'

export default ({data})=>{
    //console.log('data from data component', data)
    let {angA,angB,angC,area,abEdge,bcEdge,caEdge} = data 
    return(
        <div className='data-main-container'>
            <div>
                <p>CAB Angle is {angA.toFixed(2)}°</p>
                <p>ABC Angle is {angB.toFixed(2)}°</p>
                <p>BCA Angle is {angC.toFixed(2)}°</p>
            </div>
            <div>
                <p>AB Length is {abEdge.toFixed(2)} cm</p>
                <p>BC Length is {bcEdge.toFixed(2)} cm</p>
                <p>CA Length is {caEdge.toFixed(2)} cm</p>
            </div>
            <p>The area of the triangle is {area.toFixed(2)} square cm</p>
        </div>
    )
}