let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let bolish = document.querySelector('.bolish');
let kopaytirish = document.querySelector('.kopaytirish');
let  div = document.querySelector('.A');


plus.addEventListener('click', ()=> {
    let num1 = Number(inp1.value);
    let num2= Number(inp2.value);

    div.innerHTML = num1 + num2;

}

)

minus.addEventListener('click', ()=> {
    let num1 = Number(inp1.value);
    let num2= Number(inp2.value);

    div.innerHTML = num1 - num2;

}

)
bolish.addEventListener('click', ()=> {
    let num1 = Number(inp1.value);
    let num2= Number(inp2.value);

    div.innerHTML = num1 / num2;

}

)
kopaytirish.addEventListener('click', ()=> {
    let num1 = Number(inp1.value);
    let num2= Number(inp2.value);

    div.innerHTML = num1 * num2;

}

)