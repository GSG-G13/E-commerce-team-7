import app from './app.js';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(PORT);
  console.log('server is running on port 3000');
});
