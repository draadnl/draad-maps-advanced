/**
 * Self-check for the Start location coordinate parser. Run it directly:
 *
 *     node tests/parse-coords-test.js
 */
const assert = require( 'node:assert' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const vm = require( 'node:vm' );

globalThis.document = { addEventListener() {} };
vm.runInThisContext( fs.readFileSync( path.join( __dirname, '../assets/js/admin.js' ), 'utf8' ) );

const parse = globalThis.draadMapsParseCoords;

assert.strictEqual( parse( '52.37403,4.88969' ), '52.37403,4.88969' );
assert.strictEqual( parse( '52.37403, 4.88969' ), '52.37403,4.88969' );
assert.strictEqual( parse( '52,5' ), '52.00000,5.00000' );

assert.strictEqual( parse( '50.6,3' ), '50.60000,3.00000', 'south-west corner' );
assert.strictEqual( parse( '53.8,7.3' ), '53.80000,7.30000', 'north-east corner' );
assert.strictEqual( parse( '50.59,5' ), false, 'south of the bounds' );
assert.strictEqual( parse( '53.81,5' ), false, 'north of the bounds' );
assert.strictEqual( parse( '52,2.99' ), false, 'west of the bounds' );
assert.strictEqual( parse( '52,7.31' ), false, 'east of the bounds' );
assert.strictEqual( parse( '48.85661,2.35222' ), false, 'outside the Netherlands' );
assert.strictEqual( parse( '4.88969,52.37403' ), false, 'swapped lat/lng' );
assert.strictEqual( parse( '52.37403,' ), false, 'unfinished' );
assert.strictEqual( parse( '5.2.3,4.8' ), false, 'malformed number' );

assert.strictEqual( parse( '2511' ), null, 'postcode digits stay a search' );
assert.strictEqual( parse( '2511 AB' ), null );
assert.strictEqual( parse( '12, Den Haag' ), null );
assert.strictEqual( parse( 'Spui 70' ), null );

console.log( 'parse-coords: all assertions passed' );
