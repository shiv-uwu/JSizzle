// ---------- //
// -SHIV-UWU- //
// ---------- //

console.log("Made by github.com/shiv-uwu")

async function fetchData() { // async function to fetch data from API
    try { // try-catch block to catch errors
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json(); // get JSON from response
        document.getElementById('data').innerHTML = `Title: ${data.title}<br>Completed: ${data.completed}`;
    } catch (error) {  // catch and log any errors
        console.error('Error:', error);
    }
}

fetchData(); // call function to fetch data