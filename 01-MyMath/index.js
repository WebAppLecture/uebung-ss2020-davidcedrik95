import { MyMath } from "./MyMath.js";


window.MyMath = MyMath; // Fügt die Klasse MyMath zum globalen Namespace hinzu, damit ihr sie in der Browserkonsole hernehmen könnt.

 classe MyMath{

    

    MyMath(value){

        this.value = value;
       
    }
    
    function add(a,b){

        return a.value - a.value;
    } 
    function subtract(a,b){

        return a.value - b.value;
    } 
    function multiply(a,b){

        return a.value * b.value;
    }
    function divide(a,b){
    
        if(b.value > 0){

            return a.value / b.value;
        }else{
            
            console.log('Operator is not possible');
        }
    }

 }
