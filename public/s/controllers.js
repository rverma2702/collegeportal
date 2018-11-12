/*function grievnaces($http,$scope){
    //$http.get('videoList.json').success(function(videoList) {
    console.log('in controller')    
    $scope.data = "videoList";
      //  });
}
*/

//var app= angular.module('grievances', ['ngRoute']);

app.controller("Parent_grievances", function ($http,$scope) {
    $scope.msg = "I love London";
    $http.get("/Parent/My_Grievances").then(function (response) {
        //$scope.result = response.result1;
        $scope.result=response.data.info;
    });
});
app.controller("Gcm_grievances", function ($http,$scope,$window) {
    $scope.msg = "I love London";
    $http.get("/Members/Grievances").then(function (response) {
        //$scope.result = response.result1;
        $scope.result=response.data.info;
    });
});

app.controller("Gcm", function ($http,$scope,$mdDialog,$window) {
    // $scope.msg = "I love London";
 
    $http.get("/Members/my-account").then(function (response) {
         $scope.name = response.data.name;
         $scope.Desg = response.data.designation;
         $scope.mobile = response.data.mobile;
         $scope.email = response.data.email;
         $scope.Gtype = response.data.gtype;
     });

        $http.get("/Members/grievance_type").then(function(response)
        {
            $scope.grievance_type=response.data;
        });
 
     $scope.submit=function(){
         $scope.form={
             emailid:$scope.email,
             mobileno:$scope.mobile,
         }
         $http.post("/Members/update",$scope.form).then(function(response){   
     })
     
     }
 
     $scope.resetpass=function(ev){
         $scope.form={
             current_password:$scope.current_password,
             new_password:$scope.new_password,
             new_password1:$scope.new_password1        
         } 
     $http.post("/Members/password_reset",$scope.form).then(function(response){
     })
          var confirmpass = $mdDialog.confirm()
          .title('Password Updated!')
          .targetEvent(ev)
          .ok('Thank You!');

            $mdDialog.show(confirmpass).then(function() {
            $window.location.reload();
            })
     }
 });


app.controller("Student_grievances", function ($http,$scope,$window) {
    $scope.msg = "I love London";
    $http.get("/Student/My_Grievances").then(function (response) {
        //$scope.result = response.result1;
        $scope.result=response.data.info;
    });
});
app.controller("Student", function ($http,$scope,$window,$mdDialog) {
    // $scope.msg = "I love London";
 
    $http.get("/Student/my-account").then(function (response) {
         $scope.name = response.data.name;
         $scope.id = response.data.id;
         $scope.mobile = response.data.mobile;
         $scope.email = response.data.email;
         $scope.cdate = response.data.cdate;
         $scope.gender = response.data.gender;
         $scope.dep = response.data.dep;
         $scope.Batch = response.data.Batch;
     });
    
    //author: Ankit Sharma
    $http.get("/Student/grievance_type").then(function(response)
        {
            $scope.grievance_type=response.data;
        });




     $scope.submit=function(){
         $scope.form={
             emailid:$scope.email,
             mobileno:$scope.mobile,
         }
         $http.post("/Student/update",$scope.form).then(function(response){   
     })
     
     }
 
     $scope.resetpass=function(ev){
         $scope.form={
             current_password:$scope.current_password,
             new_password:$scope.new_password,
             new_password1:$scope.new_password1        
         } 
     $http.post("/Student/password_reset",$scope.form).then(function(response){
     })

     var confirmpass = $mdDialog.confirm()
          .title('Password Updated!')
          .targetEvent(ev)
          .ok('Thank You!');

    $mdDialog.show(confirmpass).then(function() {
      $window.location.reload();
    })

     }
 
     $scope.GrvPost=function(ev){
         $scope.form={
              type:$scope.Gtype,
              grv:$scope.Desc,
              file:$scope.file,
              subject:$scope.subject,
              usertype:"Student"
         }
         $http.post("/post/complaint",$scope.form).then(function(response){
           
         })

    var confirm = $mdDialog.confirm()
          .title('Grivance Posted!')
          .targetEvent(ev)
          .ok('Thank You!');

    $mdDialog.show(confirm).then(function() {
      $window.location.reload();
    })
 }
});


app.controller("Parent", function ($http,$scope) {
   // $scope.msg = "I love London";
    $http.get("/Parent/dashboard").then(function (response) {
        $scope.name = response.data.name;
        $scope.relation = response.data.rel;
        $scope.mobile = response.data.mobile;
        $scope.email = response.data.email;
        $scope.cdate = response.data.cdate;
    });

    $scope.submit=function(){
        $scope.form={
            email:$scope.email,
            mobile:$scope.mobile
        }
        $http.post("/Parent/update",$scope.form).then(function(response){
         location.reload();
         console.log('hiii');   
    })
    
    }

    $scope.resetpass=function(){
        $scope.form={
            current_password:$scope.current_password,
            new_password:$scope.new_password,
            new_password1:$scope.new_password1        
        } 
    $http.post("/Parent/password_reset",$scope.form).then(function(response){
    })
    }

    $scope.GrvPost=function(){

        $scope.form={
             type:$scope.Gtype,
             grv:$scope.Desc,
             file:$scope.file,
             subject:$scope.subject
        }
        $http.post("/post/complaint",$scope.form).then(function(response){
        })
    }
});
