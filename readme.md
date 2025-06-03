1. create a folder named chatapp
2. inside it create two folders named frontend and backend 
     
     chatapp
        -frontend
        -backend

3. frontend folder and install react using vite 

    npm create vite@latest .

--choose react and javascript 

4. open the backend folder and setup the backend with 

    npm init -y

5. install packages required for backend 

    npm i express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io 

    npm i nodemon -D

6. make changes to the script in backend>package.json

    Change type to "module" and 

     "scripts": {
    "dev":"nodemon src/index.js"
  },

  this way you can run backend server using the command - npm run dev 

  ## this is where we start working on the BACKEND 

1. Create an src folder and create a boilerplate folder structure for backend 

    src
      -routes
      -middleware
      -lib
      -controllers
      -models

2. start by creating a database for our project using mongodb

    visit the mongdb website and create a new project 

3. create a dotenv file and add

    MONGODB_URI=
    PORT=
    NODE_ENV=
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

4. Create an index.js file in backend where you will create your express app

copy the given code in the file 

5. in routes folder create auth route

    routes> authroutes.js

copy the given code in the file 


6. in controllers create folder for authentication handling

    controllers>auth.controller.js

copy the given code in the file 


7. in lib folder create a db.js file for db connection using mongoose 

    lib>db.js

copy the given code in the file 

8. start creating data models for the user and messages 

    models>users.model.js

    models>messages.model.js


copy the given code in the file 

9. remember to create a utils.js file in lib folder for the --generate jwt token function

    lib>utils.js 

copy the given code in the file 

10. create a auth.middlerware.js file in middle ware for the protectRoute function

    middleware>auth.middlerware.js

    this middleware checks if they have the jwttoken or not

copy the given code in the file 


11. create a cloudinary.js file in lib to configure the cloudinary functionality 

    lib>cloudinary.js

NOW THAT AUTHENTICATION IS COMPLETE LETS WORK ON MESSAGE ROUTES AND MODELS

12. create a message.model.js file in the models folder 

    models>message.model.js 

copy the given code in the file 

13. create a message.route.js file in the routes folder

    routes>message.routes.js 

copy the given code in the file 

14. create a message.controller.js file in controllers folder

    controllers>message.controller.js

copy the given code in the file 

15. now we are going into the frontend part and build the signup and login pages for our webapp
    open the frontend folder and install packages required for frontend 

    npm install react-router-dom react-hot-toast 

16. Initialize tailwind css

    1. paste 

    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    in the terminal 

    2. paste this in tailwind.config.js

       /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

    3. paste 

        @tailwind base;
        @tailwind components;
        @tailwind utilities; to index.css

17. install daisy UI as a tailwind css olugin 

    npm i -D daisyui@latest  

    and make this the new tailwind.config.js file
    
    import daisyui from "daisyui"
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    }


18. encompass your app in browserrouter

        import { StrictMode } from 'react'
        import { createRoot } from 'react-dom/client'
        import './index.css'
        import App from './App.jsx'
        import {BrowserRouter} from "react-router-dom"

        createRoot(document.getElementById('root')).render(
        <StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </StrictMode>,
)


19. copy the given code from the app.jsx in the app.jsx file

    src>app.jsx


20. Create a components folder in src 
    and create a Navbar.jsx file in it for the navigation component

    src>components>Navbar.jsx 
copy the code in the given file 

21. Create a pages folder in src and add

    HomePage.jsx
    SignUpPage.jsx
    LoginPage.jsx
    SettingsPage.jsx
    ProfilePage.jsx

files to the folder 

22. install axios and zustand to the frontend 

    npm install axios zustand 

23. Create A lib folder and inside it a file named axios.js

    src>lib>axios.jsx

    copy the given code 

24. Create a Store folder and create a useAuthStore.js file inside it 

    src>store>useAuthStore.js

25. install cors to handle cors errors 

    npm install cors

26. in the frontend --

    npm i lucide-react

27. write the code for the signUpPage file and create a AuthImagePattern component for the signup page 

    copy the code from the given file 

28. write the coode for Navbar,LoginPage,ProfilePage and SettingsPage 

    copy the code from the github repo 

29. update the tailwind.config.js for various themes 

30. create a folder constants and create index.js file 

    copy the given code 

31. create a file named useThemeStore in the store folder for the change of themes logic from local storage 

    copy the code from the given file 


32. Its time to create the chat functionality now 

    create a file  named useChatStore.js in the Store folder 

    store>useChatStore.js 

33. Create components for the homepaage in the components folder 

    <Sidebar/>

    <ChatContainer/>

    <NoChatSelected/>

34. create components like 

    skeletons><MessageSkeleton/>

    <MessageInput/>

    <ChatHeader> for the chat container 

this will help with the ui of <Chatcontainer/>

35. Create a file named utils.js in the lib folder for the createdAt timings

    lib>utils.js

36. THIS IS WHERE THE SOCKET.IO part starts 



























        



