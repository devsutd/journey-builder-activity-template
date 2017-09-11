"use strict";

var jwtLib = require('jwt-simple');
var packageJson = require('../package.json');

var VERSION = packageJson.version;

var JwtDecoder = module.exports = function JwtDecoder( options ) {
    this.options = options || {};
};

JwtDecoder.VERSION = VERSION;

JwtDecoder.prototype.decode = function( req ) {
    var jwtObj = {};
    var jwt = req.body.jwt;

    try {
        var decoded         = jwtLib.decode( jwt, this.options.appSignature );
        jwtObj.full         = decoded;
        jwtObj.token        = decoded.request.user.oauthToken;
        jwtObj.refreshToken = decoded.request.user.refreshToken;
        jwtObj.casToken     = decoded.request.user.internalOauthToken;
        jwtObj.culture      = decoded.request.user.culture;
        jwtObj.timezone     = decoded.request.user.timezone; //OBJECT
        jwtObj.expires      = ( decoded.request.user.expiresIn * 1000 ) - 60000;
    } catch( ex ) {
        console.error( 'Decoding failed for jwt: ' + jwt );
        console.error( 'Exception: ' + ex );
    }

    return jwtObj;
};