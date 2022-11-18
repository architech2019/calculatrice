let value = document.getElementById("value")
let btn = document.querySelectorAll("span")

function operations(){
    switch(this.innerHTML){
        case "=" :
            value.innerHTML = eval(value.innerHTML)
            break;
        case "Clear" :
            value.innerHTML = ""
            break;
        default :
            value.innerHTML += this.innerHTML
    }
}

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", operations)
}