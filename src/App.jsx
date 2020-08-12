import React from 'react';

function App(){
    const css = {};
    let date = new Date().getHours();
    let greet ="";
    if(date > 1 && date < 12){
        greet = "Morning";
        css.color = "orange"
      }
      else if(date >= 12 && date < 16){
        greet = "Afternoon";
        css.color = "yellow"
      }
      else if(date >= 16 && date < 21){
        greet = "Evening";
        css.color = "grey"
      }
      else{
        greet = "Night"
        css.color = "black"
      }
    return(
        <>
            <h1>Hello Sir, <span style= {css}>Good {greet}!</span></h1>
        </>
    );
}

export default App;
