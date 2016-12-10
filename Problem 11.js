/* 
Put all of the values into an array. For a 20x20 grid we can infer that positions [0] to [19] are on row one, positions [20] to [39] are on row 2 and so on and so forth.
We can then use basic math to find a value at a certain position on the grid. For instance, we know that since the value on array position [0] is the first value on row one, if we wanted to compare it to the
value that is diagonal to it(down-right) we compare it to it's own position plus the amount of steps ahead to get to the second value on row 2. The position would be 21(or 21 away from it's current position).
So to add the value on grid position 1 row 1 to position 2 row 2, we could do(not proper syntax):
i = 0;
array[i] + array[i+21];