"use strict";
import React from "react";
export default class TimerAv extends React.Component
{
    constructor(pProps){
        super(pProps);
        this.state = {elapsed: pProps.timer.elapsed, idle: pProps.timer.idle};
        this.Tick = this.Tick.bind(this);
        this.timer = setInterval(this.Tick, 100);
    }
    Tick(){
        this.setState({elapsed: this.props.timer.elapsed, idle: this.props.timer.idle});
    }
    render(){
        let mme = new Date(this.state.elapsed).getMinutes();
        let sse = new Date(this.state.elapsed).getSeconds();
        let mse = new Date(this.state.elapsed).getMilliseconds();

        let mmi = new Date(this.state.idle).getMinutes();
        let ssi = new Date(this.state.idle).getSeconds();
        let msi = new Date(this.state.idle).getMilliseconds();
        return (
            <div className="timer">
                <TimerControllPanelAv actions={
                    {
                        Start: this.props.timer.Delegate("Start"),
                        Pause: this.props.timer.Delegate("Pause"),
                        Resume: this.props.timer.Delegate("Resume"),
                        Stop: this.props.timer.Delegate("Stop")
                    }
                }/>
                <TimerDisplayAv elapsed={this.state.elapsed} idle={this.state.idle}/>
            </div>
        ); 
    }
}

class TimerDisplayAv extends React.Component
{
    render(){
        let elapsed = this.props.elapsed;
        let idle = this.props.idle;

        let mme = new Date(elapsed).getMinutes();
        let sse = new Date(elapsed).getSeconds();
        let mse = new Date(elapsed).getMilliseconds();

        let mmi = new Date(idle).getMinutes();
        let ssi = new Date(idle).getSeconds();
        let msi = new Date(idle).getMilliseconds();

        return (
            <span className="timer-display">{`${mme}:${sse}:${mse} | ${mmi}:${ssi}:${msi}`}</span>
        );
    }
}

class TimerControllPanelAv extends React.Component
{
    render(){
        return (
            <span className="timer-controll-panel">
                <TimerButtonAv label={"Start"} action={this.props.actions.Start} />
                <TimerPauseResumeButtonAv actions={{Pause: this.props.actions.Pause, Resume: this.props.actions.Resume}} />
                <TimerButtonAv label={"Stop"} action={this.props.actions.Stop} />
            </span>
        );
    }
}
class TimerButtonAv extends React.Component
{
    render(){
        return <button onClick={this.props.action}>{this.props.label}</button>
    }
}

class TimerPauseResumeButtonAv extends React.Component
{
    constructor(pProps){
        super(pProps);
        this.state = {isPaused:false};
        this.Pause = this.Pause.bind(this);
        this.Resume = this.Resume.bind(this);
    }
    Pause(){
        this.setState({isPaused:true});
        this.props.actions.Pause();
    }
    Resume(){
        this.setState({isPaused:false});
        this.props.actions.Resume();
    }
    render(){
        if(!this.state.isPaused)
            return <button onClick={this.Pause}>Pause</button>;
        else
            return <button onClick={this.Resume}>Resume</button>;
    }
}