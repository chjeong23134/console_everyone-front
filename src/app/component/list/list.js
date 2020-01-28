import moment from 'moment';

class ListController {
    constructor() {
        this.nowDate = moment().format('YYYY[-]MM[-]DD');
        this.nowTime = moment().format('HH[:]mm[:]SS')
    }

    _getList() {
        return this.list;
    }
}

export default {
    controller: ListController,
    controllerAs: '$ctrl',
    template: require('./list.html'),
    bindings: {
        list: '<'
    }
}