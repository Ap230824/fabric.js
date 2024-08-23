
var canvas = new fabric.Canvas('c',{
    width:window.innerWidth,
    height:window.innerHeight
});

// line added functionality
let addingLineBtn = document.getElementById("adding-line-btn");

addingLineBtn.addEventListener('click', ActiveToAddShape);

function ActiveToAddShape() {
    let line = new fabric.Line([400,200,30,200] , {
        fill : 'red',
        stroke :'red',
        strokeWidth : 5       
    });
    canvas.add(line);
    canvas.renderAll();    
}


// circle added functionality
let addCirclebtn = document.getElementById("adding-line-btn2");
addCirclebtn.addEventListener('click' , addCircle);

function addCircle(){
    var circle = new fabric.Circle({
        radius: 80, 
        fill: 'green',
         left: 100, 
         top: 300
    });

    canvas.add(circle);
    canvas.renderAll();
}


// rectangle added functionality
let addrectangleBtn = document.getElementById("adding-line-btn3");

addrectangleBtn.addEventListener('click' ,addrectangle);

function addrectangle(){
    var rect = new fabric.Rect({
        width:200,
        height:170,
        left:100,
        fill:'red',
        top:600
    });

    canvas.add(rect);
    canvas.renderAll();
}



// triangle added functionality
let addTriangleBtn = document.getElementById("adding-line-btn4");

addTriangleBtn.addEventListener('click' , addTriangle);

function addTriangle(){
    var triangle = new fabric.Triangle({
        width:100,
        height:100,
        fill:'blue',
        left:100,
        top:900
    });

    canvas.add(triangle);
    canvas.renderAll();
}


