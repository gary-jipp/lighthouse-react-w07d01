
# W07D01 - Component-Based UI w/ React

##  What is React?
  - what is the main difference ? eg: react vs jquery
  - declarative vs imperative
  - with React you manage the data, not the DOM.
  - class based vs functional components .  We will use functional
  - brief history of class vs func.  Advantages of functional components
  
##  Components
  - the building blocks of a web page
  - can (should)  be reusable
  - in functional React, components are just JavaScript functions
  - designing components
 
##  Create a React app
  - create-react app. Often you'll see it called "CRA" (yeah I know!)
  - npx, what is that?
  - Start the default CRA-generated application. 
  - look at the files ic created for us
  - package.json scripts.
  - folders & files
  - clean up the project
  - add some JSX : eg: a hello button

##  JSX
  - what is jsx?
  - embedding JS variables in markup
  - similar to EJS in an Express App
  - can even make markup a variable 
  - creating a `<Input/>` component 

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


  
