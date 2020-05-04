import React,{ Component } from "react";
import './flipcard.scss';

var images = require.context('./images', true);
class FlipCard extends Component{
    
    render(){
        var image = images("./"+this.props.back);
        return <div className="FlipCard">
            <div className="inner">
                <div className="front">
                    <img src={image} alt="Image non trouvée"></img>
                </div>
                <div className="back">
                    {
                        this.props.children
                    }
                </div>
            </div>
            
        </div>;
    }
}

export default FlipCard;
