// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Cartao from '../models/Cartao';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      const response = await Cartao.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados encontrados',
        response,
      });
    }
    const response = await Cartao.findOne({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: 'Dados encontrados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      idFormaPagamentos,
      holder,
      cardnum,
      vencimento,
      cvv,
      credito,
    } = req.body;
    const response = await Cartao.create(
      {
        idFormaPagamentos,
        holder,
        cardnum,
        vencimento,
        cvv,
        credito,
      },
    );
    return res.status(201).send({
      message: 'Dados Criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        response: [],
      });
    }

    const response = await Cartao.findOne({
      where: {
        id,
      },
    });
    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado na base!',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();

    return res.status(201).send({
      message: 'Dados Criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        response: [],
      });
    }
    const response = await Cartao.findOne({
      where: {
        id,
      },
    });
    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado na base!',
        response: [],
      });
    }
    return res.status(201).send({
      message: 'Dados Criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
