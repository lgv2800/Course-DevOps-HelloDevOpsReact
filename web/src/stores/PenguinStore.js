import {decorate, observable} from 'mobx';

export default class PenguinStore {

    penguins = ["Ozzie", "Zinger", "Dolo", "Pablo"];

}

decorate(PenguinStore, {penguins: observable});