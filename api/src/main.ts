import express from 'express';
import helmet from 'helmet';
import { aquariumRoutes } from './aquariums/aquarium-controller';

const app = express();
const port = 5000;

app.use(helmet());

// Setup aquarium routes
app.use(aquariumRoutes());

app.get('/', (_, res) => {
    res.status(200).send();
});

app.listen(port, () => console.log(`Server started on ${port}`));