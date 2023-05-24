import express from 'express';
const app = express();
const router = express.Router();

//Controllers
import { createEmail } from '../controllers/emailController.js';

router.route('/createEmail').post(createEmail);

export default router