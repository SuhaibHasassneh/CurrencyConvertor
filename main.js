var exchangeForm = document.querySelector(".exchangeForm");

exchangeForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    var data = '';
    if(elements[1].value === 'nis'){
        data = elements[0].value;
    }else if(elements[1].value === 'dollar'){
        data = elements[0].value / 3.5;
    }else if(elements[1].value === 'dinar'){
        data = elements[0].value / 5;
    }else{
        console.log("Notfound");
    }
    document.querySelector(".currConvert").innerHTML = `The Value : ${data} ${elements[1].value}`;
}
