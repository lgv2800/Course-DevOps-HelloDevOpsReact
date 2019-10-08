import {decorate, observable} from 'mobx';
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

export default class PenguinStore {

    //penguins = ["Ozzie", "Zinger", "Dolo", "Pablo"];
    penguins = ["Loading"];

    constructor(props) {
        this.fetchPenguins();
    }

    fetchPenguins (){
        fetch(baseUrl + "rest/penguins").then(
            (response)=> response.json().then(
                (json)=> this.penguins = json
            )
        )
    }

}

decorate(PenguinStore, {penguins: observable});