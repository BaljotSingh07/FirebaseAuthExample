# FirebaseAuthExample
Demo https://western-diorama-288520.web.app
Template for firebase authentication, includes sign in, sign up, email verification, and password reset. 
This template uses material ui to provide a default authentication ui, refer to customizing section to use a differnt react component library to.

## Getting Started
### Setting up firebase 
  To allow our front end to connect to firebase we first need to create an firebase with authentication and get the firebase config. This template require that you have email/password provider and an google provider. This can easily be changed to use no provider or add aditional providers. 
  1. Create firebase project or use existing project
  2. Add authentication to the project, select email/password with any additional provider you would like
  3. Add an web app to your project and copy the provided firebaseConfig JSON object
  
 ### Setting up the template
  Now that we have the firebase set up, we can begin setting up the project.
  1. Clone the project.
  2. Go to auth-example/src/firebase
  3. Update firebaseConfig to the one you copied earlier
 
 ### Run the template
   1. Cd into auth-example, as this is where the node module is
   2. Run "npm i" to intall the dependencies to run 
   3. After the dependencies are installed run "npm start"
   4. If the webpack complies with our any error or warning, you can begin modifying component in src.

## Customizing 
  For each authentication components only one function is important, onSubmit(). You may change the return of these components as you please as long as onSubmit is called and it gets the required user data. There are also two states present, error and loading. Error is responsible for displaying the error for onSubmit function. Loading is responsible for overlaying the loading, its true until onSubmit function it resolved. You may delete these two states but you also have to change onSubmit accordingly. 
  
  You can also use an different react component library to do so follow the steps below.
  1. Run "npm run clean" while in the auth-example directory. This will uninstall material ui and material ui icons. 
  2. Remove all imports from material ui and material ui icons from src/components.
  3. Remove all the return code from src/components. 
  4. Now you can begin using a different react component library. 
