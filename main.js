const dataHtmlRes = document.getElementById('display');
const button = document.getElementById('t');
const loader = document.getElementById('fa');


const url = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json';


button.addEventListener('click', function() {
    //resets the response
    button.innerText= " checking... ";
    dataHtmlRes.innerText = "";


fetch(url)
    .then(function(response){
        //removes the loader
        
         return response.text();
    }).then(function(text){
        button.innerText= " Done!";
        dataHtmlRes.innerText = text;
    })
    .catch (function(error){
        //removes the loader
        button.innerText= " Done! Error";
        dataHtmlRes.innerText = error.message;
            // dataHtmlRes.innerText = error.message = "stuff worked men!";

    })
});

