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

17. 























        



