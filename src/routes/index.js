const express = require('express');
const router = express.Router();
const CursoSchema = require('../model/Curso');


//Insercion de los datos
router.get('/', async (req, res) => {
  const Curso= await CursoSchema.find();
  res.render('index', {
    Curso
  });
});
router.post('/add', async (req, res, next) => {
  const Curso = new CursoSchema(req.body);
  await Curso.save();
  res.redirect('/');
});



//Edición de datos
router.get('/edit/:id', async (req, res, next) => {
  const Curso  = await CursoSchema.findById(req.params.id);
  console.log(Curso )
  res.render('edit', { Curso });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await CursoSchema.update({_id: id}, req.body);
  res.redirect('/');
});

//Elimicación de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await CursoSchema.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
