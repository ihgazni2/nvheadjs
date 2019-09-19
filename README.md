# nvhead
>__nvhead__

# Install

>__npm install nvhead__


## [Usage In Jsdoc](https://navegador5.github.io/nvheadjs/global.html#)

    refer to https://navegador5.github.io/nvheadjs/global.html

**[USAGE DOCS](https://navegador5.github.io/nvheadjs/global.html#)**


## FILL HEAD WITH STRING
------------------------

    var nvhead = require("nvhead").nvhead.Head
    var hd = nvhead.getInstance()
    hd = hd.append("Accept-Encoding","deflate, gzip;q=1.0, *;q=0.5")
    hd = hd.prepend("Accept","text/html")
    hd = hd.insert("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7",1)
    hd = hd.append("Accept","application/xml;q=0.9")
    hd = hd.append("Accept","text/html;q=0.8")
    hd.first("Accept")
    hd.last("Accept")
    hd.which("Accept",1)
    hd.all("Accept")
    //
    > hd
    Head [
      [ 'Accept', 'text/html' ],
      [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
      [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
      [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
      [ 'Accept', '' ],
      [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
      [ 'Accept', 'application/xml;q=0.9' ],
      [ 'Accept', 'text/html;q=0.8' ] ]
    >
    //
    hd = hd.setfirst("Accept","application/xml")
    hd = hd.setlast("Accept","application/xml")
    hd = hd.setwhich("Accept","text/plain",1)
    hd = hd.setall("Accept","text/plain")
    //
    hd = hd.rmfirst("Accept")
    hd = hd.rmwhich("Accept",1)
    hd = hd.rmlast("Accept")
    hd = hd.rmall("Accept")
    //
    hd = hd.rmforce('Accept')
    //
    hd.slist()
    console.log(hd.hdstr())



## CLI SEARCH
-------------

    npm install nvhead -g

### nvhead \<word-to-search\>

    #nvhead accept
    [ { xDeviceAccept: 'X-Device-Accept' },
      { xDeviceAcceptCharset: 'X-Device-Accept-Charset' },
      { xDeviceAcceptEncoding: 'X-Device-Accept-Encoding' },
      { xDeviceAcceptLanguage: 'X-Device-Accept-Language' },
      { accept: 'Accept' },
      { acceptAdditions: 'Accept-Additions' },
      { acceptCharset: 'Accept-Charset' },
      { acceptDatetime: 'Accept-Datetime' },
      { acceptEncoding: 'Accept-Encoding' },
      { acceptFeatures: 'Accept-Features' },
      { acceptLanguage: 'Accept-Language' },
      { acceptPatch: 'Accept-Patch' },
      { acceptPost: 'Accept-Post' },
      { acceptRanges: 'Accept-Ranges' },
      { secWebsocketAccept: 'Sec-WebSocket-Accept' } ]

    # nvhead coo
    [ { cookie: 'Cookie' },
      { cookie2: 'Cookie2' },
      { setCookie: 'Set-Cookie' },
      { setCookie2: 'Set-Cookie2' } ]


### nvhead -lmode
    
    #nvhead -lmode
   
    -exact       //exact match but ignore case
    -reqonly     //only request header
    -resonly     //only response header
    -iana        //iana header
    -mdnonly     //only mdn header ,default mode


### nvhead \<mode\> \<word-to-search\>

    # nvhead -reqonly coo
    [ { cookie: 'Cookie' }, { cookie2: 'Cookie2' } ]

    # nvhead -resonly coo
    [ { setCookie: 'Set-Cookie' }, { setCookie2: 'Set-Cookie2' } ]

    # nvhead -exact accept
    { k: 'accept',
      v: 'Accept',
      type: [ 'req' ],
      modifyForbidden: false,
      corsSafeReq: true,
      corsSafeRes: null,
      syntax:
       [ 'Accept: <MIME_type>/<MIME_subtype>',
         'Accept: <MIME_type>/*',
         'Accept: */*',
         'Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8' ],
      directives:
       [ '<MIME_type>/<MIME_subtype>', '<MIME_type>/*', '*/*', ';q=' ],
      examples:
       [ 'Accept: text/html\n\nAccept: image/*\n\n// General default\nAccept: */*\n\n// Default for navigation requests\nAccept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8\n' ],
      specs: [ 'https://tools.ietf.org/html/rfc7231#section-5.3.2' ] }


## Introduce
-------------
  
    refer to this python project,
    just migrate to javascript,
    convinient APIs for read/write http headers 

[nvheadjs](https://github.com/navegador5/nvheadjs)

[nvheadpy](https://github.com/ihgazni2/nvhead)

----------------------------------------------



## Dependancy
-------------

[tlistjs](https://github.com/navegador5/tlistjs)

[elistjs](https://github.com/ihgazni2/elistjs)
