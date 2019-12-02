import moment from 'moment';

class ListController {
    constructor() {
        this.list = [
                        {
                            name: '게시글 1',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 2',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 3',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 4',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 5',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 6',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        },
                        {
                            name: '게시글 7',
                            writer: 'chjeong',
                            writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                            writeTime: moment('183500', "hmmss").format('HH:mm:SS')
                        }
                    ];
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
    bindings: {}
}