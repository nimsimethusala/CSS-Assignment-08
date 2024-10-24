let colorArray = ["darkorange", "gold", "red", "blue", "green", "chartreuse"];

let array = document.querySelector("section").children;

setInterval(() => {
    for (let i=0; i< array.length; i++) {
        array[i].style.background = colorArray[i];
    }

    let lastElement = colorArray.pop();
    colorArray.unshift(lastElement);
}, 500);