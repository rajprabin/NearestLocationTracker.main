module.exports = (error)=>{
const refinedError =  error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
return refinedError;
}