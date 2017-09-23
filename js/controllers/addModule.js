myApp.controller('addController', function($scope) {
  $scope.message3 = 'Add your module here';
  $scope.moduleArray = [];
  $scope.memberCounter = 0;
  $scope.modules = [];
  $scope.newName = "";

  $scope.submitModule = function(moduleName,moduleWebsite){
    if($scope.moduleArray.includes(moduleName)){
      $scope.newName = moduleName + "-group-2";
      $scope.moduleArray.push($scope.newName);
    }
    else{
      $scope.moduleArray.push(moduleName);
    }
    //$scope.str = JSON.stringify($scope.moduleArray);
    //console.log("module added: "+$scope.str);
  }
  $scope.submitSignUp = function(moduleName){
    console.log("new html");
    let alreadyPlaced = false;
    if($scope.modules.length ==0 ){
      console.log("first object banai");
      $scope.userObj = {};
      $scope.userObj.module_name = $scope.selectedName;
      $scope.userObj.module_website = $scope.moduleWebsite;
      $scope.userObj.members = [];
      $scope.userObj.members.push({first_name: $scope.firstName,last_name: $scope.lastName,email: $scope.emailAddress});
      $scope.modules.push($scope.userObj);
      $scope.memberCounter++;
      $scope.str = JSON.stringify($scope.modules);
      // console.log("user object: "+$scope.str);
      // console.log("module name: "+$scope.modules[0].module_name);
    }
    else{
      let pos = $scope.modules.map(function(e) { return e.module_name; }).indexOf($scope.selectedName);
      //console.log("pos is: "+pos);
      if(pos != -1){
        if($scope.modules[pos].members.length > 3){
          $scope.userObj = {};
          let newName = $scope.selectedName + "-2";
          $scope.userObj.module_name = newName;
          $scope.moduleArray.push(newName);
          $scope.userObj.module_website = $scope.moduleWebsite;
          $scope.userObj.members = [];
          $scope.userObj.members.push({first_name: $scope.firstName,last_name: $scope.lastName,email: $scope.emailAddress});
          $scope.memberCounter++;
          $scope.modules.push($scope.userObj);
          alreadyPlaced == true;
        }

        else{
          $scope.modules[pos].members.push({first_name: $scope.firstName,last_name: $scope.lastName,email: $scope.emailAddress});
          alreadyPlaced = true;
        }
      }
        if(alreadyPlaced == false){
          $scope.userObj = {};
          $scope.userObj.module_name = $scope.selectedName;
          $scope.userObj.module_website = $scope.moduleWebsite;
          $scope.userObj.members = [];
          $scope.userObj.members.push({first_name: $scope.firstName,last_name: $scope.lastName,email: $scope.emailAddress});
          $scope.modules.push($scope.userObj);}
        }

        $scope.str = JSON.stringify($scope.modules);
        console.log("user object: "+$scope.str);
      }

      $scope.removeUser = function(member){
        //let index = $scope.modules.map(function(e) { return e.members; }).indexOf(member);
        //$scope.strz = JSON.stringify(member);
        //console.log("to remove: "+$scope.strz);
      }

      $scope.removeGroup = function(index, module){
        //console.log("inside delete group"+module.module_name);
        //$scope.modules.splice(index,1);
        $scope.modules.splice($scope.modules.indexOf(module),1);
        $scope.moduleArray.splice($scope.moduleArray.indexOf(module.module_name),1);
      }
    })
    /*initial object design
    $scope.userObj = { };
    $scope.userObj.module_name = $scope.selectedName;
    $scope.userObj.first_name = $scope.firstName;
    $scope.userObj.last_name = $scope.lastName;
    $scope.userObj.email = $scope.emailAddress;
    end initial object design */
