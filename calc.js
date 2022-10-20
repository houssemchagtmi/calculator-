let buttons =Array.from( document.getElementsByClassName('button'))
let result = document.getElementById('res') 
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch (e.target.innerText) {
            case "C":
                result.innerText =""
                break;
        case "←":
            result.innerText = result.innerText.slice(0,-1);
            break;
            case"=":
            try {
    
                result.innerText = eval(result.innerText)
                
            } catch  {
                result.innerText= 'error'
            }
            break;
            default:
                result.innerText += e.target.innerText
                break;
            }
        })})