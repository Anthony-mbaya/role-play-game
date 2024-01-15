let xp = 0;
let qlt = 0;
let job = 0;
let sal = 0;

const xpButton = document.querySelector("#addXp");
const langButton = document.querySelector("#langEl");
const checkButton = document.querySelector("#checkEl");
const comment = document.querySelector("#comment");
const xpValue = document.querySelector("#xpVal");
const qltValue = document.querySelector("#qltVal");
const jobValue = document.querySelector("#jobVal");
const salValue = document.querySelector("#salVal"); 



const addXpFun = () =>{
    generalFun(generalArray[1]);
    }


const langFunc = () => {
           generalFun(generalArray[2]); 
    }

const backFunc = () => {
        generalFun(generalArray[0]);
        xpValue.innerText = xp;
        qltValue.innerText = qlt;
        jobValue.innerText = job;
        salValue.innerText = sal;
    }
    

const abvFunc = () =>{ 
    xp += 80;
    qlt += 73;
    job += 1040;
    sal += 90000;
    xpValue.innerText = xp;
    qltValue.innerText = qlt;
    jobValue.innerText = job;
    salValue.innerText = sal;
    xp = 0;
    qlt = 0;
    job = 0;
    sal = 0;
    comment.innerHTML =  "This is excellent wow!";
}

const lessFunc = () =>{
    xp += 40;
    qlt += 37;
    job += 490;
    sal += 50000;
    xpValue.innerText = xp;
    qltValue.innerText = qlt;
    jobValue.innerText = job;
    salValue.innerText = sal;
    xp = 0;
    qlt = 0;
    job = 0;
    sal = 0;  
    comment.innerHTML =  "Keep trying you will be the best";
}

const checkFunc = () =>{
    comment.innerText = "Having worked with over 5 programming companies you are a complete software engineer. \nHaving skills in either python or javascript you got a chance to be best software engineer."
}

const pyFunc = () =>{
    xp += 99;
    qlt += 87;
    job += 1500;
    sal += 95000;
    xpValue.innerText = xp;
    qltValue.innerText = qlt;
    jobValue.innerText = job;
    salValue.innerText = sal;
    xp = 0;
    qlt = 0;
    job = 0;
    sal = 0;  
    comment.innerHTML =  "This is a high quality language";
}

const jsFunc = () =>{
    xp += 96;
    qlt += 83;
    job += 1200;
    sal += 80000;
    xpValue.innerText = xp;
    qltValue.innerText = qlt;
    jobValue.innerText = job;
    salValue.innerText = sal;
    xp = 0;
    qlt = 0;
    job = 0;
    sal = 0;  
    comment.innerHTML =  "This is a basic programming language";
}

const generalArray = [
    {
        name: "Going back",
        btnText:["Add Experience","Languages","Check!"],
        btnFunc:[addXpFun,langFunc,checkFunc],
        commText:"You have added your experience."
    },
    {
        name: "Add Experience",
        btnText:["Above 5 companies","Less than 5 companies","Go Back"],
        btnFunc:[abvFunc,lessFunc,backFunc],
        commText:"Tell us quantity of companies you've worked"
    },
    {
        name:"Giving programming languages",
        btnText:["Python","JavaScript","Back"],
        btnFunc:[pyFunc,jsFunc,backFunc],
        commText:"Choose your stable programming language"
    }
]
 
xpButton.onclick = addXpFun;
langButton.onclick = langFunc; 
checkButton.onclick = checkFunc;

const generalFun = (location) =>{
xpButton.innerText = location.btnText[0];
langButton.innerText = location.btnText[1];
checkButton.innerText = location.btnText[2];

xpButton.onclick = location.btnFunc[0];
langButton.onclick = location.btnFunc[1];
checkButton.onclick = location.btnFunc[2]; 

comment.innerText = location.commText; 
}
 
const resetElement = document.getElementById("resetEl");
resetElement.addEventListener("click",function(){
    location.reload();
})

