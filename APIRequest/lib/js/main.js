let url_randomuser_api = "https://randomuser.me/api";

fetch(url_randomuser_api)
    .then(function(response) {
        return response.json();
    }).then(function(myJson) {
        let email = myJson.results[0].email;
        let p = document.createElement("p")
        p.innerHTML = email;
        document.body.appendChild(p);
    });