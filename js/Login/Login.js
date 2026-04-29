const form = document.getElementById('form-login');
const btn = document.getElementById('btn-entrar');
const msgErro = document.getElementById('msg-erro');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //imprede o carregamento da página

    //captura valor via DOM

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    //Simulação de Loading
    btn.innerText = "Verificando...";
    btn.style.backgroundColor = "#27c3e50";
    msgErro.classList.add('hidden');

    setTimeout(()=> {
        //Validção simples
        if (email === "admin@gmail.com" && senha === "12345") {
            btn.style.backgroundColor = "#27ae60"
            btn.innerText = "Sucesso! Redirecionando...";

            setTimeout(() => {
                window.location.href = "vitrine.html"
            }, 1000);
        } else {
            //Manipulação do DOM para erro.
            btn.innerText = "Entrar";
            btn.style.backgroundColor = "#3498db";
            msgErro.classList.remove('hidden');
            msgErro.style.color = "#e74c3c";
        }
    },1500);


});