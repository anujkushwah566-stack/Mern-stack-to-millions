const {Schema , model} = require("mongoose")

// validation for email
// const validateEmail = (email)=>{
//  const pattern = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,29}@gmail\.com$/

//  return pattern.test(email)
// }

const productSchema = new Schema({
     email :{
          type : String,
          //  validate : {
          //      validator : validateEmail,
          //      message: "Invalid email"
          //  } 
           
          // ek or tarika email validation karne ka
          match: [
              /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,29}@gmail\.com$/,
              'Invalid email' 
          ]
     },
     title : {
          type : String,
          required: true  , 
          trim : true,
          lowercase : true,
          maxlength: 6 // mtlb 150 se jyada chracter nhi honge
     },
     description: {
          type : String,
          required : true,
          trim: true ,
          lowercase : true,
          maxlength: 5000
     },
     price: {
          type : Number,
          required : true
     },
     discount: {
          type : Number ,
          enum: [0,25,52,75],  //iska mtlb ye hua ki inhi me se hi aap discount de sakte ho bas
          default: 0
     },
     brand: {
          type : String,
         default: 'other',
         enum: ["hkdk" , 'rfbf' , 'dfbsdf' , "other"],
         trim: true,
         lowercase : true
     },
     status: {
          type: String,
          enum: ["draft" , 'published'] ,
          default : "draft"  // iska mtlb he ay draft store hoga ya to published inke alawa or kuch store nhu hoga
     }
} , {timestamps: true})

// agar ek se jyada same email he to uska validation
productSchema.pre('save' , async function(next){
     const count = await model("Product").countDocuments({email: this.email})

     if(count > 0)
          throw next(new Error("Email already exist"))

     next()
})// koi bhi aisa funtion mongoose jo create kar raha he ya save to uss se pehle ye chalega


const productModel = model("Product" , productSchema)

module.exports = productModel