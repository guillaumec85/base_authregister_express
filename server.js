const app = require('./src/app');
const PORT = process.env.PORT || 5500;




app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is running on port ${PORT}`);
    }
})




// const midleware1 = (req, res, next) => {
//     console.log('midleware1');
//     next();
// }
// app.use(midleware1);

// const extracUserMiddleware = (req, res, next) => {
//     if (req.query.name) {
//         req.username = req.query.name;
//         next();
//     }else{
//         res.status(400).send('name is required');
//     } 
//     }
// app.get('/user', extracUserMiddleware, (req, res) => {
//         console.log(`coucou ${req.username}`);
// });

// app.get("/",(req,res)=>{
// res.send("Hello World");
// });
