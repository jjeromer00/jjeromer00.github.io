/*
    Converter
*/

function main() {
    let inText = getE('in');
    let outText = getE('out');
    let bad = inText.value;
    let good = '';

    for (let i = 0; i < bad.length; i += 1) {
        let ch = bad[i];

        if (ch === '/' && bad[i+1] === '/') {
            good += '//';
            i++;
            while (bad[++i] !== '\n') {
                good += bad[i];
            }
            good += '\n';
        }
        else if (ch !== '\n') {
            good += ch;

            if (ch === '{') {
                good += '\n';
            }
            else if (ch == '}') {
                good += '\n';
                ++i;
            }
            else if (ch === ';') {
                good += '\n';
                ++i;
            }
        }
        else {
            good += ' ';
        }
    }

    outText.value = good;
}

function getE(id) {
    return document.getElementById(id);
}