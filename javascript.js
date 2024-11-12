var links = [
  'https://www.youtube.com/watch?v=Awf45u6zrP0', //Cat jumps SAIL
  'https://www.youtube.com/watch?v=9vmQ6qPLm68', //blob launch compilation
  'https://www.youtube.com/watch?v=KDy0WzKq-Cw', //Grandma milk tossing
  'https://www.youtube.com/watch?v=NMpAE4L7n2Y', //catapult a Citroen
  'https://www.youtube.com/watch?v=RaFwyrN8M0U', //ship launch
  'https://www.youtube.com/shorts/VzY3WQhJc5U', //trampoline kid
  'https://www.youtube.com/watch?v=4LMuk4gAkqc', //Super Dave touchdown to dollars
  'https://www.youtube.com/watch?v=BjKY9kYL57Y', //jet launch
  'https://www.youtube.com/shorts/VWFA2ZTB8kw', //people launching a guy on a trampoline
  'https://www.youtube.com/watch?v=cs8gamnMIS0', //medieval trebuchet
  'https://www.youtube.com/watch?v=QKMkhCsgsas', //wingsuit flight in Alps
  'https://www.tiktok.com/@memesessentials/video/7313668522247294250', //beetle fight
  'https://twitter.com/stopbeingthem/status/1542575842584174592' //Norris getting bopped in the face by Ricciardo to F1 theme
]

function newLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  window.location.href = links[randomNumber];
}
