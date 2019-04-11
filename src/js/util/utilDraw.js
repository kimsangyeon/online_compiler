const utilDraw = {
    /**
     * init canvas draw (fillRect)
     * @param {HTMLElement} canvas
     */
    initDraw : function(elCanvas) {
        if (elCanvas.getContext) {
            this.fillRect(elCanvas.getContext('2d'));
        }
    },

    /**
     * canvas fillRect draw
     * @param {Object} ctx
     */
    fillRect: function(ctx) {
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    },

    /**
     * canvas triangle draw
     * @param {Object} ctx
     */
    triangle: function(ctx) {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    },

    /**
     * canvas smile draw
     * @param {Object} ctx
     */
    smile: function(ctx) {
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
};

export default utilDraw;