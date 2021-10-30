const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());

require("./config/mongoose.config");

app.use(cors())
require('./routes/person.routes')(app);

const PORT = 8000;

app.listen(8000, () => console.log(`Server connected on port ${PORT}`))



