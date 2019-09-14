

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







def fill_hds():
    hds = fs.rjson("http-headers.jsd.json")
    mkl,mvl = eded.d2kvlist(hds)
    fns = fs.walkf("./MDN")
    mdn_hds = elel.mapv(fns,lambda ele:fs.rjson(ele))
    vl = elel.mapv(mdn_hds, lambda ele:ele['v'])
    kl = elel.mapv(mdn_hds, lambda ele:ele['k'])
    dtb = []
    for k in hds:
        if(k in kl):
            index = kl.index(k)
            entry = mdn_hds[index]
            dtb.append(entry)
        else:
            v = hds[k]
            d = new_entry()
            d['k'] = k
            d['v'] = v
            dtb.append(d)
    return(dtb)



dtb = fill_hds()
fs.wjson("http-headers.dtb.json",dtb)

