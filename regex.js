
let cpf = Number(document.querySelector("input#cpf").value);

function maskCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

document.getElementById("cpf")
    .addEventListener('input', (evnt) => {
        evnt.target.value = maskCPF(evnt.target.value)
    });
