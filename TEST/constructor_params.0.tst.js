class tst2 extends Tlist {
    constructor(...items) {
        if(items.length === 0) {
            items = items || []
        } else if(items.length === 1) {
            let item = items[0]
            items = constructor_(item)
        } else {
        }
        super(...items)
    }
}


> x0= new tst2()
tst2 []
>
> x1= new tst2(1,2,3,4)
tst2 [ [ 1, 2 ], [ 3, 4 ] ]
>
> x2= new tst2([1,2],['a','b'])
tst2 [ [ 1, 2 ], [ 'a', 'b' ] ]
>


s=`Connection: keep-alive
Content-Length: 995
Sec-Fetch-Mode: cors
Origin: https://www.youtube.com
X-YouTube-Page-Label: youtube.ytfe.desktop_20190912_4_RC2
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
X-YouTube-Variants-Checksum: a72098c10e33f4e00e4e30fd45648f75
Content-Type: application/json
X-YouTube-Page-CL: 268820074
X-YouTube-Utc-Offset: 480
X-YouTube-Client-Name: 1
X-YouTube-Client-Version: 2.20190913.04.02
X-Goog-Visitor-Id: Cgt1Q3lyRG44UGRoTSiSiffrBQ%3D%3D
X-YouTube-Ad-Signals: dt=1568521512706&flash=0&frm&u_tz=480&u_his=12&u_java&u_h=1080&u_w=1920&u_ah=1040&u_aw=1920&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=1211&biw=2379&brdim=1366%2C0%2C1366%2C0%2C1920%2C0%2C1920%2C1040%2C2400%2C1211&vis=2&wgl=true&ca_type=image&bid=ANyPxKpjsg8bBDvUS0FYfOy0KYzd14rlvpjxFEgXNAv1vFAEKLXjOjW9MO2O1AUY0d6BJ51aLzYhsmcy5aVlt_4ocsjUUVVaMQ
Accept: */*
X-Client-Data: CKy1yQEIhLbJAQiltskBCMG2yQEIqZ3KAQioo8oBCOKoygEIuKrKAQiXrcoBCM2tygEIy67KAQjKr8oBCIe0ygE=
Sec-Fetch-Site: same-origin
Referer: https://www.youtube.com/watch?v=81ulM0cvTKw
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7
Cookie: VISITOR_INFO1_LIVE=uCyrDn8PdhM; PREF=f1=10000000; YSC=WKeO977FCcI; GPS=1; dkv=b8e8ab86686889f4684bfc6d108ea4aee3QEAAAAdGxpcGmKxH1dMA==`


sl = [ 'Connection: keep-alive',
  'Content-Length: 995',
  'Sec-Fetch-Mode: cors',
  'Origin: https://www.youtube.com',
  'X-YouTube-Page-Label: youtube.ytfe.desktop_20190912_4_RC2',
  'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
  'X-YouTube-Variants-Checksum: a72098c10e33f4e00e4e30fd45648f75',
  'Content-Type: application/json',
  'X-YouTube-Page-CL: 268820074',
  'X-YouTube-Utc-Offset: 480',
  'X-YouTube-Client-Name: 1',
  'X-YouTube-Client-Version: 2.20190913.04.02',
  'X-Goog-Visitor-Id: Cgt1Q3lyRG44UGRoTSiSiffrBQ%3D%3D',
  'X-YouTube-Ad-Signals: dt=1568521512706&flash=0&frm&u_tz=480&u_his=12&u_java&u_h=1080&u_w=1920&u_ah=1040&u_aw=1920&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=1211&biw=2379&brdim=1366%2C0%2C1366%2C0%2C1920%2C0%2C1920%2C1040%2C2400%2C1211&vis=2&wgl=true&ca_type=image&bid=ANyPxKpjsg8bBDvUS0FYfOy0KYzd14rlvpjxFEgXNAv1vFAEKLXjOjW9MO2O1AUY0d6BJ51aLzYhsmcy5aVlt_4ocsjUUVVaMQ',
  'Accept: */*',
  'X-Client-Data: CKy1yQEIhLbJAQiltskBCMG2yQEIqZ3KAQioo8oBCOKoygEIuKrKAQiXrcoBCM2tygEIy67KAQjKr8oBCIe0ygE=',
  'Sec-Fetch-Site: same-origin',
  'Referer: https://www.youtube.com/watch?v=81ulM0cvTKw',
  'Accept-Encoding: gzip, deflate, br',
  'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7',
  'Cookie: VISITOR_INFO1_LIVE=uCyrDn8PdhM; PREF=f1=10000000; YSC=WKeO977FCcI; GPS=1; dkv=b8e8ab86686889f4684bfc6d108ea4aee3QEAAAAdGxpcGmKxH1dMA==' ]

> x3 = new tst2(s)
tst2 [
  [ 'Connection', 'keep-alive' ],
  [ 'Content-Length', '995' ],
  [ 'Sec-Fetch-Mode', 'cors' ],
  [ 'Origin', 'https://www.youtube.com' ],
  [ 'X-YouTube-Page-Label',
    'youtube.ytfe.desktop_20190912_4_RC2' ],
  [ 'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36' ],
  [ 'X-YouTube-Variants-Checksum',
    'a72098c10e33f4e00e4e30fd45648f75' ],
  [ 'Content-Type', 'application/json' ],
  [ 'X-YouTube-Page-CL', '268820074' ],
  [ 'X-YouTube-Utc-Offset', '480' ],
  [ 'X-YouTube-Client-Name', '1' ],
  [ 'X-YouTube-Client-Version', '2.20190913.04.02' ],
  [ 'X-Goog-Visitor-Id', 'Cgt1Q3lyRG44UGRoTSiSiffrBQ%3D%3D' ],
  [ 'X-YouTube-Ad-Signals',
    'dt=1568521512706&flash=0&frm&u_tz=480&u_his=12&u_java&u_h=1080&u_w=1920&u_ah=1040&u_aw=1920&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=1211&biw=2379&brdim=1366%2C0%2C1366%2C0%2C1920%2C0%2C1920%2C1040%2C2400%2C1211&vis=2&wgl=true&ca_type=image&bid=ANyPxKpjsg8bBDvUS0FYfOy0KYzd14rlvpjxFEgXNAv1vFAEKLXjOjW9MO2O1AUY0d6BJ51aLzYhsmcy5aVlt_4ocsjUUVVaMQ' ],
  [ 'Accept', '*/*' ],
  [ 'X-Client-Data',
    'CKy1yQEIhLbJAQiltskBCMG2yQEIqZ3KAQioo8oBCOKoygEIuKrKAQiXrcoBCM2tygEIy67KAQjKr8oBCIe0ygE=' ],
  [ 'Sec-Fetch-Site', 'same-origin' ],
  [ 'Referer', 'https://www.youtube.com/watch?v=81ulM0cvTKw' ],
  [ 'Accept-Encoding', 'gzip, deflate, br' ],
  [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
  [ 'Cookie',
    'VISITOR_INFO1_LIVE=uCyrDn8PdhM; PREF=f1=10000000; YSC=WKeO977FCcI; GPS=1; dkv=b8e8ab86686889f4684bfc6d108ea4aee3QEAAAAdGxpcGmKxH1dMA==' ] ]
>
> x3 = new tst2(sl)
tst2 [
  [ 'Connection', 'keep-alive' ],
  [ 'Content-Length', '995' ],
  [ 'Sec-Fetch-Mode', 'cors' ],
  [ 'Origin', 'https://www.youtube.com' ],
  [ 'X-YouTube-Page-Label',
    'youtube.ytfe.desktop_20190912_4_RC2' ],
  [ 'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36' ],
  [ 'X-YouTube-Variants-Checksum',
    'a72098c10e33f4e00e4e30fd45648f75' ],
  [ 'Content-Type', 'application/json' ],
  [ 'X-YouTube-Page-CL', '268820074' ],
  [ 'X-YouTube-Utc-Offset', '480' ],
  [ 'X-YouTube-Client-Name', '1' ],
  [ 'X-YouTube-Client-Version', '2.20190913.04.02' ],
  [ 'X-Goog-Visitor-Id', 'Cgt1Q3lyRG44UGRoTSiSiffrBQ%3D%3D' ],
  [ 'X-YouTube-Ad-Signals',
    'dt=1568521512706&flash=0&frm&u_tz=480&u_his=12&u_java&u_h=1080&u_w=1920&u_ah=1040&u_aw=1920&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=1211&biw=2379&brdim=1366%2C0%2C1366%2C0%2C1920%2C0%2C1920%2C1040%2C2400%2C1211&vis=2&wgl=true&ca_type=image&bid=ANyPxKpjsg8bBDvUS0FYfOy0KYzd14rlvpjxFEgXNAv1vFAEKLXjOjW9MO2O1AUY0d6BJ51aLzYhsmcy5aVlt_4ocsjUUVVaMQ' ],
  [ 'Accept', '*/*' ],
  [ 'X-Client-Data',
    'CKy1yQEIhLbJAQiltskBCMG2yQEIqZ3KAQioo8oBCOKoygEIuKrKAQiXrcoBCM2tygEIy67KAQjKr8oBCIe0ygE=' ],
  [ 'Sec-Fetch-Site', 'same-origin' ],
  [ 'Referer', 'https://www.youtube.com/watch?v=81ulM0cvTKw' ],
  [ 'Accept-Encoding', 'gzip, deflate, br' ],
  [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
  [ 'Cookie',
    'VISITOR_INFO1_LIVE=uCyrDn8PdhM; PREF=f1=10000000; YSC=WKeO977FCcI; GPS=1; dkv=b8e8ab86686889f4684bfc6d108ea4aee3QEAAAAdGxpcGmKxH1dMA==' ] ]


