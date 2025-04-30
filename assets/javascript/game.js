import { Team } from "./team.js";

/**
 * @class Game from Stryktipset
 * 
 */
export class Game {

    /**
     * Creates instance of Game from json data
     * @param jsonGame object including id, outcome, and Team[]
     */
    constructor(jsonGame) {
        this.id = jsonGame.id;
        this.outcome = jsonGame.outcome;
        this.teams = [];
        
        jsonGame.teams.forEach(t => {
            this.teams.push(new Team(t));
        });
    }
}