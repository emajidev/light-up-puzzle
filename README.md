### Light-Up Puzzle 

![Logo](https://raw.githubusercontent.com/emajidev/light-up-puzzle/main/logo.png)

GrainChain Logic Test

This is a challenge that consists of a very careful electrician who is trying to illuminate at the lowest possible cost the rooms of his clients. The rooms he lights are always matrix rooms. Since light bulbs are very expensive, he tries to illuminate the entire room using the least amount of light.
the least amount of bulbs possible, but the only bad thing is that the rooms may have walls inside them, in which case, the reach of the light would be interrupted. the range of light from a given bulb would be interrupted.

Technologies used.
- NodeJs
- ExpressJs
- ReactJS
- Babel

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
