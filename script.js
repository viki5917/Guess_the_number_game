var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
// var guess=document.querySelector("#guess");
// guess.addEventListener('click', game());

    
const result=Math.floor(Math.random()*10)+1;
console.log(result);
let no_of_guess=3;
var i=0;
var guessed_number=[];


function game()
{
    var user_guess=document.querySelector("#inputbox").value;
    
    if((user_guess<1)||(user_guess>10))
    {
        alert("Please Enter a number between 1-10");
        
    }
    else
    {
        no_of_guess--; 
        guessed_number.push(user_guess);
        if(no_of_guess>0){
            if(user_guess<result)
            {
                chances=no_of_guess;
                msg1.textContent="Your guess is low";
                msg2.textContent="Number of Chances Left : "+chances;
                msg3.textContent="Numbers You Have Guessed : "+guessed_number;
            
            }

            else if(user_guess>result )
            {
                chances=no_of_guess;
                msg1.textContent="Your guess is High";
                msg2.textContent="Number of Chances Left : "+chances;
                msg3.textContent="Numbers You Have Guessed : "+guessed_number;
                
            }

            else if (user_guess==result)
            {
            msg1.textContent="Congratulations!! Your are winner";
            msg1.style.color= "lightgreen";
            msg2.style.display="none";
            msg3.style.display="none";
            document.querySelector("#inputbox").disabled=true;
            winnings();
            }
        }else if(no_of_guess==0 & user_guess==result){
            msg1.textContent="Congratulations!! Your are winner";
            msg1.style.color= "lightgreen";
            msg2.style.display="none";
            msg3.style.display="none";
            document.querySelector("#inputbox").disabled=true;
            winnings();
        }
        else{
            msg1.textContent="Game over!!!";
            msg1.style.color= "red";
            msg2.textContent="Better luck next time"
            msg3.textContent="The Number is : "+ result;
            document.querySelector("#inputbox").disabled=true;
        }
        
       
    }
}
       
function winnings(){

    var confettiPlayers = [];

    function makeItConfetti() {
      var confetti = document.querySelectorAll('.confetti');
      
      if (!confetti[0].animate) {
        return false;
      }
    
      for (var i = 0, len = confetti.length; i < len; ++i) {
        var candycorn = confetti[i];
        candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
        var scale = Math.random() * .7 + .3;
        var player = candycorn.animate([
          { transform: `translate3d(${(i/len*100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
          { transform: `translate3d(${(i/len*100 + 10)}vw,105vh,0) scale(${scale}) rotate(${ Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
        ], {
          duration: Math.random() * 3000 + 5000,
          iterations: Infinity,
          delay: -(Math.random() * 7000)
        });
        
        confettiPlayers.push(player);
      }
    }
    
    makeItConfetti();
    onChange({currentTarget: {value: 'bookmarks'}})
    
    document.getElementById('type').addEventListener('change', onChange)
    
    function onChange(e) {
      document.body.setAttribute('data-type', e.currentTarget.value);
      confettiPlayers.forEach(player => player.playbackRate = e.currentTarget.value === 'bookmarks' ? 2 : 1);
    }




}