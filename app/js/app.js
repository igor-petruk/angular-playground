function TodoController($scope){
    $scope.todos = [
        {text:"Great", done:false}
    ];
    $scope.totalTodos = function(){
        return $scope.todos.length;
    };

    $scope.addTodo = function(){
        if (!_.isEmpty($scope.formTodoText)){
            $scope.todos.push({text:$scope.formTodoText, done:false});
            $scope.formTodoText = "";
        }
    };

    $scope.clearCompleted = function(){
        $scope.todos = _.filter($scope.todos,function(item){
            return !item.done;
        });
    };
};