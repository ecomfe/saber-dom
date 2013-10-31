/**
 * css test case
 * 
 * @author firede[firede@firede.us]
 */

define(function() {
    var dom = require( 'saber-dom' );

    describe( 'CSS', function() {
        describe( 'css classes', function() {
            var el = dom.g('test-container');

            it( '.addClass( element, className )', function() {
                dom.addClass( el, 'container' );
                expect( el.className ).toBe( 'container' );
            });

            it( '.hasClass( element, className )', function() {
                var res = dom.hasClass( el, 'container' );
                expect( res ).toBe( true );

                res = dom.hasClass( el, 'unknown' );
                expect( res ).toBe( false );
            });

            it( '.removeClass( element, className )', function() {
                dom.removeClass( el, 'container' );
                expect( el.className ).toBe( '' );
            });
        });

        describe( 'css styles', function() {
            it( '.setStyle( element, property, value )', function() {
                var el = dom.query( '.list .active' );
                dom.setStyle( el, 'color', 'green' );
                dom.setStyle( el, 'font-size', '18px' );

                expect( el.style.color ).toBe( 'green' );
                expect( el.style.fontSize ).toBe( '18px' );

                dom.setStyle( el, 'transition', 'none 0s' );
                var prefixes = ['t', 'webkitT', 'msT', 'oT'];
                var pass = 0;
                prefixes.forEach( function ( prefix ) {
                    if ( el.style[prefix + 'ransition'] == 'none 0s' ) {
                        pass++;
                    }
                });
                expect( pass >= 1 ).toBeTruthy();
            });

            it( '.getStyle( element, property )', function() {
                var el = dom.query( '.list li:nth-child(2)');

                expect( dom.getStyle( el, 'font-size' ) ).toBe( '11px' );
                expect( dom.getStyle( el, 'color' ) )
                    .toBe( 'rgb(255, 255, 170)' );

                dom.setStyle( el, 'transition', 'none 0s' );
                expect( dom.getStyle( el, 'transition' ) ).toBe( 'none 0s' );
            });
        });

        describe( 'css shortcut', function() {
            var el = dom.g( 'li-item' );

            it( '.hide()', function() {
                dom.hide( el );
                expect( el.style.display ).toBe( 'none' );
            });

            it( '.show()', function() {
                dom.show( el );
                expect( el.style.display ).toBe( '' );
            });
        });
    });

});
