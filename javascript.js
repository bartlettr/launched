var links = [
  'https://www.youtube.com/watch?v=Awf45u6zrP0', //Cat jumps SAIL
  'https://www.youtube.com/watch?v=9vmQ6qPLm68', //blob launch compilation
  'https://www.instagram.com/reel/C3kX-68IdIB/?igsh=amcycW80enN0bnp3', //wheelbarrow flips
  'https://www.youtube.com/watch?v=yypY-jjJmn4', //insane sledding jump in Wyoming
  'https://www.youtube.com/watch?v=KDy0WzKq-Cw', //Grandma milk tossing
  'https://www.youtube.com/watch?v=-u7hMRHkzlI', //kid ejected off tube behind surf boat
  'https://www.youtube.com/watch?v=NMpAE4L7n2Y', //catapult a Citroen
  'https://www.youtube.com/watch?v=RaFwyrN8M0U', //ship launch
  'https://www.youtube.com/shorts/M07SnTRRgL8', //bull vs bubble ball
  'https://www.instagram.com/reel/C7xpk8oNx90/?igsh=MWhsNGdrd2JibWhm', //small child on trampoline
  'https://www.youtube.com/shorts/VzY3WQhJc5U', //trampoline kid
  'https://www.youtube.com/watch?v=4LMuk4gAkqc', //Super Dave touchdown to dollars
  'https://imgur.com/gallery/he-flew-like-rag-doll-JbMulju', //he flew like a rag doll
  'https://www.youtube.com/watch?v=BjKY9kYL57Y', //jet launch
  'https://www.instagram.com/reel/DBNLrXAureY/?igsh=MXgwOWFuMGJ1bGxoOA%3D%3D', //dog jumps on guy off trampoline
  'https://www.youtube.com/shorts/VWFA2ZTB8kw', //people launching a guy on a trampoline
  'https://www.youtube.com/watch?v=hgeviZ7rfdQ', //kid (and boot) getting launched snow tubing
  'https://www.youtube.com/watch?v=cs8gamnMIS0', //medieval trebuchet
  'https://youtu.be/-OZjHjJToVo?si=DTBBtTY1jbz9NvK4', //Amazing Race watermelon launch
  'https://www.youtube.com/shorts/X8StCIy300I', 
  'https://www.youtube.com/watch?v=tl4j_VGdPy0', //top 5 treadmill fails
  'https://www.youtube.com/watch?v=JWUyEl9qnh8', //man launches ball while diving
  'https://www.instagram.com/reel/DCbsfAbopAr/?igsh=MThoM3NucTBmYjNmdw%3D%3D', //officer testing slide
  'https://www.youtube.com/watch?v=dBkQngrwXqg&t=48s', //Good Place dog into the sun
  'https://www.instagram.com/reel/DBJblVWqmJ1/?igsh=MXF4NjQzd2ZxZjVxbg%3D%3D', //rabbit jumping
  'https://www.instagram.com/reel/DBhP547ixqh/?igsh=MWdmbmNobjJ0b3cwcw==', //child launching toy rocket
  'https://www.youtube.com/watch?v=QKMkhCsgsas', //wingsuit flight in Alps
  'https://www.youtube.com/watch?v=RH1hZ7ECNok', //insanely high blob launch
  'https://www.youtube.com/watch?v=4B-kMtpGpn4', //reporter flipped by sled
  'https://www.instagram.com/reel/DDvCDV7yKjm/?igsh=MXZpMmR6anBjdTQzZQ==', //child disappears on sled run
  'https://www.youtube.com/shorts/Z_Nf0s-NRAI', //motorcycle jumps that keep getting longer
  'https://www.instagram.com/reel/DDUe0zRRaXc/?igsh=MTltanRzMGRjMXQxcA%3D%3D', //Christmas tree launcher
  'https://www.youtube.com/watch?v=Az6uaYtdEVM', //bird knocks turtle off shelf
  'https://www.tiktok.com/@memesessentials/video/7313668522247294250', //beetle fight
  'https://www.reddit.com/r/Damnthatsinteresting/comments/1hxt9hv/man_test_power_of_different_firework/', //Man tests power of different fireworks
  'https://twitter.com/stopbeingthem/status/1542575842584174592' //Norris getting bopped in the face by Ricciardo to F1 theme
]

var buttonNames = [
  'LAUNCH',
  'YEET',
  'BLAST OFF',
  '3...2...1...'
]

function button() {
  var randomNumber1 = Math.floor(Math.random() * (buttonNames.length));
  document.getElementById('buttonName').value = buttonNames[randomNumber1]; //code from https://stackoverflow.com/questions/15681764/pass-a-variable-as-an-attribute-to-an-html-button
}

function newLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  window.location.href = links[randomNumber];
}
