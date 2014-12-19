---
layout: post
title: "Quick and Dirty Password Generator"
date: 2014-12-18 13:10:00
excerpt: "I needed something quick and dirty to generate random passwords, so I whipped up this little chunk of code."
category: "programming"
tags: [cli, javascript, nodejs]
---

I needed something quick and dirty to generate random passwords, so I whipped up this little chunk of code. 

{% highlight javascript %}
#!/usr/bin/env node
 
var chars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz',
    length = !isNaN(process.argv[2]) ? process.argv[2] : 12;  
    string = '';
  
for (var i = 0; i < length; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  string += chars.substring(randomNumber, randomNumber + 1);
}
 
console.log(string);
{% endhighlight %}

It generates a random twelve character string by default. It also accepts an optional command line parameter for customizing the generated password's length. 

Requires node.js.

### Installation
Put the ```pw``` file on your drive and change permissions.

```chmod 755 pw```

### Examples

<pre>
  > ./pw

  yJrenPAL7JfY

  > ./pw 20

  g3qwQULV20n4mQJI8lqV
</pre>