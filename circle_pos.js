
let pointNum = 500;

let distVal;

let theta = 0;  // circle P
let r = 400;
let angle;

let s;  // second

let circlePosX = new Array(pointNum);  //circle XY
let circlePosY = new Array(pointNum);

let rectPosX = new Array(pointNum);  // rect XY
let rectPosY = new Array(pointNum);

let pointPosX = new Array(pointNum);  // draw Point XY
let pointPosY = new Array(pointNum);

function setup() {

    createCanvas(800, 1200);
    background(0);
    circleRectPointXY();

    for(let a = 0; a < pointNum; a ++)
    {
        pointPosX[a] = 0;
        pointPosY[a] = 0;
    }
}

function draw() {
    s = second();
    s %= 2;
    stroke(255);
    noFill();
    background(0);
    
    
    
    drawPoint2();
    
}


function circleRectPointXY() {
    angle = TWO_PI /pointNum;
    
    for(let g = 0; g <pointNum; g ++)  // circle X
    {
        circlePosX[g] = cos(theta)*r + width/2;
        theta += angle;
    }

    for(let h = 0; h <pointNum; h ++)  // circle Y
    {
        circlePosY[h] = sin(theta)*r + height/2;
        theta += angle;
    }

    for(let f = 0; f < pointNum; f++)  //rect X
    {
        rectPosX[f] = random(width);
    }

    for(let q = 0; q < pointNum; q++)  // rect Y
    {
        rectPosY[q] = random(height);
    }
}





function drawPoint2()
{ 
    
    
    for(let w = 0; w < pointNum; w++)
    {

        for(let p = 0; p < pointNum; p++)
        {
            distVal = dist(pointPosX[w],pointPosY[w],  pointPosX[p], pointPosY[p]);
            if(distVal <20)
            {
                line(pointPosX[w], pointPosY[w],  pointPosX[p], pointPosY[p]);
            }
        }

        

        if(s < 1)
        {
            pointPosX[w] +=(circlePosX[w] - pointPosX[w]) *0.6;
            pointPosY[w] +=(circlePosY[w] - pointPosY[w]) *0.6;
        }else if(s < 2 && s > 0)
        {
            pointPosX[w] +=(rectPosX[w] - pointPosX[w]) *0.4;
            pointPosY[w] +=(rectPosY[w] - pointPosY[w]) *0.4;
        }

        point(pointPosX[w], pointPosY[w]);
        
    }
}




/*
function drawPoint()
{
    circleRectPointXY();
    s = second();
    s %= 2;
    if(s == 1)
    {
        for(let r = 0; r <pointNum; r++){
            pointPosX[r] = rectPosX[r];
            pointPosY[r] = rectPosY[r];
        for(let u = 0; u <pointNum; u++)
        {
            
            
            pointPosX[u] += (rectPosX[r] - circlePosX[r])*0.6;
            pointPosY[u] += (rectPosY[r] - circlePosY[r])*0.6;

            point(pointPosX[u], pointPosY[u]);
        }
    }
    }else if( s==0){
        for(let e = 0; e <pointNum; e++){
            pointPosX[e] = circlePosX[e];
            pointPosY[e] = circlePosY[e];
        for(let t = 0; t <pointNum; t++)
        {
            
            pointPosX[t] += (circlePosX[e] - rectPosX[e])*0.6;
            pointPosY[t] += (circlePosY[e] - rectPosY[e])*0.6;

            point(pointPosX[t], pointPosY[t]);
        }
    }
    }
}

*/