var jasmine = require('jasmine-node'),
    matcher = new RegExp("spec\\.(js|coffee)$", 'i');
    
jasmine.executeSpecsInFolder(
    __dirname + '/tests',
    function() { },
    true,
    true,
    false,
    false,
    matcher,
    {
        report: false,
        savePath : "./reports/",
        useDotNotation: true,
        consolidate: true
    }
);