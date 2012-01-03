/*
 * client.js: Compute client for Rackspace Cloudservers
 *
 * (C) 2011 Nodejitsu Inc.
 *
 */

var utile = require('utile'),
    base = require('../../Client');

var Client = exports.Client = function (options) {
  base.Client.call(this, options);

  utile.mixin(this, require('./flavors'));
  utile.mixin(this, require('./images'));
  utile.mixin(this, require('./servers'));
};

utile.inherits(Client, base.Client);

Client.prototype.url = function () {
  var args = args = Array.prototype.slice.call(arguments);
  return [this.config.serverUrl].concat(args).join('/');
};