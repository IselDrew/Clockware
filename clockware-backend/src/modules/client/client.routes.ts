import { Router } from 'express';
import { clientController } from './client.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createClientDto, updateClientDto, clientIdDto } from './client.dtos';

export const router: Router = Router();

router.get('/', clientController.findMany);
router.get('/:id', createValidator(clientIdDto, 'params'), clientController.findOneById);

router.post('/', createValidator(createClientDto), clientController.createOne);

router.put('/:id', createValidator(updateClientDto), clientController.updateOne);

router.delete('/:id', createValidator(clientIdDto, 'params'), clientController.deleteOne);
