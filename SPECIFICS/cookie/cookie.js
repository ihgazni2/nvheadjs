function cookieStr2Dict(s) {
    /*
     * var s = 'YYID=9BF0501A24A059D6C74B0437CFCAF012; CXID=3899AD49858499CE9216C6n7pUhY0PqCGdVowyPDzv2BTJJIcrlg+5O6VhWpEVfiz+Hcs56IdtI/sK1+a54S4iYZFIMEVER=9.4.0.3336; SUV=005798E07CA448D85DCCA4BF9F83C812'
     * > cookieStr2Dict(s)
        { 
          YYID: '9BF0501A24A059D6C74B0437CFCAF012',
          CXID:
              '3899AD49858499CE9216C6n7pUhY0PqCGdVowyPDzv2BTJJIcrlg+5O6VhWpEVfiz+Hcs56IdtI/sK1+a54S4iYZFIMEVER,9.4.0.3336',
          SUV: '005798E07CA448D85DCCA4BF9F83C812' 
        }
     */
    let d = {}
    let arr = s.split(/;[ ]+/)
    for(let i=0;i<arr.length;i++) {
        let entry = arr[i]
        entry = entry.split(/[ ]*=[ ]*/)
        if(entry.length >= 2) {
            d[entry[0]] = entry.slice(1).join()
        } else {
            d[entry[0]] = undefined
        }
    }
    return(d)
}

function cookieDict2Str(d) {
    /*
     * var d = 
     * { 
     *   YYID: '9BF0501A24A059D6C74B0437CFCAF012',
         CXID:
             '3899AD49858499CE9216C6n7pUhY0PqCGdVowyPDzv2BTJJIcrlg+5O6VhWpEVfiz+Hcs56IdtI/sK1+a54S4iYZFIMEVER,9.4.0.3336',
         SUV: '005798E07CA448D85DCCA4BF9F83C812'
       }
       
       > cookieDict2Str(d)
             'YYID=9BF0501A24A059D6C74B0437CFCAF012; CXID=3899AD49858499CE9216C6n7pUhY0PqCGdVowyPDzv2BTJJIcrlg+5O6VhWpEVfiz+Hcs56IdtI/sK1+a54S4iYZFIMEVER,9.4.0.3336; SUV=005798E07CA448D85DCCA4BF9F83C812'
     */
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

module.exports = {
    cookieStr2Dict : cookieStr2Dict,
    cookieDict2Str : cookieDict2Str
}
