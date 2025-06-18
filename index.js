console.log("hi")

// TODO sanitize the location search string by importing the sanitize library
fetch(window.location.search).then(x => document.write(x));
