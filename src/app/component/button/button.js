class ButtonController {
    constructor($location) {
        this._location = $location;
    }

    $onInit() {

    }

    _goToHref() {
        if(!this.href) {
            return;
        }

        this._location.path(this.href);
    }
}

export default {
    controller: ButtonController,
    template: require('./button.html'),
    controllerAs: '$ctrl',
    bindings: {
        text: "@",
        href: "@"
    }
}