import React,{ Component } from "react";
import cross from "./images/cross.png";
import circle from "./images/circle.png";
import './morpion.scss';



class Morpion extends Component{

    constructor(){
        super();
        this.state = {};
        this.state.tour = "O";
        this.state.jeu = [["R","R","R"],["R","R","R"],["R","R","R"]];
        this.state.winner = null;
        this.state.count = 0;
    }

    egal(i1,j1,i2,j2,i3,j3,joueur){
        return  this.state.jeu[i1][j1]==this.state.jeu[i2][j2]
                &&  this.state.jeu[i2][j2]==this.state.jeu[i3][j3]
                &&  this.state.jeu[i1][j1]==joueur;
    }

    estGagnant(joueur){
        return    this.egal(0,0,0,1,0,2,joueur)
               || this.egal(1,0,1,1,1,2,joueur)
               || this.egal(2,0,2,1,2,2,joueur)
               || this.egal(0,0,1,0,2,0,joueur)
               || this.egal(0,1,1,1,2,1,joueur)
               || this.egal(0,2,1,2,2,2,joueur)
               || this.egal(0,0,1,1,2,2,joueur)
               || this.egal(2,0,1,1,0,2,joueur);

    }

    tick(i,j){
        this.state.jeu[i][j]=this.state.tour;

        if (this.estGagnant(this.state.tour)){
            this.setState({"winner":this.state.tour});
        }else{

            if (this.state.tour=="O")
                this.setState({"tour":"X"});
            else this.setState({"tour":"O"});

        }
        this.setState({count : this.state.count+1});
        this.setState({jeu : this.state.jeu});
    }

    render(){
        var popup = null;
        if (this.state.winner){
            popup = <div className="popup">
                    {
                        this.state.tour=="O"?
                            <img src={circle} />:<img src={cross} />
                    } 
                    Gagnant</div>;
        }
        else if (this.state.count ==9){
            popup = <div className="popup"> 
                    Match nul
                    </div>;
        }

        return <div className="Morpion">
                {popup}
                {
                    this.state.jeu.map((ligne,i)=>
                        ligne.map((place,j)=> {
                                var classe = "Case "+place;
                                
                                if (place=="R")
                                return <div onClick={()=>this.tick(i,j)} className={classe}></div>;
                                else 
                                return <div className={classe}></div>;
                            }
                        )
                    )
                }
                
            </div>;
        
    }
}

export default Morpion;