import app from './app.js';

const PORT = process.env.PORT;

console.log(PORT)

app.listen(PORT, () => {
 
  console.log('server is running on port 3000');
});
