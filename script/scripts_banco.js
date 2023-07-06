function checarOpcaoMenu(valorSelecionado) {
    if (valorSelecionado < 1 || valorSelecionado > 3) {
        alert("Opção inválida!");
        return;
    }
    if (valorSelecionado == 1) {
        imprimirSaldo(saldo);
        return;
    }
    if (valorSelecionado == 2) {
        valorDepositar = document.getElementById("deposito").value;
        saldo = depositar(valorDepositar, saldo);

        alert("O novo saldo da sua conta é de: " + saldo);
        return;
    }
    if (valorSelecionado == 3) {
        valorTransferir = document.getElementById("transferir").value;
        saldo = transferir(valorTransferir, saldo);

        alert("O novo saldo da sua conta é de: " + saldo);
    }

}
function imprimirSaldo(saldo) {
    alert("O saldo da sua conta é de: " + saldo);
}
function depositar(valorDepositar, saldo) {
    return parseFloat(saldo) + parseFloat(valorDepositar);
}
function transferir(valorTransferir, saldo) {
    vt = parseFloat(valorTransferir);
    if (saldo < vt) {
        alert("O valor que você deseja transferir é maior do que o disponível em sua conta. Digite outro valor: ");
        return;

    }
    return parseFloat(saldo) - vt;
}

function ApenasNumeros(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (charCode >= 48 && charCode <= 57)
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}


