$(() => {
  
const counter = [];
let time = 1;
const arry = [];
let mineSet = new Set()
let total = 0;
let $newH1 = $('<div>')



  //render a field of boxes 
  const mineBoard =  () => {
 
    const $field = $('#game');
    for (i=0; i<100 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $box.attr('contains', "empty")
      $field.append($box)
      $($box).css('background-image', '#676061')
      $($box).css('color', 'white') 
      $($box).css('text-align', 'center') 
      $($box).html('🟩') 
      $('.imga').css('width', '20px') 
      $('.imga').css('height', '20x') 
      $('#game').css('position', 'relative');
      $('#game').css('left', 'auto');
      $('#game').css('top', 'auto');
    }
  }


    // create function to make mines.
    const mines = (num) => {
      for (let i=0; i<num; i++) {
       let rand = Math.floor(Math.random() * 99);
        let $minePos = $(`#${rand}`).position(); 
        let $mineId = rand;
        arry.push($minePos);
        $(`#${rand}`).css('background-color', 'red') 
        $(`#${rand}`).attr('contains', "mine")
        mineSet.add(rand)
      }
    }
    
    const isBoxRevealed = (e) => {
      if(counter.indexOf(e.currentTarget.id) === -1) {
        counter.push(e.currentTarget.id);
        $(e.currentTarget).css('background-color', 'green')

        // console.log(e.currentTarget.id);
        return true
    }
  }
    const gameWon = (e) => {
      if(counter.length + mineSet.size === 100 || counter.length ===5) {
        alert(`Yayy!! You you wont Minesweeper! It took you ${time} seconds.`);
        // location.reload(true);
        // player1 = new Player('amesh', time)
        // console.log('lol');
        mover(e, $newH1);
        // return true
    }
  }




  //Clicking on field to detect mines.
  const sweepMine= (event) => {
  const $pos = $(event.currentTarget).position();
  // console.log($pos);
  if (isBoxRevealed(event)) {
    gameWon(event);

    const $numb = $(event.currentTarget)
    const box = []

    $.each(arry , function(index, val) { 
      if ( val.top - $pos.top  === 32 && $pos.left === val.left ) {
        let boxy = 'north'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
      }

      if ($pos.left - val.left === 32 && $pos.top === val.top ) {
        console.log('east');
        let boxy = 'east'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
      }

        if ($pos.top - val.top === 32 && $pos.left === val.left ) {
          let boxy = 'south'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.left - $pos.left  === 32 && $pos.top === val.top ) {
        let boxy = 'west'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top - $pos.top  === 32 && $pos.left - val.left === 32) {
          let boxy = 'northeast'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);

        }

        if ($pos.top - val.top === 32 && $pos.left - val.left === 32 ) {
          let boxy = 'southeast'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ($pos.top - val.top === 32 && val.left - $pos.left=== 32 ) {
          let boxy = 'southwest'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top - $pos.top   === 32 &&  val.left - $pos.left === 32) {
          let boxy = 'northwest'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top === $pos.top  &&  val.left === $pos.left ) {
          $('#game').click(function () {
            $(this).animate({
            }, 'slow');
        }, function () {
            $(this).delay(200).animate({
                width: 0
            }, 'slow', function () { 
                alert('Oops!! You clicked on a mine!');
                location.reload(true);
            });
        });
        }
        $numb.text(`${box.length}`)
        $numb.css('font-family','Orbitron')

    }    
    );
    }
  }
  

  mineBoard();
  mines(10);

  $('#game').one('click', function(e) {
    setInterval( () => {
      // console.log('sd');
      $('#timer').html(time);
      time++
    }, 1000);
});

  $('.box').on('click', sweepMine);
  const flag = (event) => {
    const $rclick = $(event.currentTarget);
    if (event.button ==2) {
        $rclick.html('🚩')
    }
  }

  $('.box').on('mousedown', flag);
    //Grabbing Elements
    const $openBtn = $('#openModal'); 
    const $openBtn2 = $('#openModal2'); 
    

    const $modal = $('#modal'); 
    const $modal2 = $('#modal2'); 
    const $closeBtn = $('#close'); 
    const $closeBtn2 = $('#close2'); 

    //Event Handlers
    const openModal = () => {
      $modal.css('display', 'block'); 
    }
    
    const closeModal = () => {
      $modal.css('display', 'none'); 
    }

    const openModal2 = () => {
      $modal2.css('display', 'block'); 
    }

    const closeModal2 = () => {
      $modal2.css('display', 'none'); 
    }
    
    
    //Event Listeners
    $openBtn.on('click', openModal); 
    $openBtn2.on('click', openModal2); 

    $closeBtn.on('click', closeModal); 
    $closeBtn2.on('click', closeModal2); 
    
    // setTimeout(openModal, 5000); // trigger the openModal function automatically after a few seconds
    $('body').css('animation-name', 'changer');
    $('body').css('animation-duration', '2s');
    $('body').css('animation-iteration-count', '1'); 

    // class Player {
    //   constructor(name, timing) {
    //     this.name = name;
    //     this.timing = timing;
    //   }
    // }
    
    // console.log(player1.name);


    //Grabbing Elements
    const $openBtn1 = $('#openModal1'); 
    const $modal1 = $('#modal1'); 
    const $closeBtn1 = $('#close1'); 

    //Event Handlers
    const openModal1 = () => {
      $modal1.css('display', 'block'); 
    }
    
    const closeModal1 = () => {
      $modal1.css('display', 'none'); 
    }
    
    //Event Listeners
    $openBtn1.on('click', openModal1); 
    $closeBtn1.on('click', closeModal1); 
    
    setTimeout(openModal1, 3000); 

    const createToDo = (event) => {
      event.preventDefault();
      let $inputValue = $('#input-box').val();
      let $newDiv = $('<div>')
      // let $newH1 = $('<div>')
      let $toDoButton = $('<button>')
      $newH1.text($inputValue)
      $toDoButton.text('Completed')
      
      $('#to-do-list').append($newDiv)
      $newDiv.append($newH1)
      $newH1.addClass('to-do-item')
      // $newH1.append($toDoButton)
      $("#input-box").val("");
      $("#modal1").css('display', 'none'); 
      // $toDoButton.on('click', (event) => {
      //   mover(event,$newH1);
      // });
 
 
    } 
    // const deletes =(event, $del) => {
    //   $del.remove();
    // }
    
    const mover = (event, $move) => {
      $move.removeClass("to-do-item");
      $move.attr('class', 'done-item');
      $("#completed").append($move);
      console.log($move.text());
      $move.html(`${$newH1.text()} took ${time} seconds.`)

    }
    $('#submit').on('click', createToDo);



})

