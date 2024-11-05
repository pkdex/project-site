// Define data for states, cities, counties, and villages
const locationData = {
    california: {
        cities: {
            los_angeles: ['Los Angeles County', 'Orange County'],
            san_francisco: ['San Francisco County', 'Marin County']
        },
        counties: {
            'Los Angeles County': ['Beverly Hills', 'Hollywood'],
            'Orange County': ['Anaheim', 'Irvine'],
            'San Francisco County': ['Chinatown', 'Fisherman\'s Wharf'],
            'Marin County': ['Sausalito', 'Tiburon']
        }
    },
    texas: {
        cities: {
            dallas: ['Dallas County', 'Collin County'],
            Houston: ['Harris County', 'Fort Bend County']
        },
        counties: {
            'Dallas County': ['Irving', 'Garland'],
            'Collin County': ['Plano', 'Frisco'],
            'Harris County': ['Pasadena', 'Baytown'],
            'Fort Bend County': ['Sugar Land', 'Missouri City']
        }
    },
    new_york: {
        cities: {
            new_york_city: ['New York County', 'Kings County'],
            buffalo: ['Erie County', 'Niagara County']
        },
        counties: {
            'New York County': ['Manhattan', 'Harlem'],
            'Kings County': ['Brooklyn', 'Williamsburg'],
            'Erie County': ['Amherst', 'Tonawanda'],
            'Niagara County': ['Niagara Falls', 'Lewiston']
        }
    }
}; // generated examples with chat gpt 

// DOM Elements
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const countySelect = document.getElementById('county');
const villageSelect = document.getElementById('village');

// Populate cities based on state selection
stateSelect.addEventListener('change', function() {
    const state = this.value;
    citySelect.innerHTML = '<option value="">Select City</option>';
    countySelect.innerHTML = '<option value="">Select County</option>';
    villageSelect.innerHTML = '<option value="">Select Village</option>';
    citySelect.disabled = true;
    countySelect.disabled = true;
    villageSelect.disabled = true;

    if (state) {
        const cities = Object.keys(locationData[state].cities);
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city.replace('_', ' ');
            citySelect.appendChild(option);
        });
        citySelect.disabled = false;
    }
});

// Populate counties based on city selection
citySelect.addEventListener('change', function() {
    const state = stateSelect.value;
    const city = this.value;
    countySelect.innerHTML = '<option value="">Select County</option>';
    villageSelect.innerHTML = '<option value="">Select Village</option>';
    countySelect.disabled = true;
    villageSelect.disabled = true;

    if (city) {
        const counties = locationData[state].cities[city];
        counties.forEach(county => {
            const option = document.createElement('option');
            option.value = county;
            option.textContent = county;
            countySelect.appendChild(option);
        });
        countySelect.disabled = false;
    }
});

// Populate villages based on county selection
countySelect.addEventListener('change', function() {
    const state = stateSelect.value;
    const county = this.value;
    villageSelect.innerHTML = '<option value="">Select Village</option>';
    villageSelect.disabled = true;

    if (county) {
        const villages = locationData[state].counties[county];
        villages.forEach(village => {
            const option = document.createElement('option');
            option.value = village;
            option.textContent = village;
            villageSelect.appendChild(option);
        });
        villageSelect.disabled = false;
    }
});