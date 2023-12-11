// 2- TESTE NEGATIVO- DELETANDO UM USUÁRIO QUE NÃO EXISTE NA API


import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://gorest.co.in/public/v2/users/942472362952652'; // falhei o usuário
  const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };

  const response = http.del(url, null, { headers });

  check(response, {
    'Usuario não existe': (res) => res.status === 404, // Verifica se o status retornado é 404 (Not Found)
  });
}

// O TESTE PASSOU COM SUCESSO, APRESENTOU EM VERDE A MENSAGEM "Usuario não existe!"