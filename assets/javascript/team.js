/**
 * Team class for Stryktips api
 */
export class Team {

    /**
     * Constructor for instance of Team class
     * @param t JSON team containing "teamName" and "homepage"  
     */
    constructor(t) {
        this.teamName = t.teamName;    
        this.homepage = t.homepage;    
    }
}