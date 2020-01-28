class TestController {
    $onInit() {
        this._testMethod();
    }

    _testMethod() {
        console.log('TestController move');
    }
}

export default {
    controller: TestController,
    controllerAs: '$ctrl',
    template: require('./test.html')
}