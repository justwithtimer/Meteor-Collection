
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Users } from  "../mon/mon.js"
import './information.html'

Template.add.events({

'click .addbtn':function(){

   var username=$('#username').val();
   var age=$('#age').val();

     Users.insert({name:username,age:age});


}



})