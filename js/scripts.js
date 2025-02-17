// constants for query selector
const customNum = document.getElementById('customNumber');
const studentId = document.getElementById('myStudentId');
const bg = document.querySelector('html');
const selectList = document.getElementById('imageSelect');
const custColor = document.querySelector('.custColor');
const randColor = document.querySelector('.randColor');
const img = document.getElementById('images');

// function to change bg color from user input and add student id
function changeCustomColor() {

    // student id
    studentId.textContent = 'Name: Kai Thompson | Lakehead ID: 1284787 | Georgian ID: 200628520';
    // make the student id visible, it is hidden by default
    studentId.style.display = 'block';
    // big if stantement to change bg color based on user input
    // if above 100 or below 0, bg color is red
    // if between 0 and 20, bg color is green
    // etc etc
    // otherwise bg color is white
    if(customNum.value < 0 || customNum.value > 100){
        bg.style.backgroundColor = 'red';
    } 
    else if(customNum.value > 0 && customNum.value <= 20){
        bg.style.backgroundColor = 'green';
    } 
    else if(customNum.value > 20 && customNum.value <= 40){
        bg.style.backgroundColor = 'blue';
    } 
    else if(customNum.value > 40 && customNum.value <= 60){
        bg.style.backgroundColor = 'orange';
    } 
    else if(customNum.value > 60 && customNum.value <= 80){
        bg.style.backgroundColor = 'purple';
    } 
    else if(customNum.value > 80 && customNum.value <= 100){
        bg.style.backgroundColor = 'yellow';
    } 
    else {
        bg.style.backgroundColor = 'white';
    }
    

}

// function to change bg color from random no.
function changeRandomColor() {
    // generate random number between 1 and 100
    let randomNum = Math.floor((Math.random() * 99) + 1);
    // set the value of custom number to random number
    customNum.value = randomNum;
    // then just call the function to change bg color
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // array of image links
    let imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
    // for each image link in array
    for(let i = 0; i < imgArr.length; i++) 
    {   
        // Tip: you might have to check length condition so that the list does not keep growing when clicked
        // check if the select list has more or equal to 6 options(each image link + the default "please select"), if so, break the loop
        if(selectList.length >= imgArr.length + 1) {
            // if the select list has more than 5 options, break the loop
            break;
        }
        // if the select list does not have more than 5 options, create a new option element
        let option = document.createElement('option');
        // set the text and value of the option element to the image link
        option.text = imgArr[i];
        option.value = imgArr[i];
        // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
        // then append the new option to the selectlist
        selectList.appendChild(option);
    }
}

// function to change image
function changeImage() {
    // get the value of the selected option
    let imgLink = selectList.value;
    // set the src of the image to the selected option
    img.src = 'img/' + imgLink;
}

// event listeners for on click event of buttons and select
custColor.addEventListener('click', changeCustomColor);
randColor.addEventListener('click', changeRandomColor);
selectList.addEventListener('click', addList);

// event listeners for on change event of select
selectList.addEventListener('change', changeImage);