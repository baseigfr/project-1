//starting the game!





$(() => {
  //drawgame if drawgame = false
  const startNewGame = () => {

    $('#points').text('Points = ' + points)
    startGame()

  }


  let points = 0;


  let draw = () => {

    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');

      let ranX = Math.floor(Math.random() * 400) + 100
      let ranY = Math.floor(Math.random() * 400) + 100
      // console.log(ranX, ranY)
      let circleBlue = new Path2D();
      circleBlue.arc(ranX, ranY, 10, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fill(circleBlue);
      $(document).on('click', '#canvas', function (event) {
        // console.log(event)
        if (event.offsetY <= ranY + 10 && event.offsetY >= ranY - 10 && event.offsetX <= ranX + 10 && event.offsetX >= ranX - 10) {
          points += 1
          ranY = null
          ranX = null
          $('#points').text('Points = ' + points)

          ctx.clearRect(0, 0, canvas.width, canvas.height)
          // $('#canvas').empty()
          draw();
        }
      })
    }
  }

  const clear = () => {
    $('#canvas').remove()
    $('#container').prepend('<canvas id="canvas" width="600" height="600"></canvas>')
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }


  let draw2 = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');


    let rect = {
      x: 100,
      y: 255,
      vx: 5,
      color: 'white',
      animate: function () {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, 30, 90);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rect.animate();
      rect.x += rect.vx;

      if (rect.x + rect.vx > canvas.width - 100 || rect.x + rect.vx < 100) {
        rect.vx = -rect.vx;
      }


      // console.log(rect.x)

      window.requestAnimationFrame(animate);

    }

    window.requestAnimationFrame(animate);




    rect.animate();

    $(document).on('click', '#canvas', function (event) {

      // setInterval(function(){

      // }, 5000)
      // console.log(event.offsetX)
      // console.log(rect.x, 'rect.x')
      // console.log(points, 'points')


      if (event.offsetY <= rect.y + 90 && event.offsetY >= rect.y - 90 && event.offsetX <= rect.x + 30 && event.offsetX >= rect.x - 30) {    
        points += 1
        $('#points').text('Points = ' + points)

       }

        // event.stopPropagation()

    })


  }

  let timer2 = () => {
    let counter = 30;
    let interval = setInterval(function () {
      counter--;
      if (counter <= 0) {

        clear()
        clearInterval(interval);
        $('#time').text("The game has ended! You got " + points + " points!");
        $('aside').append('<button id="play-again">Play Again?</button>')
        $(document).on('click', '#play-again', restartGame = (event) => {
          $(event.currentTarget).remove()
          points -= points

          startNewGame()

        })
      } else if (counter < 10) {
        $('#time').text('00:0' + counter);
      } else {
        $('#time').text('00:' + counter);
      }
    }, 1000);
  }

  let timer = () => {
    let counter = 30;
    let interval = setInterval(function () {
      counter--;
      if (counter <= 0) {
        clearInterval(interval);
        clear()
        $('#time').text("Round Over Get Ready for Next Round!");
        setTimeout(function () {
          startGame2()
        }, 3000)
      } else if (counter < 10) {
        $('#time').text('00:0' + counter);
      } else {
        $('#time').text('00:' + counter);
      }
    }, 1000);
  }


  startGame2 = () => {

    clear();
    timer2();
    draw2();
  }


  $(document).one('click', '#start-game', startGame = () => {
    timer();
    draw();


  })



})








//let winFirstGame = false
//if (winFirstGame = true)
//if winFirstGame != true {
//draw() }
//else if (secondGame != true)
//}

//countdown to 30 winFirstGame = true
//top left is origin 
//make class circles
//spawn on random coordinate 
//clearRect on random coordinate of spawn