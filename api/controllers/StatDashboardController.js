exports.findBestAgents = function(req, res) {

    TaskAssignment.find().sort({rate:-1}).limit(5).exec(
        function(err, result){
            console.log((result));
            return res.send(result);
        }
    );
    
};



