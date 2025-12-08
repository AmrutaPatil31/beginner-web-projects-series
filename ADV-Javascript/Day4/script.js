 /* Day 59 notes 

##  Synchronous JavaScript  
JavaScript is **single-threaded**, meaning it executes code **line-by-line**.  
The next line runs **only after** the previous line finishes.

### **Example**
*/
console.log("A");
console.log("B");
console.log("C");


/* **Output**
```
A
B
C
```
*/
//Everything runs in order.



// ##  Asynchronous JavaScript  
// Some tasks take time → JS offloads them to browser APIs  
// (e.g., **setTimeout, fetch, DOM events**).  
// These tasks **do not block** the main thread.

// ### **Example**

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");


/*### **Output order**
```
A
C
B   ← (printed after 2 seconds)
```

---

  Callbacks  
A **callback** is a function passed as an argument to another function.

 **Example**
*/
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

greet("Anubhav", () => {
  console.log("Welcome!");
});




/* Callback Hell  
Callback hell happens when callbacks become **nested, messy, and unreadable**.

###  Example: Callback Hell (Pyramid of Doom)

getData(function(data1) {
  getMoreData(data1, function(data2) {
    getMoreMoreData(data2, function(data3) {
      getFinalData(data3, function(result) {
        console.log(result);
      });
    });
  });
});

 
Looks like a **pyramid of doom* 
Too many nested levels → hard to read, debug, and maintain.
*/

//*******************  Exercise 1 ******************************

function afterDelay(time,cb){
   setTimeout(() => {
     cb();
   }, time);
}
afterDelay(5000,function(){
    console.log("callback executed");
    
});



//*******************  Exercise 2 ******************************

function getUser(username,cb) {
    console.log("loading username details...");
    
    setTimeout(() => {
        cb({id:21490, username:"amruta"});
    }, 1000);
}

function getUserPosts(id,cb){
   console.log("loading posts ...");
   setTimeout(() => {
    cb(["img1","img2"]);
   }, 2000);
   
}

getUser("amruta",function(data){
    getUserPosts(data.id,function(allposts){
        console.log(data.username,allposts);
    });
}) ;

//*******************  Exercise 3 ******************************

function loginUser(user,cb){
    console.log("login...");
    
 setTimeout(() => {
    
 },1000);
}
function fetchPermission(user,cb){
    console.log("persmissions...");
    
    setTimeout(() => {
        cb(["read","write","delete"]);
    }, 1000);
}
function loadDashboard(permissions,cb){
    console.log("loading dashboard....");
    
    setTimeout(() => {
        cb();
    },1000);
}

loginUser("raj",function(data){
    fetchPermission(data.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("dashboard.");
            
        });
    });
});