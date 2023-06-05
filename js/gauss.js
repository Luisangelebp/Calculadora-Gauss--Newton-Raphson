(() => {
    const d = document;

    function redondearDecimales(numero, decimales) {
        numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');
        if (numeroRegexp.test(numero)) {
            return Number(numero.toFixed(decimales));
        } else {
            return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;
        }
    }

    function ShowTabla(aux) {
        const tem = d.getElementById('Ttabla');
        const result = d.getElementById('resultadoGauss');
        const clone = tem.content.cloneNode(true);
        let a = [
            clone.querySelectorAll('.a1'),
            clone.querySelectorAll('.a2'),
            clone.querySelectorAll('.a3'),
            clone.querySelectorAll('.a4'),
            clone.querySelectorAll('.a5'),
        ];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j <= 5; j++) {
                let n = d.createTextNode(aux[i][j]);
                a[i][j].appendChild(n);
            }
        }
        result.appendChild(clone);
    }
    d.getElementById('GaussTO').addEventListener('submit', (e) => {
        e.preventDefault();
        e.submitter.setAttribute('disabled', 'disabled');
        let aux1 = [
            [
                parseFloat(d.getElementById('a1x1').value),
                parseFloat(d.getElementById('a1x2').value),
                parseFloat(d.getElementById('a1x3').value),
                parseFloat(d.getElementById('a1x4').value),
                parseFloat(d.getElementById('a1x5').value),
                parseFloat(d.getElementById('a1x6').value),
            ],
            [
                parseFloat(d.getElementById('a2x1').value),
                parseFloat(d.getElementById('a2x2').value),
                parseFloat(d.getElementById('a2x3').value),
                parseFloat(d.getElementById('a2x4').value),
                parseFloat(d.getElementById('a2x5').value),
                parseFloat(d.getElementById('a2x6').value),
            ],
            [
                parseFloat(d.getElementById('a3x1').value),
                parseFloat(d.getElementById('a3x2').value),
                parseFloat(d.getElementById('a3x3').value),
                parseFloat(d.getElementById('a3x4').value),
                parseFloat(d.getElementById('a3x5').value),
                parseFloat(d.getElementById('a3x6').value),
            ],
            [
                parseFloat(d.getElementById('a4x1').value),
                parseFloat(d.getElementById('a4x2').value),
                parseFloat(d.getElementById('a4x3').value),
                parseFloat(d.getElementById('a4x4').value),
                parseFloat(d.getElementById('a4x5').value),
                parseFloat(d.getElementById('a4x6').value),
            ],
            [
                parseFloat(d.getElementById('a5x1').value),
                parseFloat(d.getElementById('a5x2').value),
                parseFloat(d.getElementById('a5x3').value),
                parseFloat(d.getElementById('a5x4').value),
                parseFloat(d.getElementById('a5x5').value),
                parseFloat(d.getElementById('a5x6').value),
            ],
        ];
        let n = 5;
        for (let k = 0; k < n - 1; k++) {
            for (let i = k + 1; i < n; i++) {
                let factor = aux1[i][k] / aux1[k][k];

                for (let j = k; j <= n; j++) {
                    let res = aux1[k][j] * factor;
                    aux1[i][j] = aux1[i][j] - res;
                    aux1[i][j] = parseFloat(aux1[i][j].toFixed(12));
                }
            }
            ShowTabla(aux1);
        }
        despeje(aux1);
    });

    function despeje(arr) {
        let xv = [arr[4][5] / arr[4][4]];
        xv[1] = (arr[3][5] - arr[3][4] * xv[0]) / arr[3][3];
        xv[2] = (arr[2][5] - arr[2][4] * xv[0] - arr[2][3] * xv[1]) / arr[2][2];
        xv[3] =
            (arr[1][5] -
                arr[1][4] * xv[0] -
                arr[1][3] * xv[1] -
                arr[1][2] * xv[2]) /
            arr[1][1];
        xv[4] =
            (arr[0][5] -
                arr[0][4] * xv[0] -
                arr[0][3] * xv[1] -
                arr[0][2] * xv[2] -
                arr[0][1] * xv[3]) /
            arr[0][0];

        let resultGuass = d.getElementById('resultadoGauss');
        let j = 0;
        for (let i = 4; i >= 0; i--) {
            let p = d.createElement('p');
            let text = d.createTextNode(`x${j} = ${xv[i]}`);
            p.appendChild(text);
            resultGuass.appendChild(p);
            console.log(j);
            j++;
        }
    }
})();
