
// 2- CENÁRIO DE TESTE NEGATIVO - OBTENDO DADOS DE UM USUÁRIO INEXISTENTE



import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users';

  const response = http.get(url);

  check(response, {
    'Status 200': (res) => res.status === 200,
    'Does Not Contain User ID': (res) => {
      const body = res.json();
      // Verifica se NÃO existe um usuário com o ID 9999999 na resposta
      const user = body.find((user) => user.id === 9999999);
      return user === undefined; // Retorna verdadeiro se NÃO encontrar o usuário com o ID desejado
    },
  });
}

// O TESTE FALHOU, DE ACORDO COM O OBJETIVO , A Mensagem "DOES NO CONTAIN ID" APARECEU EM VERDE.