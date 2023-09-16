# Project overview

#### Fetures of my project
 Basically its a course registration project.The process of enrolling in educational courses provided by institutions, organizations, or platforms on the internet is referred to as online course registration.Since the student is responsible for interacting with the course rather than just showing up to class on a scheduled day and time, online courses help students learn better time management skills. As a result of its accessibility and convenience, it has grown in popularity.

Here is my project features:

- User can select their preferred course by select button.
- User can see the price and credit hour in the **Course Name** cart.
- User can select only 20 credit from overall courses.

#### Discussion on state management in my project

 State defined as  an object that represents the data that a component needs to keep track of. State is used to store information that can be used to render the user interface, respond to user interactions, and manage the component's behavior over time.

 Here I used total Of six state using the useState hook:

 - **Item**: 

 This state is initialized with an empty array and it is used to hold data that fetch from fake api data.
 
 - **Dcard**:

 This state is initialization with empty array and it is used to hold and the selected course that the user has added their cart.
 
 - **Count**:

 This state is initialization with a value of 0 and it is used to keep track of the count with the selected item that the user has added their cart.
 
 - **Total**: 

 This state is initialization with a value of 0 and it is used to keep track of the total price that the user selected course in the cart.
 
 - **Credit**:

 This state is initialization with a value of 0 and it is used to keep track of the total credit hours that the user selected course in the cart. 
 
 - **Remaing**: 

 This state is initialization with a value of 20 and used to represent the remainig credit hour avaliable which is conduct by total credit hours.
 

 **useEffect**:

 useEffect is a hook in the React JavaScript library used for managing side effects in functional components. Side effects are operations that happen outside the normal flow of a function, such as data fetching, DOM manipulation, or setting up and cleaning up timers.


