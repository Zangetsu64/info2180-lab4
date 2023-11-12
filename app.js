window.onload = function(){
    var search = document.getElementById("searchButton");
    var result = document.getElementById("result");
    var inputfield = document.getElementById("inputfield")
    
    search.addEventListener('click', (e)=> {
        e.preventDefault();
        console.log('click');

        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'http:localhost/info2180-lab4/superheroes.php?query='+ inputfield.value, true);
        httpRequest.send();

        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status == 200) {
                    var results = httpRequest.responseText;
                    result.innerHTML = results
                  
            } else {
                alert("Error");
                }
            }
        }        
})} 

  
