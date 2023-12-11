
// 1- TESTE POSITIVO: ATUALIZANDO DADOS DE UM USUÁRIO NA API 


import http from 'k6/http';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users/5824588'; // ID do usuário a ser atualizado

  const payload = {
    name: 'mr peanutbutter', // Troquei o nome
    email: 'mrpeanutbutter@gmail.com', // Troquei o email 
    gender: 'male', 
    status: 'active'
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae',}; 
  

  const response = http.put(url, JSON.stringify(payload), { headers });

  console.log('Status:', response.status);
  console.log('Body:', response.body);
}


// O TESTE PASSOU COM SUCESSO: O K6 TROUXE A MENSAGEM: INFO[0001] Status: 200 source=console
// INFO[0001] Body: {"email":"JessicaLima@gmail.com","name":"Jessica Lima","gender":"female","status":"active","id":5824700