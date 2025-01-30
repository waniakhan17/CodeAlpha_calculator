let string = ""; 
let buttons = document.querySelectorAll('.button');
let memoryValue = parseFloat(localStorage.getItem('memory')) || 0; // Retrieve stored memory value

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string.replace('÷', '/').replace('x', '*')); // Fix division and multiplication symbols
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; // Error handling
                string = "";
            }
        } else if (buttonText === '%') {
            string = (parseFloat(string) / 100).toString(); // Convert last number to percentage
            document.querySelector('input').value = string;
        } else if (buttonText === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (buttonText === 'M+') {
            memoryValue += parseFloat(string) || 0;
            localStorage.setItem('memory', memoryValue);
            document.querySelector('input').value = string;
        } else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});

