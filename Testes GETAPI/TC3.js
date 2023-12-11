// 3- TESTE NEGATIVO GET- PEDINDO UM USUÁRIO COM ID NÃO EXISTENTE 


import http from 'k6/http';
import { check } from 'k6';

   export default function () {
   const url = 'https://gorest.co.in/public/v2/users/-1'; // ID -1 não existe

   const response = http.get(url);

     check(response, {
       'Status 404': (res) => res.status === 404,
      'Correct Error Message': (res) => {
  const body = res.json();
      return body.code === 'not_found' && body.data.message === 'Resource not found'; // Verifica a mensagem de erro correta
    },
  });
}

// O TESTE DEU CERTO, A MENSAGEM DE ERRO 404 APARECEU EM VERDE.