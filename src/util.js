let UTIL = {
    genRandNum: function(max) {
        return Math.floor(Math.random() * max);
    },
    COLORS: [
        'red',
        'yellow',
        'blue',
        'green',
        'orange',
        'purple',
        'pink'
    ],
    GRAVITY: 0.8,
    genRandPos: function() {
        return [
            Math.floor(Math.random() * 1700),
            900
        ]
    },
    genRandVec: function(xVal) {
        if (xVal > 850) {
            return [
                Math.floor(Math.random() * -20),
                Math.floor(Math.random() * -20) + -20
            ]
        }
        else {
            return [
                Math.floor(Math.random() * 20),
                Math.floor(Math.random() * -20) + -20
            ]
        }
    },
    dist: function (pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },




}

export default UTIL;