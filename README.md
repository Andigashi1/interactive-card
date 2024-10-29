# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./src/assets/images/localhost_5173_.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework

### What I learned

I learned to validate forms using regex and also had the chance to work with background images which i always struggle with.

```js
    const nameRegex = /^[A-Za-z\s]*$/; // Only letters and spaces
    const numberRegex = /^\d{0,16}$/; // Only digits (max 16 digits)
    const mmRegex = /^(0?[1-9]|1[0-2])$/; // Month between 01 and 12
    const yyRegex = /^\d{2}$/; // Year as two digits
    const cvcRegex = /^\d{3,4}$/; // 3-4 digit CVV
```

### Useful resources

- [Claude AI](https://claude.ai) - I used it to do the input gradient on focus since i couldn't do it myself and for some troubleshooting when i made errors i couldn't find myself.


## Author

- Frontend Mentor - [@Andigashi1](https://www.frontendmentor.io/profile/Andigashi1)

