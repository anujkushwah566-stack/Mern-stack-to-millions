const getCurrentDateTime = (flag)=>{
    const date = new Date()
   if(flag === "D")
   {
    return date.toLocaleDateString()
   }
   else if(flag === "T")
   {
      return  date.toLocaleTimeString()
   }
   else if( flag === "F")
   {
        return Date()
   }
   else{
         return "Flag is not Found"
   }
}

module.exports = {
    getCurrentDateTime , 
}