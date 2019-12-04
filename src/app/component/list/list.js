import moment from 'moment';

class ListController {
    constructor() {
        this.nowDate = moment().format('YYYY[-]MM[-]DD');
        this.nowTime = moment().format('HH[:]mm[:]SS')
    }

    $onInit() {

    }

    _getList() {
        return this.list;
    }
}

export default {
    controller: ListController,
    template: require('./list.html'),
    controllerAs: '$ctrl',
    bindings: {
        list: '<'
    }
}