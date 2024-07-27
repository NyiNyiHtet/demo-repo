// Selecting by ID
const title = document.getElementById('title');
title.textContent = 'Welcome to JavaScript DOM Manipulation';
// Selecting by class
function changeParagraph(){
    var paragraphs = document.getElementsByClassName("intro");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "This is the new paragraph content.";
    }

    var button = document.getElementById("changeButton");
    button.textContent = "Changed Paragraph";
}

function changeLabel(){
    var label = document.getElementById("labelButton");
    label.textContent = "Changed Paragraph";
}


let isChanged = false;

// Function to toggle paragraph content and button label
function toggleParagraphAndButtonLabel() {
    // Get all paragraph elements with the class name 'intro'
    var paragraphs = document.getElementsByClassName("intro");

    // Get the button element
    var button = document.getElementById('changeButton');

    if (isChanged) {
        // Revert to the original content
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent = "This is a paragraph.";
        }
        button.textContent = "Change Paragraph";
    } else {
        // Change to the new content
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent = "This is the new paragraph content.";
        }
        button.textContent = "Paragraph Changed!";
    }

    // Toggle the state
    isChanged = !isChanged;
}
//console.log(paragraphs);


