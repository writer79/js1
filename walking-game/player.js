const player = {
    x: 0,
    y: 0,

    move(nextPoint) {
        if (nextPoint.x < 0) {
            nextPoint.x++;
        }

        if (nextPoint.x > 9) {
            nextPoint.x--;
        }

        if (nextPoint.y < 0) {
            nextPoint.y++;
        }

        if (nextPoint.y > 9) {
            nextPoint.y--;
        }

        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};