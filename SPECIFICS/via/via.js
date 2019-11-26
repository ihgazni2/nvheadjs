const easyengine = require('../../ENGINES/easyengine')

//via              string
//viaOneStr        string
//viaOneDict       dict
//viaList          list-of-viaOneDict



function exzamples() {
    let s = `Via        [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
viaOneStr  HTTP/1.1 GWA
viaStr     1.0 fred, 1.1 p.example.net
viaOneDict {"protocolName":"HTTP","protocolVersion":"1.1","host":"GWA"}
viaList    [{"protocolVersion":"1.0","host":"fred"},{"protocolVersion":"1.1","host":"p.example.net"}]
`
    console.log(s)
}



function isViaProtocolVersion(s) {
    /*
        isViaProtocolVersion(1.1)
        true
    */
    let regex = /^[0-9]+\.[0-9]+$/
    return(regex.test(s))
}

function viaOneStr2Dict(s) {
    /*
        s = 'HTTP/1.1 GWA'
        viaOneStr2Dict(s)
        { protocolName: 'HTTP', protocolVersion: '1.1', host: 'GWA' }
    */
    d = {}
    let [prot,hp] = s.split(/[ ]+/)
    ////
    prot = prot.split(/[ ]*\/[ ]*/)
    if(prot.length == 2) {
        d.protocolName = prot[0]
        d.protocolVersion = prot[1]
    }  else {
        d.protocolVersion = prot[0]
    }
    ////
    hp = hp.split(/[ ]*:[ ]*/)
    if(hp.length == 2) {
        d.host = hp[0]
        d.port = hp[1]
    }  else {
        d.host = hp[0]
    }
    ////
    return(d)
}


function viaOneDict2Str(d) {
    /*
        d = { protocolName: 'HTTP', protocolVersion: 1.1, host: 'GWA' }
        viaOneDict2Str(d)
        'HTTP/1.1 GWA'
    */
    let kl = ["protocolName","protocolVersion","host","port"]
    let spl = ["/"," ",":"]
    return(easyengine.oneDict2Str(d,kl,spl))
}

function viaStr2List(s) {
    /*
        s = "1.0 fred, 1.1 p.example.net"
        viaStr2List(s)
        [ { protocolVersion:  '1.0' , host: 'fred' },
          { protocolVersion:  '1.1' , host: 'p.example.net' } ]
    */
    let l = s.split(/[ ]*,[ ]*/)
    l = l.map(viaOneStr2Dict)
    return(l)
}

function viaList2Str(l) {
    /*
        > l
        [ { protocolVersion: '1.0' , host: 'fred' },
          { protocolVersion: '1.1' , host: 'p.example.net' } ]
        > viaList2Str(l)
        '1.0/fred, 1.1/p.example.net'
        >
    */
    l = l.map(viaOneDict2Str)
    return(l.join(", "))
}

function input2Str(value) {
    /*
        var value = '1.0/fred, 1.1/p.example.net'
        input2Str(value)
        //'1.0/fred, 1.1/p.example.net'
        var value = [ 
          { protocolVersion: '1.0' , host: 'fred' },
          { protocolVersion: '1.1' , host: 'p.example.net' } 
        ]
        input2Str(value)
        //'1.0/fred, 1.1/p.example.net'
    */
    value = easyengine.input2Str(value,viaOneDict2Str,viaList2Str)
    return(value)
}


class One {
    constructor () {
        this.protocolName = undefined
        this.protocolVersion = undefined
        this.host = undefined
        this.port = undefined
    }
}

class Via extends Array {
    addNew () {
        let d = new One()
        this.push(d)
    }
}


function helpOne() {
    let s = `{
        protocolName : undefined,
        protocolVersion : undefined,
        host : undefined,
        port : undefined
    }`
    console.log(s)
}


module.exports = {
    helpOne : helpOne,
    exzamples : exzamples,
    isViaProtocolVersion : isViaProtocolVersion,
    viaOneStr2Dict : viaOneStr2Dict,
    viaOneDict2Str : viaOneDict2Str,
    viaStr2List : viaStr2List,
    viaList2Str : viaList2Str,
    input2Str : input2Str,
    One:One,
    Via:Via
}
