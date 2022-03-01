// Write function called getRandomNumber that returns a promise
function getRandomNumber() {
    return new Promise((resolve, reject) =>
		// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
        setTimeout(() => {
            resolve(Math.random());
        }, 500)
    );
}

 // Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
async function awaitGetRandomNumber() {
    const num = await getRandomNumber();
    console.log(num);
}

/*  Write an asynchronous function that accepts 1 parameter
	* A city name
async function printCityData(cityName) {
	/* When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:
	https://geocode.xyz/seattle?json=1 */
async function printCityData(cityName) {
    const res = await fetch(`https://geocode.xyz/${cityName}?json=1&auth=190505517666029746659x121886`);
    if (res.ok) {
		// Once retrieved, print to the console the latitude and longitude
        const cityData = await res.json();
        console.log(`lattitude: ${cityData.latt}`);
        console.log(`longitude: ${cityData.longt}`);
    } else {
        const body = await res.text();
        console.log(`Error: Got status code ${res.status}`);
        console.log(`Response body: ${body}`);
    }
}
// Invoke your async function
awaitGetRandomNumber();
// Invoke your async function with a few cities as a test
printCityData("New Orleans");
