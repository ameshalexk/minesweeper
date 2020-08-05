
  // for (i = 0; i < localStorage.length; i++)   {
  //   const $li = $('<li>');
  //   $li.text(localStorage.key(i));
  //   $(`#tdl`).append($li);
  //   console.log(localStorage.values);
  // }


  for (i = 0; i < localStorage.length; i++)   {
    const $li = $('<ul>');
    $li.text(Object.entries(localStorage).sort((a,b) => b[1]-a[1]));
    $(`#tdl`).append($li);
    console.log(localStorage.values);
  }

 
  // function sortObjectEntries(obj, n){
   
  //   let sortedList = []
  //   //Sorting by values asc
  //   sortedList = Object.entries(obj).sort((a,b)=>{
  //         if(b[1] < a[1]) return 1;
  //         else if(b[1] > a[1]) return -1;
  //   //if values are same do edition checking if keys are in the right order
  //         else {
  //            if(a[0] < b[0]) return 1;
  //            else if(a[0] > b[0]) return -1;
  //            else return 0
  //     }
  //    })
     // return first n values from sortedList
    //  const $li = $('<ul>');
    // console.log(JSON.stringify(sortedList));
    // let fun = JSON.stringify(sortedList);
    // let plain = fun.split('[').join("").split(']').join("").split('"').join("").split(',').join('\n')
    // let q = plain.replace(/[0-9]/g/n, '');
    //  console.log(q);

    //  $li.text(`${q} seconds. \n`);
    // $(`#tdl`).append($li);
    
    // console.log(plain);
    //   return sortedList.map(el=>el[0]).slice(0,n)
    //  }

    //  sortObjectEntries(localStorage);