//loading monogoose
var mongoose= require('mongoose');
//inorder to use promise in our callback functions we need to configure
mongoose.Promise = global.Promise;
//the connection string to the db
mongoose.connect('mongodb://localhost:27017/TodoApp');

//creating a model .model helps in keeping the collections more organised
/*this basically defines the What collection shuld contain(col) along with col defination(like what kind of col shuld accept input as)*/
var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});
/*
//creating the instance of above model:Todo
var newTodo=new Todo({
  text:'Cook dinner'
});
//the above instance with data need to saved
//below we are saving instance if not saved than pop an error
newTodo.save().then(
  (doc)=>{ console.log('Saved todo',doc)},
  (e)=>{console.log('Unable to save todo')}
);
*/
/*challenge*/
var secondTodo=new Todo({
  text:'have tea',
});

secondTodo.save().then(
  (doc)=>{ console.log('saved todo',doc);},
  (e)=>{ console.log('Unable to save todo',e); }
);
