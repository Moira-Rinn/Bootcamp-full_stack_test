const Person = require('../models/person.models');

module.exports = {

  findAllPersons: (req, res) => {
    Person.find({})
      .then((allPersons) => {
        console.log(allPersons);
        res.json({ thePersons: allPersons });
      })
      .catch((err) => console.log(err))
  },

  findOnePerson: (req, res) => {
    Person.findOne({ _id: req.params.id })
      .then((onePerson) => {
        console.log(onePerson);
        res.json(onePerson);
      })
      .catch((err) => console.log(err))
  },

  createNewPerson: (req, res) => {
    Person.create(req.body)
      .then((newPerson) => {
        console.log(newPerson);
        res.json(newPerson);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  deletePerson: (req, res) => {
    Person.deleteOne({ _id: req.params.id })
      .then((deletedPerson) => {
        console.log(deletedPerson);
        res.json(deletedPerson);
      })
      .catch((err) => console.log(err))
  },

  updatePerson: (req, res) => {
    Person.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then((updatedPerson) => res.json(updatedPerson))
      .catch((err) => console.log(err))
  }
}
