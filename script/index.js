function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      sub: document.getElementById("sub").value,
      num: document.getElementById("num").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_b94u10u";
    const templateID = "template_rtvuwrb";
    
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("sub").value = "";
        document.getElementById("num").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}