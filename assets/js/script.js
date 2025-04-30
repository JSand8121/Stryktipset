import {getResults} from "./api.js";
let table;

/**
 * Initial function on page load
 */
(function init() {
    table = document.querySelector('#table');
    
    setTable();
})();

/**
 * Fills table on webpage with information from api
 */
async function setTable() {
    const results = await getResults();

    try {
        
        results.forEach(game => {
            const tr = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.innerHTML = game.id;
            tr.appendChild(tdId);

            const tdTeams = document.createElement('td');
            game.teams.forEach((team, idx, arr) => {
                const link = document.createElement('a');
                link.href = team.homepage;
                link.innerHTML = team.teamName;

                tdTeams.appendChild(link);
                if (idx != arr.length-1) {
                    tdTeams.innerHTML += ' -VS- ';
                }
            });
            tr.appendChild(tdTeams);

            const td1 = document.createElement('td');
            const tdX = document.createElement('td');
            const td2 = document.createElement('td');

            tr.appendChild(td1);
            tr.appendChild(tdX);
            tr.appendChild(td2);

            switch(game.outcome) {
                case '1':
                    td1.appendChild(createCheckmark());
                    break;
                case 'X':
                    tdX.appendChild(createCheckmark());
                    break;
                case '2':
                    td2.appendChild(createCheckmark());
                    break;
            }

            table.appendChild(tr);
        });

    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}

/**
 * Creates a green 'checkmark' item to insert in the DOM
 * @returns div element with green checkmark visible
 */
function createCheckmark() {
    let checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    
    const stemSpan = document.createElement('span');
    stemSpan.classList.add('stem');
    const kickSpan = document.createElement('span');
    kickSpan.classList.add('kick');

    checkmark.appendChild(stemSpan);
    checkmark.appendChild(kickSpan);
    
    return checkmark;
}