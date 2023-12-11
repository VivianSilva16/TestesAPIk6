
// 1- CENÁRIO DE TESTE POSITIVO: DELETANDO UM USUÁRIO VIA API

import http from 'k6/http';
import { check } from 'k6';

    export default function () {
      const url = 'https://gorest.co.in/public/v2/users/5824699'; // Aquele usuário que fiz com meu nome
      const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 
     
      const headers = {
       'Content-Type': 'application/json',
       Authorization: token,
       };

      const response = http.del(url, null, { headers });

      check(response, {
       'Status 204': (res) => res.status === 204, // Verifica se o status retornado é 204 (No Content)
          });
 }


// O TESTE PASSOU PERFEITO, O USUÁRIO FOI DELETADO COM SUCESSO, A MENSAGEM STATUS 204 APARECE EM VERDE. 