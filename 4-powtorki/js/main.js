'use strict';
$(function (){
    var jsonUrl = "http://leguralnie.pl/json/ogloszenia-json.json";
    var output = $('.offers');
    var myHTML = "";
    
    var getData = function () {
        $.ajax({
            url: jsonUrl,
            dataType: 'json',
            success: function(response){
                response.forEach(function(element, i){
                    myHTML = myHTML + "<div class='offer'>";
                        myHTML = myHTML + "<figure class='offer__image'>";
                            myHTML = myHTML + "<img src='" + element.image + "'>";
                        myHTML = myHTML + "</figure>";
                        myHTML = myHTML + "<div class='offer__description'>";
                            myHTML = myHTML + "<small>ID: " + element.id + "</small>";
                            myHTML = myHTML + "<h1>" + element.title + "</h1>";
                            myHTML = myHTML + "<p>" + element.description + "</p>";
                                myHTML = myHTML + "<small>";
                                    myHTML = myHTML + "Kategoria: " + element.category + "<br>";
                                    myHTML = myHTML + "Miasto: " + element.city + "<br>";
                                    myHTML = myHTML + "Kontakt: " + element.contact + "<br>";
                                myHTML = myHTML + "</small>";
                        myHTML = myHTML + "</div>";
                    myHTML = myHTML + "</div>";
                    
                    
                    
                });
                output.html(myHTML);
            }
        });
        

        
    };
    var btn = $('#get');
    
    btn.on('click', function(e){
        getData();
    })
    
    
});

