//Rest countries API and display all the countries names,regions,sub-region and populations in the console

const abc = new XMLHttpRequest();
abc.open("GET","https://restcountries.com/v2/all");
abc.send();
abc.responseType="json";
abc.onload = function(){
    var result = abc.response;
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name.toUpperCase());
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
    }