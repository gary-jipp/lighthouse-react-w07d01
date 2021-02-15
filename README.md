
# W07D01 - Component-Based UI w/ React

##  What is React?
  - Front End (browser) Javascript Library
  - what is the difference ? eg: react vs jquery
  - declarative vs imperative
  - with React you manage the data, not the DOM.
  - class based vs functional components .  We will use functional
  - brief history of class vs func.  Advantages of functional components
  - Component-based design
  
##  Components
  - the building blocks of a web page
  - can (should)  be reusable
  - in functional React, components are just JavaScript functions
  - designing components

## Virtual DOM
  - this is what makes React so fast
  - Virtual & Real DOM
  - Render  pathes the real dom with changes only  
 
##  Create a React app
  - create-react app. Often you'll see it called "CRA" 
  - npx, what is that?

## Anatomy of a React App
 - package.json scripts.
 - public folder: index.html - rarely touch
 - src folder:  our stuff
 - index.js:  rarely touch
 - App.js (or Application.js):  All the fun starts here
 - css files:  the usual stuff
 - Start application. 
 - Clean up the project
 
## Anatomy of a Component
 - Component is a JavaScript Function
 - has some "stuff" then a `return`
 - the `return` is where all the action happens
 - stuff before that is getting ready for showtime
 
 ##  JSX
  - what is jsx?
  - embedding JS variables in markup
  - similar to EJS in an Express App
  - can even make markup a variable 
## Props & Attributes
  - components are just functions.  Really, that's all they are.
  - component attributes show up as props. *Remember this*
  - props.children.  "Content" is stuff between open and close tags
  - functions can also also be passed as props
  
## State
  - React components are still just functions
  - They have no special powers
  - React initial Render / re-Render 
  - React will re-render a component when state changes
  - variables cannot survive a render / calling the function again
  - the useState() hooks lets us create variables that will survive
  - useState() returns an array of 2.  Will always see as destructured
  - Using State with our `<Input>` component
  - DevTools

## Building our "bad" Search App
  - using static data
  - managed Lists using the array map() function
  - the  data array we "have" vs the array we "want" -> map()
  - could use a "for-of" but map() is really made for this
  - callback from child component to pass data back up to parent 


  
