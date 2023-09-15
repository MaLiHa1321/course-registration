# Project overview

#### Fetures of my project
 Basically its a course registration project.Online course registration refers to the process of enrolling in educational courses offered by institutions, organizations, or platforms through the internet. It has become increasingly popular due to its convenience and accessibility.

Here is my project features:

- User can select their preferred course by select button 
- User can see the price and credit hour in the **Course Name** cart
- User can select only 20 credit from overall courses

#### Discussion on state management in my project

 State defined as  an object that represents the data that a component needs to keep track of. State is used to store information that can be used to render the user interface, respond to user interactions, and manage the component's behavior over time.

 Here i used total if six state using the useState hook:

 - **Item**: 
 
 This state is initialized as an empty array [] and is intended to hold data fetched from the 'data.json' file.

 - **Dcard**:
 
  This state is initialized as an empty array [] and is intended to hold the selected courses or items that the user has added to their shopping cart.

 - **Count**: 
 
 This state is initialized with a value of 0 and is meant to keep track of the count of selected courses in the shopping cart.

 - **Total**: 
 
 This state is initialized with a value of 0 and is used to keep track of the total price of the selected courses in the shopping cart.

 - **Credit**:
 
  This state is initialized with a value of 0 and is used to keep track of the total credit hours of the selected courses in the shopping cart.

 - **Remaing**: 
 
 This state is initialized with a value of 20 and represents the remaining credit hours available for course selection. It decrements as the user adds courses to the cart, ensuring they do not exceed a total of 20 credit hours.

 **useEffect**:

 useEffect is a hook in the React JavaScript library used for managing side effects in functional components. Side effects are operations that happen outside the normal flow of a function, such as data fetching, DOM manipulation, or setting up and cleaning up timers.


