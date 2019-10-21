import express from 'express';
import customerController from '../controller/customersContrl';

const router = express.Router()

router.post('/signup', customerController.createCustomer)

export default router;