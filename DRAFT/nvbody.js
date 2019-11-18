const zlib = require('zlib');
const compress = require('compress');


function contentDcd(contentEncoding,dataBuf) {
    /*
        contentEncoding可以是多个 要考虑 倒序依次解压缩
        "gzip","compress","deflate","br","identity"
    */
    contentEncoding = contentEncoding.toLowerCase()
    let content = ""
    if(contentEncoding === "gzip") {
        content = zlib.gunzipSync(dataBuf)
    } else if(contentEncoding === "compress") {
        content = dataBuf.toString()
        content = compress.decode(content)
    } else if(contentEncoding === "deflate") {
        content = zlib.inflateSync(dataBuf)
    } else if(contentEncoding === "br") {
        content = zlib.brotliDecompressSync(dataBuf)
    } else {
        content = content
    }
    content = content.toString()
    return(content)
}


function contentEncd(contentEncoding,s) {
    /*
        contentEncoding可以是多个 要考虑 依次压缩
        "gzip","compress","deflate","br","identity"
        const char *data = "data to send";
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
        Set CURLOPT_ACCEPT_ENCODING to NULL to explicitly disable it, 
        which makes libcurl not send an Accept-Encoding: header and 
        not decompress received contents automatically.
        enable all supported built-in compressions
        curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "");
        CURLOPT_ACCEPT_ENCODING - enables automatic decompression of HTTP downloads 
    */
    contentEncoding = contentEncoding.toLowerCase()
    let content = ""
    if(contentEncoding === "gzip") {
        content = zlib.gzipSync(s)
    } else if(contentEncoding === "compress") {
        content = compress.encode(s)
    } else if(contentEncoding === "deflate") {
        content = zlib.deflateSync(s)
    } else if(contentEncoding === "br") {
        content = zlib.brotliCompressSync(s)
    } else {
        content = content
    }
    content = content.toString()
    return(content)
}



//// req :  content-Type  ->  content-Encoding -> Transfer-Encoding
//// res :  Transfer-Decoding -> content-Decoding -> content-Type 


