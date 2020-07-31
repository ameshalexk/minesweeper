$(() => {

  //render a field of boxes 
  const mineBoard =  () => {
  
    const $field = $('#game');
    for (i=0; i<180 ; i++) {
      let $box = $('<div>')
      $box.addClass('box')
      $box.attr('id', i)
      $field.append($box)
      

    }

  }
  const sweepMine= (event) => {

    console.log(event.currentTarget.id);
  }

  mineBoard();
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})