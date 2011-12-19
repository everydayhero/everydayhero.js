# Everyday Hero JavaScript Public Widget API Wrapper

Quickly build giving gauges, leader boards and other widgets with minimal dependancies. See a full example using [jQuery](http://github.com/everydayhero/everydayhero.js/examples/jquery.html) and [reqwest](http://github.com/everydayhero/everydayhero.js/examples/reqwest.html).

## Installation

Include jQuery and everydayhero.js and create an empty script element.

``` html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="https://raw.github.com/everydayhero/everydayhero.js/master/src/everydayhero.js"></script>
<script type="text/javascript">
 // ...
</script>
```
Starting in the empty script element, instantiate an API object passing in 
the resource type and identifier. 

``` javascript
var api = new EverydayHero({resource: 'event', id: 'febfast2012'});
```

Get the total for an event. The function returns immediately and the callback 
is invoked when the response has been received from the Everyday Hero server.
Write the total to the browser's console.

``` javascript
api.total(function(total) {
  console.log(total);
});
```

Putting it all together you get something like this.

``` javascript
(function($) {
  $(document).ready(function() {
    var api = new EverydayHero({resource: 'event', id: 'febfast2012'});
    api.total(function(total) {
      console.log(total);
    });
  });
})(jQuery);
```

## Methods

### total

### topTen

## Copyright

Copyright © 2011 Everyday Hero Pty. Ltd. Released under the MIT license. See LICENSE.
