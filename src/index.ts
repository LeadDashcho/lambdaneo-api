import express, { Application, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware для роботи з JSON
app.use(express.json());

console.log('Hello, TypeScript with Express!');

// Маршрут для перевірки сервера
app.get('/', (_, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:
    ${PORT}`);
});
