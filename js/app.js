(function(){
	angular.module('relativeTime',['angularMoment'])
	
	.controller('mainCtrl',[function(){
		var vm = this;
		vm.time = new Date();
		
		vm.hourAgo = new Date();
		vm.hourAgo.setHours(vm.time.getHours() - 2);
	}])
})()