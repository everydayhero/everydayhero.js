/*!
  * Everyday Hero JavaScript Widget API Wrapper
  * https://github.com/everydayhero/everydayhero.js
  * Copyright © 2011 Everyday Hero Pty. Ltd.
  * MIT License
  */

(function($) {
    
  var XHR = function() {
    this._functionName = function() {
      return 'xhr_' + Math.floor(Math.random()*1000001);
    }
    
    this._jquery = function(url, callback) {
      var name = this._functionName();
      jQuery.ajax({
        url: url.replace(/:function_name/g, name),
        dataType: 'jsonp',
        jsonp: false,
        jsonpCallback: name,
        success: callback
      });
    }    
    
    this._reqwest = function(url, callback) {
      var name = this._functionName();
      reqwest({
        url: url.replace(/:function_name/g, name),
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback
      });
    }
    
    if (typeof jQuery == 'function') {
      this.request = this._jquery;
    } else if (typeof reqwest == 'function') {
      this.request = this._reqwest;
    }
    
    return this;
  }
  
  var API = function(settings) {
    this.host     = settings.host || 'api.everydayhero.com.au';
    this.id       = settings.id;
    this.resource = settings.resource;
    this._xhr     = new XHR();
    
    this.topTen = function(query, callback) {
      this._xhr.request(
        this._url('/top_ten/' + query + '/:function_name.json?callback=:function_name'), 
        callback
      );
    }

    this.total = function(callback) {
      this._xhr.request(
        this._url('/total/:function_name.json?callback=:function_name'), 
        callback
      );
    }

    this._url = function(path) {
      return 'http://' + this.host + '/widget/' + this.resource + '/' + this.id + path;
    }
    
    return this;
  }
    
  $.EverydayHero = function() {
    return API.apply(this, arguments);
  }
})(window);
