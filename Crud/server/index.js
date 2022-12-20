const express=require('express');
const fileupload=require('express-fileupload');
const cors=require('cors');
const bodyparser=require('body-parser');
const mycon=require('mysql');
const { response } = require('express');

const app=express();
app.use(express.json());
app.use(fileupload());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c=mycon.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"#Bsabaree1999",
    database:"vehicaldetails"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log(" database successfully connected");
    }
})

app.post('/create',(request,response)=>{
let  {firstname,lastname,email,dob,mobileno,vehicalno,model,about}=request.body
let sql = 'insert into servicedetails(firstname,lastname,email,dob,mobileno,vehicalno,model,about,status) values(?,?,?,?,?,?,?,?,?)'

    c.query(sql,[firstname,lastname,email,dob,mobileno,vehicalno,model,about,0],(error,result)=>{
        if(error){
            let s={"status":"error"}
            response.send(s);
        }
        else{
        let s={"status":"Data successfully inserted"}
        response.send(s);
        }
    })
})

app.get('/personalinfo',(request,response)=>{
    let sql = 'select * from servicedetails';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.listen(3002,()=>{
    console.log('server running port:3002');
})