let counter = [];
let time = 0;


$(() => {

  //render a field of boxes 
  const mineBoard =  () => {
  
    const $field = $('#game');
    for (i=0; i<100 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $field.append($box)
      $($box).css('background-image', '#676061')
      // $($box).css('background-image', 'url(./pixel.jpeg)');


      $($box).css('color', 'white') 
      $($box).css('text-align', 'center') 
      $($box).html('🟩') 
      $($box).css('display', 'true') 

      $('.imga').css('width', '20px') 
      $('.imga').css('height', '20x') 

      $('#game').css('position', 'relative');
      $('#game').css('left', 'auto');
      $('#game').css('top', 'auto');
      
      
    }
  }
  
  const arry = [];

  // create function to make mines.
  const mines = (num) => {
    for (let i=0; i<num; i++) {
     let rand = Math.floor(Math.random() * 99);
      $(`#${rand}`).css('background-color', 'red')
      let $minePos = $(`#${rand}`).position(); 
      if(arry.indexOf(rand) === -1) arry.push($minePos);

    }
    
  }
  
  console.log(arry);

  //Clicking on field to detect mines.

  const sweepMine= (event) => {
   
 

  const $pos = $(event.currentTarget).position();


  const numb = event.currentTarget;
  if(counter.indexOf(numb.id) === -1) {
      
    counter.push(numb.id);
  
  console.log(counter);
    if (counter.length ===90) {
        console.log("WON");
        alert(`Yayy!! You you wont Minesweeper! It took you ${time} seconds.`);
          location.reload(true);

    }

    // counter++
    // console.log(counter);
    
    $(numb).css('background-color', 'green')
    //Tracking position of current selection
    const $test = $('#8').position();
    const $numb = $(event.currentTarget)


    const box = []

    $.each(arry , function(index, val) { 
      

      if ( val.top - $pos.top  === 32 && $pos.left === val.left ) {
        console.log('north');
        let boxy = 'north'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        


      }

      if ($pos.left - val.left === 32 && $pos.top === val.top ) {
        // console.log($pos.top, val.top);
        console.log('east');
        let boxy = 'east'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
      }

        if ($pos.top - val.top === 32 && $pos.left === val.left ) {
          console.log('south');
          let boxy = 'south'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.left - $pos.left  === 32 && $pos.top === val.top ) {
        // console.log($pos.top, val.top);
        console.log('west');
        let boxy = 'west'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top - $pos.top  === 32 && $pos.left - val.left === 32) {
          console.log('northeast');
          let boxy = 'northeast'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);

        }

        if ($pos.top - val.top === 32 && $pos.left - val.left === 32 ) {
          console.log('southeast');
          let boxy = 'southeast'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ($pos.top - val.top === 32 && val.left - $pos.left=== 32 ) {
          console.log('southwest');
          let boxy = 'southwest'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top - $pos.top   === 32 &&  val.left - $pos.left === 32) {
          console.log('northwest');
          let boxy = 'northwest'; 
        if(box.indexOf(boxy) === -1) box.push(boxy);
        }

        if ( val.top === $pos.top  &&  val.left === $pos.left ) {
          console.log('Mine!!!');

          $('#game').click(function () {
            $(this).animate({
                // width: '900px'
            }, 'slow');
        }, function () {
            $(this).delay(200).animate({
                width: 0
            }, 'slow', function () { //callback function, which runs very next to .animate() https://stackoverflow.com/questions/4520307/how-to-delay-an-alert
                alert('Oops!! You clicked on a mine!');
                location.reload(true);

            });
        });





          // alert("Oops!! You clicked on a mine!");
          // location.reload(true);

        }
        $numb.text(`${box.length}`)
        $numb.css('font-family','Orbitron') 
        // $numb.css('text-align', 'center') 
        // $numb.html('🟦');
        // $numb.css('color', 'white');


        
    //     const fact = (num) => {
            
    //         if (num >=  80) {
    //             console.log(num);
                
    //             if (val.left === num) {
    //                 console.log('s');
                    
    //             }


    //             return fact(num-32);
    //         }
             

    //     }

    //   fact($pos.left);





    }
        
    );
    // sweepMine() 

  }
}
  mineBoard();
  mines(10);
  //creating on clicker on field
  

  $('#game').one('click', function(e) {

    setInterval( () => {
      console.log('sd');
      $('#timer').html(time);
      time++
    }, 1000);

});



  $('.box').on('click', sweepMine);

  const flag = (event) => {
    const $rclick = $(event.currentTarget);
    if (event.button ==2) {
      // if ( display === true ) {
        $rclick.html('🚩')
      // } else if ( display === false ) {
        // $( "#foo" ).hide();
      // }
      
      
    }

  }


  $('.box').on('mousedown', flag);




    //Grabbing Elements
    const $openBtn = $('#openModal'); // grab the HTML element with the ID 'openModal' and save it to a jquery variable
    const $modal = $('#modal'); // grab the HTML element with the ID 'modal' and save it to a jquery variable
    const $closeBtn = $('#close'); // grab the HTML element with the ID 'close' and save it to a jquery variable
    
    //Event Handlers
    const openModal = () => {
      $modal.css('display', 'block'); // add the css property display: block to the HTML element we stored in the $modal variable
    }
    
    const closeModal = () => {
      $modal.css('display', 'none'); // add the css property display: none to the HTML element we stored in the $modal variable
    }
    
    //Event Listeners
    $openBtn.on('click', openModal); // on click, trigger the openModal function
    $closeBtn.on('click', closeModal); // on click, trigger the closeModal function
    
    // setTimeout(openModal, 5000); // trigger the openModal function automatically after a few seconds



    $('body').css('animation-name', 'changer');
    $('body').css('animation-duration', '2s');
    $('body').css('animation-iteration-count', '1'); 
    
    
    











})

