/**
 * (●'◡'●)Created by QinJiawei on 2017/7/21.
 */

/* fontSize 的设置 */
(function(win,doc){
    //浏览器缩放时触发的事件
    win.onresize=function(){
        changeFontSize();
    };
    changeFontSize();
    function changeFontSize(){
        var oFontSize=doc.documentElement.clientWidth/(320/20);
        doc.documentElement.style.fontSize=oFontSize+'px';
    }
})(window,document);



/* angular */
var app = angular.module("app",[]);
app.controller("myCtrl",function ($scope,$interval) {
    /* loginPassWay.html  */
    $scope.pass1 = "输入原登录密码";
    $scope.pass2 = "原登录密码";
    $scope.pass3 = "输入新密码";
    $scope.pass4 = "输入手机验证码";
    $scope.showToggle = true;


    $scope.type = "text";
    $scope.cla = "active";
    $scope.titletxt = "请选择任何一种方式进行密码修改";
    $scope.titletxt1 = "请输入原登录密码验证身份";
    $scope.titletxt2 = "请输入原登录密码";
    $scope.titletxt3 = "请输入长度为6-24位的密码";
    $scope.titletxt4 = "验证手机已发送到手机号为:";





    
    $scope.src1 = "javascript:;";
    $scope.src2 = "javascript:;";
    $scope.src3 = "javascript:;";
    $scope.src4 = "javascript:;";

    
    
    $scope.changeType = function () {
        $scope.type = "password";
        $scope.cla = "color";
        $scope.pass1 = "";
        $scope.pass2 = "";
        $scope.pass3 = "";
        $scope.pass4 = "";
    };
    $scope.show = function () {
        $scope.type = "text";
    };

    /* loginPassWay.html  */
    $scope.submit1 = function () {
         if($scope.pass1 == "12345"){
             $scope.src1 = "changeWay.html";
         }else if($scope.pass1 == "" || $scope.pass1 =="输入原登录密码"){
             $scope.titletxt1 = "密码不能为空";
         }else{
             $scope.titletxt1 = "密码输入错误(密码为12345)";
             $scope.pass1 = "";
         }
    };

    /*  changeWay.html  */
    $scope.submit2 = function () {
        if($scope.pass2 == "12345"){
            $scope.src2 = "newPassword.html";
        }else if($scope.pass2 == "" || $scope.pass2 =="输入原登录密码"){
            $scope.titletxt2 = "密码不能为空";
        }else{
            $scope.titletxt2 = "密码输入错误(密码为12345)";
            $scope.pass2 = "";
        }
    };

    /* newPassword.html */
    $scope.submit4 = function () {
        $scope.src4 = "newPassword1.html";
    };
    $scope.submit3 = function () {
        if($scope.pass3 == "" || $scope.pass3 =="输入新密码"){
            $scope.titletxt3 = "密码不能为空";
        }else {
            $scope.src3 = "#";
            $scope.showToggle = false;
        }
    };
    $scope.hide = function () {
        $scope.showToggle = true;
        $scope.pass3 = "";
    };
  /*  $scope.submit2 = function () {
        $scope.srcA = "#";
        if($scope.pass1 == "" || $scope.pass1 =="输入新密码"){
            $scope.titletxt = "密码不能为空";
        }
    };*/
    $scope.gaibian = function () {
        if($scope.pass1 != ""){
            $scope.titletxt = "请输入原登录密码验证身份";
        }
        if($scope.pass2 != ""){
            $scope.titletxt = "请输入原登录密码验证身份";
        }
    };
    $scope.timeWay = "发送验证码";
    $scope.dis = false;
    $scope.timer = function () {
        $scope.dis = true;
        $scope.num = 5;
        $scope.timeWay = $scope.num+"s";
        $scope.time1 = $interval(function () {
            $scope.num--;
            if($scope.num == 0){
                $scope.num = "重新发送";
                // $scope.timeWay = "发送验证码";
                $interval.cancel($scope.time1);
                $scope.dis = false;
            }
            if($scope.num != "重新发送"){
                $scope.timeWay = $scope.num+"s";

            }else {
                $scope.timeWay = $scope.num;
            }

        },1000);

    };
});

app.filter("changetel",function () {
    return function (str) {
        var arr = str.toString().split("");
        arr.splice(3,4,'****');
        return arr.join("");
    };
});