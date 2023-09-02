let inputPln = document.getElementById('Pln'),
    inputUsd = document.getElementById('Usd');

    inputPln.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        // request.open(method, url, async, login, password); EXAMPLE!!!!!!!!! (Принимает 5 аргументов метод, ссылку, асинзроность, логин, пароль) 
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=ustf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputPln.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так !";
        }
    });


    });