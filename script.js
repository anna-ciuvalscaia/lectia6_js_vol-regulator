
let volume = 50  // variabila volume raspunde de afisarea in inputul screen a valorii value
let screen = document.getElementById('player').firstElementChild;
let slider = document.getElementById('player').children[1].children[1];
let bt = document.getElementsByTagName('BUTTON') 

    screen.value = volume
    slider.value = volume

    function up(){
        if(screen.value == 100){return
        } else { screen.value++}   
     }
       
     function down(){
         if(screen.value == 0){return
        } else {screen.value--}
     }

    function change(){
    screen.value = this.value
    } 

slider.oninput = change
bt[0].onclick = down
bt[1].onclick = up


