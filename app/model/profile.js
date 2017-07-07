var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var profileSchema = new Schema({
			  userName    : {type: String},
			  accountType : {type : String},
			  companyName : {type :String, default:'Student'},
			  jobRole     : {type :String,default:'Student'},
			  careerPath  : {type:String, required :true},
	workExperienceInYears : {type : String},
				   degree : {type:String},
				  emailId : {type:String,required:true},
			 mobileNumber : {type:Number},
				   skills : [],
			noOfFollowers : {type:Number},
				 followers: [
				 			{userName:String,required:true},
							{fullName:String}
							]

});

mongoose.model('profile',profileSchema);