
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
    const parallelogrmBaseInput = getInputValue('parallelogram-base');
    const parallelogramHeightInput = getInputValue('parallelogram-height');
    const area = parallelogrmBaseInput * parallelogramHeightInput;
    setInnerTextById('area-result', area)
}

function getInputValue(inputFieldId) {
    const inputId = document.getElementById(inputFieldId);
    const inputText = inputId.value;
    const inputValue = parseFloat(inputText);
    return inputValue;

};


function setInnerTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}


// rhoumbus area calculation 
function rhombusAreaButton() {
    const d1 = getRhoumbusValue('rhombus-d1');
    const d2 = getRhoumbusValue('rhombus-d2');
    const res = 0.5 * d1 * d2;
    setInnerTextById('rhoumbus-result',res)

}

function getRhoumbusValue(input) {
    const rhoumbusD1 = document.getElementById(input);
    const d1Text = rhoumbusD1.value;
    const d1Value = parseFloat(d1Text);
    return d1Value;
}

function rhoumbusResult (resultRhoumbus, put){
    const res = document.getElementById(resultRhoumbus);
    res.innerText = put;
}