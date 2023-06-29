var app=angular.module("crud",['ui.router','ngRoute']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/register')

    $stateProvider
        .state('register',{
            url:'/register',
            controller:"registerCtrl as register",
            templateUrl:'./components/RegistrationForm/regstrationform.html'
        })
        .state('signin',{
            url:'/signin',
            controller:"signinCtrl as signin",
            templateUrl:"./components/SignInForm/signinform.html"
        })
        .state('registeredUsers',{
            url:'/registeredUsers',
            templateUrl: './components/RegisteredUsers/registereduser.html',
            controller: 'registeredUserCtrl as registeredUser'
        })
        .state('edituser',{
            url:'/edituser/:id',
            templateUrl:'./components/EditUser/edituser.html',
            controller:'editCtrl as edit'
        })
})
app.controller('MainCtrl', function() {});