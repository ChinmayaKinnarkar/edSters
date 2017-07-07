var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({

	userName  : {type:String},
	fullName  : {type:String},
	postText  : {type:String},
	createdOn : {type:Date,default:Date.now()},
	modifiedOn: {type:Date,default:Date.now()},

	comments  : [
				{userName:{type:String}},
				{commentText:{type:String}},
				{commentedOn:{type:Date,default:Date.now()}}
				],

	likes	  : {type:Number,default:0},

	likedBy   : [
					{userName:{type:String,required:true}}
				],

	tags      : [],

	shares    : {type:Number},
	
	sharedBy  : [
				{userName:{type:String,required:true}},
				{fullName:{type:String,required:true}}
				]

});

mongoose.model('post',postSchema);