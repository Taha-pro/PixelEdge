// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

 // Get all buttons with the "image-button" class
 const buttons = document.querySelectorAll('.image-button');

 buttons.forEach(button => {
   button.addEventListener('click', function () {
     // Get the image path from the data-image attribute
     const imagePath = button.getAttribute('data-image');
     
     // Open the image in a new tab
     window.open(imagePath, '_blank');

     // Display a notification
     if ('Notification' in window) {
       Notification.requestPermission().then(function (permission) {
         if (permission === 'granted') {
           new Notification('PixelEdge', {
             body: 'Zoom It And check properly'
           });
         }
       });
     }
   });
 });
