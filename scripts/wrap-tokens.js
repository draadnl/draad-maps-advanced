#!/usr/bin/env node
/**
 * Wraps @gemeente-denhaag/design-tokens CSS in .wp-block-draad-map-advanced so tokens
 * are scoped to the block and don't pollute the global :root cascade.
 */

const fs = require( 'fs' );
const path = require( 'path' );

const src = path.resolve(
	__dirname,
	'../node_modules/@gemeente-denhaag/design-tokens/dist/index.css'
);
const dest = path.resolve( __dirname, '../assets/css/denhaag-tokens.css' );

const input = fs.readFileSync( src, 'utf8' );
const output = input.replace( /:root\s*\{/, '.wp-block-draad-map-advanced {' );

fs.mkdirSync( path.dirname( dest ), { recursive: true } );
fs.writeFileSync( dest, output, 'utf8' );

console.log( 'denhaag-tokens.css written' );
