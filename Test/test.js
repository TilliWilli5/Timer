// let component = require("../App/index.js");
let description = {
    name: "theComponent"
}
let assert = require("assert");
let ISIO = require("isio");
let is = new ISIO();
is.null.c;
describe(`<${description.name}>`, ()=>{
    describe(`${is.i.z.z.c} [General]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** Accessability */
        describe(`${is.i.o.c} (Accessability)`, ()=>{
            it(`${is.i.c} CertainFeature`, ()=>{});
        });
        /** Input/Output */
        describe(`${is.i.o.c} (Input/Output)`, ()=>{
            it(`${is.i.c} CertainFeature`, ()=>{});
        });
    });
    describe(`${is.i.z.z.c} [Logic]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** LogicSpecific */
        describe(`${is.i.o.c} (LogicSpecific)`, ()=>{
            it(`${is.i.c} CertainFeature`, ()=>{});
        });
    });
});