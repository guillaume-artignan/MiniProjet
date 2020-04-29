import React, { Component } from 'react';
import './pendu.scss';

var images = require.context('./images', true);
class Pendu extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.state.toGuess = this.props.mot.toUpperCase().split("");
        var results = [];
        for (var v in this.state.toGuess){
            results.push(false)
        }
        this.state.results = results;
        this.state.error = 1;
        this.state.win = false;
        this.saisieRef = React.createRef();
    }

    cs(prop,val){
        var obj = {};
        obj[prop] = val;
        this.setState(obj);
    }

    proposition(){
        var val = this.saisieRef.current.value;
        if (val){
            var lettre1 = val.charAt(0);
            var cpt = 0;
            for (var i = 0;i<this.state.toGuess.length;i++){
                if (this.state.toGuess[i]==lettre1){
                    cpt++;
                    this.state.results[i] = true;
                    this.setState({"results":this.state.results});
                }
            }  
            
            if (cpt==0)
                this.cs("error",this.state.error+1);

            if (this.aGagne()){
                
                this.cs("win",true);
            }
        }
    }

    aGagne(){
        for (var i = 0;i<this.state.results.length;i++){
            if (!this.state.results[i]) return false;
        }
        return true;
    }
   

    render(){

        var saisie = <div className="saisie">
                        <input ref={this.saisieRef}></input>
                        <button onClick={()=>this.proposition()}>ok</button>
                    </div>;

        if (this.state.error==7)
            saisie = <div className="saisie perdu">Perdu</div>;
        else if (this.state.win)
            saisie = <div className="saisie gagne">Gagné</div>;

         return <div className="Pendu">
             <div className="mot">
            {
                this.state.toGuess.map((item,i)=> 
                        <div key={i} className="case">
                         {this.state.results[i] ? item : "_"}
                        </div>)
            }
            </div>
            <img src={images("./"+this.state.error+".png")}></img>

            {saisie}

         </div>;
    }
}

export default Pendu;
