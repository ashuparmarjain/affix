# Affix.js

Affix.js is simple function written in Pure JS to allow an element to become fixed to an area on the page 

## How to use Affix.js
Affix.js doesnt depends on any library, it's written purely in JS

To fire the plugin on an element you want to Affix call Affix function and pass an object of

1.	element(required)			: 	element which has to be Affixed.

### Example
```
<script type="text/javascript" src="affix.js"></script>
<script type="text/javascript">

	Affix({element:"nav#menu"});
	Affix({element:"div#footer"});
</script>
```