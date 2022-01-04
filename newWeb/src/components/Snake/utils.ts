const utils = {
    getMove: (point1, point2) => {
        if (point1.x == point2.x && point1.y == point2.y) {
            return 'equal';
        }
        if (point1.x == point2.x) {
            if (point1.y > point2.y) {
                return 'down';
            }
            if (point1.y < point2.y) {
                return 'up';
            }
        }
        if (point1.y == point2.y) {
            if (point1.x > point2.x) {
                return 'right';
            }
            if (point1.x < point2.x) {
                return 'left';
            }
        }
    },
    getDirectMove: (direct) => {
        let move = {};
        switch (direct) {
            case 'up':
                move = { type: 'y', l: -1 };
                break;
            case 'down':
                move = { type: 'y', l: 1 };
                break;
            case 'left':
                move = { type: 'x', l: -1 };
                break;
            case 'right':
                move = { type: 'x', l: 1 };
                break;
        }
        return move;
    }
}
export default utils;