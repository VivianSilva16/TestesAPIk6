
//2- TESTE NEGATIVO PARA ATUALIZAR USUÁRIO NA API- CAMPO INCORRETO 



import http from 'k6/http';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users/5824614'; 

  const payload = {
    name: 'mr peanutbutter', // Mantive o nome normal 
    email: 'mr     peanutbutter@gmail.com', // Falhei o e-mail de propósito 
    gender: 'male',
    status: 'active'
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae', 
  };

  const response = http.put(url, JSON.stringify(payload), { headers });

  console.log('Status:', response.status);
  console.log('Body:', response.body);
}

// O TESTE FALHOU COMO O ESPERADO, APRESENTOU O ERRO: INFO[0001] Status: 422                                
//INFO[0001] Body: [{"field":"email","message":"is invalid"}]  

