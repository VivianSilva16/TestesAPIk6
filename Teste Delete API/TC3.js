// 3- TESTE NEGATIVO- FALHA NO ENDPOINT AO DELETAR O USUÁRIO


import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users'; // falhei o endpoint deixando o ID do usuário vazio 
  const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };

  const response = http.del(url, null, { headers });

  check(response, {
    'Não há ID no endpoint': (res) => res.status === 404, // Verifica se o status retornado é 404 (Not Found)
  });
}

// O TESTE PASSOU COM SUCESSO, APRESENTOU EM VERDE A MENSAGEM "Não Há ID no EndPoint!"