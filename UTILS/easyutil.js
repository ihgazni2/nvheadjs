const util = require("util")

/*
 * o        object
 * kl       key-list
 * vl       value-list
 * hn       head-name
 * 
 */


function copy(o) {
    /*
     *    shallow  copy
     */
    return(JSON.parse(JSON.stringify(o)))
}


function seconds2GMTString(seconds) {
    /*
        > seconds2GMTString(1574135366418)
        'Tue, 19 Nov 2019 03:49:26 GMT'
    */
    let dt = new Date(seconds)
    return(dt.toGMTString())
}

function fmtDayName(s) {
    /*
        > fmtDayName(1)
        'Mon'
        > fmtDayName(2)
        'Tue'
        > fmtDayName(3)
        'Wed'
        > fmtDayName(4)
        'Thu'
        > fmtDayName(5)
        'Fri'
        > fmtDayName(6)
        'Sat'
        > fmtDayName(7)
        'Sun'
        >
    */
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
    /*
        > fmtMonthName(1)
        'Jan'
        > fmtMonthName(2)
        'Feb'
        > fmtMonthName(3)
        'Mar'
        > fmtMonthName(4)
        'Apr'
        > fmtMonthName(5)
        'May'
        > fmtMonthName(6)
        'Jun'
        > fmtMonthName(7)
        'Jul'
        > fmtMonthName(8)
        'Aug'
        > fmtMonthName(9)
        'Sep'
        > fmtMonthName(10)
        'Oct'
        > fmtMonthName(11)
        'Nov'
        > fmtMonthName(12)
        'Dec'
        >
    */
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
    /*
        > fmtHours(1)
        '01'
        > fmtHours(2)
        '02'
        > fmtHours(03)
        '03'
    */
    if(s.toString().length === 1) {
        s = "0" +s 
    } else {
    }
    return(s)
}

function fmtMinutes(s) {
    return(fmtHours(s))
}

function fmtSeconds(s) {
    return(fmtHours(s))
}


function dateStr2Dict(s) {
    /*
        "Wed, 21 Oct 2015 07:28:00 GMT"
        > dateStr2Dict("Wed, 21 Oct 2015 07:28:00 GMT")
        { dayName: 3, day: 21, mon: 9, year: 2015, hour: 7, min: 28, sec: 0 }
    */
    let d = {}
    let dt = new Date(s)
    d.dayName = dt.getDay()
    d.day = dt.getDate()
    d.mon = dt.getMonth()
    d.year = dt.getFullYear()
    d.hour = dt.getHours()
    d.min = dt.getMinutes()
    d.sec = dt.getSeconds()
    return(d)
}


function dateDict2Str(d) {
    /*
        var d = { dayName: 3, day: 21, mon: 9, year: 2015, hour: 7, min: 28, sec: 0 }
        dateDict2Str(d)
        'Wed, 21 Sep 2015 07:28:00 GMT'
    */
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


function quoteIfNecessary(s,quote) {
    /*
        > quoteIfNecessary('abc','"')
        'abc'
        >
        > quoteIfNecessary('ab c','"')
        '"ab c"'
        >
    */
    quote = quote || '"'
    if(s.includes(' ')) {
        s = quote + s + quote
    } else {
        
    }
    return(s)
}

function quoteTokenize(s,quote) {
    /*
        > var  s = '112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"'
        > quoteTokenize(s,'"')
        [ '112', '-', '"cache down"', '"Wed, 21 Oct 2015 07:28:00 GMT"' ]
    */
    quote = quote || '"'
    let toks = []
    let cache = ''
    let arr = Array.from(s)
    ////start 
    let si = arr.findIndex((r)=>(r[0]!==' '))
    ////
    let state = "init"
    for(let i = si; i<s.length; i++) {
        ////
        if(state === 'init') {
            if(s[i] === ' ') {
                state = 'init'
            } else if(s[i] === quote) {
                state = 'quote'
                cache = quote
            } else {
                state = 'normal'
                cache = s[i]
            }
        }
        ////
        else if(state === 'normal') {
            if(s[i] === ' ') {
                toks.push(cache)
                cache = ''
                state= 'init'
            } else {
                cache = cache + s[i]
                state= 'normal'
            }
        }
        ////
        else if(state === 'quote') {
            if(s[i] === quote) {
                cache = cache + quote
                toks.push(cache)
                cache = ''
                state = 'init'
            } else {
                cache = cache + s[i]
                state = 'quote'
            }
        }
    }
    ////end
    if(cache === '') {
    } else {
        toks.push(cache)
    }
    return(toks)
}

function entries2Dict(entries) {
    /*
        > entries2Dict([['a','b'],[1,2]])
        { '1': 2, a: 'b' }
    */
    let d = {}
    for(let i=0;i<entries.length;i++) {
        d[entries[i][0]] = entries[i][1]
    }
    return(d)
}

function dictEle2Str(d,sp="=") {
    /*
        > dictEle2Str({1:2},'=')
        '1=2'
    */
    let [k,v] = Object.entries(d)[0]
    return(k+sp+v)
}

function str2DictEle(s,sp='=') {
    /*
        > str2DictEle('1=2','=')
        { '1': '2' }
    */
    let entry = s.split(/[ ]*=[ ]*/)
    return(entries2Dict([entry]))
}


function b64Encd(os) {
    let buf  = Buffer.from(s)
    return(buf.toString('base64'))
}

function b64Dcd(b64s) {
    let buf = Buffer.from(b64s, 'base64')
    let os = buf.toString();
    return(os)
}

module.exports = {
    copy : copy,
    seconds2GMTString : seconds2GMTString,
    fmtDayName : fmtDayName,
    fmtMonthName : fmtMonthName,
    fmtHours : fmtHours,
    fmtMinutes : fmtMinutes,
    fmtSeconds : fmtSeconds,
    dateStr2Dict : dateStr2Dict,
    dateDict2Str : dateDict2Str,
    quoteIfNecessary : quoteIfNecessary,
    quoteTokenize : quoteTokenize,
    entries2Dict : entries2Dict,
    dictEle2Str : dictEle2Str,
    str2DictEle : str2DictEle,
    b64Encd : b64Encd,
    b64Dcd : b64Dcd
}







