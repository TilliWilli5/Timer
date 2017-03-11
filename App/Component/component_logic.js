"use strict";
module.exports = (function(){
    let Prim = require("primaryjs");
    /**
     *  Class representing a stopwatch.
     * @extends Emitter
    */
    class Timer extends Prim.Emitter
    {
        /**
         * Create timer.
         * @param {*} pCore
         */
        constructor(pCore){
            super(pCore);
            this.stime = Date.now();
            this.ptime = this.stime;
            this.etime = this.stime;
            this._elapsed = 0;
            this._idle = 0;
            this.state = "stop";//run stop pause
        }
        /** Reset instance to default state */
        Reset(){
            this.stime = Date.now();
            this.ptime = this.stime;
            this.etime = this.stime;
            this._elapsed = 0;
            this._idle = 0;
            this.state = "stop";
            return this;
        }
        /** Start counting */
        Start(){
            switch(this.state)
            {
                case "stop":
                    this.Restart();
                    break;
                case "pause":
                    this._idle += Date.now() - this.ptime;
                    this.state = "run";
                    break;
                case "run":
                    break;
            }
            return this;
        }
        /** Pause counting */
        Pause(){
            if(this.state === "run")
            {
                this.ptime = Date.now();
                this._elapsed = this.ptime - this.stime - this._idle;
                this.state = "pause";
            }
            return this;
        }
        /** Resume counting */
        Resume(){
            if(this.state === "pause")
            {
                this._idle += Date.now() - this.ptime;
                this.state = "run";
            }
            return this;
        }
        /** Stop timer - reset all except elapsed and idle time */
        Stop(){
            if(this.state !== "stop")
            {
                this.etime = Date.now();
                if(this.state === "pause")
                    this._idle += this.etime - this.ptime;
                this._elapsed = this.etime - this.stime - this._idle;
                // this._idle = 0;
                this.state = "stop";
                this.Emit("stop");
            }
            return this;
        }
        /** Reset and start counting again immediately */
        Restart(){
            this.Reset();
            this.state = "run";
            return this;
        }
        /** Show elapsed time since Start minus idle time */
        get elapsed(){
            switch(this.state)
            {
                case "stop": case "pause": return this._elapsed;break;
                case "run": return Date.now() - this.stime - this._idle;break;
            }
            throw new Error(`Unregistered state of timer: ${this.id}`);
        }
        /** Idle time - when timer was being on pause */
        get idle(){
            switch(this.state)
            {
                case "stop": case "run": return this._idle;
                case "pause": return this._idle + Date.now() - this.ptime;
            }
            throw new Error(`Unregistered state of timer: ${this.id}`);
        }
    }
    return Timer;
})();