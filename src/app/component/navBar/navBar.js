class NavBarController {
    constructor() {
        
    }

    $onInit() {
        this.menu = [
                        {
                            text: 'PlayStaion',
                            href: '/comprehensive'
                        },
                        {
                            text: 'Nintendo',
                            href: '/comprehensive'
                        },
                        {
                            text: 'Xbox',
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