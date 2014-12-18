---
layout: post
title: "Quick and Dirty Password Generator"
date: 2014-12-18 1:10:00
excerpt: "I needed something quick and dirty to generate random passwords, so I whipped up this little chunk of code."
---

I needed something quick and dirty to generate random passwords, so I whipped up this little chunk of code. 

{% highlight ruby %}
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

It generates a random string twelve characters in length by default. It also Accepts an optional command line parameter for specifying password length. 

Requires node.js or some other server side JavaScript engine.

### Installation
Put the file on your drive.

```chmod 755 pw```

### Examples

```
> ./pw

yJrenPAL7JfY

> ./pw 20

g3qwQULV20n4mQJI8lqV
```