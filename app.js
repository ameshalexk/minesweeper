$(() => {

  //render a field of boxes 
  const mineBoard =  () => {
  
    const $field = $('#game');
    for (i=0; i<180 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $box.text(i)

      $field.append($box)


    }

  }
  
  const arr = [];

  //create function to make mines.
  const mines = (num) => {
    for (let i=0; i<=num; i++) {
      arr.push(Math.floor(Math.random() * 180))
    }
  }
  mines(10);
  console.log(arr);

  //Clicking on field to detect mines.
  const sweepMine= (event) => {
    if (arr.includes(parseInt(event.currentTarget.id,10))) {
      console.log('dead')
      console.log(event.currentTarget);
      $(event.currentTarget).css('background-color', 'red')
    } else {
      console.log('alive');
      console.log(event.currentTarget.id);
      $(event.currentTarget).css('background-color', 'green')
    }
  }

  mineBoard();
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})