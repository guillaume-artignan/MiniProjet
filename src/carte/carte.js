import React, { Component } from "react";
import './carte.scss'
class Carte extends Component{

    constructor(props){
        super(props);

    }

    ajoutCarte(){
        var nombre = Math.floor(Math.random()*100);
        this.props.ajoutDemande(nombre);
    }

    render(){
        if (this.props.nombre)
        return <div className="Carte">{this.props.nombre}</div>;
        else {
            return <div onClick={()=>this.ajoutCarte()}className="Carte plus">+</div>;
        }
    }
}

export default Carte;