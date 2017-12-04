# Ironhack — Coding Challenge: Maze problem

There are a number of different maze solving algorithms, that is, automated methods for the solving of mazes. The random mouse, wall follower, Pledge, and Trémaux's algorithms are designed to be used inside the maze by a traveler with no prior knowledge of the maze, whereas the dead-end filling and shortest path algorithms are designed to be used by a person or computer program that can see the whole maze at once.

Mazes containing no loops are known as "simply connected", or "perfect" mazes, and are equivalent to a tree in graph theory. Thus many maze solving algorithms are closely related to graph theory. Intuitively, if one pulled and stretched out the paths in the maze in the proper way, the result could be made to resemble a tree.

## Representation
A maze represented by a matrix of booleans. 

```
[
[true,true,true,false,true,true,false,false,false,true,true,true,true],
[true,false,true,true,true,false,true,true,true,true,false,false,true],
[false,false,false,false,true,false,true,false,true,false,true,false,false],
[true,true,true,false,true,true,true,false,true,false,true,true,true],
[true,false,true,false,false,false,false,true,true,true,false,false,true],
[true,false,true,true,true,true,true,true,false,true,true,true,true],
[true,false,false,false,false,false,false,false,false,false,false,false,false],
[true,true,true,true,true,true,true,true,true,true,true,true,true]
]

true	<- 	where I can move (open positions)
false	<- 	obstacles (blocked positions) 

```

Start position {x, y}
Goal {x,y} 

The solution must be represented by a direction array

```
['right', 'right', 'down', 'down', 'left', 'left', 'down', 'down']

```

## Algorithm

I solve the problem of finding and marking a solution path using recursion. 
Because the algorithm must be recursive, I need to view the problem in terms of similar subproblems. In this case, that means I need to "find a path" in terms of "finding paths."

Let's start by assuming there is already some algorithm that finds a path from some point in a maze to the goal, call it giveDirection(x, y). I can call giveDirection recursively to move from any location in the maze to adjacent locations. In this way, I move through the maze. 
It's not enough to know how to use giveDirection recursively to advance through the maze. I also need to determine when FIND-PATH must stop.  
I must ask:

    Is the position in the maze?
    Is the position open?
    
With this I have the path determinate by coordinates, but I need the path by directions, so I decide to add an extra argument giveDirection(x, y, direction).


```
 giveDirection(x, y, direction)

    1. if (x,y outside maze) return false
    2. if (x,y is goal) return true; add direction to solution
    3. if (x,y not open) return false
    4. mark x,y as part of solution path
    5. if (giveDirection(x, y + 1) == true) return true //down
    6. if (giveDirection(x + 1, y) == true) return true //right
    7. if (giveDirection(x, y - 1) == true) return true //up
    8. if (giveDirection(x - 1, y) == true) return true //left
    9. unmark x,y as part of solution path
    10. return false 

```
