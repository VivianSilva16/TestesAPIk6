// 3- TESTE NEGATIVO: ATUALIZANDO DADOS DE UM USUÁRIO QUE NÃO EXISTE 


import http from 'k6/http';
import { check } from 'k6';

   export default function () {
      
    const url = 'https://gorest.co.in/public/v2/users/575757456473'; // UM id que não existe 
    const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 
    
    const headers = {
    'Content-Type': 'application/json',
      Authorization: token,
   };

    const payload = {
     name: 'Alice Constantine',
     email: 'aliceconstantine@gmail.com',
     gender: 'female',
     status: 'active'
   };

    const response = http.put(url, JSON.stringify(payload), { headers });

      check(response, {
       'Usuário não existe': (res) => res.status === 404,
       'Contains Error Message': (res) => {
   const body = res.json();
      return body && Object.keys(body).length === 0; // Verifica se o objeto retornado está vazio (indicativo de usuário não existente)
    
    },
  });
}


// O TESTE FALHOU COM SUCESSO, APONTANDO EM VERDE A MENSAGEM 'USUÁRIO NÃO EXISTE'!
