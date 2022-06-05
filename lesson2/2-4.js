function Addition(a, b) {
    if (a === '' || b === '') {
        alert("Вы ввели не все данные!!!")
    }
    if (a === null || b === null) {
        alert("Вы нажали отмена")
    }
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        alert("Вы ввели некоректное значение");
    }
    return (a + b);
}

function Subtraction(a, b) {
    if (a === '' || b === '') {
        alert("Вы ввели не все данные!!!")
    }
    if (a === null || b === null) {
        alert("Вы нажали отмена")
    }
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        alert("Вы ввели некоректное значение")
    }
    return (a - b);
}

function Multiplication(a, b) {
    if (a === '' || b === '') {
        alert("Вы ввели не все данные!!!")
    }
    if (a === null || b === null) {
        alert("Вы нажали отмена")
    }
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        alert("Вы ввели некоректное значение")
    }
    return (a * b);
}

function Division(a, b) {
    if (a === '' || b === '') {
        alert("Вы ввели не все данные!!!")
    }
    if (a === null || b === null) {
        alert("Вы нажали отмена")
    }
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        alert("Вы ввели некоректное значение")
    }
    return (a / b);
}