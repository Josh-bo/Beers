// function btn(){
//     for(i = 99; i >= 1; i--){
//         if(i == 1){
//         disp.innerHTML = disp.innerHTML + `<h3> ${i} bottle of fanta on the wall,  ${i} bottles of fanta. Take one down and pass it around,  no more bottles of fanta on the wall </h1><br>`
        
//         }else{
//             disp.innerHTML =  disp.innerHTML + `<h3> ${i} bottles of fanta on the wall,  ${i} bottles of fanta. Take one down and pass it around,  ${Number(i-1)} bottles of fanta on the wall </h1><br>`
//         }
//     }
    
//      if(i == 0){
//         disp.innerHTML =  disp.innerHTML + `<h3> No more bottles of fanta on the wall, no more bottles of fanta.                             Go to the store and buy some more 99 bottles of fanta on the wall.
//          </h1><br>`
//      }
// }

function btn(){
    for(i = 99; i >= 1; i--){
        if(i == 1){
            disp.innerHTML +=`<h5> ${i} bottle of fanta on the wall,  ${i} bottles of fanta. Take one down and pass it around,  no more bottles of fanta on the wall </h5>`
            disp.style.color = "red"
        }else{
            disp.innerHTML += `<h5> ${i} bottles of fanta on the wall,  ${i} bottles of fanta. Take one down and pass it around,  ${Number(i-1)} bottles of fanta on the wall </h5>`
            disp.style.color = "red"
        }
    }
    
     if(i == 0){
        disp.innerHTML += `<h5> No more bottles of fanta on the wall, no more bottles of fanta.                             Go to the store and buy some more 99 bottles of fanta on the wall.
         </h5>`
         disp.style.color = "red"
     }
}