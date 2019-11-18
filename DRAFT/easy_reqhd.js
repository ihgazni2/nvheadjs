const util = require("util")
const dtb = require("../CONSTS/http-headers-mdn-req.dtb.json")
const elel = require("elist")
const kl = dtb.mapv((r)=>r.k)
const vl = dtb.mapv((r)=>r.v)

function getHeadName(k) {
    let index = kl.indexOf(k)
    let v = vl[index]
    return(v)
}

function getEngine(k,that) {
    let hn = getHeadName(k)
    return(that[hn])
}

function setEngine(k,value,that) {
    let hn = getHeadName(k)
    if(util.isString(value)) {
        that[hn] = [value]
    } else if(util.isArray(value)) {
        that[hn] = value
    } else {
        that[hn] = value
    }
    ////need a class for [value]
    ////extends Array
    ////each action will cause _slist trigger a cooperating action
    ////accompany  with a id ,increased each time
}

function showEngine(that) {
    for(let k of kl){
        let rk = getHeadName(k)
        if(that[rk]===undefined) {
            
        } else if(util.isArray(that[rk]) && that[rk].length ===1 ){
            //只有一个元素,表明无重复
            //在request头部中,通常不会出现重复头部
            //重复头部只是为了测试
            console.log(rk," : ",that[rk][0])
        } else {
            console.log(rk," : ",that[rk])
        }
    }
}

function slistEngine(that) {
    that._slist = []
    for(let k of kl){
        let rk = getHeadName(k)
        if(that[rk]===undefined) {
            
        } else if(util.isString(that[rk])) {
            that._slist.push(rk)
            that._slist.push(that[rk])
        } else if(util.isArray(that[rk])) {
            for(let i=0;i<that[rk].length;i++) {
                that._slist.push(rk)
                that._slist.push(that[rk][i])
            }
        } else {
            //Cookie,Cookie2
            if(rk === "Cookie" || rk === "Cookie2") {
                let s = cookieDict2Str(that[rk])
                that._slist.push(rk)
                that._slist.push(s)
            }
        }
    }
}

function oneDict2StrEngine(d,KL,spl) {
    /*
        d = { contentEncoding: 'gzip', q: 'q=1.0' }
        KL  = ["contentEncoding","q"]
        spl = [";"]
    */
    let s = ""
    let spi = 0
    let i 
    for(i=0;i<KL.length-1;i++) {
        v = d[KL[i]]
        nv = d[KL[i+1]]
        if(v !==undefined && nv !== undefined) {
            //consumed one sp 
            s = s + v + spl[spi]
            //next sp
            spi = spi + 1
        } else if(v !==undefined && nv === undefined) {
            //only consumed value
            //keep the sp
            s = s + v
        } else {
            
        }
    }
    //last
    v = d[KL[i]]
    if(v !==undefined) { 
        s = s + v
    } else {
        
    }
    return(s)
}

function isEntryList(o) {
    let cond = util.isArray(o) && !util.isString(o[0])
    return(cond)
}

function commaSemiEqQalOneStr2Dict(s,attr) {
    /*
        var s ='gzip;q=1.0'
        var attr = 'contentEncoding'
        commaSemiEqQalOneStr2Dict(s,attr)
        > { contentEncoding: 'gzip', q: '1.0' }
    */
    d = {}
    let arr = s.split(/[ ]*;[ ]*/)
    d[attr] = arr[0]
    if(arr.length == 2) {
        q = arr[1].split(/[ ]*=[ ]*/)
        d.q = q[1]
    } else {
        
    }
    return(d)
}

function commaSemiEqQalOneDict2Str(d,attr) {
    /*
        var d = { contentEncoding: 'gzip', q: '1.0' }
        var attr = 'contentEncoding'
        commaSemiEqQalOneDict2Str(d,attr)
        > 'gzip;q=1.0'
    */
    let s = ""
    let KL = [attr,"q"]
    let spl = [";","q="]
    let spi = 0
    let i 
    for(i=0;i<KL.length-1;i++) {
        v = d[KL[i]]
        nv = d[KL[i+1]]
        if(v !==undefined && nv !== undefined) {
            //consumed one sp 
            s = s + v + spl[spi]
            //next sp
            spi = spi + 1
        } else if(v !==undefined && nv === undefined) {
            //only consumed value
            //keep the sp
            s = s + v
        } else {
            
        }
    }
    //last
    v = d[KL[i]]
    if(v !==undefined) { 
        s = s + spl[i] +v
    } else {
        
    }
    return(s)
}

function commaSemiEqQalStr2List(s,attr) {
    /*
        var s = "deflate, gzip;q=1.0, *;q=0.5"
        var attr = 'contentEncoding'
        commaSemiEqQalStr2List(s,attr)
        > [ { contentEncoding: 'deflate' },
          { contentEncoding: 'gzip', q: '1.0' },
          { contentEncoding: '*', q: '0.5' } ]
    */
    let l = s.split(/[ ]*,[ ]*/)
    l = l.map((r)=>commaSemiEqQalOneStr2Dict(r,attr))
    return(l)
}

function commaSemiEqQalList2Str(l,attr) {
    /*
        var l = [ { contentEncoding: 'deflate' },
          { contentEncoding: 'gzip', q: '1.0' },
          { contentEncoding: '*', q: '0.5' } ]
        var attr = 'contentEncoding'
        var s = commaSemiEqQalList2Str(l,attr)
        commaSemiEqQalList2Str(l,attr)
    */
    l = l.map((r)=>commaSemiEqQalOneDict2Str(r,attr))
    return(l.join(", "))
}

function fmtCommaSemiEqQalInput(value,attr) {
    /*
        var value = [ { contentEncoding: 'deflate' },
          { contentEncoding: 'gzip', q: '1.0' },
          { contentEncoding: '*', q: '0.5' } ]
        var attr = 'contentEncoding'
        fmtCommaSemiEqQalInput(value,attr)
        > 'deflate, gzip;q=1.0, *;q=0.5'
    */
    if(isEntryList(value)) {
        value = commaSemiEqQalList2Str(value,attr)
    } else if(!util.isString(value) && !util.isArray(value)) {
        value = commaSemiEqQalOneDict2Str(value,attr)
    } else {
        value = value 
    }
    return(value)
}

////

function seconds2GMTString(seconds) {
    let dt = new Date(seconds)
    return(dt.toGMTString())
}

function fmtDayName(s) {
    let dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let lowerDayNames = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    let abbrDayNames = ["m", "tu", "w", "th", "f", "sa", "su"]
    let fullDayNames = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    let rslt = dayNames[parseInt(s)-1]
    if(rslt !== undefined) {
        return(rslt)
    } else {
        s = s.toLowerCase()
        let i0 = elel.findAllIndexes(lowerDayNames,(r)=>(r===s))[0]
        let i1 = elel.findAllIndexes(abbrDayNames,(r)=>(r===s))[0]
        let i2 = elel.findAllIndexes(fullDayNames,(r)=>(r===s))[0]
        let i = (i0 !== undefined) ? i0 : 
                    (i1 !== undefined) ? i1 :i2
        return(dayNames[i])
    }
}

function fmtMonthName(s) {
    let monthNames = [ 
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec' 
    ]
    let lowerMonthNames = [ 
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec' 
    ]
    let abbrMonthNames = [ 
        'ja',
        'f',
        'mar',
        'ap',
        'may',
        'jun',
        'jul',
        'au',
        's',
        'o',
        'n',
        'd' 
    ]
    let fullMonthNames = [ 
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december' 
    ]
    let rslt = monthNames[parseInt(s)-1]
    if(rslt !== undefined) {
        return(rslt)
    } else {
        s = s.toLowerCase()
        let i0 = elel.findAllIndexes(lowerMonthNames,(r)=>(r===s))[0]
        let i1 = elel.findAllIndexes(abbrMonthNames,(r)=>(r===s))[0]
        let i2 = elel.findAllIndexes(fullMonthNames,(r)=>(r===s))[0]
        let i = (i0 !== undefined) ? i0 : 
                    (i1 !== undefined) ? i1 :i2
        return(monthNames[i])
    }
}

function fmtHours(s) {
    if(s.length === 1) {
        s = "0" +s 
    } else {
    }
    return(s)
}

function dateDict2Str(d) {
    let dayName = fmtDayName(d.dayName)
    let day = d.day
    let mon = fmtMonthName(d.mon)
    let year = d.year
    let hour = fmtHours(d.hour)
    let min = fmtHours(d.min)
    let sec = fmtHours(d.sec)
    let s = `${dayName}, ${day} ${mon} ${year} ${hour}:${min}:${sec} GMT`
    return(s)
}


function fmtDateInputEngine(value) {
    if(!util.isString(value) && !util.isArray(value)) {
        value = dateDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}

////

class Head {
    constructor () {
        Object.defineProperty(this, "_slist", {
           value: [],
           writable: true,
           configurable:false,
           enumerable:false
        })
    }

    get via() {
        return(getEngine("via",this))
    }
    set via(value) {
        value = fmtViaInput(value)
        setEngine("via",value,this)
    }

    get cookie() {
        return(getEngine("cookie",this))
    }
    set cookie(value) {
        setEngine("cookie",value,this)
    }

    get connection() {
        return(getEngine("connection",this))
    }
    set connection(value) {
        value = fmtConnectionInput(value)
        setEngine("connection",value,this)
    }

    get pragma() {
        return(getEngine("pragma",this))
    }
    set pragma(value) {
        setEngine("pragma",value,this)
    }

    get contentLength() {
        return(getEngine("contentLength",this))
    }
    set contentLength(value) {
        setEngine("contentLength",value,this)
    }

    get xForwardedProto() {
        return(getEngine("xForwardedProto",this))
    }
    set xForwardedProto(value) {
        setEngine("xForwardedProto",value,this)
    }

    get acceptEncoding() {
        return(getEngine("acceptEncoding",this))
    }
    set acceptEncoding(value) {
        value = fmtAcceptEncodingInput(value)
        setEngine("acceptEncoding",value,this)
    }

    get earlyData() {
        return(getEngine("earlyData",this))
    }
    set earlyData(value) {
        setEngine("earlyData",value,this)
    }

    get range() {
        return(getEngine("range",this))
    }
    set range(value) {
        value = fmtRangeInput(value)
        setEngine("range",value,this)
    }

    get dnt() {
        return(getEngine("dnt",this))
    }
    set dnt(value) {
        setEngine("dnt",value,this)
    }

    get accessControlRequestHeaders() {
        return(getEngine("accessControlRequestHeaders",this))
    }
    set accessControlRequestHeaders(value) {
        setEngine("accessControlRequestHeaders",value,this)
    }

    get cacheControl() {
        return(getEngine("cacheControl",this))
    }
    set cacheControl(value) {
        value = fmtCacheControlInput(value)
        setEngine("cacheControl",value,this)
    }

    get ifRange() {
        return(getEngine("ifRange",this))
    }
    set ifRange(value) {
        setEngine("ifRange",value,this)
    }

    get keepAlive() {
        return(getEngine("keepAlive",this))
    }
    set keepAlive(value) {
        value = fmtKeepAliveInput(value)
        setEngine("keepAlive",value,this)
    }

    get ifModifiedSince() {
        return(getEngine("ifModifiedSince",this))
    }
    set ifModifiedSince(value) {
        value = fmtIfModifiedSinceInput(value)
        setEngine("ifModifiedSince",value,this)
    }

    get altSvc() {
        return(getEngine("altSvc",this))
    }
    set altSvc(value) {
        setEngine("altSvc",value,this)
    }

    get contentEncoding() {
        return(getEngine("contentEncoding",this))
    }
    set contentEncoding(value) {
        setEngine("contentEncoding",value,this)
    }

    get origin() {
        return(getEngine("origin",this))
    }
    set origin(value) {
        setEngine("origin",value,this)
    }

    get host() {
        return(getEngine("host",this))
    }
    set host(value) {
        setEngine("host",value,this)
    }

    get wantDigest() {
        return(getEngine("wantDigest",this))
    }
    set wantDigest(value) {
        value = fmtWantDigestInput(value)
        setEngine("wantDigest",value,this)
    }

    get acceptCharset() {
        return(getEngine("acceptCharset",this))
    }
    set acceptCharset(value) {
        value = fmtAcceptCharsetInput(value)
        setEngine("acceptCharset",value,this)
    }

    get ifNoneMatch() {
        return(getEngine("ifNoneMatch",this))
    }
    set ifNoneMatch(value) {
        setEngine("ifNoneMatch",value,this)
    }

    get referer() {
        return(getEngine("referer",this))
    }
    set referer(value) {
        setEngine("referer",value,this)
    }

    get accessControlRequestMethod() {
        return(getEngine("accessControlRequestMethod",this))
    }
    set accessControlRequestMethod(value) {
        setEngine("accessControlRequestMethod",value,this)
    }

    get accept() {
        return(getEngine("accept",this))
    }
    set accept(value) {
        value = fmtAcceptInput(value)
        setEngine("accept",value,this)
    }

    get xForwardedFor() {
        return(getEngine("xForwardedFor",this))
    }
    set xForwardedFor(value) {
        setEngine("xForwardedFor",value,this)
    }

    get upgradeInsecureRequests() {
        return(getEngine("upgradeInsecureRequests",this))
    }
    set upgradeInsecureRequests(value) {
        setEngine("upgradeInsecureRequests",value,this)
    }

    get xForwardedHost() {
        return(getEngine("xForwardedHost",this))
    }
    set xForwardedHost(value) {
        setEngine("xForwardedHost",value,this)
    }

    get allow() {
        return(getEngine("allow",this))
    }
    set allow(value) {
        setEngine("allow",value,this)
    }

    get cookie2() {
        return(getEngine("cookie2",this))
    }
    set cookie2(value) {
        setEngine("cookie2",value,this)
    }

    get date() {
        return(getEngine("date",this))
    }
    set date(value) {
        value = fmtDateInput(value)
        setEngine("date",value,this)
    }

    get te() {
        return(getEngine("te",this))
    }
    set te(value) {
        value = fmtReqTEinput(value)
        setEngine("te",value,this)
    }

    get warning() {
        return(getEngine("warning",this))
    }
    set warning(value) {
        setEngine("warning",value,this)
    }

    get ifMatch() {
        return(getEngine("ifMatch",this))
    }
    set ifMatch(value) {
        setEngine("ifMatch",value,this)
    }

    get acceptLanguage() {
        return(getEngine("acceptLanguage",this))
    }
    set acceptLanguage(value) {
        setEngine("acceptLanguage",value,this)
    }

    get forwarded() {
        return(getEngine("forwarded",this))
    }
    set forwarded(value) {
        setEngine("forwarded",value,this)
    }

    get expect() {
        return(getEngine("expect",this))
    }
    set expect(value) {
        setEngine("expect",value,this)
    }

    get userAgent() {
        return(getEngine("userAgent",this))
    }
    set userAgent(value) {
        setEngine("userAgent",value,this)
    }

    get proxyAuthorization() {
        return(getEngine("proxyAuthorization",this))
    }
    set proxyAuthorization(value) {
        setEngine("proxyAuthorization",value,this)
    }

    get contentLanguage() {
        return(getEngine("contentLanguage",this))
    }
    set contentLanguage(value) {
        setEngine("contentLanguage",value,this)
    }

    get authorization() {
        return(getEngine("authorization",this))
    }
    set authorization(value) {
        setEngine("authorization",value,this)
    }

    get link() {
        return(getEngine("link",this))
    }
    set link(value) {
        setEngine("link",value,this)
    }

    get from() {
        return(getEngine("from",this))
    }
    set from(value) {
        setEngine("from",value,this)
    }

    get saveData() {
        return(getEngine("saveData",this))
    }
    set saveData(value) {
        setEngine("saveData",value,this)
    }

    get contentType() {
        return(getEngine("contentType",this))
    }
    set contentType(value) {
        setEngine("contentType",value,this)
    }

    get contentLocation() {
        return(getEngine("contentLocation",this))
    }
    set contentLocation(value) {
        setEngine("contentLocation",value,this)
    }

    get ifUnmodifiedSince() {
        return(getEngine("ifUnmodifiedSince",this))
    }
    set ifUnmodifiedSince(value) {
        setEngine("ifUnmodifiedSince",value,this)
    }
    
    show () {
        showEngine(this)
    }
    
    slist () {
        slistEngine(this)
        return(this._slist)
    }
}



//Specific

//Via        [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
//viaOneStr  HTTP/1.1 GWA
//viaStr     1.0 fred, 1.1 p.example.net
//viaOneDict {"protocolName":"HTTP","protocolVersion":"1.1","host":"GWA"}
//viaList    [{"protocolVersion":"1.0","host":"fred"},{"protocolVersion":"1.1","host":"p.example.net"}]

function isViaProtocolVersion(s) {
    let regex = /^[0-9]+\.[0-9]+$/
    return(regex.test(s))
}

function viaOneStr2Dict(s) {
    /*
        s = 'HTTP/1.1 GWA'
    */
    d = {}
    let [prot,hp] = s.split(/[ ]+/)
    ////
    prot = prot.split(/[ ]*\/[ ]*/)
    if(prot.length == 2) {
        d.protocolName = prot[0]
        d.protocolVersion = prot[1]
    }  else {
        d.protocolVersion = prot
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
    */
    let s = ""
    let viaKL = ["protocolName","protocolVersion","host","port"]
    let spl = ["/"," ",":"]
    let spi = 0
    let i 
    for(i=0;i<viaKL.length-1;i++) {
        v = d[viaKL[i]]
        nv = d[viaKL[i+1]]
        if(v !==undefined && nv !== undefined) {
            //consumed one sp 
            s = s + v + spl[spi]
            //next sp
            spi = spi + 1
        } else if(v !==undefined && nv === undefined) {
            //only consumed value
            //keep the sp
            s = s + v
        } else {
            
        }
    }
    //last
    v = d[viaKL[i]]
    if(v !==undefined) { 
        s = s + v
    } else {
        
    }
    return(s)
}

function viaStr2List(s) {
    /*
        s = "1.0 fred, 1.1 p.example.net"
        [ { protocolVersion: [ '1.0' ], host: 'fred' },
          { protocolVersion: [ '1.1' ], host: 'p.example.net' } ]
    */
    let l = s.split(/[ ]*,[ ]*/)
    l = l.map(viaOneStr2Dict)
    return(l)
}

function viaList2Str(l) {
    /*
        > l
        [ { protocolVersion: [ '1.0' ], host: 'fred' },
          { protocolVersion: [ '1.1' ], host: 'p.example.net' } ]
        > viaList2Str(l)
        '1.0/fred, 1.1/p.example.net'
        >
    */
    l = l.map(viaOneDict2Str)
    return(l.join(", "))
}

function isViaList(o) {
    let cond = util.isArray(o) && !util.isString(o[0])
    return(cond)
}

function fmtViaInput(value) {
    if(isViaList(value)) {
        value = viaList2Str(value)
    } else if(!util.isString(value) && !util.isArray(value)) {
        value = viaOneDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}


//Connection  keep-alive, close
function fmtConnectionInput(value) {
    if(value.toLowerCase().replace("-","") === "keepalive") {
        value = "keep-alive"
    } else {
    }
    return(value)
}

function connectionHelp() {
    console.log("keep-alive","close")
}

//X-Forwarded-Proto

function xForwardedProtoHelp() {
    console.log("http","https")
}

//acceptEncoding
//Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5

function acceptEncodingOneStr2Dict(s) {
    /*
        s ='gzip;q=1.0'
        
    */
    d = {}
    let arr = s.split(/[ ]*;[ ]*/)
    d.contentEncoding = arr[0]
    if(arr.length == 2) {
        q = arr[1].split(/[ ]*=[ ]*/)
        d.q = arr[1]
    } else {
        
    }
    ////
    return(d)
}

function acceptEncodingOneDict2Str(d) {
    /*
        d = { contentEncoding: 'gzip', q: 'q=1.0' }
    */
    let s = ""
    let acceptEncodingKL = ["contentEncoding","q"]
    let spl = [";","="]
    let spi = 0
    let i 
    for(i=0;i<acceptEncodingKL.length-1;i++) {
        v = d[acceptEncodingKL[i]]
        nv = d[acceptEncodingKL[i+1]]
        if(v !==undefined && nv !== undefined) {
            //consumed one sp 
            s = s + v + spl[spi]
            //next sp
            spi = spi + 1
        } else if(v !==undefined && nv === undefined) {
            //only consumed value
            //keep the sp
            s = s + v
        } else {
            
        }
    }
    //last
    v = d[viaKL[i]]
    if(v !==undefined) { 
        s = s + v
    } else {
        
    }
    return(s)
}

function acceptEncodingStr2List(s) {
    /*
        s = "deflate, gzip;q=1.0, *;q=0.5"
        [ { contentEncoding: 'deflate' },
          { contentEncoding: 'gzip', q: 'q=1.0' },
          { contentEncoding: '*', q: 'q=0.5' } ]
    */
    let l = s.split(/[ ]*,[ ]*/)
    l = l.map(acceptEncodingOneStr2Dict)
    return(l)
}

function acceptEncodingList2Str(l) {
    /*
        s = acceptEncodingList2Str(l)
    */
    l = l.map(acceptEncodingOneDict2Str)
    return(l.join(", "))
}

function fmtAcceptEncodingInput(value) {
    if(isEntryList(value)) {
        value = acceptEncodingList2Str(value)
    } else if(!util.isString(value) && !util.isArray(value)) {
        value = acceptEncodingOneDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}

function acceptEncodingHelp() {
    console.log("gzip","compress","deflate","br","identity","*")
}


function fmtWantDigestInput(value) {
    /*
       // Want-Digest: sha-256
       // Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
        var s = 'SHA-512;q=0.3, sha-256;q=1, md5;q=0'
        var value = commaSemiEqQalStr2List(s,"digestAlgorithm")
        > [ { digestAlgorithm: 'SHA-512', q: '0.3' },
            { digestAlgorithm: 'sha-256', q: '1' },
            { digestAlgorithm: 'md5', q: '0' } ]
        fmtWantDigestInput(value)
        > 'SHA-512;q=0.3, sha-256;q=1, md5;q=0'
    */
    return(fmtCommaSemiEqQalInput(value,"digestAlgorithm"))
}

function wantDigestHelp() {
    console.log("digestAlgorithm","q")
}

function fmtAcceptCharset(value) {
    /*
        //Accept-Charset: utf-8, iso-8859-1;q=0.5
        var s = 'utf-8, iso-8859-1;q=0.5'
        var value = commaSemiEqQalStr2List(s,"charset")
        fmtAcceptCharset(value)
    */
    return(fmtCommaSemiEqQalInput(value,'charset'))
}

function acceptCharsetHelp() {
    console.log("charset")
}

function fmtAcceptInput(value) {
    /*
        var s = 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp;q=0.8'
        var value = commaSemiEqQalStr2List(s,"mime")
        fmtAcceptInput(value)
        >[ { mime: 'text/html' },
          { mime: 'application/xhtml+xml' },
          { mime: 'application/xml', q: '0.9' },
          { mime: 'image/webp', q: '0.8' } ]
    */
    return(fmtCommaSemiEqQalInput(value,'mime'))
}


function fmtReqTEinput(value) {
    /*
        var s = 'trailers, deflate;q=0.5'
        var value = commaSemiEqQalStr2List(s,"transferEncoding")
        fmtReqTEinput(value)
    */
    return(fmtCommaSemiEqQalInput(value,'transferEncoding'))
}


function reqTEhelp() {
    console.log("trailers","gzip","compress","deflate")
}


//Cookie,Cookie2
function cookieStr2Dict(s) {
    let d = {}
    let arr = s.split(/;[ ]+/)
    for(let i=0;i<arr.length;i++) {
        let entry = arr[i]
        entry = entry.split(/[ ]*=[ ]*/)
        if(entry.length === 2) {
            d[entry[0]] = entry[1]
        } else {
            d[entry[0]] = undefined
        }
    }
    return(d)
}

function cookieDict2Str(d) {
    let s = ""
    for(let k in d) {
        s = s + k
        v = d[k]
        if(v === undefined) {
            
        } else {
            s = s + "=" + v
        }
        s = s + "; "
    }
    s = s.slice(0,s.length-2)
    return(s)
}


//Range: bytes=200-1000, 2000-6576, 19000- 
//Range: bytes=0-499, -500 
//Range: <unit>=<range-start>-
//Range: <unit>=<range-start>-<range-end>
//Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
//Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
//Range: <unit>=-<suffix-length>

function rangeOneStr2Dict(s) {
    d = {} 
    let arr = s.split(/[ ]*-[ ]*/)
    if(arr[0]==='') {
        d.suffixLength = arr[1]
    } else if(arr[1]==='') {
        d.rangeStart = arr[0]
    } else {
        d.rangeStart = arr[0]
        d.rangeEnd = arr[1]
    }
    return(d)
}

function  rangeOneDict2Str(d) {
    /*
        d0 = { rangeStart: '200', rangeEnd: '1000' }
        d1 = { rangeStart: '19000' }
        d2 = { suffixLength: '500' }
    */
    let ks = Object.keys(d)
    let s = ""
    if(ks.length === 2) {
        s = d.rangeStart + '-' + d.rangeEnd
    } else if(ks[0] === 'rangeStart') {
        s = d.rangeStart + '-'
    } else {
        s = '-' + d.suffixLength
    }
    return(s)
}

function rangeStr2Dict(s) {
    /*
        s = 'bytes=200-1000, 2000-6576, 19000-'
        > d = rangeStr2Dict(s)
        { unit: 'bytes',
          ranges:
           [ { rangeStart: '200', rangeEnd: '1000' },
             { rangeStart: '2000', rangeEnd: '6576' },
             { rangeStart: '19000' } ] }
    */
    let d = {}
    let [unit,body] = s.split(/[ ]*=[ ]*/)
    d.unit = unit
    let ranges = body.split(/[ ]*,[ ]*/)
    ranges = ranges.map(rangeOneStr2Dict)
    d.ranges = ranges
    return(d)
}

function rangeDict2Str(d) {
    /*
        d = 
        { unit: 'bytes',
          ranges:
           [ { rangeStart: '200', rangeEnd: '1000' },
             { rangeStart: '2000', rangeEnd: '6576' },
             { rangeStart: '19000' } ] }
    */
    let s = d.unit + '=' 
    let arr = d.ranges.map(rangeOneDict2Str)
    s = s + arr.join(', ')
    return(s)
}

function fmtRangeInput(value) {
    if(!util.isString(value) && !util.isArray(value)) {
        value = rangeDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}


//Cache-Control: max-age=<seconds>
//Cache-Control: max-stale[=<seconds>]
//Cache-Control: min-fresh=<seconds>
//Cache-Control: no-cache 
//Cache-Control: no-store
//Cache-Control: no-transform
//Cache-Control: only-if-cached
//Cache-Control: immutable 
//Cache-Control: stale-while-revalidate=<seconds>
//Cache-Control: stale-if-error=<seconds>

function cacheControlStr2Dict(s) {
    /*
        > cacheControlStr2Dict('max-stale=100')
        { maxStale: '100' }
        >
    */
    let cacheControlKL = [
        "maxAge","maxStale","minFresh","noCache",
        "noStore","noTransform","onlyIfCached","immutable",
        "staleWhileRevalidate","staleIfError"
    ]
    let cacheControlVL = [
        "max-age","max-stale","min-fresh","no-cache",
        "no-store","no-transform","only-if-cached","immutable",
        "stale-while-revalidate","stale-if-error"
    ]
    let d = {}
    let arr = s.split(/[ ]*=[ ]*/)
    if(arr.length == 2) {
        let index = cacheControlVL.indexOf(arr[0])
        let k = cacheControlKL[index]
        d[k] = arr[1]
    } else {
        let index = cacheControlVL.indexOf(arr[0])
        let k = cacheControlKL[index]
        d[k] = true
    }
    return(d)
}

function cacheControlDict2Str(d) {
    let cacheControlKL = [
        "maxAge","maxStale","minFresh","noCache",
        "noStore","noTransform","onlyIfCached","immutable",
        "staleWhileRevalidate","staleIfError"
    ]
    let cacheControlVL = [
        "max-age","max-stale","min-fresh","no-cache",
        "no-store","no-transform","only-if-cached","immutable",
        "stale-while-revalidate","stale-if-error"
    ]
    let k = Object.keys(d)[0]
    if(k === "maxAge") {
        d = "max-age" + '=' + d[k]
    } else if(k === "minFresh") {
        d = "min-fresh" + '=' + d[k]
    } else if(k === "staleWhileRevalidate") {
        d = "stale-while-revalidate" + '=' + d[k]
    } else if(k === "staleIfError") {
        d = "staleIfError" + '=' + d[k]
    } else if(k === "maxStale") {
        if(d[k] === true) {
            index = cacheControlKL.indexOf(k)
            d = cacheControlVL[index]
        } else {
            index = cacheControlKL.indexOf(k)
            d = "max-stale" + '=' +d[k]
        }
    } else {
        if(Boolean(d[k]) === true) {
            d = cacheControlVL[index]
        } else {
        }
    }
    return(d)
}

function fmtCacheControlInput(value) {
    if(!util.isString(value) && !util.isArray(value)) {
        value = cacheControlDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}

function cacheControlHelp() {
    let s = `
    Cache-Control: max-age=<seconds>
    Cache-Control: max-stale[=<seconds>]
    Cache-Control: min-fresh=<seconds>
    Cache-Control: no-cache 
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: only-if-cached
    Cache-Control: immutable 
    Cache-Control: stale-while-revalidate=<seconds>
    Cache-Control: stale-if-error=<seconds>
`
    console.log(s)
}




//> Date.parse("Wed, 21 Oct 2015 07:28:00 GMT")
//1445412480000
//> new Date(1445412480000).toString()
//'Wed Oct 21 2015 07:28:00 GMT+0000 (Coordinated Universal Time)'
//> dt.toGMTString()
//'Wed, 21 Oct 2015 07:28:00 GMT'
//If-Range: Wed, 21 Oct 2015 07:28:00 GMT 


/////////////


function ifRangeDict2Str(d) {
    /*
        { dayName: 1,
          year: 2015,
          mon: 2,
          day: 15,
          hour: 12,
          min: 33,
          sec: 10 }
    */
    if(d.etag !== undefined) {
        return(d.etag)
    } else {
        let s = dateDict2Str(d)
        return(s)
    }
}

function fmtIfRangeInput(value) {
    if(!util.isString(value) && !util.isArray(value)) {
        value = ifRangeDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}

//fmtIfModifiedSinceInput

function fmtIfModifiedSinceInput(value) {
    /*
        //If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
    */
    return(fmtDateInputEngine(value))
}

//date

function fmtDateInput(value) {
    return(fmtDateInputEngine(value))
}






//Connection: Keep-Alive
//Keep-Alive: timeout=5, max=1000


function keepAliveStr2Dict(s) {
    /*
        s = 'timeout=5, max=1000'
    */
    let d = {}
    let arr = s.split(/[ ]*,[ ]*/)
    for(let each of arr) {
        let [k,v] = each.split(/[ ]*=[ ]*/)
        d[k]=v
    }
    return(d)
}

function keepAliveDict2Str(d) {
    let s = ""
    let entries = Object.entries(d)
    entries  = entries.map((r)=>(r.join('=')))
    s = entries.join(", ")
    return(s)
}

function fmtKeepAliveInput(value) {
    if(!util.isString(value) && !util.isArray(value)) {
        value = keepAliveDict2Str(value)
    } else {
        value = value 
    }
    return(value)
}





//contentEncoding
//Content-Encoding: gzip, identity
//Content-Encoding: deflate, gzip

function contentEncodingHelp() {
    console.log("gzip","compress","deflate","br","identity")
}






// Alt-Svc: clear
// Alt-Svc: <service-list>; ma=<max-age>
// Alt-Svc: <service-list>; ma=<max-age>; persist=1



//Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
//Warning: 110 anderson/1.3.37 "Response is stale"
//Date: Wed, 21 Oct 2015 07:28:00 GMT 
//Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"





hd = new Head()

hd.connection = 'Keep-Alive'
hd.accept = '*/*'
hd.userAgent = 'Microsoft-Delivery-Optimization/10.0'
hd.cookie = {}
hd.cookie._ga = 'GA1.2.883519595.1573610523',
hd.cookie._gid = 'GA1.2.222128770.1573610524',
hd.cookie._gat_gtag_UA_296621_13 = 1 

hd.slist()

