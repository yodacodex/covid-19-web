const CountriesList = document.getElementById('CountriesList');
const searchBar = document.getElementById('searchBar');
let CovidCountries = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCountries = CovidCountries.filter((countries) => {
        return (
            countries.country.toLowerCase().includes(searchString) 
            
        );
    });
    displayCountries(filteredCountries);
});

const loadCountries = async () => {
    try {
        const res = await fetch('https://corona.lmao.ninja/v2/countries');
        CovidCountries = await res.json();
        displayCountries(CovidCountries);
    } catch (err) {
        console.error(err);
    }
};

/* Adds comma to bigger numbers */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayCountries = (countries) => {
    const htmlString = countries
        .map((countries) => {
            return `
            <li class="Country">
                <h6>${countries.country}</h6>
                <p><br>Cases: ${numberWithCommas(countries.cases)}</p>
                <p><br><br>Active: ${numberWithCommas(countries.active)}</p>
                <img src="${countries.countryInfo.flag}"></img>
            </li>
        `;
        })
        .join('');
    CountriesList.innerHTML = htmlString;
};

loadCountries();

