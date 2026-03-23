const {Schema , model} = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
        lowecase: true
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true ,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid Email'
        ]
    },
    password: {
        type: String,
        trim: true,
    }
} , {timestamps : true}) 

//middleware he create function se pehle chalega mtlb save hone se pehle
//arrow function hota to this kam nhi karta isliye  normal function use kiya

userSchema.pre('save' , async function(next){
   const count = await model("User").countDocuments({ mobile: this.mobile})
   
   // checking duplicate Mobile Number
   if(count > 0)
    throw next(new Error("Mobile number Already Exist"))

    next()
})

userSchema.pre('save' , async function(next){
   const count = await model("User").countDocuments({ email: this.email})
   
   // checking duplicate Email
   if(count > 0)
    throw next(new Error(" Email Already Exist"))

    next()
})

// Password encript during store
userSchema.pre('save' , async function(next){
        const encryptedPassword = await bcrypt.hash(this.password.toString() , 12)
        this.password = encryptedPassword
        next()
})







const userModel = model('User'  , userSchema)
module.exports = userModel