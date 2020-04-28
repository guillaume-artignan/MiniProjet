import React, { Component } from 'react';
import './calculatrice.scss';

class Calculatrice extends Component {

   

    constructor(props){
        super(props);
        this.boutons = [1,2,3,4,5,6,7,8,9,0,["mod","%"],"+","-",["x","*"],"=","C","(",")","."]
        this.state = {"resultat":"0"};
    }

    cs(prop,val){
        var obj = {};
        obj[prop] = val;
        this.setState(obj);
    }

    presser(item){
        var res = this.state.resultat;

        if (res=="Err") res = "0";

        if (typeof(item)=="object") 
            res+=item[1];
        else if (item=="C") 
            res="0";
        else if (item=="="){
            try{
                res=""+eval(res);
            } catch (erreur){
                res="Err";
            }
        }
        else {
            if (typeof(item)=="number" && res=="0")
                res = ""+item;
            else
                res += item;
        }

        this.cs("resultat",res);
            
    }

    
    render(){
         return <div className="Calculatrice">
                <div className="resultat">{this.state.resultat}</div>
                {
                    this.boutons.map((item,i)=> <button onClick={()=>this.presser(item)}>{typeof(item)=="object"? item[0]:item}</button>)
                }
         </div>;
    }
}

export default Calculatrice;
