var links = [
  'https://www.youtube.com/watch?v=Awf45u6zrP0', //Cat jumps SAIL
  'https://www.youtube.com/watch?v=KDy0WzKq-Cw', //Grandma milk tossing
  'https://twitter.com/generativist/status/1160667077574705154', //fish tube + Duck Tales theme
  'https://twitter.com/stopbeingthem/status/1542575842584174592' //Norris getting bopped in the face by Ricciardo to F1 theme
]

function newLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  window.location.href = links[randomNumber];
}
