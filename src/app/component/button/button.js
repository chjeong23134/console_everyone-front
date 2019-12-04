class ButtonController {
    constructor() {

    }

    $onInit() {

    }
}

export default {
    controller: ButtonController,
    template: require('./button.html'),
    controllerAs: '$ctrl',
    bindings: {
        href: '@',
        text: '@'
    }
}