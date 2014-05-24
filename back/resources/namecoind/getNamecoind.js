exports.getIndex = function (req, res) {
    var recs = [
        {"content":"Stuff goes here.","created_at":"2014-05-20T09:30:03.194Z","_id":"537d38417d81eeb7079acab8"},
        {"content":"More stuff here. ","created_at":"2014-05-17T11:34:41.760Z","_id":"537d38417d81eeb7079acab4"}
    ];
    return {"recs": recs};
}
