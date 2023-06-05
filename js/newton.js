(function () {
    const d = document;
    function result(arr, deci) {
        let h6itera = d.getElementById('h6itera'),
            h6totalitera = d.getElementById('h6iterault'),
            totalItera = d.getElementById('totalItera'),
            template = d.getElementById('templateNew'),
            result = d.getElementById('TablaResultNew');
        h6itera.removeAttribute('hidden');
        h6totalitera.removeAttribute('hidden');
        totalItera.textContent = arr.length;
        if (arr.length < 15) {
            for (let i = 0; i < arr.length; i++) {
                let clone = template.content.cloneNode(true);
                let td = clone.querySelectorAll('td');
                // text += `${arr[i].toFixed(deci)}, `;
                let iterador = `x${i}`,
                valor = arr[i].toFixed(deci);
                td[0].appendChild(d.createTextNode(iterador));
                td[1].appendChild(d.createTextNode(valor));

                result.appendChild(clone)
            }
        } else {
            let itera = d.getElementById('IteraE');
            itera.removeAttribute('hidden');
            console.log(arr);
        }
    }

    d.getElementById('ENewton').addEventListener('submit', (e) => {
        e.preventDefault();
        e.submitter.setAttribute('disabled', 'disabled');
        const x0 = parseFloat(e.target[0].value);
        const deci = parseInt(e.target[3].value);
        const Ofuncion = e.target[1].value.replaceAll('^', '**');
        const Dfuncion = e.target[2].value.replaceAll('^', '**');
        let i = 0,
            arr = [x0],
            ciclar = true;
        do {
            let x = arr[i];
            let part1 = eval(Ofuncion);
            let part2 = eval(Dfuncion);
            arr[i + 1] = x - part1 / part2;
            let aux = parseFloat(arr[i + 1].toFixed(deci)),
                aux1 = parseFloat(arr[i].toFixed(deci));
            if (aux === aux1) {
                ciclar = false;
            }
            if (i === 499) {
                break;
            }
            i++;
        } while (ciclar);

        result(arr, deci);
    });
})();
