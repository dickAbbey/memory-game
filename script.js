
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
    // let open;

   // Check for selected option 
   grid_options.forEach((grid_option) =>{
       if( option_value == grid_option.value){
        grid_option.classList.add("active");
        // open = grid_option.value;
       } else{
        grid_option.classList.remove("active");
       }
   });
//    returnss open;
}


function start() {
    let themeNum = document.getElementById("theme-button-num");
    let themeIcon = document.getElementById("theme-button-icon");
    let playerOne = document.getElementById("player-button-one");
    let playerTwo = document.getElementById("player-button-two");
    let playerThree = document.getElementById("player-button-three");
    let playerFour = document.getElementById("player-button-four");
    let grid4 = document.getElementById("grid-button-4x4");
    let grid6 = document.getElementById("grid-button-6x6");

    // console.log(themeNum.classList[1]);
    // console.log(themeNum.classList[1] === "active");

    // Number | Plyers | 4x4
    if (themeNum.classList[1] === "active" && playerOne.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeNum.classList[1]+" - numbers");
        console.log(playerOne.classList[1] + " - 1");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeNum.classList[1] === "active" && playerTwo.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerTwo.classList[1] + " - 2");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeNum.classList[1] === "active" && playerThree.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerThree.classList[1] + " - 3");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeNum.classList[1] === "active" && playerFour.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerFour.classList[1] + " - 4");
        console.log(grid4.classList[1] + " - 4x4");

    } // Number | Plyers | 6x6
    else if (themeNum.classList[1] === "active" && playerOne.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeNum.classList[1]+" - numbers");
        console.log(playerOne.classList[1] + " - 1");
        console.log(grid6.classList[1] + " - 6x6");

    } else if (themeNum.classList[1] === "active" && playerTwo.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerTwo.classList[1] + " - 2");
        console.log(grid6.classList[1] + " - 6x6");

    } else if (themeNum.classList[1] === "active" && playerThree.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerThree.classList[1] + " - 3");
        console.log(grid6.classList[1] + " - 6x6");

    } else if (themeNum.classList[1] === "active" && playerFour.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeNum.classList[1] + " - numbers");
        console.log(playerFour.classList[1] + " - 4");
        console.log(grid6.classList[1] + " - 6x6");  

    } // Icons | Plyers | 4x4
    else if (themeIcon.classList[1] === "active" && playerOne.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeIcon.classList[1]+" - icons");
        console.log(playerOne.classList[1] + " - 1");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeIcon.classList[1] === "active" && playerTwo.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerTwo.classList[1] + " - 2");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeIcon.classList[1] === "active" && playerThree.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerThree.classList[1] + " - 3");
        console.log(grid4.classList[1] + " - 4x4");

    } else if (themeIcon.classList[1] === "active" && playerFour.classList[1] === "active" && grid4.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerFour.classList[1] + " - 4");
        console.log(grid4.classList[1] + " - 4x4");

    }// Icons | Plyers | 6x6
    else if (themeIcon.classList[1] === "active" && playerOne.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeIcon.classList[1]+" - icons");
        console.log(playerOne.classList[1] + " - 1");
        console.log(grid6.classList[1] + " - 6x6");

    } else if (themeIcon.classList[1] === "active" && playerTwo.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerTwo.classList[1] + " - 2");
        console.log(grid6.classList[1] + " - 6x6");

    } else if (themeIcon.classList[1] === "active" && playerThree.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerThree.classList[1] + " - 3");
        console.log(grid6.classList[1] + " - 6x6");

    } else if(themeIcon.classList[1] === "active" && playerFour.classList[1] === "active" && grid6.classList[1] === "active") {
        console.log(themeIcon.classList[1] + " - icons");
        console.log(playerFour.classList[1] + " - 4");
        console.log(grid6.classList[1] + " - 6x6");

    }

}

// Initially display default buttons
window.onload = () =>{
    themeOption('numbers');
    playerOption('1');
    gridOption('4x4');
}