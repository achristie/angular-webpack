export default ngModule => {
    
    if (ON_TEST) {
        require('./awc-hello.test').default(ngModule);
    }
    
    ngModule.directive('awcHello', ($log) => {
        require('./awc-hello.styl');
        return {
            restrict: 'E',
            scope: {},
            template: require('./awc-hello.html'),
            controllerAs: 'vm',
            controller: function () {
                const vm = this;
                
                vm.greeting = 'Hello Webpack';
                
                $log.info('i have info..');
            }
        };
    });
};