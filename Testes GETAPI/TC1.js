
// 1- CENÁRIO DE TESTE POSITIVO- OBTENDO OS DADOS DE UM USUÁRIO CRIADO NA API ATRAVÉS DO GET

import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users';
  
  const response = http.get(url);

  check(response, {
    'Status 200': (res) => res.status === 200,
    'Contains User ID': (res) => {
      const body = res.json();
      const user = body.find((user) => user.id === 5824588);
      return user !== undefined;
    },
  });
}

// O TESTE PASSOU COM SUCESSO, ENCONTROU O CONTAIN USER ID. 