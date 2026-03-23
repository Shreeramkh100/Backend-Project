function asyncHandler(fn){
  return async function(req,res,next){
    try{
      await fn(req,res,next) //Exceutes fn
    }catch(err){
      next(err)
    }
  }
}

export {asyncHandler};