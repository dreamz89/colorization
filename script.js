var colorPalette = ['green', 'blue', 'red', 'purple', 'yellow']
var counter = 0
var score = document.querySelector('.score')

function randomColor(){
  var color = colorPalette[Math.floor(Math.random() * 5)]
  return color;
}

function colorize (){
  var bgColor = randomColor()
  document.querySelector('body').style.backgroundColor = bgColor
  var innerColor = randomColor()
  document.querySelector('h2').textContent = innerColor
  document.querySelector('h2').addEventListener('click', function(){
    if (bgColor === innerColor){
    counter++
    score.innerText = counter
    bgColor = randomColor()  //why does this fix the logic?
    innerColor = randomColor() //why does this fix the logic?
    }
  })
}

setInterval(colorize, 1000);
