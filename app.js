var express= require('express');
var app = express();
app.use(express.static("public"));

app.get('/',function(req ,res){
//  res.send("welcome to our home page");
  res.render('home.ejs');
});

app.get('/speak/:name',function (req ,res) {
  console.log(req.params);
  if(req.params.name == 'pig')
   res.send("the pig goes oink");
  else if (req.params.name =='cow') {
    res.send("the cow says moo");
  }
});

app.get("/repeat/:string/:count",function(req,res){
var string =" ";
  for (var i = 0; i < req.params.count; i++)
     string += req.params.string + ' '
  res.send(string);
  });

  app.get("/posts",function(req,res){
    var posts =[
    {  title:'hello first post', author:'guy1' },
    {  title:'this happens to be the second post' ,author:'man2'},
    {  title:'third eh? not the worst rite?' ,author:'not3'}
  ];

     res.render('posts.ejs',{posts:posts});

  });

app.get("/work/:stuff",function(req,res){
  var stuff =req.params.stuff;
  res.render("work.ejs",{myStuff:stuff})
});



app.get("*",function(req,res){
  res.send("sorry page not found");
});

app.listen(3000,function(){
  console.log("listening on port 3000");
});
