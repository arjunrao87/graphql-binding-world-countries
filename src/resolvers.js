var axios = require("axios");

const BASE_SOURCE_URL = 'https://restcountries.eu/rest/v2';

const makeRequest = url => axios.get(url).then(response => response.data).catch((error) => {
  throw error;
});

const getURL = (input, baseURL) => {
  let url = baseURL;
  let numberOfFilters = 0;
  if (input.name) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {name} along with other search parameters!');
    }
    url = `${url}/name/${input.name}`;
  }
  if (input.fullName) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {fullName} along with other search parameters!');
    }
    const fullName = input.fullName.toLowerCase();
    url = `${url}/name/${fullName}?fullText=true`;
  }
  if (input.isoCodes) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {isoCodes} along with other search parameters!');
    }
    const codes = input.isoCodes.join(';');
    url = `${url}/alpha?codes=${codes}`;
  }
  if (input.currency) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {currency} along with other search parameters!');
    }
    url = `${url}/currency/${input.currency}`;
  }
  if (input.language) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {language} along with other search parameters!');
    }
    url = `${url}/lang/${input.language}`;
  }
  if (input.capital) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {capital} along with other search parameters!');
    }
    url = `${url}/capital/${input.capital}`;
  }
  if (input.callingCode) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {callingCode} along with other search parameters!');
    }
    url = `${url}/callingcode/${input.callingCode}`;
  }
  if (input.region) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {region} along with other search parameters!');
    }
    url = `${url}/region/${input.region}`;
  }
  if (input.regionalBlock) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {regionalBlock} along with other search parameters!');
    }
    url = `${url}/regionalbloc/${input.regionalBlock}`;
  }
  if (input.allCountries) {
    numberOfFilters += 1;
    if (numberOfFilters > 1) {
      throw Error('Cannot specify {allCountries} along with other search parameters!');
    }
  }
  return url;
};

const resolvers = {
  Query: {
    countries: (_, { input }) => {
      console.log(JSON.stringify(input))
      const url = getURL(input, BASE_SOURCE_URL);
      return makeRequest(url);
    },
  },
  Country: {
    latitude: country => (country.latlng ? country.latlng[0] : null),
    longitude: country => (country.latlng ? country.latlng[1] : null),
  },
};

module.exports = resolvers;
