function callfunction(){
    username1();
    name1();
    if(username1() && name1()){
        return true;
    }else{
        return false;
    }
};

function username1(){
    var username = document.getElementById('username').value;
    document.getElementById('usernameerror').innerHTML="<font color='red'>Please enter Username <br> </font>";


    var userRegex= /^[a-zA-Z0-9]{3,20}$/;
    if(username == ""){
        return false;
    }else{
        if(userRegex.test(username)){
            document.getElementById('usernameerror').innerHTML="<font color='green'>It's valid <br> </font>";

        }else{
            document.getElementById('usernameerror').innerHTML="<font color='red'>Username is not valid <br> </font>";
        }
    }
    if(name.length<3 || name.length>25){
        document.getElementById('nameerror').innerHTML="<font color='red'>Please input betwwen 3 to 25 <br> </font>";

    }
};

function name1(){
    var name = document.getElementById('name').value;
    document.getElementById('nameerror').innerHTML="<font color='red'>Please enter Name <br> </font>";


    var userRegex= /^[a-zA-Z0-9  ]{3,25}$/;
    if(name == ""){
        return false;
    }else{
        if(userRegex.test(name)){
            document.getElementById('nameerror').innerHTML="<font color='green'>It's valid <br> </font>";

        }else{
            document.getElementById('nameerror').innerHTML="<font color='red'>Username is not valid <br> </font>";
        }
    }
    if(name.length<3 || name.length>25){
        document.getElementById('nameerror').innerHTML="<font color='red'>Plese input between 3 to 25 <br> </font>";

    }
};
