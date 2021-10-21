export class User{
    id = null;
    name = '';
    coup = null;
    coupRandom ;
    match;

    constructor( name, coup) {
        this.name = name;
        this.coup = coup;
        // this.coupRandom = coupRandom;
        // this.match = match;
    }
}