
const inputvalue = document.getElementById('input');
const temptype = document.getElementById('temp-type');
const output = document.getElementById('output');
const button = document.getElementById('btn');
const keloutput = document.getElementById('keloutput');
const tempoutput = document.getElementById('temp-output')

temptype.addEventListener('change', temptypeChange);
button.addEventListener('click', submitHandler);

function temptypeChange(event) {
    const temp = event.target.value;
    if(temp === "deg"){
        output.innerHTML = "Fahrenheit";
    }
    else{
        output.innerHTML = "Degree";
    }
}


function submitHandler(){
    const value = parseFloat(inputvalue.value);
    
    if(temptype.value === "far"){
        const updatedValue = (value-32)*5/9;
        const kelValue = updatedValue + 273.15;
       
        keloutput.value = kelValue;
        tempoutput.value = updatedValue;
    }
    else{
        const kelValue = (value) + 273.15;
        const updatedValue = (value)*9/5 + 32;
        
      
        keloutput.value = kelValue;
        tempoutput.value = updatedValue;
    }
    
}


