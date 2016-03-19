export default ngModule => {
    ngModule.directive('awcHello', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./awc-hello.html'),
            controllerAs: 'vm',
            controller: function () {
                const vm = this;
                
                vm.greeting = 'Hello Webpack';
            }
        };
    });
};