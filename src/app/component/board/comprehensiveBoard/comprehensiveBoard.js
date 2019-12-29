import moment from 'moment';

class ComprehensiveBoardController {
    constructor() {
        this.list = [
            {
                title: '자유 게시글 1',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 2',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 3',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 4',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 5',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 6',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 7',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 8',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            },
            {
                title: '자유 게시글 9',
                writer: 'chjeong',
                like: '100',
                views: '1000',
                writeDate: moment('2019-12-01').format('YYYY-MM-DD'),
                writeTime: moment('183500', "hmmss").format('HH:mm:SS')
            }
        ];
    }

    $onInit() {
        
    }
}

export default {
    controller: ComprehensiveBoardController,
    template: require('./comprehensiveBoard.html'),
    controllerAs: '$ctrl',
    bindings: {}
}