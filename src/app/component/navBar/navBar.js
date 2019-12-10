class NavBarController {
    constructor() {
        
    }

    $onInit() {
        this.menu = [
                        {
                            name: 'PlayStaion',
                            href: '/comprehensive'
                        },
                        {
                            name: 'Nintendo',
                            href: '/comprehensive'
                        },
                        {
                            name: 'Xbox',
                            href: '/comprehensive'
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