'use strict'
//console.log(this); //refer global object
 name = 'kasif'
 let abc = {
     name : 'ashar',

     address : {
         country : 'Pakistan',
         city : 'karachi'
         
     },

     myNameGlobal : function () {
         setTimeout(function () {         // setTimeOut is global
             console.log(this.name)        //global kashif
         },1000)
     },

    
     myNameObject: function () {
         setTimeout ( () => {
             console.log(this)       // lexical this  , object limited   -- ashar
         } )
     },


     anotherGlobalName : () => {
         console.log(this)
     },

 };

abc.myNameObject()
abc.myNameGlobal()
abc.anotherGlobalName()








