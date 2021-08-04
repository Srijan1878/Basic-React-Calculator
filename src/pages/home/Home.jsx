import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="homeOuterContainer">
            <h4 className="homePageTitle">Home</h4>
            <div className="cardsContainer">
                <Link to="/add" style={{textDecoration:"none"}}>            
                <div className="addCard" id="card">
                    <h4 className="cardTitle">ADD</h4>
                    <div className="customAddLogoContainer">
                    <div className="firstLine"></div>
                    <div className="secondLine"></div>
                    </div>
                </div>
                </Link>
                <Link to="/subtract" style={{textDecoration:"none"}}>
                <div className="subtractCard" id="card">
                <h4 className="cardTitle">SUBTRACT</h4>
                 <div className="customSubtractLogoContainer">
                     <div className="subtractLine">

                     </div>
                 </div>
                </div>
                </Link>
                <Link to="/multiply" style={{textDecoration:"none"}}>
                <div className="multiplyCard" id="card">
                <h4 className="cardTitle">MULTIPLY</h4>
                <div className="customMultiplyLogoContainer">
                    <div className="multiplyFirstLine">

                    </div>
                    <div className="multiplySecondLine">
                        
                    </div>
                </div>
                </div>
                </Link>
                <Link to="/subtract" style={{textDecoration:"none"}}>
                <div className="divideCard" id="card">                    
                <h4 className="cardTitle">DIVIDE</h4>
                <div className="customDivisionLogoMaker">
                    <div className="firstDot"></div>
                    <div className="divisionFirstLine">

                    </div>
                    <div className="secondDot"></div>
                </div>
                </div>  
                </Link>              
            </div>
        </div>
    )
}
