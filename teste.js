function somar(){
    var dig1 = window.document.getElementById('calc')
    var dig2 = window.document.getElementById('calc1')
    var res = window.document.querySelector("div#res")
    var calc = Number(dig1.value)
    var calc1 = Number(dig2.value)
    var s = calc + calc1
    res.innerHTML = `a soma entre ${calc} e ${calc1} é igual a ${s}`
}