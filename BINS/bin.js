#!/usr/bin/env node

let dtb = null
let arg0 = process.argv[2]
let arg1 = process.argv[3]
let word = ""

if(arg1 === undefined) {
    mode = null
    word = arg0
} else {
    mode = arg0
    word = arg1
}

mode = mode.toLowerCase()

if(mode === "-reqonly") {
    dtb = require("../CONSTS/http-headers-mdn-req.dtb.json")
} else if(mode === "-resonly") {
    dtb = require("../CONSTS/http-headers-mdn-res.dtb.json")
} else if(mode === "-mdnonly"){
    let dtb0 = require("../CONSTS/http-headers-mdn-req.dtb.json")
    let dtb1 = require("../CONSTS/http-headers-mdn-res.dtb.json")
    dtb = dtb0.concat(dtb1)
} else {
    dtb = require("../CONSTS/http-headers.dtb.json")
}

let rslt = dtb.filter((r)=>(r.k.toLowerCase().includes(word)))

if(rslt.length > 1) {
    console.log(rslt.map((r)=>({r.k:r.v})))
} else if(rslt.length == 1) {
    console.log(rslt[0])
} else {
    console.log("not Found!!!")
}
