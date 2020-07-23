import * as express from 'express';
import TableController from '../../Controllers/TableController';

const router = express.Router();
const zoneController = new TableController();

router.get('/', (req, res, next) => {
  zoneController.index(req, res, next);
});

router.post('/', (req, res, next) => {
  zoneController.store(req, res, next);
});

router.get('/:id([0-9]+)', (req, res, next) => {
  zoneController.show(req, res, next);
});

router.put('/', (req, res, next) => {
  zoneController.store(req, res, next);
});

router.delete('/:id([0-9]+)', (req, res, next) => {
  zoneController.destroy(req, res, next);
});

router.post('/byStatus', (req, res, next) => {
  zoneController.getByStatus(req, res, next);
});


export default router;
