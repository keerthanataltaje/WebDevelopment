const calculate=(n1,operator,n2)=>
{
    let result=''
    if(operator==='add')
        result=parseFloat(n1)+parseFloat(n2)
    else if(operator==='subtract')
        result=parseFloat(n1)-parseFloat(n2)
    else if(operator==='multiply')
        result=parseFloat(n1) * parseFloat(n2)
    else if(operator==='divide' && n2!=='0')
        result=parseFloat(n1)/parseFloat(n2)
    else if(operator==='divide'&& n2==='0')
        result=error
    return result
}

const calculator =  document.querySelector('.calculator')
const calculator_keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
calculator_keys.addEventListener('click',e =>{

if(e.target.matches('button')){
    const key_pressed = e.target
    const action = key_pressed.dataset.action
    const key_content =key_pressed.textContent
    const displayContent = display.textContent


    if(!action){
        if(displayContent==='0'){
            display.textContent= key_content
        }
        else{
            display.textContent= displayContent+key_content
        }
    }

    if(
        action==='add'||
        action==='subtract'||
        action==='multiply'||
        action==='divide'
    ){
        calculator.dataset.firstvalue=displayContent
        calculator.dataset.operator=action
        display.textContent=''
        //display.textContent= displayContent+key_content
    }

    if(action==='decimal'){
       
        display.textContent = displayContent+'.'
    }
    if(action==='clear'){
        display.textContent='0'
    }
    if(action==='calculate'){
        const value1=calculator.dataset.firstvalue
        console.log(value1)
        const op=calculator.dataset.operator
        console.log(op)
        const value2=displayContent
        console.log(value2)
        display.textContent = calculate(value1,op,value2)
    }
}
})
