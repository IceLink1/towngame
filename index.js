let zav1 = document.querySelector(".zav1")
let zav2 = document.querySelector(".zav2")
let zav3 = document.querySelector(".zav3")
let zav6 = document.querySelector(".zav6")
let buyInp = document.querySelector(".buyInp")
let btn1 = document.querySelector(".btn1")
let btn1Two = document.querySelector(".btn1Two")
let main = document.querySelector(".X")
let Btn = document.querySelector(".devclopBtnCash")
let XTwo = document.querySelector(".XTwo")
let buy = document.querySelector(".buy")
let buyTwo = document.querySelector(".buyTwo")
let cashInHTML = document.querySelector(".cash")
let devInp = document.querySelector(".inp")
let Uy 
let bank
let Allcash
let CashUser = 0
let cash = 0
let count1 = 0
let count2 = 0
let count3 = 0
let S = true
let S1 = true


// localStorage.setItem("uy","p")
// localStorage.setItem("bank","p")
// localStorage.setItem("cash",0)

loc2()
loc1()

Btn.addEventListener('click',()=>{
    if (devInp.value=="omad") {
        let c = localStorage.getItem("cash")
        c = parseInt(c)+1000
        localStorage.setItem("cash", c)
        CashInHTML()
    }
    
    if (devInp.value=="null") {
        let c = localStorage.getItem("cash")
        c = 0
        localStorage.setItem("cash", c)
        CashInHTML()
    }
})


if (Uy == 1) {
    uyCash()
    zav2.innerHTML = `
    <img src="home.png">
   `
} else {
    zav2.addEventListener('click', () => {
        if (S) {
            buy.style = "display:block;"
        }
    })
}
if (bank == 1) {
    bankCash()
    zav3.innerHTML = `
    <img src="home.png">
   `
} else {
    zav3.addEventListener('click', () => {
      if(S1){
        buyTwo.style = "display:block;"
      }
    })
}

function loc1() {
    Uy = localStorage.getItem("uy")
}
function loc2() {
    bank = localStorage.getItem("bank")
}
function loc() {
    Allcash = localStorage.getItem("cash")
}
function CashInHTML() {
    loc()
    cashInHTML.textContent = Allcash
}



function plus() {
    if (count1 < 20) {
        let a = setInterval(() => {
            count1++
            // console.log(count1);
            if (count1 == 20) {
                clearInterval(a)
                zav1.classList.add("tepa")
            }
        }, 500)
    }
}
function uyCash() {
    if (count2 < 40) {
        let a = setInterval(() => {
            count2++
            // console.log(count2);
            if (count2 == 40) {
                clearInterval(a)
                zav2.classList.add("tepa")
            }
        }, 250)
    }
}
function bankCash() {
    if (count3 < 60) {
        let a = setInterval(() => {
            count3++
            // console.log(count3);
            if (count3 == 60) {
                clearInterval(a)
                zav3.classList.add("tepa")
            }
        }, 100)
    }
}

zav6.addEventListener('click',()=>{
    buyInp.style="display:block;"
})
buyInp.addEventListener('dblclick',()=>{
    buyInp.style="display:none;"
})



zav1.addEventListener('click', () => {
    if (count1 == 20) {
        loc()
        CashUser = parseInt(Allcash) + count1
        window.localStorage.setItem("cash", CashUser)
        cashInHTML.textContent = CashUser
        zav1.classList.remove("tepa")
        count1 = 0
        plus()
    } else {
        console.log("o");
    }
})
zav2.addEventListener('click', () => {
    if (count2 == 40) {
        loc()
        CashUser = parseInt(Allcash) + count2
        window.localStorage.setItem("cash", CashUser)
        cashInHTML.textContent = CashUser
        zav2.classList.remove("tepa")
        count2 = 0
        uyCash()
    } else {
        console.log("o");
    }
})
zav3.addEventListener('click', () => {
    if (count3 == 60) {
        loc()
        CashUser = parseInt(Allcash) + count3
        window.localStorage.setItem("cash", CashUser)
        cashInHTML.textContent = CashUser
        zav3.classList.remove("tepa")
        count3 = 0
        bankCash()
    } else {
        console.log("o");
    }
})




// close //////////////////////////
main.addEventListener('click', () => {
    buy.style = "display:none;"
})
XTwo.addEventListener('click', () => {
    buyTwo.style = "display:none;"
})
// //////////////////////////////////




// Buy //////////////////////////////////
btn1.addEventListener('click', () => {
    if (Allcash > 100) {
        S = false
        localStorage.setItem("uy", 1)
        loc1()
        uyCash()
        let c = localStorage.getItem("cash")
        c = c - 100
        localStorage.setItem("cash", c)
        CashInHTML()
        buy.style = "display:none;"
        cashInHTML.textContent = Allcash
        zav2.innerHTML = `
        <img src="home.png">
       `
    }
})
btn1Two.addEventListener('click', () => {
    if (Allcash > 300) {
        S1 = false
        localStorage.setItem("bank", 1)
        loc2()
        bankCash()
        let c = localStorage.getItem("cash")
        c = c - 300
        localStorage.setItem("cash", c)
        CashInHTML()
        buyTwo.style = "display:none;"
        cashInHTML.textContent = Allcash
        zav3.innerHTML = `
        <img src="home.png">
       `
    }
})

// ////////////////////////////////////



loc()
plus()
CashInHTML()