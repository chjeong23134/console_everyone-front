class NavBarController {
    $onInit() {
        this.menu = [
                        {
                            text: 'PlayStaion',
                            href: '/#!/bbs'
                        },
                        {
                            text: 'Nintendo',
                            href: '/#!/bbs'
                        },
                        {
                            text: 'Xbox',
                            href: '/#!/bbs'
                        }
                    ];
    }
    
    _closeMenu() {
        this.checkedYN = false;
    }
}

export default {
    controller: NavBarController,
    controllerAs: '$ctrl',
    template: require('./navBar.html')
}