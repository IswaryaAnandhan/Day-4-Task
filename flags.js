//Rest countries API and display all the countries flags in the console

const req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.responseType="json";
req.onload = function(){
    var result = req.response;
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name.toUpperCase());
        console.log(result[i].flag);
    }
    }