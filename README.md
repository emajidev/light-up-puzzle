### Light-Up Puzzle 

![Logo](https://raw.githubusercontent.com/emajidev/light-up-puzzle/main/logo.png)

You need to run the frontend and backend so go into the app-light-up and backend folder and run the following in each one:

    npm install

    npm start
    
![Example app](https://raw.githubusercontent.com/emajidev/light-up-puzzle/main/sample.png)

In this example the circles represent the points where the lights are placed. The arrows represent the direction

### Load matrix
To load the matrix you must create a txt file with the name `matrix.txt` and contain the following format:

    [
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ]
