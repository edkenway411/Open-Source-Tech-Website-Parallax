function ValidateForm() {

    var firstname = document.forms["RegForm"]["First Name"];
    var lastname = document.forms["RegForm"]["Last Name"];
    var emailid = document.forms["RegForm"]["Email ID"];
    var password = document.forms["RegForm"]["Password"];
    var Reenter = document.form["RegForm"]["Password"];

    if (firstname.value == ""){
        window.alert("Please enter your First Name")
        firstname.focus;
        return false;

    }
    if (lastname.value == ""){
        window.alert("Please enter your Last Name");
        lastname.focus();
        return false;
    }
    if (emailid.value=""){
        window.alert("Please Enter valid Email Address");
        emailid.focus();
        return false;
    }
    if (emailid.value.indexOf("@",0) < 0){
        window.alert("Please enter a valid Email Address");
        emailid.focus();
        return false;
    }
    if (emailid.value.indexOf(".",0) < 0){
        window.alert("Please enter a valid Email Address");
        emailid.focus();
        return false;
    }
    if (password.value == ""){
        window.alert("Please enter a valid password");
        password.focus();
        return false;
    }
    if (reenter.value == ""){
        window.alert("Field empty");
        Reenter.focus();
        return false;
    }
    if (reenter.value == password.value){
        reenter.focus();
        return true;
    }
    return true;
}
