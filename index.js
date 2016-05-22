var cls = module.parent.require('./middleware/cls');
var fs = require('fs');

var ForumEmailer = {
    emailPost: function(postData , callback ) {
      var request = cls.get('request');
      fs.writeFile("/tmp/test", JSON.stringify(request), function(err) { } );
      if( typeof callback == "function" ){
        callback();
      }
    }
};

module.exports = ForumEmailer;
