const util = require("util")

function isQ(s) {
    let n = parseFloat(s)
    if(n>=0 && n<=1) {
        return(True)
    } else {
        return(false)
    }
}

function isNaN(obj) {
    return(!(obj === obj))
}

function isNumberStr(s) {
    let regex = /^[0-9]*\.{0,1}[0-9]*$/
    return(regex.test(s))
}

function fmtQ(s) {
    let n = parseFloat(s)
    n = Math.abs(n)
    n = n.toFixed(1)
    if(n > 1) { n = 1.0}
    return(n)
}


function itemarr2str(items) {
    //var items = ["text/html","0.8","application/xhtml+xml","text/*","0.8","*/*","0.8"]
    //itemarr2str(items)
    //'text/html;q=0.8, application/xhtml+xml, text/*;q=0.8, */*;q=0.8'
    let rslt = []
    let cache = ""
    for(let i= 0;i<items.length;i++) {
        let cond = isNumberStr(items[i])
        if(cond) {
            if(cache!==""){
                cache = cache +";q="+fmtQ(items[i])
                rslt.push(cache)
            }
            cache = ""
        } else {
            if(cache !== "") {rslt.push(cache)}
            cache = items[i]
        }
    }
    return(rslt.join(", "))
}

function items2str(...items) {
    return(itemarr2str(items))
}

function splitEntry(entry) {
    if(entry.includes(";")) {
        let t = entry.split(";")
        return([t[0],parseFloat(t[1].split("=")[1])])
    } else {
        return([entry])
    }
}

function str2itemarr(s) {
    //s= "text/html;q=0.8, text/*;q=0.8, */*;q=0.8"
    let arr = s.split(", ")
    arr = arr.map(splitEntry)
    return(arr.flat())
}

function encdMimeQentry(d,k="q") {
    //encdMimeQentry({ type: 'text', subtype: 'html', q: 0.8 })
    let q = (d[k] === undefined)?  "":fmtQ(d[k])
    let entry = d.type+"/"+d.subtype
    if(q === "") {
    } else {
        entry = entry+";"+k+"="+q
    }
    return(entry)
}

function encdEntry(d) {
    //encdEntry({ content: 'text/html', q: 0.8 })
    let q = (d.q === undefined)?  "":fmtQ(d.q)
    let entry = d.content
    if(q === "") {
    } else {
        entry = entry+";q="+q
    }
    return(entry)
}


function dcdMimeQentry(s,k="q") {
    //dcdMimeQentry('text/html;q=0.8')
    let arr = splitEntry(entry)
    if(arr.length === 1) {
        arr = arr[0].split("/")
        return({
            type:arr[0],
            subtype:arr[1]
        })
    } else {
        let t = arr[0].split("/")
        let q = arr[1]
        return({
            type:t[0],
            subtype:t[1],
            [k]:q
        })
    }
}

function dcdEntry(s) {
    //dcdEntry('text/html;q=0.8')
    let arr = splitEntry(entry)
    if(arr.length === 1) {
        return({
            content:arr[0]
        })
    } else {
        let q = arr[1]
        return({
            content:arr[0],
            q:q
        })
    }
}


MIMEQ_SPECIFICS = [
    "accept",
    "acceptCharset",
    "acceptEncoding",
    "acceptLanguage",
    "te",
    "wantDigest"
]

MIME_CHARSET_SPECIFICS = [    
    "acceptPatch",
    "contentType",
]

MIME_BOUNDARY_SPECIFICS = [    
    "contentType",
]


SPECIFICS = [
    "accept",
    "acceptCharset",
    "acceptEncoding",
    "acceptLanguage",
    "acceptPatch",
    "contentType"
    "te",
    "wantDigest"
]


module.exports = {
    SPECIFICS,
    MIMEQ_SPECIFICS,
    MIME_CHARSET_SPECIFICS,
    MIME_BOUNDARY_SPECIFICS,
    isQ,
    fmtQ,
    itemarr2str,
    items2str,
    splitEntry,
    str2itemarr,
    encdEntry,
    encdMimeQentry,
    dcdEntry,
    dcdMimeQentry,
}
