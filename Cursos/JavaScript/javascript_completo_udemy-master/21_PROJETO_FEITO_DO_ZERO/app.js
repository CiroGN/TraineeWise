const express       = require('express');
const { engine }    = require('express-handlebars');
const path          = require('path');
const app           = express();
const db            = require('./db/connection');
const bodyParser    = require('body-parser');
const Job           = require('./models/Job');
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;

process.on('uncaughtException', function (err) {
    console.error('Erro inesperado:', err);
});

process.on('unhandledRejection', function (reason, promise) {
    console.error('Erro de promessa não tratada:', reason);
});

const PORT = 3000;

app.listen(PORT, function (){
    console.log(`O express está rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({ 
    extname: '.hbs',  // Diz ao Express que os arquivos terminam com .hbs
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts') 
}));
app.set('view engine', 'hbs');

console.log("Diretório de views:", path.join(__dirname, 'views'));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db
    .authenticate()
    .then(()=>{
    console.log("Conectou ao banco com sucesso");
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao conectar", err);
    });

// routes
app.get("/",(req, res)=>{

    let search = req.query.job;
    let query = '%'+search+'%'; //PH -> PHP, Word -> Wordpress, press -> Wordpress

    if(!search){
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            
            res.render('index', {
                jobs
            });
        })
        .catch(err => console.log(err));
    }
    else{
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            
            res.render('index', {
                jobs, search
            });
        });
    }
});

// jobs routes
app.use("/jobs", require('./routes/jobs'));