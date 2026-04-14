function calcularEcuacion() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);
    const resBox = document.getElementById('resultadoBox');
    const tipoLabel = document.getElementById('tipoSolucion');
    const valorLabel = document.getElementById('valorX');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("¡Mete todos los números, fiera!");
        return;
    }

    if (a === 0) {
        tipoLabel.innerText = "¡Error!";
        valorLabel.innerText = "Esto no es de 2º grado, 'a' no puede ser 0.";
        resBox.classList.remove('d-none');
        return;
    }

    const discriminante = Math.pow(b, 2) - (4 * a * c);
    resBox.classList.remove('d-none');

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        tipoLabel.innerText = "Dos soluciones reales:";
        valorLabel.innerHTML = `x1 = ${x1.toFixed(2)}<br>x2 = ${x2.toFixed(2)}`;
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        tipoLabel.innerText = "Solución única:";
        valorLabel.innerText = `x = ${x.toFixed(2)}`;
    } else {
        let real = (-b / (2 * a)).toFixed(2);
        let imag = (Math.sqrt(Math.abs(discriminante)) / (2 * a)).toFixed(2);
        tipoLabel.innerText = "Soluciones complejas:";
        valorLabel.innerHTML = `x1 = ${real} + ${imag}i<br>x2 = ${real} - ${imag}i`;
    }
}
