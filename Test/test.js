"use strict";
/**
 * Configuration
 */
let description = {
    name: "Timer"
}
let Component = require("../App/Component/component_logic.js");
let assert = require("assert");
let ISIO = require("isio");
let is = new ISIO();
is.null.c;
/**
 * Testing - your code below
 */
let Timer = Component;
// let timer = null;
// let stateValidator = require(`C:\\xampp\\htdocs\\StateValidator\\index.js`);
// const states = {
//     created:{
//         elapsed:0,
//         idle:0,
//         state:"stop"
//     },
//     start:{
//         idle:0,
//         state:"run"
//     },
//     pause:{
//         state:"pause"
//     },
//     resume:{
//         state:"run"
//     },
//     stop:{
//         state:"stop"
//     },
// };
function WaitTick(pTick=1){
    let stime = Date.now();
    for(let i=0; i<Number.MAX_VALUE; ++i)
        if((Date.now()-stime)>=pTick)
            return;
}
describe(`<${description.name}>`, ()=>{
    describe(`${is.i.z.z.c} [General]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** Accessability */
        describe(`${is.i.o.c} (Accessability)`, ()=>{
            // it(`${is.i.c} CertainFeature`, ()=>{});
            it(`${is.i.c} New Instance`, ()=>{
                let timer = new Timer();
                let theTime = timer.stime;
                assert.equal(timer.elapsed, 0);
                assert.equal(timer.idle, 0);
                assert.equal(timer.state, "stop");
                // stateValidator.ValidateState(timer, states.created);
                assert.equal(timer.stime, theTime);
                assert.equal(timer.ptime, theTime);
                assert.equal(timer.etime, theTime);
            });
        });
        
    });
    describe(`${is.i.z.z.c} [DomainSpecificLogic]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** (Action-State) group of test mean: when you invoke some method -> state of the object will change */
        describe(`${is.i.o.c} (Action-State)`, ()=>{
            // let createTime;
            // before(()=>{
            //     timer = new Timer();
            //     createTime = timer.stime;
            //     WaitTick();
            // });
            // it(`${is.i.c} CertainFeature`, ()=>{});
            it(`${is.i.c} Initial State`, ()=>{
                let timer = new Timer();
                let createTime = timer.stime;
                WaitTick();
                assert.equal(timer.elapsed, 0);
                assert.equal(timer.idle, 0);
                assert.equal(timer.state, "stop");
                assert.equal(timer.stime, createTime);
                assert.equal(timer.ptime, createTime);
                assert.equal(timer.etime, createTime);
            });
            it(`${is.i.c} Start`, ()=>{
                let timer = new Timer();
                timer.Start();
                WaitTick();
                assert.equal(timer.state, "run");
                assert.notEqual(timer.elapsed, 0);
                assert.equal(timer.idle, 0);
            });
            it(`${is.i.c} Start->Pause`, ()=>{
                let timer = new Timer();
                timer.Start();
                WaitTick();
                timer.Pause();
                let t1 = timer.elapsed;
                WaitTick();
                assert.equal(timer.state, "pause");
                assert.equal(timer.elapsed - t1, 0);
                assert.notEqual(timer.idle, 0);
            });
            it(`${is.i.c} Start->Pause->Resume`, ()=>{
                let timer = new Timer();
                timer.Start().Pause();
                let t1 = timer.elapsed;
                timer.Resume();
                let t2 = timer.idle;
                WaitTick();
                assert.equal(timer.state, "run");
                assert.equal(timer.idle, t2);
                assert.notEqual(timer.elapsed - t1, 0);
            });
            it(`${is.i.c} Start->Pause->Resume->Stop`, ()=>{
                let timer = new Timer();
                timer.Start().Pause();
                WaitTick();
                timer.Resume()
                let t1 = timer.elapsed;
                let t2 = timer.idle;
                WaitTick();
                timer.Stop();
                let t3 = timer.elapsed;
                let t4 = timer.idle;
                WaitTick();
                assert.equal(timer.state, "stop");
                assert.equal(timer.elapsed, t3);
                assert.notEqual(timer.elapsed, t1);
                assert.equal(timer.idle, t4);
                assert.equal(timer.idle, t2);
                assert.notEqual(timer.elapsed, 0, "elapsed");
                assert.notEqual(timer.idle, 0, "idle");
            });
            it(`${is.i.c} Stop`, ()=>{
                let timer = new Timer();
                WaitTick();
                timer.Stop();
                WaitTick();
                assert.equal(timer.state, "stop");
                assert.equal(timer.elapsed, 0, "elapsed");
                assert.equal(timer.idle, 0, "idle");
                assert.equal(timer.stime, timer.etime);
            });
        });
        /** 
         * (Action-Reaction) group of test mean: when you invoke some method -> some another method or event will appear
         * Emitter/Events test
         */
        describe(`${is.i.o.c} (Action-Reaction)`, ()=>{
            // it(`${is.i.c} CertainFeature`, ()=>{});
        });
        /** LogicSpecific */
        describe(`${is.i.o.c} (LogicSpecific)`, ()=>{
            // it(`${is.i.c} CertainFeature`, ()=>{});
        });
    });
});