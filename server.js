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
       const response = await axios.post(`${WMANAGE_BASE_URL}/clients`, dadosCliente, {
           headers: {
               'Authorization': `Bearer ${WMANAGE_API_KEY}`,
               'Content-Type': 'application/json'
           }
       });
       res.json({ success: true, data: response.data });
   } catch (error) {
       res.status(500).json({ success: false, error: error.response?.data || error.message });
   }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Servidor a correr na porta ${PORT}`);
});
