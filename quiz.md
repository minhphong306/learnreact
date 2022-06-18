1. Why do we need `import React from "react"` in our files?
- A: N/A
- R: React is what defines JSX
2. If I were to console.log(page) in index.js, what would show up?
- A: Nothing, just log in console
- R: A javascript object. React elements that describe what React should eventually add to the real DOM for us.
3. What's wrong with this code:
```
const page = (
    <h1> Hello </h1>
    <p> This is my website! </p>
)
```
- A: Have two root element
- R: We need our JSX to be nested under a single parent element.
4. What does it mean for something to be "declarative" instead of "imperative"?
- A: N/A
- R:
  - Declarative: I can tell computer WHAT to do and expect it to handle the details.
  - Imperative: I need to tell it HOW to do each step.
5. What does it mean for something to be "composable"?
- A: N/A
- R: We have small pieces that we can put together to make something larger/greater than the individual pieces. 
