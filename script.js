
  // function requestNotificationPermission() {
  //   if (Notification.permission === 'default') {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === 'granted') {
  //         console.log('Notificação permitida.');
  //       } else {
  //         console.log('Notificação não permitida.');
  //       }
  //     });
  //   }
  // }

  // function enviarNotificacao() {
  //   requestNotificationPermission();
  //   if (Notification.permission === 'granted') {
  //     navigator.serviceWorker.getRegistration().then(reg => {
  //       const options = {
  //         body: 'Isso é uma notificação!',
  //       };
  //       reg.showNotification('Notificação PWA', options);
  //     });
  //   }
  // }
  
  function enviar() {
    const nome = document.getElementById('nome').value; //pega valor do nome
    const cidade = document.getElementById('cidade').value; //pega valor da cidade
  
    document.getElementById('displayNome').innerText = `Nome: ${nome}`; //mostra nome
    document.getElementById('displayCidade').innerText = `Cidade: ${cidade}`; //mostra cidade
  
    document.getElementById('form').style.display = 'none'; 
    document.getElementById('exibir').style.display = 'block'; //oculta o form
  }


  