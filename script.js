function contar(){
    var ini = document.getElementById("txt1");
    var fim = document.getElementById("txt2");
    var pas = document.getElementById("txt3");
    var res = document.getElementById("res")
    if (ini.value.lenght == 0){
        window.alert("INVÁLIDO! VocÊ não preencheu os dados corretamente");
    } else {
        res.innerHTML = "Aguardando contagem ..."
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);
        if(p <= 0){
            alert("INVÁLIDO!");
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
}
function tabuada(){
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    if (num.value.lenght == 0){
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value);
        var c = 1
        document.getElementById('seltab');
        tab.innerHTML = ''
        while (c<= 10){
            var item = document.createAttribute('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } 
    }
}