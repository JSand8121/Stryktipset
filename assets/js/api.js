import { Game } from "./game.js";
const URL = "https://api-internal.azurewebsites.net/strycket2025";


/**
 * Returns json results from Striktipsdata api
 * @returns {Array}  the results of matches from the server
 */
export async function getResults(){
    const response = await fetch(URL, {
        method: "GET"
    });

    const data = await response.json();
    
    if(data.success){
        let result = [];
        
        data.playedGames.forEach(game => {
            result.push(new Game(game));
        });

        return result;
    } else {
        console.dir(`Something went wrong: ${data}` );
        return response;
    }  
}