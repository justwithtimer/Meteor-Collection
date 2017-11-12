
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Users } from '../mon/mon.js';
import './user.html';
Template.user.helpers({


users:function () {
	// body...

return Users.find();

}

});


Template.user.events({

'click .btn':function(){

console.log("this is ok");

Users.update(this._id,{$set:{age:32}});

},

'click .rbtn':function(){


  console.log("this is remove");
  Users.remove(this._id);
}



});