'use strict';
(function() {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = document.getElementById('countries');
    var searchButton = document.getElementById('search');
    var inputField = document.getElementById('country-name');

    searchButton.addEventListener('click', searchCountries);

    function searchCountries() {
        var countryName = inputField.value;
        if(!countryName) { countryName = 'Poland'; }
        fetch(url + countryName)
            .then(function(resp) {
                return resp.json();
            })
            .then(showCountriesList)
            .catch(function(error) {
                countriesList.innerHTML = 'Not found!'
            });
    }

    function showCountriesList(resp) {
        countriesList.innerHTML = '';
        resp.forEach(function(item) {
            var listElement = document.createElement('li');
            listElement.innerText = item.name + ', ' + item.capital;
            countriesList.appendChild(listElement);
            console.log(item.name);
        });
    }

})();