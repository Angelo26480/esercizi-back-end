function order_marco(marco) {
    return new Promise((resolve, reject) => {
        if (!marco) {
            reject('Ordine ricevuto per errore.');
            return;
        }

        console.log('Ordine ricevuto per: ' + marco);
        
        setTimeout(() => {
            console.log('Preparazione del cibo per: ' + marco);
            resolve(marco);
        }, 3000);
    })
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Consegna dell\'ordine per: ' + result);
                resolve(result);  
            }, 1000);
        });
    });
}


order_marco('Marco')
    .then(result => console.log('Successo:', result))
    .catch(error => console.error('Errore:', error));
