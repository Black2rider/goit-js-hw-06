function getElementWidth(content, padding, border) {
    let contentNumb = Number.parseFloat(content);
    let paddingNumb = Number.parseFloat(padding) * 2;
    let borderNumb = Number.parseFloat(border) * 2;
    let totalWidth = (contentNumb + paddingNumb + borderNumb);
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
