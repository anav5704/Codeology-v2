---
title: Creating a JavaScript Countdown Timer Using the Date Object
description: Having a countdown timer on a website is a handy feature, whether it's to countdown to an occasion, a sale, or a new product launch. A countdown timer...
author: Anav
date: Apr 17, 2023
time: 3.5 mins
tags:
  - All
  - JavaScript
layout: ../../layouts/blog.astro
image: /img/4.jpg
alt: rectangular image with text on the left that reads  JavaScript Countdown Timer and an image of a simple  JavaScript Countdown Timer on the right
keywords: JavaScript countdown time0,r Date object, setInterval method, Web development , Front-end development
pageDescription: Learn how to create a JavaScript countdown timer using the Date object and the setInterval method. This tutorial will teach you how to display the remaining time until a specified date and time.
slug: creating-javascript-countdown-timer-date-object
---
Having a countdown timer on a website is a handy feature, whether it's to countdown to an occasion, a sale, or a new product launch. A countdown timer that shows the number of days, hours, minutes, and seconds until a target date can be easily made using JavaScript. The time remaining will be determined in this tutorial using the [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method and the timer will be updated every second using the [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) method.

### Project Preview: 

![js](/img/4.1.gif)

### HTML and CSS Setup

First, let's create the HTML and CSS for our countdown timer. We'll use a div element to display the countdown timer, and style it with CSS.

```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Countdown Timer</title>
</head>
<body>
    <div id="countdown">Countdown timer will display here</div>
</body>
</html>
```

In the CSS, we setup our color variables and use flexbox to centre our timer on the body. We also assign some colors, margin &and padding to our elements.

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --black: #151515;   
    --grey: #282a30;
    --offwhite: rgba(255, 255, 255, 0.3);
    --blue:#38b6ff;
}

body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#countdown {
    background-color: var(--grey);
    color: white;
    padding: 10px;
    border-radius: 10px;
}
```

### JavaScript Countdown Timer

Let's start by writing the JavaScript code for our counter. The goal date will be set first, then the countdown will be updated every second using the setInterval() method.

```
//Set the target date to countdown to
const countdownDate = new Date("December 31, 2023 23:59:59");

// Update the countdown every second
const countdownTimer = setInterval(function() {

// Get the current date and time
const now = new Date();

// Calculate the time remaining
const timeRemaining = countdownDate.getTime() - now.getTime();

// Calculate days, hours, minutes, and seconds remaining
const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24);
const minutes = Math.floor(timeRemaining / (1000 * 60) % 60);
const seconds = Math.floor(timeRemaining / 1000 % 60);

// Display the countdown
const countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = days + " days <br> " + hours + " hours <br> " + minutes + " minutes <br> " + seconds + " seconds remaining";

// If the countdown is over, stop the timer
if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = "Countdown over!";
}

}, 1000);
```

Using the Date object constructor, we first set the target date in the JavaScript code for the countdown. In this case, we've chosen December 31, 2023, at 11:59:59 PM as the target date. The countdown is then updated every second using the setInterval() method. We use the Date object constructor to obtain the current date and time inside the setInterval() method. The remaining time is then determined by deducting the current time and date from the desired time and date. The dates are converted to milliseconds using the getTime() method, and the remaining time in milliseconds is obtained by deducting the milliseconds.\
\
To calculate the days, hours, minutes, and seconds remaining, we use the `Math.floor() method to round down the values. The countdown is finally displayed in the div element with the id "countdown". To display the values for days, hours, minutes, and seconds, we utilise string concatenation. We also determine whether the countdown has ended, and if it has, we use the clearInterval() method to stop the timer and show a message in the div element.

### That’s It!

In this article, we learnt how to use the Date.parse() method to create a JavaScript countdown timer. The remaining days, hours, minutes, and seconds were displayed in a div element on the website using the setInterval() method to update the countdown every second. A countdown timer can give your website a sense of urgency and excitement, and JavaScript makes it simple to make one that looks and functions wonderfully. It is this ease of use and raw power that makes [JavaScript so popular](https://code-hl.com/why-is-javascript-so-popular-and-benefits-learning-it). You can make your countdown timer stand out and draw visitors' attention by adding a little CSS flair. Until next time, happy coding!
