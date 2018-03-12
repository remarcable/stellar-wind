import mojs from 'mo-js';


for (let i = 0; i < 500; i++) {
    const backgroundShape = new mojs.Shape({
        parent: document.body,
        shape: 'circle',
        top: 0,
        left: 0,
        opacity: { 0 : 1 },
        x: 0,
        y: 0,
        radius: i < 100 ? 'rand(0.5, 4)': 'rand(0.5, 2)',
        fill: '#fff',

        duration: 'rand(500, 1000)',
    })
    .tune({
        top: 'rand(0%, 100%)',
        left: 'rand(0%, 100%)',
    })
    .play();
}

export function shootNewStar() {
    const transactionShape = new mojs.Shape({
        parent: document.body,
        shape: 'circle',
        x: {0: Math.random() > 0.5 ? '60vw' : '-60vw'},
        y: {0: 'rand(-60vw, 60vw)'},
        radius: { 0: 15 },
        fill: '#fff',
        duration: 2000,
        onComplete() {
            this.el.remove();
        },
    }).play();
}
