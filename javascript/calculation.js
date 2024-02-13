
// triangle area calculation
function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = triangleBaseInput.value;
    const base = parseFloat(triangleBase);
    console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);
    
    const area = 0.5 * base * height;
    console.log('the area is', area);


    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
};

// rectangle area calculation
function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleValue = rectangleWidthInput.value;
    const value = parseFloat(rectangleValue);
    console.log(value);
    const rectangleIntInput = document.getElementById('rectangle-int');
    const rectangleInput = rectangleIntInput.value;
    const input = parseFloat(rectangleInput);

    console.log(input);
    const area = value * input;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
};


// parallelogram calculation
function parallelogramArea() {
    const parallelogrmBaseInput = document.getElementById('parallelogram-base');
    const parallelogrmInput = parallelogrmBaseInput.value;
    const base = parseFloat(parallelogrmInput);
    console.log(base)
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramInput = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramInput);
    console.log(height);

    const area = base * height;
    console.log(area);

    const areaResult = document.getElementById('area-result');
    areaResult.innerText = area;
}