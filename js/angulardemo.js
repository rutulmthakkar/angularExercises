angular.module('app1', []).controller('ctrl1', function() {
	var todoList=this;
	
	todoList.todos = [
		{taskName:'Bring Book',	done:true},	
		{taskName:'Bring Laptop', done:true}, 
		{taskName:'Install required softwares', done:false}];
	
	todoList.addToDoList = function(){
		todoList.todos.push({taskName:todoList.todotaskName,done:false});
		todoList.todotaskName='';
	};
	
	todoList.remaining = function() {
		var cnt=0;
		angular.forEach(todoList.todos, function(todo) {
			cnt += todo.done ? 0 : 1;
		});
		return cnt;
	};
});