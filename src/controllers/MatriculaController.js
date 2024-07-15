const Controller = require ('./Controller.js');
const MatriculaServices = require ('../services/MatriculaService.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices)
  }
}

module.exports = MatriculaController;