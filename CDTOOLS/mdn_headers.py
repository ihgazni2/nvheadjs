

import requests as req

from lxml.etree import HTML as LXHTML
from lxml.etree import XML as LXML
from xdict.jprint import pdir,pobj
from nvhtml import txt
from nvhtml import lvsrch
from nvhtml import fs
from nvhtml import engine
from nvhtml import utils
import lxml.sax
import argparse
from efdir import fs
import elist.elist as elel
import estring.estring as eses
import edict.edict as eded
import spaint.spaint as spaint
from xml.sax.handler import ContentHandler

import copy
import re
import xxurl.xxurl as xuxu


from efdir import fs
import ltdict.ltdict as ltlt
import estring.estring as eses
import elist.elist as elel
import edict.edict as eded



from efdir import fs


def new_entry(): 
    d = {
        "k":None,
        "v":None,
        "type":[],
        "modifyForbidden":None,
        "corsSafeReq":None,
        "corsSafeRes":None,
        "syntax":[],
        "directives":[],
        "examples":[],
        "specs":[]
    }
    return(d)





def get_headtype(ths):
    rslt = []
    for th in ths:
        if((th.text != None) and ("type" in th.text.lower())):
            td = engine.rsib(th)
            a = engine.child(td,0)
            href = a.attrib['href'].lower()
            if("res" in href):
                rslt.append("res")
            elif("req" in href):
                rslt.append("req")
            elif("entity" in href):
                #both req and res
                rslt.append("entity")
            elif("general" in href):
                #both req and res
                rslt.append("general")
            else:
                pass
        else:
            pass
    return((rslt or None))

def get_forbidden(ths):
    for th in ths:
        if(th.text == None):
            a = engine.child(th,0)
            href = a.attrib['href'].lower()
            if("forbidden" in href):
                td = engine.rsib(th)
                if('yes' in td.text.lower() ):
                    return(True)
                else:
                    return(False)
            else:
                pass
        else:
            pass
    return(None)

def get_cors_req(ths):
    for th in ths:
        if(th.text == None):
            a = engine.child(th,0)
            href = a.attrib['href'].lower()
            if("cors-safelisted_request_header" in href.lower()):
                td = engine.rsib(th)
                if('yes' in td.text.lower()):
                    return(True)
                else:
                    return(False)
            else:
                pass
        else:
            pass
    return(None)

def get_cors_res(ths):
    for th in ths:
        if(th.text == None):
            a = engine.child(th,0)
            href = a.attrib['href'].lower()
            if("cors-safelisted_response_header" in href.lower()):
                td = engine.rsib(th)
                if('yes' in td.text.lower()):
                    return(True)
                else:
                    return(False)
            else:
                pass
        else:
            pass
    return(None)

def get_syntax(root):
    h2s0 = engine.xpath(root,"//h2[@id='Syntax']")
    h2s1 = engine.xpath(root,"//h2[@id='syntax']")
    h2s =  h2s0+h2s1
    try:
        h2 = h2s[0]
    except:
        return([])
    else:
        pre = engine.rsib(h2)
        arr = txt.iter_text(pre).split("\n")
        arr = elel.mapv(arr,lambda ele:ele.strip(" "))
        arr = elel.filter(arr,lambda ele:(ele[:2]!="//"))
        arr = elel.filter(arr,lambda ele:(ele!=""))
        return(arr)

def get_directives(root):
    h2s0 = engine.xpath(root,"//h2[@id='Directives']")
    h2s1 = engine.xpath(root,"//h2[@id='directives']")
    h2s =  h2s0+h2s1
    try:
        h2 = h2s[0]
    except:
        return([])
    else:
        dl = engine.rsib(h2)
        dts = engine.xpath(dl,"dt/code")
        arr = elel.mapv(dts,lambda ele:txt.iter_text(ele))
        arr = elel.filter(arr,lambda ele:(ele[:2]!="//"))
        arr = elel.filter(arr,lambda ele:(ele!=""))
        return(arr)

def get_examples(root):
    h2s0 = engine.xpath(root,"//h2[@id='Examples']")
    h2s1 = engine.xpath(root,"//h2[@id='examples']")
    h2s =  h2s0+h2s1
    try:
        h2 = h2s[0]
    except:
        return([])
    else:
        sibs = engine.following_sibs(h2)
        arr = elel.filter(sibs,lambda ele:ele.tag=="pre")
        arr = elel.mapv(arr,lambda ele:txt.iter_text(ele))
        arr = elel.mapv(arr,lambda ele:ele.strip(" "))
        arr = elel.filter(arr,lambda ele:(ele[:2]!="//"))
        arr = elel.filter(arr,lambda ele:(ele!=""))
        return(arr)

def get_specs(root):
    h2s0 = engine.xpath(root,"//h2[@id='Specifications']")
    h2s1 = engine.xpath(root,"//h2[@id='specifications']")
    h2s =  h2s0+h2s1
    try:
        h2 = h2s[0]
    except:
        return([])
    else:
        tbl = engine.rsib(h2)
        arr = engine.xpath(tbl,"tbody/tr/td/a")
        arr = elel.mapv(arr,lambda ele:ele.attrib['href'])
        arr = elel.mapv(arr,lambda ele:ele.strip(" "))
        arr = elel.filter(arr,lambda ele:(ele[:2]!="//"))
        arr = elel.filter(arr,lambda ele:(ele!=""))
        return(arr)


#url0 = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept"
#url1 = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires"


def get_hdinfo(i,urls,kl,vl):
    url = urls[i]
    k = kl[i]
    v = vl[i]
    info = new_entry()
    info['k'] = k
    info['v'] = v
    try:
        res = req.get(url)
        if(res.status_code == 200):
            html_txt = res.text
            root = LXHTML(html_txt)
            ths = engine.xpath(root,"//table[@class='properties']/tbody/tr/th")
            info['type'] = get_headtype(ths)
            info['modifyForbidden'] = get_forbidden(ths)
            info['corsSafeReq'] = get_cors_req(ths)
            info['corsSafeRes'] = get_cors_res(ths)
            info['syntax'] = get_syntax(root)
            info['directives'] = get_directives(root)
            info['examples'] = get_examples(root)
            info['specs'] = get_specs(root)
            fs.wjson("./HEADERS/"+k+".json",info)
            INFOS.append(info)
        else:
            print("! res.status_code: ",res.status_code)
            ERRORS.append((i,v,"code"))
    except Exception as e:
        ERRORS.append((i,v,e))
    else:
        pass
    return(info)

mdn = ['Accept', 'Accept-Charset', 'Accept-Encoding', 'Accept-Language', 'Accept-Patch', 'Accept-Ranges', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Origin', 'Access-Control-Expose-Headers', 'Access-Control-Max-Age', 'Access-Control-Request-Headers', 'Access-Control-Request-Method', 'Age', 'Allow', 'Alt-Svc', 'Authorization', 'Cache-Control', 'Clear-Site-Data', 'Connection', 'Content-Disposition', 'Content-Encoding', 'Content-Language', 'Content-Length', 'Content-Location', 'Content-Range', 'Content-Security-Policy', 'Content-Security-Policy-Report-Only', 'Content-Type', 'Cookie', 'Cookie2', 'Cross-Origin-Resource-Policy', 'DNT', 'Date', 'Digest', 'ETag', 'Early-Data', 'Expect', 'Expect-CT', 'Expires', 'Feature-Policy', 'Forwarded', 'From', 'Host', 'If-Match', 'If-Modified-Since', 'If-None-Match', 'If-Range', 'If-Unmodified-Since', 'Index', 'Keep-Alive', 'Large-Allocation', 'Last-Modified', 'Link', 'Location', 'Origin', 'Pragma', 'Proxy-Authenticate', 'Proxy-Authorization', 'Public-Key-Pins', 'Public-Key-Pins-Report-Only', 'Range', 'Referer', 'Referrer-Policy', 'Retry-After', 'Save-Data', 'Sec-WebSocket-Accept', 'Server', 'Server-Timing', 'Set-Cookie', 'Set-Cookie2', 'SourceMap', 'Strict-Transport-Security', 'TE', 'Timing-Allow-Origin', 'Tk', 'Trailer', 'Transfer-Encoding', 'Upgrade-Insecure-Requests', 'User-Agent', 'Vary', 'Via', 'WWW-Authenticate', 'Want-Digest', 'Warning', 'X-Content-Type-Options', 'X-DNS-Prefetch-Control', 'X-Forwarded-For', 'X-Forwarded-Host', 'X-Forwarded-Proto', 'X-Frame-Options', 'X-XSS-Protection']
BASE_URL = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/"
vl = mdn
kl = elel.mapv(vl,eses.dash2camel)
URLS = elel.mapv(vl,lambda ele:BASE_URL+ele)
ERRORS =[]
INFOS = []

for i in range(0,kl.__len__()):
    get_hdinfo(i,URLS,kl,vl)

nvl = elel.mapv(ERRORS,lambda ele:ele[1])
nkl = elel.mapv(nvl,eses.dash2camel)
nurls = elel.mapv(nvl,lambda ele:BASE_URL+ele)

# k = nkl[0]
# v = nvl[0]
# url = nurls[0]

ERRORS =[]
INFOS = []

for i in range(0,nurls.__len__()):
    get_hdinfo(i,nurls,nkl,nvl)


##########




