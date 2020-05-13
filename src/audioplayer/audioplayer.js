import React,{ Component } from "react";
import './audioplayer.scss';
import pokemon from './sounds/pokemon.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faStop, faUndo as faLoop, faLongArrowAltRight as faNoLoop, faVolumeUp, faVolumeDown, faVolumeMute} from '@fortawesome/free-solid-svg-icons';

class AudioPlayer extends Component{

    constructor(){
        super();
        this.refAudio = React.createRef();
        this.state = {};
        this.state.playIcon = faPlay;
        this.state.loopIcon = faNoLoop;
    }

    cs(key,value){
        var obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    play(){
        if (this.refAudio.current.paused){
            this.refAudio.current.play();
            this.cs("playIcon",faPlay);

            this.interval = setInterval(()=>this.setState({}), 500);
        }else {
            this.refAudio.current.pause();
            this.cs("playIcon",faPause);
            clearInterval(this.interval);
        }
        
    }


    stop(){
        this.refAudio.current.pause();
        this.refAudio.current.currentTime = 0;
        this.cs("playIcon",faPlay);
        clearInterval(this.interval);
    }

    loop(){
        this.refAudio.current.loop = !this.refAudio.current.loop;
        if (this.refAudio.current.loop)
        this.cs("loopIcon",faLoop);
        else this.cs("loopIcon",faNoLoop);
    }

    format(sec){
        return ""+ Math.floor(sec/60)+" m "+ (Math.floor(sec) % 60)+" s ";
    }

    wheel(event){
        //e.preventDefault();
        if(event.deltaY<0){
            this.refAudio.current.volume = Math.min(this.refAudio.current.volume+0.01,1); 
        }else {
            this.refAudio.current.volume = Math.max(this.refAudio.current.volume-0.01,0);
        }
    }

    render(){

        var audio = this.refAudio.current;
        var time = null;
        var volume = null;
        if (audio){
            time = <div class="time">{this.format(this.refAudio.current.currentTime)}</div>;

            volume = <div class="volume" onWheel={(event)=>this.wheel(event)}>
                        <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
                        <div>{Math.floor(audio.volume*100)} %</div>
                    </div>
        }



        return <div className="AudioPlayer">
            <audio ref={this.refAudio}>
                <source src={pokemon}></source>
            </audio>
            <button onClick={()=>this.play()}>
                <FontAwesomeIcon icon={this.state.playIcon}></FontAwesomeIcon>
            </button>
            <button onClick={()=>this.stop()}>
                <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
            </button>
            <button onClick={()=>this.loop()}>
                <FontAwesomeIcon icon={this.state.loopIcon}></FontAwesomeIcon>
            </button>
            {time}
            {volume}
            
        </div>;
    }
}

export default AudioPlayer; 