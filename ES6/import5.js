System.import('./ES6/module1.js')
    .then(function(module1){
        console.log(module1);
    }, function(e){
        console.log(e);
    });
