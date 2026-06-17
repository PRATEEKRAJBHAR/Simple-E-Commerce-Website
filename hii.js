// // Get DOM elements
// let names = document.getElementsByClassName("first-to1");
// let sname = document.getElementsByClassName("first-to2");
// let email = document.getElementsByClassName("first-to3");
// let sub = document.getElementsByClassName("first-to4");
// let para = document.getElementById("msg");
// let btn = document.getElementById("last-btn");
// let para1 = document.getElementById("alert-msg");
// let para2 = document.getElementById("alert-msg1");
// let para3 = document.getElementById("alert-msg2");

// // Hide alert messages initially
// para1.style.display = "none";
// para2.style.display = "none";
// para3.style.display = "none";

// // Function to validate text input
// function validateText() {
//     const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|", "<", "{", "}"];

//     // Validate first name
//     for (let i = 0; i < names[0].value.length; i++) {
//         let char = names[0].value[i];
//         if ((num.includes(Number(char)) || symbol.includes(char)) && char !== " ") {
//             para1.style.display = "block";
//             para1.style.color = "red";
//             names[0].style.borderColor = "red";
//             return false;
//         }
//     }
//     para1.style.display = "none";
//     names[0].style.borderColor = "black";

//     // Validate surname
//     for (let i = 0; i < sname[0].value.length; i++) {
//         let char = sname[0].value[i];
//         if ((num.includes(Number(char)) || symbol.includes(char)) && char !== " ") {
//             para2.style.display = "block";
//             para2.style.color = "red";
//             sname[0].style.borderColor = "red";
//             return false;
//         }
//     }
//     para2.style.display = "none";
//     sname[0].style.borderColor = "black";

//     return true;
// }

// // Function to validate email
// function validatemail() {
//     const emailValue = email[0].value;
//     const atIndex = emailValue.indexOf("@");

//     // Check for invalid "@" placement or duplicates
//     if (atIndex < 1 || emailValue.lastIndexOf("@") !== atIndex) {
//         para3.style.display = "block";
//         para3.style.color = "red";
//         email[0].style.borderColor = "red";
//         return false;
//     }

//     // Check for a valid "." after "@"
//     const dotIndex = emailValue.indexOf(".", atIndex);
//     if (dotIndex < atIndex + 2 || dotIndex >= emailValue.length - 1) {
//         para3.style.display = "block";
//         para3.style.color = "red";
//         email[0].style.borderColor = "red";
//         return false;
//     }

//     // Check for spaces in email
//     if (emailValue.includes(" ")) {
//         para3.style.display = "block";
//         para3.style.color = "red";
//         email[0].style.borderColor = "red";
//         return false;
//     }

//     para3.style.display = "none";
//     email[0].style.borderColor = "black";
//     return true;
// }

// // Function to validate the entire form and submit
// function Add() {
//     const isNameValid = validateText();
//     const isEmailValid = validatemail();

//     // Ensure all fields are filled and valid
//     if (
//         email[0].value === "" ||
//         names[0].value === "" ||
//         sname[0].value === "" ||
//         sub[0].value === "" ||
//         para.value === "" ||
//         !isNameValid ||
//         !isEmailValid
//     ) {
//         alert("All fields must be filled correctly before submitting!");
//         return;
//     }

//     alert("Your form has been submitted successfully!");

//     // Clear all input fields
//     names[0].value = "";
//     sname[0].value = "";
//     email[0].value = "";
//     sub[0].value = "";
//     para.value = "";

//     // Reset styles and messages
//     para1.style.display = "none";
//     para2.style.display = "none";
//     para3.style.display = "none";
//     names[0].style.borderColor = "black";
//     sname[0].style.borderColor = "black";
//     email[0].style.borderColor = "black";
// }

// // Add event listener to the button
// btn.addEventListener("click", Add);








// Form elements
const names = document.getElementsByClassName("first-to1");
const sname = document.getElementsByClassName("first-to2");
const email = document.getElementsByClassName("first-to3");
const sub = document.getElementsByClassName("first-to4");
const para = document.getElementById("msg");
const btn = document.getElementById("last-btn");
const para1 = document.getElementById("alert-msg");
const para2 = document.getElementById("alert-msg1");
const para3 = document.getElementById("alert-msg2");

// Hide error messages initially
para1.style.display = "none";
para2.style.display = "none";
para3.style.display = "none";

// Helper function to check invalid characters
function hasInvalidChars(value) {
    const num = "0123456789";
    const symbols = "!@#$%^&*()|<>{}";
    return [...value].some(char => num.includes(char) || symbols.includes(char));
}

// Validate first name
function validateText() {
    if (hasInvalidChars(names[0].value)) {
        para1.style.display = "block";
        para1.style.color = "red";
        names[0].style.borderColor = "red";
        return false;
    }
    para1.style.display = "none";
    names[0].style.borderColor = "black";
    return true;
}

// Validate surname
function validateText1() {
    if (hasInvalidChars(sname[0].value)) {
        para2.style.display = "block";
        para2.style.color = "red";
        sname[0].style.borderColor = "red";
        return false;
    }
    para2.style.display = "none";
    sname[0].style.borderColor = "black";
    return true;
}

// Validate email
function validatemail() {
    const emailValue = email[0].value;
    const atIndex = emailValue.indexOf("@");
    const dotIndex = emailValue.indexOf(".", atIndex);

    if (
        atIndex < 1 ||
        emailValue.lastIndexOf("@") !== atIndex ||
        dotIndex < atIndex + 2 ||
        dotIndex >= emailValue.length - 1 ||
        emailValue.includes(" ")
    ) {
        para3.style.display = "block";
        para3.style.color = "red";
        email[0].style.borderColor = "red";
        return false;
    }
    para3.style.display = "none";
    email[0].style.borderColor = "black";
    return true;
}

// Handle form submission
function Add() {
    const isNameValid = validateText();
    const isSurnameValid = validateText1();
    const isEmailValid = validatemail();

    if (
        !isNameValid ||
        !isSurnameValid ||
        !isEmailValid ||
        names[0].value === "" ||
        sname[0].value === "" ||
        email[0].value === "" ||
        sub[0].value === "" ||
        para.value === ""
    ) {
        alert("Please correct the highlighted fields.");
       
        return;

    }

    // If all validations pass
    alert("Your form was submitted successfully!");

    // Clear all inputs and reset styles
    names[0].value = "";
    sname[0].value = "";
    email[0].value = "";
    sub[0].value = "";
    para.value = "";

    para1.style.display = "none";
    names[0].style.borderColor = "black";

    para2.style.display = "none";
    sname[0].style.borderColor = "black";

    para3.style.display = "none";
    email[0].style.borderColor = "black";
}

// Attach event listener to the button
btn.addEventListener("click", Add);
