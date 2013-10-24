/**
 * manipulation test case
 * 
 * @author firede[firede@firede.us]
 */

define(function() {
    var dom = require( 'saber-dom' );

    describe( 'Selector', function() {
        describe( '.children( element )', function() {
            it( 'should work', function() {
                var ct = dom.query( '.list' );
                var ctChilds = dom.children( ct );
                var items = dom.queryAll( '.list li' );

                expect( ctChilds ).toEqual( items );
            });
        });
    });

});
