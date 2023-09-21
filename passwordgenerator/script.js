const elResult = document.getElementById('result');
const elLength = document.getElementById('length');
const elUppercase = document.getElementById('uppercase');
const elLowercase = document.getElementById('lowercase');
const elNumber = document.getElementById('numbers');
const elSymbol = document.getElementById('symbols');
const elGenerate = document.getElementById('generate');
const elClipboard = document.getElementById('clipboard');

const randomFunc = {
    useLower:getRandomLower,
    useUpper:getRandomUpper,
    useNumber:getRandomNumber,
    useSymbol:getRandomSymbol
}






function generatePassword (length,useUpper,useLower,useNumber,useSymbol){
    let generatedPassword = '';
    const typesCount = useUpper + useLower + useNumber + useSymbol;
    const typesArray = [{useLower}, {useUpper}, {useNumber}, {useSymbol}]
        .filter(item => Object.values(item)[0]);
    

    if(typesCount === 0){
        return '';
    }

    for(let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
        
    }
    
    const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;
}


function getRandomLower(){
    const lBound = 97;
    const random = Math.floor(Math.random() * 26) + lBound;

    return String.fromCharCode(random);
}

function getRandomUpper(){
    const lBound = 65;
    const random = Math.floor(Math.random() * 26) + lBound;
    
    return String.fromCharCode(random);
}

function getRandomSymbol(){
    const usableSymbols = '!@#$%^&*(){}[]=<>/,.'
    const random = Math.floor(Math.random() * usableSymbols.length);
    
    return usableSymbols[random];
}

function getRandomNumber(){
    const lBound = 48;
    const random = Math.floor(Math.random() * 10) + lBound;
    
    return String.fromCharCode(random);
}

elGenerate.addEventListener('click', () => {
    const length = elLength.value;
    const useUpper = elUppercase.checked;
    const useLower = elLowercase.checked;
    const useNumber = elNumber.checked;
    const useSymbol = elSymbol.checked;
    elResult.innerText = generatePassword(length,useUpper,useLower,useNumber,useSymbol)
})

elClipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = elResult.innerText

    if(!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password has been copied to clipboard');
})