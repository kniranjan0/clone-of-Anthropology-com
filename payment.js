

    document.querySelector("form").addEventListener("submit",myfun)
    function myfun(){
        console.log("click")
        event.preventDefault()
        window.location.href="paymentcompletionpage.html"
    }


    function funhome(){
        window.location.href="index.html"
    }

    
        var ts = localStorage.getItem("totalsummm")
        console.log(ts)
        var dis = document.querySelector(".totalbillDis")
        dis.innerHTML=ts
        
    