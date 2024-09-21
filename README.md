# Netflix-GPT app

- Create React App
- Configured tailwind css
- Header
- Routing the App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- create sign up user account
- Implement Sign In User Api
- Created Redux Store for UserSlice
- Sign in Sign out
- After sign Up/In data store in redux and navigate to browse page
- We had a bug wihtout user authentication we were able to browse (we fixed it)
- Move hard coded constant value to one file.
- Unsubscribed the onAuthStateChanged event.
- Register TMDB app and Sign up to get API
- Get Data from TDMB now playing movies list API fetch
- Create a MovieSlice and store data into it
- Make a custom hook to fetch Now playing movies
- Create Main Container contains video background and video title
- Get the information about Movie from MovieSlice, assign the title and overview
- Get the video my TMDB API and make a fetch request, filter the trailer
- Add Trailer in redux store and get the trailer details from redux store and assign key render the iframe video of youtube link and make it autoplay.
- Create Second Container contains Movies List
- Create Movie List and Movie Card
- Fetch different Movies from TMDB API and render them
- GPT search Feature build
- Add a button to header and make a toggle feature to show GPT search component
    if false show MainContainer and SecondContainer
    else GPTSearch
- Create Redux a Slice called GptSlice include action of toggle, later add it to store.
- Create GptSearch Component and main GptSearchBar and GptMovieSuggestions.
- Build Multilanguage Page of GPTSearch


# Features

- Login/ Signup
  -Sign In/ Sign up Form
  -redirect to Browse Page
- Browse (after authentication)
  -Header
  -Main Movie
  -Trailer running in background
  -Title and Description
  -Movie Suggestion
  -MovieList \* N;
- Netlix GPT
  -Search Bar
  -Movie Suggestion
