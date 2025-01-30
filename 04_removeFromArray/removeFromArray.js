const removeFromArray = function(total, ...def) {
    let minus = Array.from(def);

    let result = total.filter(item => !minus.includes(item));

    return result;
    
};


// Do not edit below this lineg
module.exports = removeFromArray;


// compare elements in array to elements outside
// if elements in array equals element outside
    // remove
// else console log
