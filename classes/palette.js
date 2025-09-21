
export class Palette {
    colors = [];

    constructor(ruleString = 'RL') {
        this.colors = [];
        for (let i = 0; i < ruleString.length; i++) {
            this.colors.push({
                turn: ruleString[i] == "L" ? true : false,
                color:  this.generateColor(i)
            });
        }
    }

    generateColor(index) {
        const hue = (index * 360 / 10) % 360;
        return `hsl(${hue}, 100%, 50%)`;
    }

    getLength() {
        return this.colors.length;
    }

    getRule(index) {
        return this.colors[index % this.getLength()];
    }
}