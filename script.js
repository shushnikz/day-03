//XML-HTTP Request
//are a way to interact with servers via API
//api is restcountries
//4 steps

//step: 01 create a XHR object
//XHR objects are used to ineract with server via API
/*var request=new XMLHttpRequest();
//new is a inbuilt word,which creates an object
//this initiates a connection between client verses server

//step: 02 create a request/open a request
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//open consists of 2 parameters
//1. HTTP method 2. API-URL
//Open is an inbuilt method

//step: 03 creating a bridge
request.send();

//step: 04 status code for success is 200
//once the data successfully received from server
//the data travelling from server to client is string
//onload is an action which will be triggered once data will be successful
//function is set of code to perform specific task
request.onload=function(){
    var response=JSON.parse(request.response); 
    //object stored in result
    console.log(response);
    console.log(response[0].name);
    for(var i=0;i<response.length;i++){
        //day-04
        //Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

        //console.log(response[i].name + " " + response[i].flag);
        console.log(response[i].name + " " + response[i].region + " " + response[i].subregion + " " + response[i].population);
    }

}*/


//day-04 task
/*How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };*/


/*var obj1 = { name: "Person 1", age:5 };
       var obj2 = { age:5, name: "Person 1" };
       if(obj1==obj2){
       console.log("true");
       }
       else{
       console.log("false");
       }*/


//day-03 task
//Create your own resume data in JSON format
/*var resume = {name:"Sushmitha",age:24,email:"sushmithadevadiga997@gmail.com",dob:18/12/1997,
             objective:"To pursue a challenging career in IT industry in a fast growing organization to utilize Expertise in software development",
             education:"Bachelor of engineering",profile:"electronics and communication engineer",skills:"javascript html css",
             interests:"teaching cooking"};

             console.log(resume.name);*/


//For the given JSON iterate over all for loops (for, for in, for of, forEach)
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  for(i=0;i<obj.length;i++){
    console.log(obj[i].person,obj[i].age,obj[i].company);
  }
  for(var b in obj){
    console.log(obj[b]);
  }








