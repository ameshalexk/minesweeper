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
  
  const arr = [];

  //create function to make mines.
  const mines = (num) => {
    for (let i=0; i<=num; i++) {
      arr.push(Math.floor(Math.random() * 99))
    }
  }
  mines(10);
  console.log(arr);

  const selectedArr = [];

  //Clicking on field to detect mines.
  const sweepMine= (event) => {
    const numb = event.currentTarget;
    if (arr.includes(parseInt(numb.id,10))) {
      console.log('dead')
      console.log(numb);
      $(numb).css('background-color', 'red')
    } else {
      console.log('alive');
      console.log(numb.id);
      $(numb).css('background-color', 'green')

      
        if(arr.includes(parseInt(numb.id,10)+1)) {
          if (selectedArr.indexOf((parseInt(numb.id)+1) !== -1 )) {
            selectedArr.push(parseInt(numb.id)+1)
            console.log(selectedArr, true);
            console.log(selectedArr.length)
          }

      }
      if(arr.includes(parseInt(numb.id,10)-1)) {
        selectedArr.push(parseInt(numb.id)-1)
        console.log(selectedArr, true);
      }
      if(arr.includes(parseInt(numb.id,10)+10)) {
        selectedArr.push(parseInt(numb.id)+10)
        console.log(selectedArr, true);
      }
      if(arr.includes(parseInt(numb.id,10)-10)) {
        selectedArr.push(parseInt(numb.id)-10)
        console.log(selectedArr, true);
      }
      if(arr.includes(parseInt(numb.id,10)+11)) {
        selectedArr.push(parseInt(numb.id)+11)
        console.log(selectedArr, true);
      }
      if(arr.includes(parseInt(numb.id,10)-11)) {
        selectedArr.push(parseInt(numb.id)-11)
        console.log(selectedArr, true);
      }

      if(arr.includes(parseInt(numb.id,10)+9)) {
        selectedArr.push(parseInt(numb.id)+9)
        console.log(selectedArr, true);
      }
      if(arr.includes(parseInt(numb.id,10)-9)) {
        selectedArr.push(parseInt(numb.id)-9)
        console.log(selectedArr, true);
      }
      

    }
  }

  mineBoard();
  //creating on clicker on field
  $('.box').on('click', sweepMine);

})