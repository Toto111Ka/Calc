let inputUsd = document.getElementById('usd'),
    inputRub = document.getElementById('rub');

function input () {
    inputRub.addEventListener('input', () => {
        function inputR () {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                    request.open("GET", "current.json");
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve(this.response);
                        } else {
                            reject();
                        }
                    }
                        });
                    request.send();
                });
            }
        inputR()
            .then( response => {
                let data = JSON.parse(response);
                inputUsd.value = inputRub.value / data.usd;
                })
            .catch(() => console.log("Somthing Failed"));
    });  
    
    inputUsd.addEventListener('input', () => {
        function inputR () {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                    request.open("GET", "current.json");
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve(this.response);
                        } else {
                            reject();
                        }
                    }
                        });
                    request.send();
                });
            }
        inputR()
            .then( response => {
                let data = JSON.parse(response);
                inputRub.value = inputUsd.value * data.usd;
            })
            .catch(() => console.log("Somthing Failed"));
    });
}

input(inputRub);
input(inputUsd);