(function(window) {
  var EverydayHero = function(resource, id, options) {
    this.resource = resource;
    this.id       = id;
    this.host     = options.host || 'api.everydayhero.com.au';
    return this;
  }
  
  EverydayHero.prototype.top_ten = function(query, callback) {
    this._request('/top_ten/' + query + '/:callback.json?callback=:callback', callback);      
  }
  
  EverydayHero.prototype.total = function(callback) {
    this._request('/total/:callback.json?callback=:callback', callback);
  }
  
  EverydayHero.prototype._request = function(path, callback) {
    var functionName = 'everydayhero_' + Math.floor(Math.random()*1000001);    
    reqwest({
      url: this._url(path.replace(/:callback/g, functionName)),
      type: 'jsonp',
      jsonpCallback: 'callback',
      success: callback
    });
  }
  
  EverydayHero.prototype._url = function(path) {
    return 'http://' + this.host + '/widget/' + this.resource + '/' + this.id + path;
  }
    
  window.EverydayHero = function(resource, id, options) {
    return new EverydayHero(resource, id, options);
  }
})(window);
