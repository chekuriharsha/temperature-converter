const cel = window.document.getElementById("celsius");
const kel = window.document.getElementById("kelvin");
const far = window.document.getElementById("fahrenheit");

const button = window.document.getElementById("clsBtn");

const ip = window.document.getElementsByClassName("ip");//all 3 input field

for(let i=0 ; i<ip.length;i++){
    getValue = ip[i];
    getValue.addEventListener("input",function(e){
        let useValue = parseFloat(e.target.value);
        switch (e.target.name){
            case "celsius":
                kel.value = useValue + 273.15;
                far.value = useValue * 1.8 + 32;
                break;
            case "kelvin":
                cel.value = useValue - 273.15;
                far.value = (useValue - 273.15) * 1.8 + 32;
                break;
            case "fahrenheit":
                cel.value = (useValue-32) * 5/9;
                kel.value = (useValue-32) * 5 / 9 + 273.15;
                break;
        }
    });
}

button.addEventListener("click",function(){
    cel.value="";
    kel.value="";
    far.value="";
});