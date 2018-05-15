var btn = document.getElementById("btn");



function showData(arrData) {
    var html = "";
    arrData.forEach(function(elem, index) {
        
        btn.addEventListener.on('click', function(){
            
            html = html + "<p>Tytuł: <strong>" + elem.title + "</strong></p>"
        });
  
    });
    document.body.innerHTML = html;
}



function ajax(method, url) {
    'use strict';
//Tworzę obiekt XMLHttpRequest
var httpReq = new XMLHttpRequest();    
console.log(httpReq);
    
//Otwieram połączenie
httpReq.open( method, url );
    
//Zdarzenie zmiany statusu połączenia    
httpReq.addEventListener('readystatechange', function(){

//Jeślli readyState -- 4 - dane zwrócone i gotowe do użycia  
if (httpReq.readyState == 4) {
    
// sprawdź kod statusu odpowiedzi - interesuje nas najbardzije 200 
if (httpReq.status == 200) {
    var data = httpReq.responseText;
    var jsonData = JSON.parse(data);
    showData(jsonData);    
    }
}    
    
});  

httpReq.send();    
};

ajax("GET", "https://jsonplaceholder.typicode.com/posts/");