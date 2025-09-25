import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Day
interface day {
    weather: string;
    p_cups: number;
    p_lemons: number;
    p_ice: number;
    p_sugar: number;
}

//Choices
interface player_choice {
    lemonade_count: number;
    price: number;
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;

}

//Inventory
interface inventory {
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;

}

//Weather
let weather: string[] = ['Hot', 'Cloudy', 'Clear'];

//In the future, randomize prices day by day
let day: day = {
    weather: getRandomElement(weather),
    p_cups: 0.05,
    p_lemons: 0.07,
    p_ice: 0.01,
    p_sugar: 0.02
}

function getRandomElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let player_inventory: inventory = {
    cups: 0,
    ice: 0,
    lemons: 0,
    sugar: 0

}

var cash_balance: number = 2.00;
//Day loop
for(let i = 1; i < 5; i++) {
    let today_weather = getRandomElement(weather);
    let player: player_choice = {
        lemonade_count: 0,
        price: 0,
        cups: 0,
        lemons: 0,
        ice: 0,
        sugar: 0
    };
    console.log(`It is day ${i}.`);
    console.log(`The weather is ${today_weather}.`);
    console.log(`Your cash balance: $${cash_balance}`)
    console.log(`Here are the prices of supplies. (per cup of lemonade)`);
    console.log(`Cups = ${day.p_cups}`);
    console.log(`Lemons = ${day.p_lemons}`);
    console.log(`Ice = ${day.p_ice}`);
    console.log(`Sugar = ${day.p_sugar}`);
    console.log(`How much do you want to buy?`);

    const prompt = require('prompt-sync')();
    player.cups = Number(prompt('cups: '));
    player.lemons = Number(prompt('lemons: '));
    player.ice = Number(prompt('ice: '));
    player.sugar = Number(prompt('sugar: '));
    // console.log('\nAll ingredients set:', player);

    player_inventory.cups += player.cups;
    player_inventory.lemons += player.lemons;
    player_inventory.ice += player.ice;
    player_inventory.sugar += player.sugar;

    var expense: number = 
    player.cups * day.p_cups +
    player.ice * day.p_ice +
    player.lemons * day.p_lemons + 
    player.sugar * day.p_sugar;

    console.log(`Total expense: $${expense}`)

    var expense_per_lemonade: number = 
    day.p_cups + day.p_ice + day.p_lemons + day.p_sugar;

    console.log(`Inventory: ${console.log(player_inventory)}`)
    player.lemonade_count = Number(prompt(`How many cups do you want to make? Cost per lemonade: ${expense_per_lemonade}: `));
    player.price = Number(prompt(`How much for each lemonade?: $`));
    var ratio = 0;
    if (today_weather = "Hot") {
        ratio = 0.8;
    } else if (today_weather = "Cloudy") {
        ratio = 0.3;
    } else {
        ratio = 0.5;
    }

    var cups_sold = ratio * player.lemonade_count;
    var revenue = cups_sold * player.price;
    cash_balance += (revenue - expense);

    console.log(`Lemonade sold: ${cups_sold}`);
    console.log(`Revenue: ${revenue}`);
    console.log(`Expense: ${expense}`);
    console.log(`Net revenue: ${revenue - expense}`);
    console.log(`Cash balance: ${cash_balance}`);

}
