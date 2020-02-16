
function validate(){

    let events =  document.getElementById("events").value;
    let name = document.getElementById("name").value;
    let startDate = document.getElementById("date1").value;
    let endDate = document.getElementById("date2").value;
    let prepareDate = document.getElementById("prepareDate").value 
    


    if ((events=="")||(name=="")||(startDate=="")||(endDate=="")||(prepareDate=="")){

        alert("You have missed something");
    }else{
        alert("Your event has been saved")
    }


    
}


