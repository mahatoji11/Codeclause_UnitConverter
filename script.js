let cm    = document.getElementById("cm");
let meter = document.getElementById("meter");
let km    = document.getElementById("km");
let inch  = document.getElementById("inch");
let yard  = document.getElementById("yard");
let feet  = document.getElementById("feet");
let miles = document.getElementById("miles");

function cmToOther(val){
    feet.value = val*0.032808;
    meter.value = val/100;  
    inch.value = val*0.39370;
    yard.value = val*0.010936; 
    km.value = val/100000 ;
    miles.value = val*0.0000062137;
}

function meterToOther(val){
    feet.value = val*3.2808;
    inch.value = val*39.370;  
    cm.value   = val/0.01;
    yard.value = val*1.0936; 
    km.value   = val/1000;
    miles.value = val*0.00062137;
}

function kmToOther(val){
    feet.value = val*3280.8;
    inch.value = val*39370;  
    cm.value = val*100000;
    yard.value = val*1093.6; 
    meter.value = val*1000;
    miles.value = val*0.62137;
}

function inchToOther(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;  
    cm.value = val/0.39370;
    yard.value = val*0.027778; 
    km.value = val/39370;
    miles.value = val*0.000015783;
}

function yardToOther(val){
    feet.value = val*3;
    inch.value = val*36;  
    cm.value = val/0.010936;
    meter.value = val/1.0936; 
    km.value = val/1093.6;
    miles.value = val*0.00056818;
}

function feetToOther(val){
    meter.value =  val/3.2808; 
    inch.value =  val*12;   
    cm.value    =  val/0.032808; 
    yard.value  =  val*0.33333;  
    km.value    =  val/3280.8; 
    miles.value  =  val*0.00018939;       
}

function milesToOther(val){
    feet.value = val*5280;
    inch.value = val*63360;  
    cm.value = val/0.0000062137;
    yard.value = val*1760; 
    km.value = val/0.62137;
    meter.value = val/0.00062137;
}

function convert(convertFrom, value) {
    switch (convertFrom) {
        case "cm"   : cmToOther(parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "km"   : kmToOther(parseFloat(value)); break;
        case "inch" : inchToOther(parseFloat(value)); break;
        case "yard" : yardToOther(parseFloat(value)); break;
        case "feet" : feetToOther(parseFloat(value)); break;
        case "miles": milesToOther(parseFloat(value)); break;
    }
}