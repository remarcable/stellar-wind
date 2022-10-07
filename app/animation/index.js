import mojs from "mo-js";

export function drawUniverse() {
    for (let i = 0; i < 500; i += 1) {
        new mojs.Shape({
            parent: document.body,
            shape: "circle",
            top: 0,
            left: 0,
            opacity: { 0: 1 },
            x: 0,
            y: 0,
            radius: i < 100 ? "rand(0.5, 4)" : "rand(0.5, 2)",
            fill: "#fff",

            duration: "rand(500, 1000)",
        })
            .tune({
                top: "rand(0%, 100%)",
                left: "rand(0%, 100%)",
            })
            .play();
    }
}

export function shootNewStar() {
    new mojs.ShapeSwirl({
        fill: "#fff",
        left: 0,
        top: 0,
        y: { "rand(0vh, 50vh)": "rand(50vh, 100vh)" }, // animation should start in upper right
        x: { "rand(60vw, 110vw)": "rand(0vw, 50vw)" },
        radius: "rand(5, 15)",
        swirlSize: "rand(0, 10)",
        swirlFrequency: 2,
        duration: "rand(500, 800)",
        direction: Math.random() > 0.5 ? 1 : -1,

        onComplete() {
            this.el.remove();
        },
    }).play();
}
