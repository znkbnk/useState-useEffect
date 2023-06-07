# useState-useEffect

Project: Movie Search App

Description:
Create a movie search app that allows
users to search for movies by title 
and display the results. The app will
make use of the OMDb API 
(Open Movie Database) to fetch movie data.

Step 1: Set up the project

-  Create a new React project using your
preferred setup (e.g., Create React App).
-  Set up the basic file structure
(components, styles, etc.).
-  Install any necessary dependencies
(e.g., axios for making API requests).

Step 2: Create the MovieSearch component

-  Create a functional component
called MovieSearch.
-  Add a search input field and a submit
button to the component's JSX.
-  Implement the necessary event handlers
and state variables to handle
user input and submission.

Step 3: Implement state management with useState

-  Create a state variable called
searchTerm using the useState hook.
-  Set up the necessary event handlers
to update searchTerm when the user
types in the search input field.

Step 4: Fetch movie data from the OMDb API

-  Create a state variable called movies
using the useState hook.
Initialize it as an empty array.
-  Import the axios library and make an API
request to the OMDb API when the user
submits the search form.
-  Update the movies state variable with
the fetched movie data.

Step 5: Display search results

-  Create a new component called MovieList
to display the search results.
-  Pass the movies state variable as a prop
to the MovieList component.
-  Inside the MovieList component, map over
the movies array and render each movie
as a separate component.

Step 6: Implement useEffect for fetching
movie data on component mount

-  Use the useEffect hook to fetch movie
data when the MovieSearch component mounts.
-  Make the API request to the OMDb API
and update the movies state variable
with the fetched data.
-  Ensure that the useEffect hook is only
triggered once (on component mount) by
passing an empty dependency array as
the second argument to the hook.

Step 7: Implement useEffect for updating
search results

-  Use the useEffect hook to fetch movie data
whenever the searchTerm state variable changes.
-  Make the API request to the OMDb API with
the updated search term and update the movies
state variable with the new search results.
-  Pass searchTerm as a dependency to the useEffect hook.

Step 8: Style the app

-  Use CSS or a UI library of your choice
to style the app.
-  Apply styles to the input field,
button, and movie list components.
-  Make the app visually appealing and user-friendly.

Step 9: Test and refine

-  Test the app by entering different search
terms and verifying that the movie
results are displayed correctly.
-  Look for any bugs or issues and fix them.
-  Refine the app's functionality and design
based on user feedback or personal preference.




