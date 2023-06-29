app.controller("signinCtrl",['$location','$http',function($location,$http){
    var signin=this;
    signin.user={}

    signin.signin=function(){
        console.log("hello")
        $http({'method':'POST','url':"http://localhost:3000/users/signin",'data':signin.user})
        .then(function(response){
            console.log(response)
            if(response.status){
                console.log("home")
                //$location.path('/home')
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