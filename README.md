# Convert It!

This app converts Celcius, Fahrenheit or Rankine to Kelvins. There are two apps. One implements a client-server build and a second uses only client-side processing.

---

### About the build

#### Client-Server

Source Code:
    - app.js
    - views/base.pug
    - views/convert.pug
    - views/index.pug
    - static/script.js
    - static/style.css

**Front End**

The front end utilizes [pug](https://pugjs.org/api/getting-started.html) templates. You'll notice the syntax of pug is similar to that of HTML.

Use this app by navigating to [localhost:3000/](localhost:3000/)

**Back End**

The back end is running on an [express](http://expressjs.com/) server with node.js.    

#### Client-Side

Source Code:
    - static/client-index.html
    - static/client-script.js
    - static/style.css

Use this app by navigating to [localhost:3000/client-index.html](localhost:3000/client-index.html)

---

### To run locally:

1. Make sure you have a terminal or terminal emulator to run the following commands.
    - Windows: [Git Bash](https://git-scm.com/download/win)
2. Download and install the latest version of [node.js](https://nodejs.org/en/)
3. Verify the install and run
    ```
    node --version
    ```
4. Download the repo either by the .zip or by running
    ```
    git clone https://github.com/stpCollabr8nLstn/temp_converter.git
    ```
5. cd to the directory
    ```
    cd AssignmentW1
    ```
6. Install the node modules
    ```
    npm install
    ```
7. Run the program
    ```
    npm start
    ```
8. Open a browser and navigate to [localhost:3000](localhost:3000)
