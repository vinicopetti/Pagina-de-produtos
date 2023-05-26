
document.addEventListener('DOMContentLoaded', function() {
    fetch('verificaSessao.php')
      .then(response => response.json())
      .then(data => {
        
       if (data.status == 'sucesso') {
            console.log(data.mensagem);

       } else if(data.status == 'erro') {
            console.log(data.mensagem);
            window.location.href = "login.php";
       } 
      })
      .catch(error => {
            console.error('Erro ao buscar os dados:', error);
      });
  });