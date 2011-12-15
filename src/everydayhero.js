/*!
  * Everyday Hero JavaScript Widget API Wrapper
  * https://github.com/everydayhero/everydayhero.js
  * Copyright © 2011 Everyday Hero Pty. Ltd.
  * MIT License
  */

(function(window) {
  var EverydayHero = function(resource, id, options) {
    this.resource = resource;
    this.id       = id;
    this.host     = options.host || 'api.everydayhero.com.au';
    
    this.topTen = function(query, callback) {
      this._request('/top_ten/' + query + '/:fn.json?callback=:fn', callback);      
    }

    this.total = function(callback) {
      this._request('/total/:fn.json?callback=:fn', callback);
    }

    this._request = function(path, callback) {
      var fn = 'everydayhero_' + Math.floor(Math.random()*1000001);    
      reqwest({
        url: this._url(path.replace(/:fn/g, fn)),
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback
      });
    }

    this._url = function(path) {
      return 'http://' + this.host + '/widget/' + this.resource + '/' + this.id + path;
    }
    
    return this;
  }
    
  window.EverydayHero = function() {
    return EverydayHero.apply(this, arguments);
  }
})(window);
