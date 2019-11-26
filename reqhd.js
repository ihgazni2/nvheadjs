const REQHD_DTB = require("./CONSTS/http-headers-mdn-req.dtb.json")
const REQHD_KL = REQHD_DTB.map((r)=>r.k)
const REQHD_VL = REQHD_DTB.map((r)=>r.v)
const easyengine = require("./ENGINES/easyengine")
const viaEngine = require("./SPECIFICS/via/via")
const Via = viaEngine.Via

class Head {
    constructor () {
        Object.defineProperty(this, "_slist", {
           value: [],
           writable: true,
           configurable:false,
           enumerable:false
        })
    }
    ////
    get via() {
        return(easyengine.getEngine("via",this,REQHD_KL,REQHD_VL))
    }
    set via(value) {
        value = viaEngine.input2Str(value)
        easyengine.setEngine("via",value,this,REQHD_KL,REQHD_VL)
    }
    viaHelp() {
        let s=`/*
            viaEngine.exzamples()
            viaEngine.help()
            //
            var hd = new Head()
            hd.via = [
                {"protocolVersion":"1.0","host":"fred"},
                {"protocolVersion":"1.1","host":"p.example.net"}
            ]
            hd.via
            >[ '1.0/fred, 1.1/p.example.net' ]
            //
            var hd = new Head()
            hd.via = '1.0/fred, 1.1/p.example.net'
            hd.via
            >[ '1.0/fred, 1.1/p.example.net' ]
            //
            
        */`
        console.log(s)
    }
    ////
}

