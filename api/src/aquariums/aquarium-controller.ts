import { json } from 'express';
import Router from 'express-promise-router';

export function aquariumRoutes() {
    const router = Router();

    router.use(json())
    router.get('/aquariums', async (req, res) => {
        
    });

    router.get('/aquariums/:id', async (req, res) => {

    });

    router.post('/aquariums', async (req, res) => {

    });

    router.put('/aquariums/:id', async (req, res) => {

    });
    
    return router;
}