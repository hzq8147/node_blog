
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
    },
    haveIntersection:(line1,line2)=>{
        const getSection = (line)=>{
            let t = '';
            let section: any = [];
            if (line[0].x == line[1].x) {
                section.push(line[0].y, line[1].y); 
                t = 'y';
            }else {
                section.push(line[0].x, line[1].x);
                t = 'x';
            }
            return {section,t};
        }
        let section1 = getSection(line1);
        let section2 = getSection(line2);
        if (section1.t == section2.t) {
            // parallel line
            return false;
        }
        section1.section.sort((a,b)=>a-b);
        section2.section.sort((a,b)=>a-b);
        
        switch (section1.t){
            case "x":
                if (line2[0].x < section1.section[1] 
                    && line2[0].x > section1.section[0]
                    && line1[0].y < section2.section[1]
                    && line1[0].y > section2.section[0]
                    ){
                       
                    return true;
                }
                break;
            case "y":
                if (line2[0].y < section1.section[1]
                    && line2[0].y > section1.section[0]
                    && line1[0].x < section2.section[1]
                    && line1[0].x > section2.section[0]
                ) {
                    return true;
                } 
                break;    
        }
        return false;
    },
    isInBall(point,ball){
        const distanceX = Math.abs(point.x - ball.x);
        const distanceY = Math.abs(point.y - ball.y);
        const distance = Math.sqrt(distanceX * distanceX +distanceY * distanceY);

        return distance <= ball.size;
    }
}
export default utils;