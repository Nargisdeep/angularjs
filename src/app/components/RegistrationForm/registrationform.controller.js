app.controller("registerCtrl",['$location','$http',function($location,$http){
    var register=this;
    register.user={}

    register.register=function(){
        $http({'method':'POST','url':"http://localhost:3000/users/post",'data':register.user})
        .then(function(response){
            console.log(response)
            if(response.status){
                console.log("home")
                $location.path('/registeredUsers')
            }
            else{
                alert(response.data)
            }
        }).catch(function(err){
            alert("Error Occured")
        })
    }
}])