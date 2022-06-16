AFRAME.registerComponent("game-play", {
    schema:{
        elementId:{
            type:"string", default:"target"
        }
    },
    init: function() {
        var duration = 120;
        timerEl = document.querySelector("#timer");
        this.setTimer(duration, timerEl);
    },
    setTimer: function(duration, timerEl) {
        var minutes;
        var seconds;

        setInterval(()=> {
            if(duration >= 0){
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if(minutes < 10) {
                    minutes = "0" + minutes;
                }
                if(seconds < 10) {
                    seconds = "0" + seconds
                }

                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds
                });

                duration -= 1;
            } else {
                this.gameOver()
            }
        })
    },
    gameOver: function() {
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible", true)
    },
    updateWin: function() {
        const element = document.querySelector("#win");
        element.setAttribute("visible", true)
    },
    isCollided: function() {
        const element = document.querySelector("#model")
        element.addEventListener("collide", e=> {
            if(element.includes("#target")) {
                this.updateWin();
            }
        })
    }
})