import Main from "./Main";

let behaviorList:Array<string> = [];
let main = new Main();

// Create story
behaviorList.push(`<h4>Castle Siege</h4>`);
behaviorList.push(main.playTroll());

behaviorList.push(`<h4>Castle Defence</h4>`);
behaviorList.push(main.playArcher());
behaviorList.push(main.playKnight());
behaviorList.push(main.playKing());
behaviorList.push(main.playQueen());

behaviorList.push(`<h4>Troll defeated</h4>`);


// UI display
const appDiv: HTMLElement = document.getElementById('app');
let bodyContent = `<h1>Strategy Pattern Adventure Game</h1>
                    <p>${behaviorList.join('<br>')}</p>`;

appDiv.innerHTML = bodyContent;