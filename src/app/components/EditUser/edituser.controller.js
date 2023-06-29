app.controller("editCtrl",['$location','$http','$stateParams',function($location,$http,$stateParams){
    var edit=this;
    edit._id=""
    edit.user={}
    init()


    function init(){
        console.log("hello")
        edit._id=$stateParams.id
         if(edit._id)
                    {
                        console.log(edit._id)  
                        $http({'method':'GET','url':`http://localhost:3000/users/getid/${edit._id}`})
                                .then(function(response){
                                    console.log(response)
                                    if(response.status){
                                        console.log("home")
                                        edit.user=response.data.person
                                        console.log(edit.user)
                                    }
                                    else{
                                        alert(response.data)
                                    }
                                }).catch(function(err){
                                    alert("Error Occured")
                                })
                    } 
                  
     }
     edit.edit=function(){
        $http({'method':'PUT','url':`http://localhost:3000/users/put/${edit._id}`,'data':edit.user})
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