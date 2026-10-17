const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const WMANAGE_API_KEY = 'wz_faca089a351518dc9ca2d72c592acc7e';
const WMANAGE_BASE_URL = 'https://painel.wmanage.com.br/api/v1';
app.post('/api/criar-cliente', async (req, res) => {
   try {
       const dadosCliente = req.body;
       const resposta = await axios.post(`${WMANAGE_BASE_URL}/clientes`, dadosCliente, {
           headers: {
               'Authorization': `Bearer ${WMANAGE_API_KEY}`,
               'Content-Type': 'application/json'
           }
       });
       res.status(200).json(resposta.data);
   } catch (erro) {
       console.error('Erro detalhado:', erro.response ? erro.response.data : erro.message);
       res.status(500).json({ erro: 'Erro ao comunicar com a API do WManage', detalhes: erro.response ? erro.response.data : erro.message });
   }
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
   console.log(`Servidor a correr na porta ${PORT}`);
});
