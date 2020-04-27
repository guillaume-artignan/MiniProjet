import React, { Component } from 'react';
import './toggle.scss';

class Toggle extends Component {

    constructor(props){
        super(props);
        this.state = {checked : false};
    }

    cs(prop,val){
        var obj = {};
        obj[prop] = val;
        this.setState(obj);
    }

    tick(){
        this.cs("checked",!this.state.checked);
        /*if (this.state.checked) this.cs("checked",false)
        else this.cs("checked",true)*/
    }

    render(){
        var position = "bouton left";
        if (this.state.checked){
             position = "bouton right"   
        }

         return <div onClick={()=>this.tick()} className="Toggle">
             <div className={position}></div>
         </div>;
    }
}

export default Toggle;
