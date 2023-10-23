import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/get-item-price/:itemUrl', async (req, res) => {
  try {
    const itemUrl = req.params.itemUrl;
    const response = await fetch(itemUrl);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Произошла ошибка при запросе данных:', error);
    res.status(500).send('Произошла ошибка при запросе данных');
  }
});

app.listen(port, () => {
  console.log(`Сервер слушает порт ${port}`);
});
