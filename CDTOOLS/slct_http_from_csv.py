from efdir import fs
import ltdict.ltdict as ltlt
import estring.estring as eses
import elist.elist as elel
import edict.edict as eded


def get_vl(fn):
    perm = fs.rjson(fn)
    perm = ltlt.json2ltdict(perm)
    perm = ltlt.to_list(perm)
    fil = filter(lambda ele:(ele['Protocol'] == 'http'),perm)
    perm = list(fil)
    vl = list(map(lambda ele:ele['Header Field Name'],perm))
    return(vl)

perm_fn = "perm-headers.dtb.json"
vl_perm = get_vl(perm_fn)
prov_fn = "prov-headers.dtb.json"
vl_prov = get_vl(prov_fn)
vl = vl_prov + vl_perm
kl = elel.mapv(vl,eses.dash2lod)
kl = elel.mapv(kl,str.lower)
kl = elel.mapv(kl,eses.lod2camel)
d = eded.kvlist2d(kl,vl)

fs.wjson("http-headers.jsd.json",d)
