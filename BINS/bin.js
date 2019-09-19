#!/usr/bin/env node

const elel = require("elist")

let dtb = null
let arg0 = process.argv[2]
let arg1 = process.argv[3]
let word = ""

if(arg1 === undefined) {
    if(arg0[0] !== "-"){
        mode = ""
        word = arg0
    } else {
        mode = arg0
        word = ""
    }
} else {
    mode = arg0
    word = arg1
}



word = word || ""
mode = mode.toLowerCase()


if(mode === "-lmode") {

    console.log("-exact  :  exact match but ignore case")
    console.log("-reqonly  :  only request header")
    console.log("-resonly  :  only response header")
    console.log("-mdnonly  :  only mdn header")

} else if(mode === "-exact") {
    dtb = require("../CONSTS/http-headers.dtb.json")
} else if(mode === "-reqonly") {
    dtb = require("../CONSTS/http-headers-mdn-req.dtb.json")
} else if(mode === "-resonly") {
    dtb = require("../CONSTS/http-headers-mdn-res.dtb.json")
} else if(mode === "-iana"){
    dtb = require("../CONSTS/http-headers.dtb.json")
} else {
    let dtb0 = require("../CONSTS/http-headers-mdn-req.dtb.json")
    let dtb1 = require("../CONSTS/http-headers-mdn-res.dtb.json")
    dtb = dtb0.concat(dtb1)
}

let rsltk
let rsltv
let rslt


if(mode !== "-exact") {
    rsltk = dtb.findAllIndexes((r)=>(r.k.toLowerCase().includes(word)))
    rsltv = dtb.findAllIndexes((r)=>(r.v.toLowerCase().includes(word)))
} else {
    rsltk = dtb.findAllIndexes((r)=>(r.k.toLowerCase() === word))
    rsltv = dtb.findAllIndexes((r)=>(r.v.toLowerCase() === word))
}

rslt = rsltk.concat(rsltv).uniqualize()
rslt = dtb.seqs(rslt)


if(rslt.length > 1) {
    console.log(rslt.map((r)=>({[r.k]:r.v})))
} else if(rslt.length == 1) {
    console.log(rslt[0])
} else {
    console.log("not Found!!!")
}
