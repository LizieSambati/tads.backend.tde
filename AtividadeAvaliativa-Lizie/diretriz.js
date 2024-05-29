// Criar um servidor para armazenar uma agenda de contatos
//
// O servidor deve possuir as seguintes rotas:
//     POST /v1/login
//     POST /v1/register
//     GET /v1/contatos - retornar todos os contatos de um usuário
//     POST /v1/contato - Adicionar um contato
//     PUT /v1/contato/:id - Atualizar um contato
//     DELETE /v1/contato/:id - Deletar um contato
//
// O projeto deve:
//     - Seguir exatamente a assinatura das rotas propostas acima
//     - Utilizar o banco de dados sqlite
//     - Validar todas as requisições e garantir que:
//         - email tem um formato valido
//         - Telefone tem um formato valido
//         - outros
//     - Validar casos de erro