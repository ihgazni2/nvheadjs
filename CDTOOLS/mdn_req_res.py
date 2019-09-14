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




#####
fns = fs.walkf("./MDN")
mdn_hds = elel.mapv(fns,lambda ele:fs.rjson(ele))
vl = elel.mapv(mdn_hds, lambda ele:ele['v'])
kl = elel.mapv(mdn_hds, lambda ele:ele['k'])


#####req-headers

def is_req(d):
    type = d['type']
    if(type == None):
        return(True)
    else:
        cond0 = ("req" in type)
        cond1 = ("entity" in type)
        cond2 = ("general" in type)
        return(cond0 or cond1 or cond2)

reqs = elel.filter(mdn_hds,is_req)

fs.wjson("http-headers-mdn-req.dtb.json",reqs)


#####res-headers

def is_res(d):
    type = d['type']
    if(type == None):
        return(True)
    else:
        cond0 = ("res" in type)
        cond1 = ("entity" in type)
        cond2 = ("general" in type)
        return(cond0 or cond1 or cond2)

res = elel.filter(mdn_hds,is_res)
fs.wjson("http-headers-mdn-res.dtb.json",res)
####

# mdn_hds[13] Index
# mdn_hds[23] Alt-Svc
# mdn_hds[81] Link
# mdn_hds[88] Save-Data
