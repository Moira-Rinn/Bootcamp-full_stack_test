const PersonController = require("../controllers/person.controller");


module.exports = (app) => {
  app.get("/api/people", PersonController.findAllPersons);

  app.post("/api/people", PersonController.createNewPerson);

  app.get("/api/people/:id", PersonController.findOnePerson);

  app.put('/api/people/:id', PersonController.updatePerson);

  app.delete('/api/people/:id', PersonController.deletePerson);

}

