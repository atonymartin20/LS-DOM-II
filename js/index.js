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

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`