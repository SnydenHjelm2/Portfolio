async function countryByName(country) {
    if (country === "Democratic Republic of the Congo" || country === "DRC") {country = "Congo, The Democratic Republic Of The"}
    else if (country === "South Korea") {country = "Korea, Republic Of"}
    else if (country === "North Korea") {country = "Korea, Democratic People's Republic Of"}
    else if (country === "Laos") {country = "Lao People's Democratic Republic"}
    let req = new Request(`https://api.api-ninjas.com/v1/country?name=${country}`, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    });

    let resp = await fetch(req);
    let reso = await resp.json();
    return reso;
}

function hideGames(game) {
    document.querySelectorAll(".game").forEach((x) => {
        x.style.display = "none";
    });
    game.style.display = "block";
}

function randCountry(countries) {
    return countries[Math.floor(Math.random() * countries.length)];
}

function startGame(game) {
    switch (game) {
        case "area": {
            hideGames(areaGame);
            areaGameInput.value = "";
            areaGameInput.placeholder = "Enter country";
            areaGameTitle.textContent = "";
            areaGameStatus.textContent = "...";
            let rand = Math.floor(Math.random() * Object.keys(areas).length);
            area1 = areas[rand].area1;
            area2 = areas[rand].area2;

            if (area2 === undefined) {
                areaGameTitle.textContent = `Name a country that has an area above ${area1.toLocaleString("se-SE")}km²`;
            } else {
                areaGameTitle.textContent = `Name a country that has an area between ${area1.toLocaleString("se-SE")}km² and ${area2.toLocaleString("se-SE")}km²`;
            }
            break;
        }

        case "capital": {
            hideGames(capitalGame);
            capitalGameStatus.textContent = "...";
            capitalGameInput.value = "";
            capitalGameInput.placeholder = "Enter Capital";
            randomCountry = randCountry(countries);
            capitalGameCountry.textContent = `${randomCountry.name} ${randomCountry.flag}`;
            break;
        }

        case "currency": {
            hideGames(currencyGame);
            currencyGameStatus.textContent = "...";
            currencyGameInput.value = "";
            currencyGameInput.placeholder = "Enter Currency";
            randomCountry = randCountry(countries);
            currencyGameCountry.textContent = `${randomCountry.name} ${randomCountry.flag}`;
            break;
        }
        
        case "population": {
            hideGames(populationGame);
            populationGameStatus.textContent = "...";
            populationGameInput.value = "";
            populationGameInput.placeholder = "Enter Country";

            let rand = Math.floor(Math.random() * Object.keys(populations).length);
            pop1 = populations[rand].pop1;
            pop2 = populations[rand].pop2;

            if (pop2 === undefined) {
                populationGameTitle.textContent = `Name a country that has a population above ${pop1.toLocaleString("se-SE")} people`;
            } else {
                populationGameTitle.textContent = `Name a country that has a population between ${pop1.toLocaleString("se-SE")} people and ${pop2.toLocaleString("se-SE")} people`;
            }
            break;
        }

        case "gdp": {
            hideGames(gdpGame);
            gdpGameStatus.textContent = "...";
            gdpGameInput.value = "";
            gdpGameInput.placeholder = "Enter country";

            let rand =  Math.floor(Math.random() * Object.keys(gdps).length);
            gdp1 = gdps[rand].gdp1;
            gdp2= gdps[rand].gdp2;

            if (gdp2 === undefined) {
                gdpGameTitle.textContent = `Name a country that has a GDP per capita bigger than $${gdp1.toLocaleString("se-SE")} (USD)`;
            } else {
                gdpGameTitle.textContent = `Name a country that has a GDP per capita between $${gdp1.toLocaleString("se-SE")} and $${gdp2.toLocaleString("se-SE")} (USD)`;
            }
            break;
        }

        default:
            console.warn("broke");
    }
}