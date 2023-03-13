function count() {
    let start = document.getElementById('txts');
    let end = document.getElementById('txte');
    let step = document.getElementById('txtst');
    let res = document.getElementById('res');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible to continue!'
    } else {
        res.innerHTML = 'Counting: <br>'
        let s = Number(start.value);
        let e = Number(end.value);
        let st = Number(step.value);
        if (st <= 0) {
            alert('[ERROR] Invalid data! Using step 1 [ERROR]')
            st = 1
        }
        if (s < e) {
            //Crescente*
            for(let c = s; c <= e; c += st) {
                res.innerHTML += `${c} \u{1F537}`
            }   
        } else {
            //Regressiva*
            for(let c = s; c >= e; c -= st) {
                res.innerHTML += `${c} \u{1F537}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}