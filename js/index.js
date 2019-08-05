// Your code goes here
// logo in navbar
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', function() {
    logoHeading.style.backgroundColor = 'dodgerblue';
    logoHeading.style.cursor = 'pointer';
})

// bus img
const yellowBus = document.querySelector('.intro img');
yellowBus.addEventListener('mouseenter', function() {
    yellowBus.setAttribute('src', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2F3792ac803914d19574b99b28d619ddf0%2Ftumblr_mgaetuWpFz1r5efpvo1_1280.jpg&f=1');
});
yellowBus.addEventListener('mouseleave', function() {
    yellowBus.setAttribute('src', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flawtones.seattleschools.org%2FUserFiles%2FServers%2FServer_12451%2FImage%2FAbout%2520Us%2FTransportation%2FYellowBus.png&f=1');
});

// Edit 'Welcome to Fun Bus!'
const welcome = document.querySelector('.intro h2');
document.addEventListener('keypress', function(event) {
    if(event.key == "a") {
        welcome.innerText = 'Please Enter Faulty WARNING .... GIRN'
    }
});

// On key down remove bus image
document.addEventListener('keydown', function() {
    yellowBus.style.display = 'none';
});

const mapImg = document.querySelector('.img-content');
mapImg.addEventListener('mouseover', function() {
    mapImg.style.width = '25%';
});

document.addEventListener('wheel', function() {
    welcome.style.backgroundColor = 'lightgrey';
});

const header = document.querySelector('.intro');
window.addEventListener('resize', function() {
    header.style.display = 'none';
});

yellowBus.addEventListener('drag', function() {
    yellowBus.style.display = 'none';
});

const navbar = document.querySelector('.nav-container');
document.addEventListener('scroll', function() {
    navbar.style.backgroundColor = 'red';
})

const navs = document.querySelectorAll('.nav a');
for(let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click',(event) => {
        event.stopPropagation();
        event.preventDefault();
    });
}

document.addEventListener("keydown", function(event) {
    if(event.key == "t") {
        document.addEventListener("keydown", function(event) {
            if(event.key == "e") {
                document.addEventListener("keydown", function(event) {
                    if(event.key == "s") {
                        document.addEventListener("keydown", function(event) {
                            if(event.key == "t") {
                                alert('Test Completed!');
                            }
                        })
                    }
                })
            }
        })
    }
})
// * [ ] `load`
// * [ ] `focus`
// * [ ] `select`