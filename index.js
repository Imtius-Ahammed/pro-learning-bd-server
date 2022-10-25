const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/coursesdetails.json')
app.get('/', (req,res)=>{
  res.send('Courses API Running');
});

app.get('/courses-categories',(req,res)=>{
  res.send(categories)
});

app.get('/category/:id',(req,res)=>{
   const id = req.params.id;
   const categoryCourses = courses.filter(course=>course.category_id === id);
   res.send(categoryCourses);
})

app.get('/courses/:id',(req,res)=>{
  const id = req.params.id;
  const chosenCourses =courses.find(course => course._id === id);
    res.send(chosenCourses);
  
  console.log(req.params);
})

app.listen(port, ()=>{
  console.log('Dragon News Server Running', port);
});