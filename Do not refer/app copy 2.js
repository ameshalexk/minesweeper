$(() => {

  //render a field of boxes 
  const mineBoard =  () => {
  
    const $field = $('#game');
    for (i=0; i<100 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $field.append($box)
      $box.text(i)
    }
  }
  
  const arry = [];

  //create function to make mines.
  const mines = (num) => {
    for (let i=0; i<num; i++) {
      // let $newMine = $('<div>')
      // $newMine.css('background-color', 'black')
      let rand = Math.floor(Math.random() * 99)
      // console.log(rand);
      // $newMine.attr('id', rand);
      $(`#${rand}`).css('background-color', 'black')
      $(`#${rand}`).css('color', 'white') 
      let $minePos = $(`#${rand}`).position(); 
      // console.log($minePos);
     
      arry.push($minePos)
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
    } else {
      console.log('alive');
      console.log(numb.id);
      $(numb).css('background-color', 'green')
      //Tracking position of current selection
      const $pos = $(event.currentTarget).position();
      const $test = $('#8').position();

      // console.log($test);
      // console.log('sd');

      

      $.each(arry , function(index, val) { 
        
        // console.log(val.top, 'valtop');
        // console.log($pos.top, 'postop');


        if ($pos.top === val.top) {
          console.log(val.top, 'valtop');
          console.log($pos.top, 'postop');

          if ($pos.left - val.left === 32)
          // console.log($pos.top, val.top);
          console.log('lol');

          if ($pos.top - val.top === 32)
          // console.log($pos.top, val.top);
          console.log('lol2');



        }

        




      });

      
    }
  }

  mineBoard();
  mines(10);
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})