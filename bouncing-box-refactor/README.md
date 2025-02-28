# Bouncing Box Refactor

In this project we will be *refactoring* a project from the Fundamentals of Software Development: Bouncing Box!

![Gameplay gif](https://github.com/OperationSpark/bouncing-box/blob/master/images/bouncing-box.gif?raw=true)

**Table of Contents**
- [Overview](#overview)
- [Separation of Concerns Example](#separation-of-concerns-example)
- [TODOs](#todos)
  - [TODO 1) Create your file structure](#todo-1-create-your-file-structure)
  - [TODO 2) Refactor the file structure](#todo-2-refactor-the-file-structure)
  - [TODO 3) Reflection](#todo-3-reflection)
  - [TODO 4) Refactor index.js comment headers](#todo-4-refactor-indexjs-comment-headers)
  - [TODO 5) Refactor handleBoxClick for separation of concerns](#todo-5-refactor-handleboxclick-for-separation-of-concerns)
  - [TODO 6) Refactor update for separation of concerns](#todo-6-refactor-update-for-separation-of-concerns)
  - [TODO 7) Reflection](#todo-7-reflection)
  - [Extra Challenges](#extra-challenges)


# Overview

This project will focus on **refactoring** an old project: Bouncing Box.

> Refactoring is the process of internally restructuring existing code without changing its external behavior

The solution code for bouncing box is linked to this repository in a file called `refactor-me.html`. While the program works (if you were to copy/paste the contents of that file into the HTML tab of a jsbin it would work!), it is not organized in a way that follows the rule of **Separation of Concerns**:

> Every file/module/function should perform one task and one task only.

The first goal of this project is to restructure this project such that HTML, CSS, and JavaScript can each live in their own separate file.

The second goal is to then refactor the JavaScript code such that the core logic of the program can be broken up into smaller pieces and implemented using **Helper Functions**.

> A helper function is a function that performs part of the computation of another function. Helper functions are used to make your programs easier to read by hiding away complexity and by giving descriptive names to computations. 

# Separation of Concerns Example

The program below below determines the pay for an employee that earns $10/hour with the opportunity to earn overtime. The overtime rate is $25 per overtime hour if the employee worked more than 10 overtime hours, $20 per overtime hour if the employee worked more than 5 overtime hours, or $15 per overtime hour if the employee worked between 0 and 5 hours of overtime.

```js
function runProgram() {

  var overtime = prompt("# of overtime hours");
  
  var rate;  
  if (overtime > 10) {
    rate = 25;
  }
  else if (overtime > 5) {
    rate = 20;
  }
  else {
    rate = 15;
  }
	
  var pay = (10 * 40) + (overtime * rate);

  alert("You made $" + pay);

}
```

To achieve separation of concerns within a single JavaScript program, we can follow these two simple steps:
1. Break down the program and identify the concerns of the program
2. Convert each concern into a helper function.

The concerns of the program really depend on how the programmer views them. I see 4 main concerns:
1. Asking the user for the number of `overtime` hours worked:
2. Determining the `rate` for each overtime hour based on the number of overtime hours worked 
3. Calculating the `pay` rate based on the number of `overtime` hours worked and the overtime `rate`
4. Alert the `pay` to the user.

Concerns 1 and 4 are already are handled by the built-in helper functions `prompt` and `alert`. Concerns 2 and 3 can be converted into helper functions like so:

```js
// Core Logic
function runProgram() {
  var overtime = prompt("# of overtime hours");
  var rate = getOvertimeRate(overtime);
  var pay = calculatePay(overtime, rate);
  alert("You made $" + pay);
}

// Helper Functions
function getOvertimeRate(overtime) {
  if (overtime > 10) {
    return 25; 
  }
  else if (overtime > 5) {
    return 20; 
  }
  else {
    return 15; 
  }
}

function calculatePay(overtime, rate) {
  return (10 * 40) + (overtime * rate);
}
```

With these changes, the "core logic" function `runProgram` is much more readable and the complexity of each step is hidden away. In addition, if an error were to exist in the program, it would be easier to identify because our code is more organized and the stack trace would provide a more detailed trail towards the issue.

# TODOs

### _Remember to use `control+c` to copy and `control+v` to paste_

## TODO 1) Create your file structure

#### Step 1: Create your folder / files

Right click on the main folder in your workspace and create a new folder with the name: `bouncing-box-refactor`

<img src="https://github.com/OperationSpark/bouncing-box-refactor/blob/master/img/new-folder.png?raw=true" height="400">

Right click on this new folder and create 3 files in that folder: `index.html`, `index.css`, `index.js`

<img src="https://github.com/OperationSpark/bouncing-box-refactor/blob/master/img/new-file.png?raw=true" height="400">

At this point your file structure should look like this:

![alt text](https://github.com/OperationSpark/bouncing-box-refactor/blob/master/img/file-structure.png?raw=true)

## TODO 2) Refactor the file structure

#### Step 1: Copy code from `refactor-me.html` into `index.html`

**NOTE: DO NOT USE YOUR OLD BOUNCING-BOX PROJECT**

Open up the file `refactor-me.html` linked at the top of this github repository. It contains a solution for bouncing box. Copy the contents of that file into your newly created `index.html` file.

#### Step 2: move the CSS:

Copy and paste the CSS within the `<style>` tags from `index.html` to `index.css`. Do not copy the `<style>` tags themselves. You can delete them once you have copied over the CSS.

Hint: the code you are copy-pasting should look like the code below:

```css
#box {
  /* css for the box... */
}
```

#### Step 3: move the JavaScript

Copy and paste the JavaScript within the `<script>` tags from `index.html` to `index.js`. Do not copy the `<script>` tags themselves. You can delete them once you have copied over the JavaScript.

Hint: the code you are copy-pasting should look like the code below:

```js
/* global $ */
'use strict'
$(document).ready(function(){
  // bouncing box code...             
});
```

#### Step 4: Link `index.js` and `index.css` to `index.html`

At this point, your code should be separated into 3 files. If you were to run your program (in cloud9, right-click on `index.html` and select **Preview**), you would notice that it doesn't work! 

That's because `index.html` is only running the code that it has in its own file. We need to tell it to load in the code written in `index.js` and `index.css`. There are 2 tags that can do this for us: `<link>` and `<script>`

Use your google search powers to look up the following (Hint: include "w3schools" in your search query):
1. `HTML <link> tag`
2. `HTML <script> src attribute`

## TODO 3) Reflection:
Create a new file called `reflections.txt`. Inside, answer the following questions:
- How is the jQuery file being loaded into this project: direct download or Content Delivery Network (CDN)?
- If you load the `index.js` file before the jquery file our program doesn't work. Why? Open the preview in a new tab and look at the console to help you find out why.

## TODO 4) Refactor `index.js` comment headers

Comment headers are incredibly userful for organizing the various components of our program. 

For this project we want the overall structure of `index.js` to look like this:

```js
$(document).ready(function() {

  /////////////////////////////////////////////////
  /////////////////// SETUP ///////////////////////
  /////////////////////////////////////////////////

  /* variables and other one-time set up code for the program */

  /////////////////////////////////////////////////
  //////////////// CORE LOGIC /////////////////////
  /////////////////////////////////////////////////

  /* main logic of the program: the update / handleBoxClick functions */

  /////////////////////////////////////////////////
  ////////////// HELPER FUNCTIONS /////////////////
  /////////////////////////////////////////////////

  /* functions for executing sub-tasks of the core logic */

});
```

At the top of your program, you should see one example header created for you.

#### Step 1: Rename the first comment header to: `SETUP`
#### Step 2: Copy the comment header and add a second comment header below with the text: `CORE LOGIC`
#### Step 3: Copy the comment header and add a third comment header below with the text: `HELPER FUNCTIONS`
#### Step 4: Move any code that is not below the correct header (see below)

- Variable declarations should all be under `SETUP`
- The function calls `setInterval(update, 50)` and `$("#box").on("click", handleBoxClick)` should be under `SETUP`
- The functions `update` and `handleBoxClick` should be under `CORE LOGIC`
- The `HELPER FUNCTIONS` section will be empty (for now)

## TODO 5) Refactor `handleBoxClick` for separation of concerns

We need to first identify the separate concerns of `handleBoxClick`. Then we can create helper functions to handle those concerns individually. 

When the box gets clicked, the following high-level "concerns" need to be dealt with: 
- increase the score and update the number on the box
- increase the speed
- reset the position of the box

Consider the existing code for `handleBoxClick`, :

```js
function handleBoxClick() {
  points += 1;
  $('#box').text(points);
  if (speedX >= 0) {
    speedX += 3;
  } 
  else if (speedX < 0) {
    speedX -= 3;
  }
  positionX = 0;
}
```

**Can you see which statements of this function relate to each of these concerns?**

By adding comments, it will become clearer:

```js
function handleBoxClick() {
  // increase points
  points += 1;            
  $('#box').text(points); 
  
  // increase speed
  if (speedX >= 0) {
    speedX += 3;
  } 
  else if (speedX < 0) {
    speedX -= 3;
  }
  
  // reset the position of the box
  positionX = 0;  
}
```

**Now, for each concern we will create a helper function by following these three steps:**
  1. declare a new function in the `"Helper Functions"` section with a name that describes the concern.
  2. identify all code related to that concern and copy-paste it into the new helper function
  3. replace the old code with a call to your new helper function
  
**In the end, the `handleBoxClick` function should only make calls to helper functions. It should not directly implement any of the code itself**.

## TODO 6) Refactor `update` for separation of concerns

The `update` function will be called every 50 milliseconds (20 times per second) and is responsible for drawing each new frame of the animation:
- change the box's position
- Redraw the box in the new position
- Check to see if the box has moved beyond the left or right boundary
- If it has, change the direction of the box by multiplying the speed by -1.  

**Now, refactor the `update` function by doing the following:**
1. Use comments to show the high-level concerns of the `update` function
2. declare a new function in the `"Helper Functions"` section with a name that describes the concern.
3. identify all code related to that concern and copy-paste it into the new helper function
4. replace the old code with a call to your new helper function

## TODO 7) Reflection:
Inside the `reflections.txt` file answer the following questions:
- In your opinion, what are the pros of refactoring your HTML, CSS, and JavaScript into separate files? What are the cons?
- In your opinion, what are the pros of refactoring your JavaScript code into separate functions? What are the cons?

## Extra Challenges:

Below are some additional ideas to extend this project. For each extra challenge, make sure to maintain Separation of Concerns by creating helper functions!

1) Make the box move vertically AND horizontally and bounce off the top and bottom walls. You will need to calculate a `BOARD_HEIGHT` value which you can do by getting the height of the `window`:

```js
var BOARD_HEIGHT = $(window).height();
```

2) Every time you click on the box, change it's background color. You can generate a random color using the logic below:

```js
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var rgbString = "rgb(" + r + "," + g + "," + b + ")";
```
