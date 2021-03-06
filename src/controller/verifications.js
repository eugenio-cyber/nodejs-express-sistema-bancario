let { contas } = require("../bancodedados");

const senhaBanco = (req, res, senha_banco) => {
  if (senha_banco !== "Cubos123Bank") {
    return res
      .status(401)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }
};

const numeroConta = (req, res, numero_conta) => {
  const conta = contas.find((conta) => {
    return conta.numero === numero_conta;
  });

  if (!conta) {
    return res
      .status(404)
      .json({ mensagem: "O número da conta informado não existe." });
  }

  return conta;
};

const senhaUsuario = (req, res, conta, senha) => {
  if (conta.usuario.senha !== senha) {
    return res.status(401).json({ mensagem: "A senha informada é inválida." });
  }
};

module.exports = {
  senhaBanco,
  numeroConta,
  senhaUsuario,
};
