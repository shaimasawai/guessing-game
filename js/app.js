'User strict';


let askUser = prompt ('Whats Your Name? ');

alert ('I hope you have nice day ' + askUser );

 let askDrow = confirm (' Do You DO Drow?');
 switch (askDrow) {
     case true :
         alert (' You Are Talented');
         //console.log(askDrow);
         break;
         case false :
             alert('You miss somthing beautiful ');
             //console.log(askDrow);
             break;
             default:
                 alert('You didnt answer');
                // console.log(askDrow);

 }

  let askmovie = prompt(' Do you like moive? : )' , ' you answer should be in uppercase');
  switch( askmovie){
      case'YES':
      alert( 'Good choose');
      //console.log(askmovie);
      break;
      case'NO':
      alert(' !How you spend your time ');
      //console.log(askmovie);
      break;
      default:
          alert(' You didnt answer ');
         // console.log(askmovie);
  }

          let askpepsi = prompt(' Do like papsi?' ,' you answer should be is Y OR N');
          switch(askpepsi){
              case 'Y':
                  alert(' This is not healthy ');
                  //console.log(askpepsi);
                  break;
                  case 'N':
                      alert(' Good choose');
                      //console.log(askpepsi);
                      break;
                      default:
                          alert(' You didnt answer ');
                          //console.log(askpepsi);

          }

          let askwhither =prompt(' Do you like winter?');
          switch(askwhither){
              case 1: 
              alert(' Its vere coold ');
             // console.log(askwhither);
              break;
              case 2:
               alert('Spring is better ') ;
               //console.log(askwhither);
               break;
               default:
                   alert('You didnt answer');
                  // console.log(askwhither); 
          }

          alert('Thanks for answers '+askUser  );

          





  




