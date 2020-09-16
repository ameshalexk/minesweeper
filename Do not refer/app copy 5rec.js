let counter = [];


$(() => {

  //render a field of boxes 
  const mineBoard =  () => {
  
    const $field = $('#game');
    for (i=0; i<100 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $field.append($box)
      $($box).css('background-color', 'black')
      $($box).css('color', 'white') 
      $box.text('**********')
    }
  }
  
  const arry = [];

  //create function to make mines.
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
        alert("Yayy!! You you wont Minesweeper!");
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
          alert("Oops!! You clicked on a mine!");
          location.reload(true);

        }
        $numb.text(`:(${box.length}):`)

        







    }
        
    );
    // sweepMine() 

  }
}
  mineBoard();
  mines(10);
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})
