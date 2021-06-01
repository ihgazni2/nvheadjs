# nvhead
>__nvhead__

>__cli tool to search  http header names

# Install

>__npm install nvhead__



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


----------------------------------------------

