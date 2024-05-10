      
      
        
      function fetchImage() {
        
        let url = document.getElementById("inputurl").value;
       
       // fetch user link from the  
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            const container = document.getElementById("image-container");
            container.appendChild(imageElement);

         
 
     let imageurl = window.URL.createObjectURL(blob)
   
   // create a hyper link using a tag firdt create a variable for a tag
     let a = document.createElement('a')
     a.download = url="filename";
     a.href = imageurl;
     document.body.appendChild(a)
     a.click()
   
    // check url is corect or not 

    if (window.fetch) {
      // Fetch API is supported
      alert("Image Download Successfull")
      console.log("Fetch API is available.");
    } else {
      // Fetch API is not supported
      console.log("Fetch API is not available.");
      alert("Image Download UnSuccessfull")
}

            
          })
          .catch((error) => alert("Incorrect Link please Check Url ")+console.error(error));
        
 
 
    
}