
let display = document.getElementById("myDisplay")

let firstNumber,secondNumber

let bntDivide = document.getElementById("bntDivide")
let bntEquals = document.getElementById("bntEquals")
let bntPlus = document.getElementById("bntPlus")
let bntMinus = document.getElementById("bntMinus")
let bntClear = document.getElementById("bntDot")
let bntX = document.getElementById("bntX")

let bnt0 = document.getElementById("bnt0")
let bnt1 = document.getElementById("bnt1")
let bnt2 = document.getElementById("bnt2")
let bnt3 = document.getElementById("bnt3")
let bnt5 = document.getElementById("bnt5")
let bnt4 = document.getElementById("bnt4")
let bnt9 = document.getElementById("bnt9")
let bnt8 = document.getElementById("bnt8")
let bnt7 = document.getElementById("bnt7")
let bnt6 = document.getElementById("bnt6")

let arrayOfBtn = [bnt0,bnt1,bnt2,bnt3,bnt4,bnt5,bnt6,bnt7,bnt8,bnt9,bntDivide
,bntMinus,bntPlus,bntX]

function setDisplayText(bnt){

    if(bnt.innerText === "Clear"){
        firstNumber = 0
        secondNumber = 0
        display.innerText = ""
    }

    if(bnt.innerText === "-" || bnt.innerText === "+" 
    || bnt.innerText === "X" || bnt.innerText === "/"){
        console.log(bnt.innerText)
        firstNumber = display.innerText
        display.innerText = ""
    }
    
    if(bnt.innerText === "0" && display.innerText === ""){
        
    }else {
        display.innerText = display.innerText + bnt.innerText
    }
}



for(let i = 0; i < arrayOfBtn.length; i++){
    arrayOfBtn[i].addEventListener("click", () => {
        setDisplayText(arrayOfBtn[i])
    })
}





//get math operation

//get second number

//show result
