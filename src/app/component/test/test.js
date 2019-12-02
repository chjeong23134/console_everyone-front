class TestController {
    constructor() {
        
    }

    $onInit() {
        this._testMethod();
    }

    _testMethod() {
        console.log('TestController move');
    }
}

export default {
    controller: TestController,
    template: require('./test.html'),
    controllerAs: '$ctrl',
    bindings: {}
}