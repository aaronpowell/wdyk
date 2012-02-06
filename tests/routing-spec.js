describe('routes', function () {
    beforeEach(function () {
        this.routing = require('../lib/routing');
        
        this.fakeServer = {
            viewEngine: null,
            viewFolder: null,
            routes: {},
            use: function () {
                
            },
            set: function () {
                if (arguments[0].match(/view engine/)) {
                    this.viewEngine = arguments[1];
                } else if (arguments[0].match(/views/)) {
                    this.viewFolder = arguments[1];
                }
            },
            get: function () {
                this.routes[arguments[0]] = arguments[1];
            }
        };
        
        this.fakeExpress = {
            staticCount: 0,
            static: function () {
                this.staticCount++;
            }
        };
    });
    
    it('should have a jade view engine', function () {
        this.routing.boot(this.fakeServer, this.fakeExpress);
        
        expect(this.fakeServer.viewEngine).toEqual('jade');
    });
    
    it('should have a view folder', function () {
        this.routing.boot(this.fakeServer, this.fakeExpress);
        
        expect(this.fakeServer.viewFolder).not.toEqual('');
    });
    
    it('should have three static path registrations', function () {
        this.routing.boot(this.fakeServer, this.fakeExpress);
        
        expect(this.fakeExpress.staticCount).toEqual(3);
    });
    
    it('should have a route of /', function () {
        this.routing.boot(this.fakeServer, this.fakeExpress);
        
        expect(this.fakeServer.routes['/']).toBeDefined();
    });
    
    it('should render index when requesting "/"', function () {
        this.routing.boot(this.fakeServer, this.fakeExpress);
        
        this.fakeServer.routes['/'](undefined, {
            render: function (name) {
                expect(name).toEqual('index');
            }
        });
    });
});