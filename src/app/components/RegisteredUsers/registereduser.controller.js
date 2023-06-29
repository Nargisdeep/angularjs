app.controller("registeredUserCtrl",['$location','$http',function($location,$http){
    var registeredUser=this;
    registeredUser.users=[]

    init()
    function init(){
        console.log("I am getting Called")
        $http({'method':'GET','url':"http://localhost:3000/users/new/get"})
        .then(function(response){
            console.log(response)
            if(response.status){
                registeredUser.users=response.data.persons
                console.log(registeredUser.users)
            }
            else{
                alert(response.data)
            }
        }).catch(function(err){
            alert("Error Occured")
        })
    }
    registeredUser.edit=function(_id){
        if(_id){
            console.log(_id)
            $location.path(`/edituser/${_id}`)
        }
    }
    registeredUser.delete=function(_id){
        if(_id){
            $http({'method':'DELETE','url':`http://localhost:3000/users/delete/${_id}`})
                .then(function(response){
                    console.log(response)
                    if(response.status){
                       init()
                    }
                    else{
                        alert(response.data)
                    }
                }).catch(function(err){
                    alert("Error Occured")
                })
             }
    }
}])