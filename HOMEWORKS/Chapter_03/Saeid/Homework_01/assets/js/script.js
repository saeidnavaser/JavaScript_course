const surfaceOfBalls = {
    radius: [5, 3.35, 4.3],
    get basketBallArea() {
        let basket = 4 * Math.PI * this.radius[0] * this.radius[0]; // If we use Math then result is 314.1592653589793 and that as a result not a basketball´s area!(between 313.5 & 314) but I use it as a correct to print a msg!
        let msg_01 = ""; // Message
        function basketBall() {
            msg_01 += "Radius of 5 cm2 = ";
        }

        if (basket >= 314) {
            basketBall();
            msg_01 += "This is a basketball.";
        }

        let elBasket = document.getElementById("basketball");
        elBasket.innerHTML = msg_01;
    },
    get tennisBallArea() {
        let tennis = 4 * Math.PI * this.radius[1] * this.radius[1];
        let msg_02 = ""; // Message
        function tennisBall() {
            msg_02 += "Radius of 3.35 cm2 = ";
        }

        if (tennis >= 141) {
            tennisBall();
            msg_02 += "This is a tennis ball.";
        }

        let elTennis = document.getElementById("tennisball");
        elTennis.innerHTML = msg_02;
    },
    get footBallArea() {
        let foot = 4 * Math.PI * this.radius[2] * this.radius[2];
        let msg_03 = ""; // Message
        function footBall() {
            msg_03 += "Radius of 4.3 cm2 = ";
        }

        if (foot >= 141) {
            footBall();
            msg_03 += "This is a football.";
        }

        let elFoot = document.getElementById("football");
        elFoot.innerHTML = msg_03;
    },
};

