const sumAll = function(start, end) {
    let total = 0;
    let i = start;

    if (i < -1 
        || end < -1 
        || Number.isInteger(i, end) === false 
        || typeof end === 'string' 
        || typeof i === 'string'
        || typeof end === 'object' 
        || typeof i === 'object'
        // || Number.isNaN(i, end) === false
        )
        {
        return 'ERROR';
    }

    else if (i > end) {
        while (i > end) {
            i--;
            total += i;
        }
       return total + start;
    }

    while (i < end) {
        i++;
        total += i;
    }
    return total + start;

};

// Do not edit below this line
module.exports = sumAll;

// start increase 1     
    // add to total
// end on end
