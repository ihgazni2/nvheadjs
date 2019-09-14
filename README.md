# nvhead
>__nvhead__

# Install

>__npm install nvhead__


## [Usage In Jsdoc](https://navegador5.github.io/nvheadjs/global.html#)

    refer to https://navegador5.github.io/nvheadjs/global.html

**[USAGE DOCS](https://navegador5.github.io/nvheadjs/global.html#)**



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
    
    -reqonly     //only request header
    -resonly     //only response header
    -mdnonly     //only mdn header 


### nvhead \<mode\> \<word-to-search\>

    # nvhead -reqonly coo
    [ { cookie: 'Cookie' }, { cookie2: 'Cookie2' } ]

    # nvhead -resonly coo
    [ { setCookie: 'Set-Cookie' }, { setCookie2: 'Set-Cookie2' } ]


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
<<<<<<< HEAD
=======
[elistjs](https://github.com/ihgazni2/elistjs)

>>>>>>> 961d00a9424be616d6b8f69a380ed484f4db6390

[elistjs](https://github.com/ihgazni2/elistjs)
