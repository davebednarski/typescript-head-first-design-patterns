import DuckSimulator from "./DuckSimulator";

let duck = new DuckSimulator();
let simulations:string[] = [];

simulations.push(duck.simulationMallardTalking());
simulations.push(duck.simulateMallardQuack());
simulations.push(duck.simulateMallardFly());

// UI Display
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Strategy Pattern</h1>
                    <p>${simulations.join('<br>')}</p>`;