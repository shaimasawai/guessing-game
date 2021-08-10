'User strict';
// let askUser = prompt ('Whats Your Name? ');
// function NameUser(){


// alert ('I hope you have nice day ' + askUser );

//  let askDrow = prompt (' Do You DO Drow?');
//  switch (askDrow) {
//      case true :
//          alert (' You Are Talented');
//          //console.log(askDrow);
//          break;
//          case false :
//              alert('You miss somthing beautiful ');
//              //console.log(askDrow);
//              break;
//              default:
//                  alert('You didnt answer');
//                 // console.log(askDrow);
//  }
// }

//     NameUser();

//     function favmoive(){
//   let askmovie = prompt(' Do you like moive? : )' , ' you answer should be in uppercase');
//   switch( askmovie){
//       case'YES':
//       alert( 'Good choose');
//       //console.log(askmovie);
//       break;
//       case'NO':
//       alert(' !How you spend your time ');
//       //console.log(askmovie);
//       break;
//       default:
//           alert(' You didnt answer ');
//          // console.log(askmovie);
//   }
// }
//     favmoive();


//     function favpapsi(){

//           let askpepsi = prompt(' Do like papsi?' ,' you answer should be is Y OR N');
//           switch(askpepsi){
//               case 'Y':
//                   alert(' This is not healthy ');
//                   //console.log(askpepsi);
//                   break;
//                   case 'N':
//                       alert(' Good choose');
//                       //console.log(askpepsi);
//                       break;
//                       default:
//                           alert(' You didnt answer ');
//                           //console.log(askpepsi);

//           }}
//           favpapsi();


//           function winterwhither(){

//           let askwhither =prompt(' Do you like winter?');
//           switch(askwhither){
//               case 1: 
//               alert(' Its vere coold ');
//              // console.log(askwhither);
//               break;
//               case 2:
//                alert('Spring is better ') ;
//                //console.log(askwhither);
//                break;
//               default:
//                    alert('You didnt answer');
//                   // console.log(askwhither); 
//           }}
//           winterwhither();



//           function favmunsaf(){

//           let askfood = prompt(' Do you like munsaf ? ');
//           switch(askfood){
//               case'yes'|| 'y':
//               alert('good choose');
//               console.log(askfood);
//               break;
//               case'no'||'n':
//               alert('that is sad');
//               console.log (askfood);
//               break;
//               default:
//                   alert('you didnot answer');
//                  // console.log (askfood);             
//           }

//           alert('Thanks for answers '+ askUser );
//         }
//           favmunsaf();
          

          

     


let counter = 0
 function guseenumber(){
 
 let user = prompt('Please guess number ^_^ ');

 let numGuess = Number(user);
 
 let x= 20;



 for( let i = 0 ; i <= 2 ; i++ ){

  if (numGuess === x){
    alert(' correctr num ');


    counter++ ;

    break;
  }
 else if (numGuess < x){

    alert(' Too low ');

    numGuess = prompt('Please guess new number ^_^ ');
    
 }

else if (numGuess > x){

    alert(' Too high');
    numGuess = prompt('Please guess new number ^_^ ');
    
}
console.log(numGuess);


}

alert(' the correct number is  ' + x );
alert(' you get ' + counter + '/4');


}
guseenumber();






// let correct = 0 ;

// function question7(){

// let guesscolor = [ 'read' , 'black' , 'white' , 'green' , 'yallow' ];


// for( let w=0 ; w <6 ; w++){
    
//     let askcolor = prompt(' can you guess one of my favorite color ');

    
//     if(guesscolor.includes(askcolor.toLocaleLowerCase)){

//        alert(' you are correctl');
//        correct++;

//        break;
//     }

//     else{
//         alert(' please try again ');
//     }

// }}

  
// question7();
// alert( ' you get ' + correct + ' /7');





