const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%","*","/","-","+/-","+","="];
let output = "";

const calculate = (btnValue) => {
    if(btnValue == "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }else if(btnValue === "Ac"){
        output = "";
    }else if(btnValue === "Del"){
        output=output.toString().slice(0,-1);
    }else{
        if(output === "" && specialchars.includes(btnValue)) return;
        output += btnValue;

    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));

})
