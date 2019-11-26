const util = require("util")
//const easyutil = require("easyutil.js")

function oneDict2Str(d,kl,spl) {
    /*
        d = { contentEncoding: 'gzip', q: 'q=1.0' }
        kl  = ["contentEncoding","q"]
        spl = [";"]
        oneDict2Str(d,kl,spl)
        'gzip;q=1.0'
    */
    let s = ""
    let spi = 0
    let i 
    for(i=0;i<kl.length-1;i++) {
        v = d[kl[i]]
        nv = d[kl[i+1]]
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
    v = d[kl[i]]
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

function input2Str(value,fDict2Str,fSlist) {
    if(isEntryList(value)) {
        value = fSlist ? fSlist(value) : value
    } else if(!util.isString(value) && !util.isArray(value)) {
        value = fDict2Str ? fDict2Str(value) : value
    } else {
        value = value 
    }
    return(value)
}

//
/*
 * o        object
 * kl       key-list
 * vl       value-list
 * hn       head-name
 *
 */


function getHeadName(k,kl,vl) {
    /*
     * > getHeadName('saveData',REQHD_KL,REQHD_VL)
       'Save-Data'
     */
    let index = kl.indexOf(k)
    let v = vl[index]
    return(v)
}

function getEngine(k,that,kl,vl) {
    let hn = getHeadName(k,kl,vl)
    return(that[hn])
}

function setEngine(k,value,that,kl,vl) {
    let hn = getHeadName(k,kl,vl)
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


function showEngine(that,kl,vl) {
    for(let k of kl){
        let rk = getHeadName(k,kl,vl)
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


module.exports = {
    oneDict2Str : oneDict2Str,   
    isEntryList : isEntryList,
    input2Str : input2Str,
    getHeadName : getHeadName,
    getEngine : getEngine,
    setEngine : setEngine,
    showEngine : showEngine
}
