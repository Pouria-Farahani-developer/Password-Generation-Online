const lengthE1 = document.getElementById('length');
const uppercaseE1 = document.getElementById('uppercase');
const lowercaseE1  = document.getElementById('lowercase');
const numberE1 = document.getElementById('numbers');
const SymbolsE1 = document.getElementById('symbols');
const generateE1 = document.getElementById('generate');
const resultE1 = document.getElementById('result');
const clipboard = document.getElementById('clipboard');





const randfunc = {
    upper : getrandomuppercase , 
    lower : getrandomlowercase ,
    number :  getrandomnumber , 
    Symbol : getrandomsymbols
}


clipboard.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = document.querySelector('.txt').innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})


generateE1.addEventListener('click',function(){
    const length = +lengthE1.value;
    const hasuppercase = uppercaseE1.checked;
    const haslowercase = lowercaseE1.checked;
    const hasnumber = numberE1.checked;
    const hassymbol = SymbolsE1.checked;
    resultE1.innerText = generatepassword(hasuppercase,haslowercase,hasnumber,hassymbol,length)
})


function generatepassword(upper,lower,number,Symbol,length){
    let generatepassword = '';  
    const typeconut = upper + lower + number + Symbol;

    const typearr = [{upper},{lower},{number},{Symbol}].filter(item => Object.values(item)[0])

    if(typeconut === 0 ){
        return '';
    }



    for(let i=0 ; i<length ; i+=typeconut){
        typearr.forEach(type =>  {
            const funcname = Object.keys(type)[0];
            generatepassword += randfunc[funcname]();
        })
    }
    
    const finalpassword = generatepassword.slice(0,length)
    
    return generatepassword;
}

function getrandomuppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getrandomlowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getrandomnumber(){
    return +String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getrandomsymbols(){
    const Symbols = '!@#$%^&*(){}[]=<>/,.';
    return Symbols[Math.floor(Math.random()*Symbols.length)]
}

