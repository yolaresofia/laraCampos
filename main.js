$(document).ready(function () {
  $('#submit').click(function (event) {
   

    let email = $('#email').val()
    let name = $('#name').val()
    let mesagge = $('#message').val()
    let statusElm = $('.status')
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append("<div>Email is valid</div>")
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }
    if (subject.length >= 2) {
     
      statusElm.appendstatusElm.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }
    if (MessageChannel.length >= 5){
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
  })
})

// Scroll 

function HideText() {
  document.getElementById("frase").style.display = "none";
}