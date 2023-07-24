// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set up initial variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set the context properties for drawing
ctx.lineWidth = 5;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#000';

// Function to draw a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listener for the "Clear" button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearCanvas);
