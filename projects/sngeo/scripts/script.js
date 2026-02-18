//Area obj
const areas = {
    0: {area1: 0, area2: 20000},
    1: {area1: 20000, area2: 50000},
    2: {area1: 50000, area2: 100000},
    3: {area1: 100000, area2: 200000},
    4: {area1: 200000, area2: 500000},
    5: {area1: 500000, area2: 800000},
    6: {area1: 800000, area2: 1200000},
    7: {area1: 1200000, area2: 2000000},
    8: {area1: 2000000}
}

//GDP obj 
const gdps = {
    0: {gdp1: 0, gdp2: 1000},
    1: {gdp1: 1000, gdp2: 5000},
    2: {gdp1: 5000, gdp2: 10000},
    3: {gdp1: 10000, gdp2: 20000},
    4: {gdp1: 20000, gdp2: 30000},
    5: {gdp1: 30000, gdp2: 40000},
    6: {gdp1: 40000, gdp2: 50000},
    7: {gdp1: 50000, gdp2: 70000},
    8: {gdp1: 70000}
}

//Populations obj 
const populations = {
    0: {pop1: 0, pop2: 100000},
    1: {pop1: 100000, pop2: 500000},
    2: {pop1: 500000, pop2: 1000000},
    3: {pop1: 1000000, pop2: 3000000},
    4: {pop1: 3000000, pop2: 5000000},
    5: {pop1: 5000000, pop2: 8000000},
    6: {pop1: 8000000, pop2: 15000000},
    7: {pop1: 15000000, pop2: 25000000},
    8: {pop1: 25000000, pop2: 50000000},
    9: {pop1: 50000000, pop2: 75000000},
    10: {pop1: 75000000, pop2: 100000000},
    11: {pop1: 100000000}
}

//Countries Array
const countries = [
  { name: "Afghanistan", flag: "🇦🇫" },
  { name: "Albania", flag: "🇦🇱" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Andorra", flag: "🇦🇩" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Antigua and Barbuda", flag: "🇦🇬" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Armenia", flag: "🇦🇲" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Azerbaijan", flag: "🇦🇿" },
  { name: "Bahamas", flag: "🇧🇸" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Barbados", flag: "🇧🇧" },
  { name: "Belarus", flag: "🇧🇾" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Belize", flag: "🇧🇿" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Bhutan", flag: "🇧🇹" },
  { name: "Bolivia", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { name: "Botswana", flag: "🇧🇼" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Brunei", flag: "🇧🇳" },
  { name: "Bulgaria", flag: "🇧🇬" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "Cabo Verde", flag: "🇨🇻" },
  { name: "Cambodia", flag: "🇰🇭" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Central African Republic", flag: "🇨🇫" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "China", flag: "🇨🇳" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Comoros", flag: "🇰🇲" },
  { name: "Republic of the Congo", flag: "🇨🇬", alias: "ROC"},
  { name: "Democratic Republic of the Congo", flag: "🇨🇩", alias: "DRC"},
  { name: "Costa Rica", flag: "🇨🇷" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Cuba", flag: "🇨🇺" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Djibouti", flag: "🇩🇯" },
  { name: "Dominica", flag: "🇩🇲" },
  { name: "Dominican Republic", flag: "🇩🇴" },
  { name: "Ecuador", flag: "🇪🇨" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "El Salvador", flag: "🇸🇻" },
  { name: "Equatorial Guinea", flag: "🇬🇶" },
  { name: "Eritrea", flag: "🇪🇷" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Eswatini", flag: "🇸🇿" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Fiji", flag: "🇫🇯" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "France", flag: "🇫🇷" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Grenada", flag: "🇬🇩" },
  { name: "Guatemala", flag: "🇬🇹" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Guinea-Bissau", flag: "🇬🇼" },
  { name: "Guyana", flag: "🇬🇾" },
  { name: "Haiti", flag: "🇭🇹" },
  { name: "Honduras", flag: "🇭🇳" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Iceland", flag: "🇮🇸" },
  { name: "India", flag: "🇮🇳" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Iran", flag: "🇮🇷" },
  { name: "Iraq", flag: "🇮🇶" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Israel", flag: "🇮🇱" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Jamaica", flag: "🇯🇲" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Kiribati", flag: "🇰🇮" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Kyrgyzstan", flag: "🇰🇬" },
  { name: "Laos", flag: "🇱🇦" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lebanon", flag: "🇱🇧" },
  { name: "Lesotho", flag: "🇱🇸" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Libya", flag: "🇱🇾" },
  { name: "Liechtenstein", flag: "🇱🇮" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Madagascar", flag: "🇲🇬" },
  { name: "Malawi", flag: "🇲🇼" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Marshall Islands", flag: "🇲🇭" },
  { name: "Mauritania", flag: "🇲🇷" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Micronesia", flag: "🇫🇲" },
  { name: "Moldova", flag: "🇲🇩" },
  { name: "Monaco", flag: "🇲🇨" },
  { name: "Mongolia", flag: "🇲🇳" },
  { name: "Montenegro", flag: "🇲🇪" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "Myanmar", flag: "🇲🇲" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Nauru", flag: "🇳🇷" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Nicaragua", flag: "🇳🇮" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "North Korea", flag: "🇰🇵" },
  { name: "North Macedonia", flag: "🇲🇰" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Palau", flag: "🇵🇼" },
  { name: "Panama", flag: "🇵🇦" },
  { name: "Papua New Guinea", flag: "🇵🇬" },
  { name: "Paraguay", flag: "🇵🇾" },
  { name: "Peru", flag: "🇵🇪" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { name: "Saint Lucia", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { name: "Samoa", flag: "🇼🇸" },
  { name: "San Marino", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", flag: "🇸🇹" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Seychelles", flag: "🇸🇨" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Solomon Islands", flag: "🇸🇧" },
  { name: "Somalia", flag: "🇸🇴" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "South Sudan", flag: "🇸🇸" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Sudan", flag: "🇸🇩" },
  { name: "Suriname", flag: "🇸🇷" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Syria", flag: "🇸🇾" },
  { name: "Tajikistan", flag: "🇹🇯" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Timor-Leste", flag: "🇹🇱" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Tonga", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", flag: "🇹🇹" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Turkmenistan", flag: "🇹🇲" },
  { name: "Tuvalu", flag: "🇹🇻" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Uruguay", flag: "🇺🇾" },
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "Vanuatu", flag: "🇻🇺" },
  { name: "Venezuela", flag: "🇻🇪" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Yemen", flag: "🇾🇪" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Kosovo", flag: "🇽🇰"},
  { name: "Vatican City", flag: "🇻🇦"}
];

//Variables
//Area Game
const areaGame = document.querySelector("#area-game");
const areaGameInput = document.querySelector("#area-game input");
const areaGameRestart = document.querySelector("#area-game .restart");
const areaGameStart = document.querySelector("#area");
const areaGameStatus = document.querySelector("#area-game .status");
const areaGameSubmit = document.querySelector("#area-game button");
const areaGameTitle = document.querySelector("#area-game h2");
//Capital game 
const capitalGame = document.querySelector("#capitals-game");
const capitalGameCountry = document.querySelector("#capitals-game .country");
const capitalGameInput = document.querySelector("#capitals-game input");
const capitalGameRestart = document.querySelector("#capitals-game .restart");
const capitalGameStart = document.querySelector("#capital");
const capitalGameStatus = document.querySelector("#capitals-game .status");
const capitalGameSubmit = document.querySelector("#capitals-game button");
//Currency Game
const currencyGame = document.querySelector("#currency-game");
const currencyGameCountry = document.querySelector("#currency-game .country");
const currencyGameInput = document.querySelector("#currency-game input");
const currencyGameRestart = document.querySelector("#currency-game .restart");
const currencyGameStart = document.querySelector("#currency");
const currencyGameStatus = document.querySelector("#currency-game .status");
const currencygameSubmit = document.querySelector("#currency-game button");
//GDP game 
const gdpGame = document.querySelector("#gdp-game");
const gdpGameInput = document.querySelector("#gdp-game input");
const gdpGameRestart = document.querySelector("#gdp-game .restart");
const gdpGameStart = document.querySelector("#gdp");
const gdpGameStatus = document.querySelector("#gdp-game .status");
const gdpGameSubmit = document.querySelector("#gdp-game button");
const gdpGameTitle = document.querySelector("#gdp-game h2");
//Population Game
const populationGame = document.querySelector("#population-game");
const populationGameInput = document.querySelector("#population-game input");
const populationGameRestart = document.querySelector("#population-game .restart");
const populationGameStart = document.querySelector("#population");
const populationGameStatus = document.querySelector("#population-game .status");
const populationGameSubmit = document.querySelector("#population-game button");
const populationGameTitle = document.querySelector("#population-game h2");
//Other
let area1;
let area2;
let gdp1;
let gdp2;
let pop1;
let pop2;
let randomCountry;

//Eventlisteners
areaGameRestart.addEventListener("click", () => {
   startGame("area");
});

areaGameStart.addEventListener("click", () => {
    startGame("area");
});

areaGameSubmit.addEventListener("click", async () => {
    let country = countries.find((x) => x.name.toLowerCase() === areaGameInput.value.toLowerCase() || String(x.alias).toLowerCase() === areaGameInput.value.toLowerCase());
    if (!country) {
        areaGameStatus.textContent = "Invalid country, try again";
        return;
    } else {
        let countryArr = await countryByName(country.name);
        if (countryArr[0].name === "Holy See (Vatican City State)") {
            countryArr[0].surface_area = 1;
        }
        if (area2 === undefined) {
            if (countryArr[0].surface_area > area1) {
                areaGameStatus.textContent = `Correct! ${country.name} ${country.flag} has an area of ${countryArr[0].surface_area.toLocaleString("se-SE")}km²`;
            } else {
                areaGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has an area of ${countryArr[0].surface_area.toLocaleString("se-SE")}km²`;
            }
        } else {
            if (countryArr[0].surface_area > area1 && countryArr[0].surface_area < area2) {
                areaGameStatus.textContent = `Correct! ${country.name} ${country.flag} has an area of ${countryArr[0].surface_area.toLocaleString("se-SE")}km²`;
            } else {
                areaGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has an area of ${countryArr[0].surface_area.toLocaleString("se-SE")}km²`;
            }
        }
    }
});

capitalGameRestart.addEventListener("click", () => {
    startGame("capital");
});

capitalGameStart.addEventListener("click", () => {
    startGame("capital");
});

capitalGameSubmit.addEventListener("click", async () => {
    let guess = capitalGameInput.value;
    if (guess === "") {
        capitalGameStatus.textContent = "Input is empty";
        return;
    } else {
        let countryArr = await countryByName(randomCountry.name);
        if (countryArr[0].capital.toLowerCase() === guess.toLowerCase()) {
            capitalGameStatus.textContent = `Correct! The capital of ${randomCountry.name} is ${countryArr[0].capital}`;
        } else {
            capitalGameStatus.textContent = `Incorrect! The capital of ${randomCountry.name} is ${countryArr[0].capital}`;
        }
    }
});

currencyGameRestart.addEventListener("click", () => {
    startGame("currency");
});

currencyGameStart.addEventListener("click", () => {
    startGame("currency");
}); 

currencygameSubmit.addEventListener("click", async () => {
    let guess = currencyGameInput.value;
    if (guess === "") {
        currencyGameStatus.textContent = "Input is empty";
        return;
    }
    let countryArr = await countryByName(randomCountry.name);
    if (countryArr[0].currency.name.toLowerCase() === guess.toLowerCase() || countryArr[0].currency.code.toLowerCase() === guess.toLowerCase()) {
        currencyGameStatus.textContent = `Correct! ${randomCountry.name} uses the ${countryArr[0].currency.name} (${countryArr[0].currency.code})`;
    } else {
        currencyGameStatus.textContent = `Incorrect! ${randomCountry.name} uses the ${countryArr[0].currency.name} (${countryArr[0].currency.code})`;
    }
});

gdpGameRestart.addEventListener("click", () => {
    startGame("gdp");
});

gdpGameStart.addEventListener("click", () => {
    startGame("gdp");
});

gdpGameSubmit.addEventListener("click", async () => {
    let guess = gdpGameInput.value;
    let country = countries.find((x) => x.name.toLowerCase() === guess.toLowerCase() || String(x.alias).toLowerCase() === guess.toLowerCase());
    if (!country) {
        gdpGameStatus.textContent = "Invalid country";
    } else {
        let countryArr = await countryByName(country.name);
        let gdpPerCapita = countryArr[0].gdp_per_capita;
        if (gdp2 === undefined) {
            if (gdpPerCapita > gdp1) {
                gdpGameStatus.textContent = `Correct! ${country.name} ${country.flag} has a GDP per capita of $${gdpPerCapita.toLocaleString("se-SE")} (USD)`;
            } else {
                gdpGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has a GDP per capita of $${gdpPerCapita.toLocaleString("se-SE")} (USD)`;
            }
        } else {
            if (gdpPerCapita > gdp1 && gdpPerCapita < gdp2) {
                gdpGameStatus.textContent = `Correct! ${country.name} ${country.flag} has a GDP per capita of $${gdpPerCapita.toLocaleString("se-SE")} (USD)`;
            } else {
                gdpGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has a GDP per capita of $${gdpPerCapita.toLocaleString("se-SE")} (USD)`;
            }
        }
    }
});

populationGameRestart.addEventListener("click", () => {
    startGame("population");
});

populationGameStart.addEventListener("click", () => {
    startGame("population");
});

populationGameSubmit.addEventListener("click", async () => {
    let country = countries.find((x) => x.name.toLowerCase() === populationGameInput.value.toLowerCase() || String(x.alias).toLowerCase() === populationGameInput.value.toLowerCase());
    if (!country) {
        populationGameStatus.textContent = "Invalid country";
        return;
    } else {
        let countryArr = await countryByName(country.name);
        let realPop = countryArr[0].population * 1000;
        console.log(countryArr, realPop);

        if (pop2 === undefined) {
            if (realPop > pop1) {
                populationGameStatus.textContent = `Correct! ${country.name} ${country.flag} has a population of ${realPop.toLocaleString("se-SE")}`;
            } else {
                populationGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has a population of ${realPop.toLocaleString("se-SE")}`;
            }
        } else {
            if (realPop > pop1 && realPop < pop2) {
                populationGameStatus.textContent = `Correct! ${country.name} ${country.flag} has a population of ${realPop.toLocaleString("se-SE")}`;
            } else {
                populationGameStatus.textContent = `Incorrect! ${country.name} ${country.flag} has a population of ${realPop.toLocaleString("se-SE")}`;
            }
        }
    }
});