#!/usr/bin/env node

const tltl = require("../tlist")

function dlistUniqualizeAllK(dl) {
    let tl = tltl.dl2tl(dl)
    tl = tltl.uniqualizeAllK(tl)
    return(tltl.tl2dl(tl))
}








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
word = word.toLowerCase()
mode = mode.toLowerCase()

if(mode === '-api') {
   
    let tem =`

## FILL HEAD WITH STRING
------------------------

    var nvhd = require("nvhead").nvhd.Head
    var hd = nvhd.getInstance()
    hd = hd.append("Accept-Encoding","deflate, gzip;q=1.0, *;q=0.5")
    hd = hd.prepend("Accept","text/html")
    hd = hd.insert("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7",1)
    hd = hd.append("Accept","application/xml;q=0.9")
    hd = hd.append("Accept","text/html;q=0.8")
    hd.first("Accept")
    hd.last("Accept")
    hd.which("Accept",1)
    hd.all("Accept")
    //
    > hd
    Head [
      [ 'Accept', 'text/html' ],
      [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
      [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
      [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
      [ 'Accept', '' ],
      [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
      [ 'Accept', 'application/xml;q=0.9' ],
      [ 'Accept', 'text/html;q=0.8' ] ]
    >
    //
    hd = hd.setfirst("Accept","application/xml")
    hd = hd.setlast("Accept","application/xml")
    hd = hd.setwhich("Accept","text/plain",1)
    hd = hd.setall("Accept","text/plain")
    //
    hd = hd.rmfirst("Accept")
    hd = hd.rmwhich("Accept",1)
    hd = hd.rmlast("Accept")
    hd = hd.rmall("Accept")
    //
    hd = hd.rmforce('Accept')
    //
    hd.slist()
    console.log(hd.hdstr())
`
  
    console.log(tem)

} else if(mode === "-lmode") {

    console.log("-exact  :  exact match but ignore case")
    console.log("-reqonly  :  only request header")
    console.log("-resonly  :  only response header")
    console.log("-iana  :  iana header")
    console.log("-mdnonly  :  only mdn header")

} else if(mode === "-exact") {
    let dtb0 = require("../CONSTS/http-headers-mdn-req.dtb.json")
    let dtb1 = require("../CONSTS/http-headers-mdn-res.dtb.json")
    dtb = dtb0.concat(dtb1)
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


if(mode !== "-exact") {
    rslt = rslt.map((r)=>({[r.k]:r.v}))
    rslt = dlistUniqualizeAllK(rslt)
    console.log(rslt)
} else if((mode == "-exact") && (rslt.length>0)) {
    console.log(rslt[0])
} else {
    console.log("not Found!!!")
}
