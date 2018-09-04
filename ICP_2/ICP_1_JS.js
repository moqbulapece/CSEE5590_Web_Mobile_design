var user_input = prompt("Please give your choice?rock/paper/scissor");
if (! user_input) {
    document.write("<p>No input given</p>");
} else {
    document.write("<p>User Input:" + " " + user_input + "</p>");
}
var computer_generated = Math.random();
if (computer_generated < 0.34) {
    computer_generated = "rock";
} else if(computer_generated <= 0.67) {
    computer_generated = "paper";
} else {
    computer_generated = "scissors";
}
// Display computer choice
document.write("<p>Computer Generated:" + " " + computer_generated + "</p>");
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose!";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose!.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};
var results = compare(user_input,computer_generated);
document.write("<br><hr><br>" + results);