
window.onload = () => { 

    let button = document.querySelector("#btn"); 

  

    // Function for calculating BMI 

    button.addEventListener("click", calculateBMI); 
}; 

  
function calculateBMI() { 
    

    /* Getting input from user into height variable. 

    Input is string so typecasting is necessary. */

    let height = parseInt(document 

            .querySelector("#height").value); 

   /* Getting input from user into weight variable.  

    Input is string so typecasting is necessary.*/

    let weight = parseInt(document 

            .querySelector("#weight").value); 


    let result = document.querySelector("#result"); 

   // checking user's input  

    if (height === "" || isNaN(height))  

        result.innerHTML = "Height invalid or missen!"; 

    else if (weight === "" || isNaN(weight))  

        result.innerHTML = "Weight ivalid or missen!"; 

  // calculating bmi

    else {  

        // fix to two decimal place

        let bmi = (weight / ((height * height)  

                            / 10000)).toFixed(2); 

  // checking for bmi conditions 

        if (bmi < 18.5) result.innerHTML = 

            `Your body mass is : <span style = "font-size: 50px"  "font-weight: 600"  "font-color: white">${bmi}</span>.`; 

        else if (bmi >= 18.6 && bmi < 24.9)  

            result.innerHTML =  

                `Your body mass is : <span style = "font-size: 50px"  "font-weight: 600"  "font-weight: 600"  "font-color: white">${bmi}</span>.`; 

        else result.innerHTML = 

            `Your body mass is : <span style = "font-size: 50px"  "font-weight: 600"  "font-weight: 600"  "font-color: white">${bmi}</span>.`; 

    } 
} 
 