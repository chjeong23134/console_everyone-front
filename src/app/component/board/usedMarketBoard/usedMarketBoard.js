import moment from 'moment';

class UsedMarketBoardController {
    constructor() {
        this.list = [
            {
                name: '중고장터 게시글 1',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 2',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 3',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 4',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 5',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 6',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                name: '중고장터 게시글 7',
                writer: 'chjeong',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            }
        ];
    }

    $onInit() {
        
    }
}

export default {
    controller: UsedMarketBoardController,
    template: require('./usedMarketBoard.html'),
    controllerAs: '$ctrl',
    bindings: {}
}