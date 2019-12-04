class NavBarController {
    constructor() {
        
    }

    $onInit() {
        this.menu = [
                        {
                            name: '게시판',
                            href: '/comprehensive'
                        },
                        {
                            name: '중고장터',
                            href: '/usedMarket'
                        }
                    ];
    }
}

export default {
    controller: NavBarController,
    template: require('./navBar.html'),
    controllerAs: '$ctrl',
    bindings: {}
}