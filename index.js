const express=require('express')
const app=express();
const PORT=process.env.PORT || 8000;
const fs=require('fs')

var time=Date.now()
var timeStr=time.toString();

var struTime =new Date()

const data=new Uint8Array(Buffer.from("time in Milli seconds is "+struTime))

fs.writeFile(timeStr,data,'utf-8',(err)=>{
  if(err){
    console.log(err);
  }
})

app.listen(PORT,()=>console.log("Server is Listening"+PORT))