
    var data=JSON.parse(localStorage.getItem("users")) ||[]
    document.querySelector("form").addEventListener("submit",logindata)
    function logindata(){
        event.preventDefault();
        var Email=document.querySelector("#email").value;
        var Password=form.password.value;
       
       var x =  data.filter(function(ele){
            if(Email==ele.userEmail && Password==ele.userPassword){
            
             return ele.userEmail+ele.userPassword
            
            }
           
            
        })
        console.log(x)
        if(Email== x[0].userEmail && Password==x[0].userPassword){
            alert("Login successfull")
            window.location.href="index.html"
        }
        else{
            alert("User Not Exist")
        }
    }
