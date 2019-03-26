/**
 * questions
 */
const questions = {
    CANVAS: {
        fillRect: `var ctx = document.getElementById('canvas').getContext('2d');<br>ctx.    (25, 25, 100, 100);<br>ctx.    (45, 45, 60, 60);<br>ctx.    (50, 50, 50, 50);`,
        triangle: `var ctx = document.getElementById('canvas').getContext('2d');<br>ctx.    ();<br>ctx.    (75, 50);;<br>ctx.    (100, 75);<br>ctx.    (100, 25);<br>ctx.    ();`,
        smile: `var ctx = document.getElementById('canvas').getContext('2d');<br>ctx.beginPath();<br>ctx.    (75, 75, 50, 0, Math.PI * 2, true);<br>ctx.    (110, 75);<br>ctx.    (75, 75, 35, 0, Math.PI, false);<br>ctx.    (65, 65);<br>ctx.    (60, 65, 5, 0, Math.PI * 2, true);<br>ctx.    (95, 65);<br>ctx.    (90, 65, 5, 0, Math.PI * 2, true);<br>ctx.stroke();`
    }
};

export default questions;