// MOBILE MENU FEATURE
function openMenu() {
    document.getElementById("menu").style.maxHeight = "1000px";
}

function closeMenu() {
    document.getElementById("menu").style.maxHeight = "0px";
}

// NAVBAR BLUR FEATURE
// When the user scrolls down 30px from the top of the document, give the navbar "background-class" a blurred transparent background
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("background").style.backgroundColor = "rgba(21, 14, 40, .5)";
    document.getElementById("background").style.backdropFilter = "blur(15px)";
  } else {
    document.getElementById("background").style.backgroundColor = "transparent";
    document.getElementById("background").style.backdropFilter = "blur(0px)";
  }
}



// COUNTDOWN FEATURE
// Set the target date and time (year, month (0-11), day, hours, minutes, seconds)
const targetDate = new Date(2023, 8, 29, 23, 59, 59); // September 29, 2023, 23:59:59 || Month countdown starts from 0

// Update the countdown initially and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Function to update the countdown timer
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        // The target date has passed
        document.getElementById("countdown").innerHTML = "Countdown expired!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            ${hours.toString().padStart(2, '0')}<span class="countitem">H</span> ${minutes.toString().padStart(2, '0')}<span class="countitem">M</span> ${seconds.toString().padStart(2, '0')}<span class="countitem">S</span>
        `;
    }
}



// FAQs COLLAPSIBLE FEATURE
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const toggle = item.querySelector('.toggle');

    question.addEventListener('click', () => {
        collapsibles.forEach((collapsible) => {
            if (collapsible !== item) {
                collapsible.classList.remove('active');
                collapsible.querySelector('.answer').style.maxHeight = '0';
                collapsible.querySelector('.toggle').textContent = '+';
            }
        });

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            toggle.textContent = '-';
        } else {
            answer.style.maxHeight = '0';
            toggle.textContent = '+';
        }
    });
});



// SHOW CONTACT FEATURE
function openContact() {
    document.getElementById('contact').style.bottom = "0";
    document.getElementById("menu").style.maxHeight = "0px";
    document.getElementById("gradientText").style.color = "transparent";
    document.getElementById('register').style.bottom = "-100%";
}

function closeContact() {
    document.getElementById('contact').style.bottom = "-200%";
    document.getElementById("gradientText").style.color = "#fff";
}



// SHOW REGISTER FEATURE
function openRegister() {
    document.getElementById('register').style.bottom = "0";
    document.getElementById("menu").style.maxHeight = "0px";
    document.getElementById('contact').style.bottom = "-200%";
    document.getElementById("gradientText").style.color = "#fff";
}

function closeRegister() {
    document.getElementById('register').style.bottom = "-100%";
    document.getElementById('backdrop').style.top = "200%";
    document.getElementById('success').style.top = "-250%";
}




// PARALLAX SCROLLING EFFECT
window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;

    // Adjust the position of each section
    document.getElementById('parallax1').style.transform = `translateY(${scrolled * 0.2}px)`;
    document.getElementById('parallax2').style.transform = `translateY(${scrolled * 0.4}px)`;
    document.getElementById('parallax3').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax4').style.transform = `translateY(${scrolled * 0.4}px)`;
    document.getElementById('parallax5').style.transform = `translateY(${scrolled * 0.1}px)`;
    document.getElementById('parallax6').style.transform = `translateY(${scrolled * 0.2}px)`;
    document.getElementById('parallax7').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax8').style.transform = `translateY(${scrolled * 0.4}px)`;
    document.getElementById('parallax9').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.getElementById('parallax10').style.transform = `translateY(${scrolled * 0.2}px)`;
    document.getElementById('parallax11').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax12').style.transform = `translateY(${scrolled * 0.4}px)`;
    document.getElementById('parallax13').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.getElementById('parallax14').style.transform = `translateY(${scrolled * 0.2}px)`;
    document.getElementById('parallax15').style.transform = `translateY(${scrolled * 0.1}px)`;
    document.getElementById('parallax16').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax17').style.transform = `translateY(${scrolled * 0.2}px)`;
    document.getElementById('parallax18').style.transform = `translateY(${scrolled * 0.1}px)`;
    document.getElementById('parallax19').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax20').style.transform = `translateY(${scrolled * 0.3}px)`;
    document.getElementById('parallax21').style.transform = `translateY(${scrolled * 0.3}px)`;
    // Add more sections as needed with different speeds
});

// Initiate animate on scroll plugin
AOS.init();

// Initiate typewriter function
document.addEventListener("DOMContentLoaded", function () {
    var typewriter = document.getElementById("typewriter");
    
    setTimeout(function() {
        var text = "ParticipatPe in getlinked tech Hackathon 2023 stand a chance to win a Big prize";
        var index = 0;
        
        function typeWriter() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 35); // Adjust the typing speed as needed
        }
        }
        
        typeWriter();
    }, 0); // Start after a delay of 0 second
});
// Privacy policy turning value to true or false
$("#privacyPolicy").on("change", function(){
    if ($(this).is(':checked')) {
        $(this).attr('value', true);
    } else {
        $(this).attr('value', false);
    }
})

// Adding numbers to the groupSize select box as options
for (var i = 0; i < 100; i++) {
    $("#groupSize").append(`
        <option value="${i}">${i}</option>
    `);
}

// getLinked API used through Ajax
var baseUrl = "https://backend.getlinked.ai";

// Fetch Categories from GetLinked API
$.get(`${baseUrl}/hackathon/categories-list`, function(response){
    // Iterate through categories and display in category select box
    $.each(response, function(i, v){
        $("#categories").append(`
            <option value="${v.id}">${v.name}</option>
        `)
    })
})


// Send post request to Get Linked API on form submit
$("#myForm, #contactForm").on("submit", function(e){
    e.preventDefault();
    const form = $(this);
    // Add up the baseurl with the form action to create the API endpoint for each form
    const url = baseUrl + form.attr("action");
    const successPopup = document.getElementById("success");
    const successBackdrop = document.getElementById("backdrop");

    var formData = form.serializeArray();
    // Post request
    $.post(url, formData, function(response){
        console.log(response)
        if(url.includes('registration')){
            // Show the success popup
            successPopup.style.top = "50%";
            successBackdrop.style.top = "50%";
        }else{
            alert("Message received! We would reply to you shortly")
        }
    })
    .fail(function(error){ // Display error alert if something goes wrong
        $.each(error.responseJSON, function(i, v){
            alert(v)
        })
        console.log(error.responseJSON)
    })
})