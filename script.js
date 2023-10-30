// QUESTION NO 1 COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER 
     // A. let obj1 = {name:"person 1",age:5};
     // B. let obj2 ={age:5,name: "person 1"};

     let obj1 = {name:"person 1",age:5};
      let obj2 ={age:5,name: "person 1"};
        var myJSON1=JSON.stringify(obj1)
        var myJSON2=JSON.stringify(obj2)
         console.log(myJSON1);
         console.log(myJSON2);
          console.log(myJSON1==myJSON2);

// // QUESTION NO 2 DISPLAY ALLLTHE COUNTRY FLAGS IN CONSOLE 

var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    // console.log(data);
    var result = JSON.parse(data);
    console.log(result)
    for (var i=0;i<result.length;i=i+1){

    console.log(result[i].flags.png);
    }
}

// // // QUESTION NO 3 PRINT ALL COUNTRIES NameS, REGION,SUB-REGION,AND POPULATION

var request1 = new XMLHttpRequest();
request1.open("Get","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    //  console.log(data1);
    var result1 = JSON.parse(data1);
    console.log(result1)
    for (var i=0;i<result1.length;i=i+1){

    console.log(result1[i].name.common, result1[i].region,result1[i].subregion,result1[i].population);
    }
}