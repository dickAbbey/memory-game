
// Theme Options
function themeOption(option_value) {
    // Select all Theme options
    let options = document.querySelectorAll(".theme-button");

    options.forEach((option) => {
        // Check for selected option
        if (option_value == option.value) {
            option.classList.add("active");
        }else{
            option.classList.remove("active");
        }
    });
}

// Players Option
function playerOption(option_value) {
    // Select all Players option
    let player_options = document.querySelectorAll(".player-button-num");

   // Check for selected option 
   player_options.forEach((player_option) =>{
       if( option_value == player_option.value){
            player_option.classList.add("active");
       } else{
        player_option.classList.remove("active");
       }
   });
}

// Gird Options
function gridOption(option_value) {
    // Select all Grid option
    let grid_options = document.querySelectorAll(".grid-button-num");

   // Check for selected option 
   grid_options.forEach((grid_option) =>{
       if( option_value == grid_option.value){
        grid_option.classList.add("active");
       } else{
        grid_option.classList.remove("active");
       }
   });
}

function start() {
    let options = document.querySelectorAll(".theme-button");
    let player_options = document.querySelectorAll(".player-button-num");
    let grid_options = document.querySelectorAll(".grid-button-num");
    
    // options.forEach((option) => {
    //     player_options.forEach((player_option) =>{
    //         grid_options.forEach((grid_option) =>{
    //             if (option.value == "numbers" && player_option.value == "1" && grid_option.value == "4x4"  ) {
    //                 console.log(option.value + " - " + player_option.value + " - " + grid_option.value);
    //             }
    //             else if (option.value == "icons" && player_option.value == "2" && grid_option.value == "6x6" ){
    //                 console.log(option.value + " - " + player_option.value + " - " + grid_option.value);  
    //             }
    //         });  
    //     });
    // });
    // console.log(grid_options.value);
}

// Initially display default buttons
window.onload = () =>{
    themeOption('numbers');
    playerOption('1');
    gridOption('4x4');
}