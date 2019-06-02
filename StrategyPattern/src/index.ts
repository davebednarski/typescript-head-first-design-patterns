import DuckSimulator from "./DuckSimulator";

let duck = new DuckSimulator();
let simulations:string[] = [];

simulations.push(duck.simulateTalking());
simulations.push(duck.simulateQuack());
simulations.push(duck.simulateFly());
simulations.push(duck.simulateChangeBehaviorDynamically());

// UI Display
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Strategy Pattern</h1>
                    <p>${simulations.join('<br>')}</p>`;