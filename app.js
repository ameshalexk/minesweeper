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
      // let $newMine = $('<div>')
      // $newMine.css('background-color', 'black')
    //   let rand = Math.floor(Math.random() * 99)
    //   const random = [];
    //   while(random.length < 10){
        //       if(random.indexOf(rand) === -1) random.push(rand);
        //   }
        //   console.log(random);
        
     let rand = Math.floor(Math.random() * 99);

      // console.log(rand);
      // $newMine.attr('id', rand);
      $(`#${rand}`).css('background-color', 'red')
    //   $(`#${rand}`).css('color', 'white') 
      let $minePos = $(`#${rand}`).position(); 
      // console.log($minePos);
      if(arry.indexOf(rand) === -1) arry.push($minePos);
    
      
      // console.log(arr);
        
  

    }

    
  }
  
  console.log(arry);
  

  

  //Clicking on field to detect mines.
  const sweepMine= (event) => {
  const numb = event.currentTarget;
    
  const selectedArr = [];

    if (arry.includes(parseInt(numb.id,10))) {
      console.log('dead')
      console.log(numb);
      $(numb).css('background-color', 'red')
      alert("Oops!! You clicked on a mine!");

    } else {
      console.log('alive');
      console.log(numb.id);
      $(numb).css('background-color', 'green')
      //Tracking position of current selection
      const $pos = $(event.currentTarget).position();
      const $test = $('#8').position();
      const $numb = $(event.currentTarget)

      // console.log($test);
      // console.log('sd');

      const box = []

      $.each(arry , function(index, val) { 
        

        if ( val.top === $pos.top  &&  val.left === $pos.left ) {
            console.log('Mine!!!');
            alert("Oops!! You clicked on a mine!");
            location.reload(true);

          }
        // console.log(val.top, 'valtop');
        // console.log($pos.top, 'postop');


        // if ($pos.top === val.top) {
        //   console.log(val.top, 'valtop');
        //   console.log($pos.top, 'postop');


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

          

          

          console.log(box);
          $numb.text(`:(${box.length}):`)


      }
      
      );

      
    }
  }

  mineBoard();
  mines(10);
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})

