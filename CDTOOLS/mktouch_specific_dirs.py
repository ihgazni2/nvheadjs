from xdict.jprint import pobj,pdir
from efdir import fs
import elist.elist as elel
import os

reqhds = fs.rjson("./CONSTS/http-headers-mdn-req.dtb.json")
reshds = fs.rjson("./CONSTS/http-headers-mdn-res.dtb.json")

reqdirs = elel.mapv(reqhds,lambda ele:ele['k'])
resdirs = elel.mapv(reshds,lambda ele:ele['k'])

dirs = reqdirs + resdirs
dirs = elel.uniqualize(dirs)
dirs = elel.mapv(dirs, lambda ele:"./SPECIFICS/"+ele+"/"+ele+".js")

def mktouch(p):
    dir = os.path.split(p)[0]
    fs.mkdirs(dir)
    fs.touch(p)

elel.for_each(dirs,mktouch)
