var motivos = [
    "Ele é mó bunitin",
    "É engraçado",
    "é carinhoso",
    "ele é mui friendly",
      "E tem uma namoradinha muito amável"
  ];
  
  var imagens = [ "https://i.pinimg.com/564x/de/2d/43/de2d4322ab327e26606b5dca07395cd3.jpg",
    "https://i.pinimg.com/736x/68/cf/61/68cf61403cfc67fcf8c5097549d77eee.jpg",
    "https://i.pinimg.com/564x/71/4f/74/714f743b2ec8a9b78b8400ba42a0c224.jpg","https://i.pinimg.com/564x/65/eb/25/65eb25014b21055ddb18417f26d934d0.jpg","https://i.pinimg.com/564x/03/cc/96/03cc96a96ba67b29cbd6f478c9aa83ad.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }