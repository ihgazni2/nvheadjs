function creat_one_code(k) {
    let tem = `
    get ${k}() {
        return(getEngine("${k}",this))
    }
    set ${k}(value) {
        setEngine("${k}",value,this)
    }
`
    return(tem)
}

let arr = kl.map(creat_one_code)
let cd = arr.join("")
console.log(cd)
