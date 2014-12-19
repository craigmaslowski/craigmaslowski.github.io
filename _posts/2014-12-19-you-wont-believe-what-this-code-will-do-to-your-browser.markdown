---
layout: post
title: "You won't believe what this code will do to your browser!"
date: 2014-12-19 00:00:00
excerpt: "There's not much worse than click bait sites and Upworthy is one worst offenders. This chrome extension automatically redirects to the YouTube video page when you open a page on Upworthy.com."
category: "programming"
tags: [javascript, chromeextension]
---

There's not much worse than click bait sites that post other people's Youtube videos adding an eye 
catching title but little else extra of value. Upworthy is one worst offenders. After getting tired 
of constantly clicking the links to go directly to YouTube videos from Upworthy, I decided to write 
a Chrome extenstion to automatically redirect the browser for me. I call it Skip Worthy.

First off is the mainfest file.

{% highlight javascript %}
{
  "name": "Skip Upworthy",
  "version": "0.0.1",
  "manifest_version": 2,
  "description": "Skip Upworthy",
  "homepage_url": "http://google.com",
  "default_locale": "en",
  "content_scripts": [
    {
      "matches": [
        "*://www.upworthy.com/*", 
        "*://upworthy.com/*"
      ],
      "js": [ "buhbye.js" ]
    }
  ],
  "permissions": ["activeTab"]
}
{% endhighlight %}

The manifest is fairly standard except that it's configured so the extension only runs on Upworthy.

The code for the full extension itself is pretty small.

{% highlight javascript %}
var iframes = document.getElementsByTagName('iframe'),
    src,
    videoId;
 
for (var i = 0; i < iframes.length; i++) {
  src = iframes[i].src;
  if (/youtube.com\/embed\//.test(src)) {
    var videoId = src.substring(src.indexOf('embed/')+6, src.indexOf('?'));
    window.location.href = 'http://youtube.com/watch?v=' + videoId;
  }
}
{% endhighlight %}

Embedded Youtube videos are placed inside of iframes. First we grab all of the iframes, and define a few variables.

{% highlight javascript %}
var iframes = document.getElementsByTagName('iframe'),
    src,
    videoId;
{% endhighlight %}

Then we loop over each iframe on the page. If the iframe's src contains the text 'embed/'  
the iframe contains an embedded Youtube video. In that case, we grab the video's id and 
perform the redirect.

{% highlight javascript %}
for (var i = 0; i < iframes.length; i++) {
  src = iframes[i].src;
  if (/\/embed\//.test(src)) {
    videoId = src.substring(src.indexOf('embed/')+6, src.indexOf('?'));
    window.location.href = 'http://youtube.com/watch?v=' + videoId;
  }
}
{% endhighlight %}

And Upworthy is a thing of the past. With more and more sites like Upworthy hitting the web,  
this proof of concept could conceivably be extended to have a configurable set of sites to 
redirect from. 

P.S. Apologies for the click bait title of this post. I couldn't help myself.