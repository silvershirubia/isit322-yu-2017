/**
 * Created by bcuser on 5/2/17.
 */


export default class ElfDebug{

    constructor(showInit=false){
        this.showData = showInit;
    }

    getFirst(wrapper, element) {

        if (this.showData) {
            const paraData = wrapper.find(element).first().debug();

            console.log(paraData);
        }
    }

    getLast(wrapper, element) {

        if (this.showData) {
            const paraData = wrapper.find(element).last().debug();

            console.log(paraData);
        }
    }

    getAll(wrapper, element) {

        if (this.showData) {
            const paraData = wrapper.find(element).debug();

            console.log(paraData);
        }
    }

};


