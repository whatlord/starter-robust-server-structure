const counts = require("../data/counts-data");

function list(req,res){
    res.json({data: counts})
}

function read(req,res,next) {
    const {countId} = req.params;
    const foundCount = counts[countId];
    if(foundCount === undefined){
      next({ status: 404, message: `Count id not found: ${countId}` });
    }else{
      res.json({data: foundCount })
    }
  }

module.exports = {
    list,
    read,
}