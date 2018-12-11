//Sign Up Validation
// Created by Devika K H 
        function validateForm() {
            var x = document.forms["myForm"]["fname"].value;
            if (x == "") {
                alert("Name must be filled out");
                return false;
            }
             else{
                var y = document.forms["myForm"]["email"].value;
                var atpos = y.indexOf("@");
                var dotpos = y.lastIndexOf(".");
                    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
                    alert("Not a valid e-mail address");
                    return false;
                    }
                    else {
                        var z= document.forms["myForm"]["contact"].value;
                        if(z==""){
                        alert("Enter Phone number");
                        return false;
                        }
                        else if(z.length!=10){
                        alert("invalid Phone number");
                        return false;
                        }
                        else{

                            var password=document.forms["myForm"]["pwd"].value;
                            var msg="Thanks for creating an account";
                            var checkpassword=validatepassword(password,msg);
                            if(checkpassword==false){
                                return false;
                            }
                        }
                           
                    }   
                }
    }
    //Sign In validation
function validateForm1() {
                var x = document.forms["myForm"]["email"].value;
                var atpos = x.indexOf("@");
                var dotpos = x.lastIndexOf(".");
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                    alert("Not a valid e-mail address");
                    return false;
                }
                else{
                    var password=document.forms["myForm"]["pwd"].value;
                    var msg="You have Successfully signed in";
                    var checkpassword=validatepassword(password,msg);
                    if(checkpassword==false){
                        return false;
                    } 
                 }
        }
        function validatepassword(password,msg ){
            if(password==""){
                        alert("Enter Password");
                        return false;
                    }
                    else if(password.length<8){
                        alert("Invalid Password.Password should of minimum 8 characters");
                        return false;
                    }
                    else{
                        alert(msg);
                    } 
        }