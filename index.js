
function validatePass(){
    
    let pass1 = document.getElementById("pw1").value;
    let pass2 = document.getElementById("pw2").value;
    document.getElementById("email").value = "";
    if(pass1==pass2){
        alert("Your Password has been saved.")
    }else{
        alert("Incorrect Password");
    }
}


