const urlRegionMap = {
  'annarbor.craigslist.org': 'aaa',
  'abbotsford.craigslist.ca': 'abb',
  'abilene.craigslist.org': 'abi',
  'albuquerque.craigslist.org': 'abq',
  'nesd.craigslist.org': 'abr',
  'albanyga.craigslist.org': 'aby',
  'aberdeen.craigslist.co.uk': 'abz',
  'acapulco.craigslist.com.mx': 'aca',
  'accra.craigslist.org': 'acc',
  'addisababa.craigslist.org': 'add',
  'adelaide.craigslist.com.au': 'adl',
  'cenla.craigslist.org': 'aex',
  'malaga.craigslist.es': 'agp',
  'athensga.craigslist.org': 'ahn',
  'auckland.craigslist.org': 'akl',
  'albany.craigslist.org': 'alb',
  'alicante.craigslist.es': 'alc',
  'allentown.craigslist.org': 'alt',
  'amarillo.craigslist.org': 'ama',
  'ahmedabad.craigslist.co.in': 'amd',
  'ames.craigslist.org': 'ame',
  'amsterdam.craigslist.org': 'ams',
  'gadsden.craigslist.org': 'anb',
  'anchorage.craigslist.org': 'anc',
  'annapolis.craigslist.org': 'anp',
  'altoona.craigslist.org': 'aoo',
  'appleton.craigslist.org': 'app',
  'asheville.craigslist.org': 'ash',
  'athens.craigslist.gr': 'ath',
  'atlanta.craigslist.org': 'atl',
  'auburn.craigslist.org': 'aub',
  'augusta.craigslist.org': 'aug',
  'austin.craigslist.org': 'aus',
  'scranton.craigslist.org': 'avp',
  'bakersfield.craigslist.org': 'bak',
  'baltimore.craigslist.org': 'bal',
  'barcelona.craigslist.es': 'bar',
  'bhubaneswar.craigslist.co.in': 'bbi',
  'bacolod.craigslist.com.ph': 'bcd',
  'bajasur.craigslist.com.mx': 'bcs',
  'belleville.craigslist.ca': 'bel',
  'berlin.craigslist.de': 'ber',
  'beirut.craigslist.org': 'bey',
  'brantford.craigslist.ca': 'bfd',
  'scottsbluff.craigslist.org': 'bff',
  'baghdad.craigslist.org': 'bgd',
  'bangladesh.craigslist.org': 'bgl',
  'binghamton.craigslist.org': 'bgm',
  'bham.craigslist.org': 'bhm',
  'birmingham.craigslist.co.uk': 'bhx',
  'billings.craigslist.org': 'bil',
  'bilbao.craigslist.es': 'bio',
  'bismarck.craigslist.org': 'bis',
  'bemidji.craigslist.org': 'bji',
  'guanajuato.craigslist.com.mx': 'bjx',
  'bangkok.craigslist.co.th': 'bkk',
  'belfast.craigslist.co.uk': 'blf',
  'bologna.craigslist.it': 'blg',
  'bgky.craigslist.org': 'blg',
  'bellingham.craigslist.org': 'bli',
  'bn.craigslist.org': 'bln',
  'bloomington.craigslist.org': 'bmg',
  'boone.craigslist.org': 'bnc',
  'bend.craigslist.org': 'bnd',
  'brisbane.craigslist.com.au': 'bne',
  'bangalore.craigslist.co.in': 'bng',
  'bordeaux.craigslist.org': 'bod',
  'colombia.craigslist.org': 'bog',
  'boise.craigslist.org': 'boi',
  'boston.craigslist.org': 'bos',
  'boulder.craigslist.org': 'bou',
  'beaumont.craigslist.org': 'bpt',
  'brainerd.craigslist.org': 'brd',
  'brighton.craigslist.co.uk': 'bri',
  'burlington.craigslist.org': 'brl',
  'bremen.craigslist.de': 'brm',
  'bern.craigslist.ch': 'brn',
  'brownsville.craigslist.org': 'bro',
  'barrie.craigslist.ca': 'brr',
  'bristol.craigslist.co.uk': 'brs',
  'brussels.craigslist.org': 'bru',
  'brasilia.craigslist.org': 'bsb',
  'basel.craigslist.ch': 'bsl',
  'battlecreek.craigslist.org': 'btc',
  'bath.craigslist.co.uk': 'bth',
  'butte.craigslist.org': 'btm',
  'batonrouge.craigslist.org': 'btr',
  'budapest.craigslist.org': 'bud',
  'buenosaires.craigslist.org': 'bue',
  'buffalo.craigslist.org': 'buf',
  'bucharest.craigslist.org': 'buh',
  'brunswick.craigslist.org': 'bwk',
  'bozeman.craigslist.org': 'bzn',
  'columbia.craigslist.org': 'cae',
  'cairo.craigslist.org': 'cai',
  'akroncanton.craigslist.org': 'cak',
  'cambridge.craigslist.co.uk': 'cam',
  'guangzhou.craigslist.com.cn': 'can',
  'capecod.craigslist.org': 'cap',
  'casablanca.craigslist.org': 'cas',
  'catskills.craigslist.org': 'cat',
  'carbondale.craigslist.org': 'cbd',
  'chambersburg.craigslist.org': 'cbg',
  'cariboo.craigslist.ca': 'cbo',
  'canberra.craigslist.com.au': 'cbr',
  'caracas.craigslist.org': 'ccs',
  'cdo.craigslist.com.ph': 'cdo',
  'cadiz.craigslist.es': 'cdz',
  'cebu.craigslist.com.ph': 'ceb',
  'cedarrapids.craigslist.org': 'ced',
  'cfl.craigslist.org': 'cfl',
  'cologne.craigslist.de': 'cgn',
  'charlotte.craigslist.org': 'cha',
  'chico.craigslist.org': 'chc',
  'chennai.craigslist.co.in': 'che',
  'chihuahua.craigslist.com.mx': 'chh',
  'chicago.craigslist.org': 'chi',
  'chatham.craigslist.ca': 'chk',
  'chillicothe.craigslist.org': 'chl',
  'chambana.craigslist.org': 'chm',
  'chautauqua.craigslist.org': 'chq',
  'christchurch.craigslist.org': 'chr',
  'charleston.craigslist.org': 'chs',
  'chattanooga.craigslist.org': 'cht',
  'cincinnati.craigslist.org': 'cin',
  'juarez.craigslist.com.mx': 'cjs',
  'chongqing.craigslist.com.cn': 'ckg',
  'clarksville.craigslist.org': 'ckv',
  'cleveland.craigslist.org': 'cle',
  'calgary.craigslist.ca': 'clg',
  'centralmich.craigslist.org': 'cmu',
  'comoxvalley.craigslist.ca': 'cmx',
  'belohorizonte.craigslist.org': 'cnf',
  'cnj.craigslist.org': 'cnj',
  'cairns.craigslist.com.au': 'cns',
  'kerala.craigslist.co.in': 'cok',
  'columbus.craigslist.org': 'col',
  'cookeville.craigslist.org': 'coo',
  'copenhagen.craigslist.org': 'cop',
  'oregoncoast.craigslist.org': 'cor',
  'cosprings.craigslist.org': 'cos',
  'columbiamo.craigslist.org': 'cou',
  'coventry.craigslist.co.uk': 'cov',
  'capetown.craigslist.co.za': 'cpt',
  'caribbean.craigslist.org': 'crb',
  'costarica.craigslist.org': 'cri',
  'pampanga.craigslist.com.ph': 'crk',
  'corpuschristi.craigslist.org': 'crp',
  'corvallis.craigslist.org': 'crv',
  'charlestonwv.craigslist.org': 'crw',
  'csd.craigslist.org': 'csd',
  'columbusga.craigslist.org': 'csg',
  'collegestation.craigslist.org': 'cst',
  'chengdu.craigslist.com.cn': 'ctu',
  'clovis.craigslist.org': 'cvn',
  'curitiba.craigslist.org': 'cwb',
  'cardiff.craigslist.co.uk': 'cym',
  'daytona.craigslist.org': 'dab',
  'dallas.craigslist.org': 'dal',
  'dayton.craigslist.org': 'day',
  'dubuque.craigslist.org': 'dbq',
  'derby.craigslist.co.uk': 'dby',
  'delhi.craigslist.co.in': 'del',
  'denver.craigslist.org': 'den',
  'detroit.craigslist.org': 'det',
  'dothan.craigslist.org': 'dhn',
  'decatur.craigslist.org': 'dil',
  'dalian.craigslist.com.cn': 'dlc',
  'duluth.craigslist.org': 'dlh',
  'delaware.craigslist.org': 'dlw',
  'dundee.craigslist.co.uk': 'dnd',
  'danville.craigslist.org': 'dnv',
  'dresden.craigslist.de': 'drs',
  'delrio.craigslist.org': 'drt',
  'darwin.craigslist.com.au': 'drw',
  'desmoines.craigslist.org': 'dsm',
  'dublin.craigslist.org': 'dub',
  'dunedin.craigslist.co.nz': 'dud',
  'durban.craigslist.co.za': 'dur',
  'dusseldorf.craigslist.de': 'dus',
  'devon.craigslist.co.uk': 'dvc',
  'davaocity.craigslist.com.ph': 'dvo',
  'eauclaire.craigslist.org': 'eau',
  'eastco.craigslist.org': 'eco',
  'edinburgh.craigslist.co.uk': 'edi',
  'edmonton.craigslist.ca': 'edm',
  'eastidaho.craigslist.org': 'eid',
  'eastky.craigslist.org': 'eky',
  'elko.craigslist.org': 'elk',
  'elmira.craigslist.org': 'elm',
  'elpaso.craigslist.org': 'elp',
  'eastmids.craigslist.co.uk': 'eml',
  'kenai.craigslist.org': 'ena',
  'eastnc.craigslist.org': 'enc',
  'enid.craigslist.org': 'end',
  'eastoregon.craigslist.org': 'eor',
  'erie.craigslist.org': 'eri',
  'easternshore.craigslist.org': 'esh',
  'essen.craigslist.de': 'ess',
  'essex.craigslist.co.uk': 'esx',
  'easttexas.craigslist.org': 'etx',
  'eugene.craigslist.org': 'eug',
  'evansville.craigslist.org': 'ew',
  'martinsburg.craigslist.org': 'ewv',
  'fredericksburg.craigslist.org': 'ezf',
  'fairbanks.craigslist.org': 'fai',
  'fargo.craigslist.org': 'far',
  'fayetteville.craigslist.org': 'fay',
  'kalispell.craigslist.org': 'fca',
  'frederick.craigslist.org': 'fdk',
  'fingerlakes.craigslist.org': 'fgl',
  'sierravista.craigslist.org': 'fhu',
  'flagstaff.craigslist.org': 'flg',
  'florencesc.craigslist.org': 'flo',
  'florence.craigslist.it': 'flr',
  'ftmcmurray.craigslist.ca': 'fmc',
  'fortmyers.craigslist.org': 'fmy',
  'farmington.craigslist.org': 'fnm',
  'flint.craigslist.org': 'fnt',
  'frankfurt.craigslist.de': 'fra',
  'fresno.craigslist.org': 'fre',
  'faro.craigslist.pt': 'fro',
  'siouxfalls.craigslist.org': 'fsd',
  'fortsmith.craigslist.org': 'fsm',
  'fortcollins.craigslist.org': 'ftc',
  'fortdodge.craigslist.org': 'ftd',
  'fortaleza.craigslist.org': 'ftl',
  'fukuoka.craigslist.jp': 'fuk',
  'fortwayne.craigslist.org': 'fwa',
  'fayar.craigslist.org': 'fyv',
  'greensboro.craigslist.org': 'gbo',
  'guadalajara.craigslist.com.mx': 'gdl',
  'genoa.craigslist.it': 'gen',
  'grandforks.craigslist.org': 'gfk',
  'glensfalls.craigslist.org': 'gfl',
  'grandisland.craigslist.org': 'gil',
  'westslope.craigslist.org': 'gjt',
  'glasgow.craigslist.co.uk': 'gla',
  'goldcountry.craigslist.org': 'gld',
  'galveston.craigslist.org': 'gls',
  'grenoble.craigslist.org': 'gnb',
  'gainesville.craigslist.org': 'gnv',
  'goa.craigslist.co.in': 'goa',
  'guelph.craigslist.ca': 'gph',
  'gulfport.craigslist.org': 'gpt',
  'greenbay.craigslist.org': 'grb',
  'killeen.craigslist.org': 'grk',
  'grandrapids.craigslist.org': 'grr',
  'granada.craigslist.es': 'grx',
  'greenville.craigslist.org': 'gsp',
  'greatfalls.craigslist.org': 'gtf',
  'guatemala.craigslist.org': 'gua',
  'micronesia.craigslist.org': 'gum',
  'geneva.craigslist.ch': 'gva',
  'hannover.craigslist.de': 'haj',
  'hamburg.craigslist.de': 'ham',
  'hat.craigslist.ca': 'hat',
  'hobart.craigslist.com.au': 'hba',
  'heidelberg.craigslist.de': 'hdb',
  'helsinki.craigslist.fi': 'hel',
  'natchez.craigslist.org': 'hez',
  'haifa.craigslist.org': 'hfa',
  'halifax.craigslist.ca': 'hfx',
  'hangzhou.craigslist.com.cn': 'hgh',
  'hiltonhead.craigslist.org': 'hhi',
  'hiroshima.craigslist.jp': 'hij',
  'hickory.craigslist.org': 'hky',
  'hongkong.craigslist.hk': 'hkz',
  'holland.craigslist.org': 'hld',
  'helena.craigslist.org': 'hln',
  'humboldt.craigslist.org': 'hmb',
  'hamilton.craigslist.ca': 'hml',
  'hanford.craigslist.org': 'hnf',
  'honolulu.craigslist.org': 'hnl',
  'houston.craigslist.org': 'hou',
  'pretoria.craigslist.co.za': 'hpr',
  'hermosillo.craigslist.com.mx': 'hrm',
  'harrisburg.craigslist.org': 'hrs',
  'huntsville.craigslist.org': 'hsv',
  'hartford.craigslist.org': 'htf',
  'huntington.craigslist.org': 'hts',
  'hudsonvalley.craigslist.org': 'hud',
  'houma.craigslist.org': 'hum',
  'newhaven.craigslist.org': 'hvn',
  'hyderabad.craigslist.co.in': 'hyd',
  'iowacity.craigslist.org': 'iac',
  'baleares.craigslist.es': 'ibz',
  'indore.craigslist.co.in': 'idr',
  'iloilo.craigslist.com.ph': 'ilo',
  'imperial.craigslist.org': 'imp',
  'indianapolis.craigslist.org': 'ind',
  'inlandempire.craigslist.org': 'inl',
  'longisland.craigslist.org': 'isp',
  'istanbul.craigslist.com.tr': 'ist',
  'ithaca.craigslist.org': 'ith',
  'chandigarh.craigslist.co.in': 'ixc',
  'jaipur.craigslist.co.in': 'jai',
  'jackson.craigslist.org': 'jan',
  'jacksonville.craigslist.org': 'jax',
  'jonesboro.craigslist.org': 'jbr',
  'ashtabula.craigslist.org': 'jfn',
  'jakarta.craigslist.org': 'jkt',
  'joplin.craigslist.org': 'jln',
  'johannesburg.craigslist.co.za': 'jnb',
  'juneau.craigslist.org': 'jnu',
  'jerusalem.craigslist.org': 'jrs',
  'janesville.craigslist.org': 'jvl',
  'jxn.craigslist.org': 'jxn',
  'jacksontn.craigslist.org': 'jxt',
  'jerseyshore.craigslist.org': 'jys',
  'ukraine.craigslist.org': 'kbp',
  'kitchener.craigslist.ca': 'kch',
  'kelowna.craigslist.ca': 'kel',
  'kent.craigslist.co.uk': 'ken',
  'keys.craigslist.org': 'key',
  'klamath.craigslist.org': 'klf',
  'kaiserslautern.craigslist.de': 'klt',
  'kamloops.craigslist.ca': 'kml',
  'kingston.craigslist.ca': 'kng',
  'knoxville.craigslist.org': 'knx',
  'kolkata.craigslist.co.in': 'kol',
  'cranbrook.craigslist.ca': 'koo',
  'kpr.craigslist.org': 'kpr',
  'kirksville.craigslist.org': 'krk',
  'kansascity.craigslist.org': 'ksc',
  'kuwait.craigslist.org': 'kwi',
  'kalamazoo.craigslist.org': 'kzo',
  'tippecanoe.craigslist.org': 'laf',
  'lakeland.craigslist.org': 'lal',
  'lansing.craigslist.org': 'lan',
  'lausanne.craigslist.ch': 'lau',
  'lawton.craigslist.org': 'law',
  'losangeles.craigslist.org': 'lax',
  'lubbock.craigslist.org': 'lbb',
  'northplatte.craigslist.org': 'lbf',
  'lakecity.craigslist.org': 'lcq',
  'lascruces.craigslist.org': 'lcr',
  'london.craigslist.co.uk': 'ldn',
  'leeds.craigslist.co.uk': 'lds',
  'leipzig.craigslist.de': 'lej',
  'lexington.craigslist.org': 'lex',
  'lafayette.craigslist.org': 'lft',
  'logan.craigslist.org': 'lgu',
  'lille.craigslist.org': 'lil',
  'lima.craigslist.org': 'lim',
  'lisbon.craigslist.pt': 'lis',
  'littlerock.craigslist.org': 'lit',
  'liverpool.craigslist.co.uk': 'liv',
  'lakecharles.craigslist.org': 'lkc',
  'lucknow.craigslist.co.in': 'lko',
  'limaohio.craigslist.org': 'lma',
  'lincoln.craigslist.org': 'lnk',
  'lancaster.craigslist.org': 'lns',
  'londonon.craigslist.ca': 'lon',
  'louisville.craigslist.org': 'lou',
  'loz.craigslist.org': 'loz',
  'lapaz.craigslist.org': 'lpb',
  'laredo.craigslist.org': 'lrd',
  'lacrosse.craigslist.org': 'lse',
  'lasalle.craigslist.org': 'lsl',
  'lethbridge.craigslist.ca': 'lth',
  'luxembourg.craigslist.org': 'lux',
  'lasvegas.craigslist.org': 'lvg',
  'lawrence.craigslist.org': 'lwr',
  'lewiston.craigslist.org': 'lws',
  'lynchburg.craigslist.org': 'lyn',
  'lyon.craigslist.org': 'lys',
  'madison.craigslist.org': 'mad',
  'manchester.craigslist.co.uk': 'man',
  'saginaw.craigslist.org': 'mbs',
  'mcallen.craigslist.org': 'mca',
  'macon.craigslist.org': 'mcn',
  'madrid.craigslist.es': 'mdd',
  'mendocino.craigslist.org': 'mdo',
  'meadville.craigslist.org': 'mdv',
  'meridian.craigslist.org': 'mei',
  'melbourne.craigslist.com.au': 'mel',
  'memphis.craigslist.org': 'mem',
  'merced.craigslist.org': 'mer',
  'mexicocity.craigslist.com.mx': 'mex',
  'mansfield.craigslist.org': 'mfd',
  'medford.craigslist.org': 'mfr',
  'managua.craigslist.org': 'mga',
  'montgomery.craigslist.org': 'mgm',
  'ksu.craigslist.org': 'mhk',
  'mohave.craigslist.org': 'mhv',
  'fortlauderdale.craigslist.org': 'mia',
  'miami.craigslist.org': 'mia',
  'westpalmbeach.craigslist.org': 'mia',
  'milwaukee.craigslist.org': 'mil',
  'minneapolis.craigslist.org': 'min',
  'muskegon.craigslist.org': 'mkg',
  'mankato.craigslist.org': 'mkt',
  'spacecoast.craigslist.org': 'mlb',
  'quadcities.craigslist.org': 'mli',
  'moseslake.craigslist.org': 'mlk',
  'monroemi.craigslist.org': 'mlu',
  'malaysia.craigslist.org': 'mly',
  'marshall.craigslist.org': 'mml',
  'maine.craigslist.org': 'mne',
  'manila.craigslist.com.ph': 'mnl',
  'monroe.craigslist.org': 'mnr',
  'montana.craigslist.org': 'mnt',
  'mobile.craigslist.org': 'mob',
  'modesto.craigslist.org': 'mod',
  'montreal.craigslist.ca': 'mon',
  'moscow.craigslist.org': 'mos',
  'montpellier.craigslist.org': 'mpl',
  'marseilles.craigslist.org': 'mrs',
  'masoncity.craigslist.org': 'msc',
  'shoals.craigslist.org': 'msl',
  'missoula.craigslist.org': 'mso',
  'monterey.craigslist.org': 'mtb',
  'mattoon.craigslist.org': 'mto',
  'monterrey.craigslist.com.mx': 'mty',
  'munich.craigslist.de': 'muc',
  'mumbai.craigslist.co.in': 'mum',
  'muncie.craigslist.org': 'mun',
  'montevideo.craigslist.org': 'mvd',
  'skagit.craigslist.org': 'mvw',
  'milan.craigslist.it': 'mxp',
  'myrtlebeach.craigslist.org': 'myr',
  'mazatlan.craigslist.com.mx': 'mzt',
  'naples.craigslist.it': 'nap',
  'kenya.craigslist.org': 'nbo',
  'newbrunswick.craigslist.ca': 'nbw',
  'cotedazur.craigslist.org': 'nce',
  'newcastle.craigslist.co.uk': 'ncl',
  'nwct.craigslist.org': 'nct',
  'nd.craigslist.org': 'ndk',
  'norfolk.craigslist.org': 'nfk',
  'newfoundland.craigslist.ca': 'nfl',
  'nagoya.craigslist.jp': 'ngo',
  'nh.craigslist.org': 'nhm',
  'newjersey.craigslist.org': 'njy',
  'nanjing.craigslist.com.cn': 'nkg',
  'newlondon.craigslist.org': 'nlo',
  'nmi.craigslist.org': 'nmi',
  'nanaimo.craigslist.ca': 'nmo',
  'northmiss.craigslist.org': 'nms',
  'neworleans.craigslist.org': 'nor',
  'nottingham.craigslist.co.uk': 'not',
  'tuscarawas.craigslist.org': 'nph',
  'niagara.craigslist.ca': 'nsc',
  'nashville.craigslist.org': 'nsh',
  'loire.craigslist.org': 'nte',
  'ntl.craigslist.com.au': 'ntl',
  'nuremberg.craigslist.de': 'nue',
  'nwga.craigslist.org': 'nwg',
  'norwich.craigslist.co.uk': 'nwh',
  'northernwi.craigslist.org': 'nwi',
  'nwks.craigslist.org': 'nwk',
  'newyork.craigslist.org': 'nyc',
  'onslow.craigslist.org': 'oaj',
  'oaxaca.craigslist.com.mx': 'oax',
  'outerbanks.craigslist.org': 'obx',
  'ocala.craigslist.org': 'oca',
  'nacogdoches.craigslist.org': 'och',
  'odessa.craigslist.org': 'odm',
  'ogden.craigslist.org': 'ogd',
  'athensohio.craigslist.org': 'ohu',
  'okinawa.craigslist.jp': 'oka',
  'oklahomacity.craigslist.org': 'okc',
  'kokomo.craigslist.org': 'okk',
  'winchester.craigslist.org': 'okv',
  'olympic.craigslist.org': 'olp',
  'omaha.craigslist.org': 'oma',
  'oneonta.craigslist.org': 'onh',
  'goldcoast.craigslist.com.au': 'ool',
  'orangecounty.craigslist.org': 'orc',
  'orlando.craigslist.org': 'orl',
  'osaka.craigslist.jp': 'osa',
  'oslo.craigslist.org': 'osl',
  'stillwater.craigslist.org': 'osu',
  'ottawa.craigslist.ca': 'ott',
  'ottumwa.craigslist.org': 'otu',
  'oxford.craigslist.co.uk': 'ovf',
  'owensboro.craigslist.org': 'owb',
  'owensound.craigslist.ca': 'ows',
  'ventura.craigslist.org': 'oxr',
  'pakistan.craigslist.org': 'pak',
  'ramallah.craigslist.org': 'pal',
  'panama.craigslist.org': 'pan',
  'paris.craigslist.org': 'par',
  'peace.craigslist.ca': 'pax',
  'puebla.craigslist.com.mx': 'pbl',
  'portland.craigslist.org': 'pdx',
  'perugia.craigslist.it': 'peg',
  'pei.craigslist.ca': 'pei',
  'beijing.craigslist.com.cn': 'pek',
  'perth.craigslist.com.au': 'per',
  'panamacity.craigslist.org': 'pfn',
  'portoalegre.craigslist.org': 'pgp',
  'philadelphia.craigslist.org': 'phi',
  'porthuron.craigslist.org': 'phn',
  'phoenix.craigslist.org': 'phx',
  'peoria.craigslist.org': 'pia',
  'pittsburgh.craigslist.org': 'pit',
  'parkersburg.craigslist.org': 'pkb',
  'plattsburgh.craigslist.org': 'plb',
  'pullman.craigslist.org': 'plm',
  'pune.craigslist.co.in': 'png',
  'pensacola.craigslist.org': 'pns',
  'poconos.craigslist.org': 'poc',
  'prescott.craigslist.org': 'prc',
  'prague.craigslist.cz': 'prg',
  'puertorico.craigslist.org': 'pri',
  'providence.craigslist.org': 'prv',
  'treasure.craigslist.org': 'psl',
  'palmsprings.craigslist.org': 'psp',
  'pennstate.craigslist.org': 'psu',
  'potsdam.craigslist.org': 'ptd',
  'porto.craigslist.pt': 'pto',
  'pueblo.craigslist.org': 'pub',
  'pv.craigslist.com.mx': 'pvr',
  'provo.craigslist.org': 'pvu',
  'quebec.craigslist.ca': 'qbc',
  'quincy.craigslist.org': 'qcy',
  'quito.craigslist.org': 'qui',
  'racine.craigslist.org': 'rac',
  'raleigh.craigslist.org': 'ral',
  'rapidcity.craigslist.org': 'rap',
  'roseburg.craigslist.org': 'rbg',
  'rockies.craigslist.org': 'rck',
  'rochester.craigslist.org': 'rcs',
  'redding.craigslist.org': 'rdd',
  'reading.craigslist.org': 'rea',
  'recife.craigslist.org': 'rec',
  'reddeer.craigslist.ca': 'red',
  'regina.craigslist.ca': 'reg',
  'rockford.craigslist.org': 'rfd',
  'richmond.craigslist.org': 'ric',
  'richmondin.craigslist.org': 'rin',
  'rio.craigslist.org': 'rio',
  'reykjavik.craigslist.org': 'rkv',
  'rmn.craigslist.org': 'rmn',
  'reno.craigslist.org': 'rno',
  'rennes.craigslist.org': 'rns',
  'roanoke.craigslist.org': 'roa',
  'rome.craigslist.it': 'rom',
  'rouen.craigslist.org': 'rou',
  'roswell.craigslist.org': 'row',
  'sacramento.craigslist.org': 'sac',
  'santafe.craigslist.org': 'saf',
  'elsalvador.craigslist.org': 'sal',
  'sanantonio.craigslist.org': 'sat',
  'savannah.craigslist.org': 'sav',
  'santabarbara.craigslist.org': 'sba',
  'sheboygan.craigslist.org': 'sbm',
  'southbend.craigslist.org': 'sbn',
  'santiago.craigslist.org': 'scl',
  'sendai.craigslist.jp': 'sdj',
  'sd.craigslist.org': 'sdk',
  'sandiego.craigslist.org': 'sdo',
  'santodomingo.craigslist.org': 'sdq',
  'seattle.craigslist.org': 'sea',
  'seks.craigslist.org': 'sek',
  'seoul.craigslist.co.kr': 'sel',
  'sevilla.craigslist.es': 'sev',
  'sfbay.craigslist.org': 'sfo',
  'springfield.craigslist.org': 'sgf',
  'saguenay.craigslist.ca': 'sgy',
  'shanghai.craigslist.com.cn': 'sha',
  'sherbrooke.craigslist.ca': 'shb',
  'harrisonburg.craigslist.org': 'shd',
  'shenyang.craigslist.com.cn': 'she',
  'sheffield.craigslist.co.uk': 'shf',
  'shreveport.craigslist.org': 'shv',
  'sicily.craigslist.it': 'sic',
  'sanangelo.craigslist.org': 'sjt',
  'skeena.craigslist.ca': 'ske',
  'saskatoon.craigslist.ca': 'skt',
  'sandusky.craigslist.org': 'sky',
  'saltlakecity.craigslist.org': 'slc',
  'salem.craigslist.org': 'sle',
  'slo.craigslist.org': 'slo',
  'southcoast.craigslist.org': 'sma',
  'smd.craigslist.org': 'smd',
  'semo.craigslist.org': 'smo',
  'santamaria.craigslist.org': 'smx',
  'singapore.craigslist.com.sg': 'sng',
  'southjersey.craigslist.org': 'snj',
  'salina.craigslist.org': 'sns',
  'bulgaria.craigslist.org': 'sof',
  'soo.craigslist.ca': 'soo',
  'hampshire.craigslist.co.uk': 'sou',
  'showlow.craigslist.org': 'sow',
  'springfieldil.craigslist.org': 'spi',
  'spokane.craigslist.org': 'spk',
  'saopaulo.craigslist.org': 'spo',
  'sapporo.craigslist.jp': 'spp',
  'sardinia.craigslist.it': 'srd',
  'sarnia.craigslist.ca': 'srn',
  'sarasota.craigslist.org': 'srq',
  'salvador.craigslist.org': 'ssa',
  'siskiyou.craigslist.org': 'ssk',
  'susanville.craigslist.org': 'ssn',
  'stcloud.craigslist.org': 'stc',
  'stgeorge.craigslist.org': 'stg',
  'stockholm.craigslist.se': 'sth',
  'stjoseph.craigslist.org': 'stj',
  'stockton.craigslist.org': 'stk',
  'stlouis.craigslist.org': 'stl',
  'stpetersburg.craigslist.org': 'stp',
  'stuttgart.craigslist.de': 'str',
  'sudbury.craigslist.ca': 'sud',
  'sunshine.craigslist.ca': 'sun',
  'siouxcity.craigslist.org': 'sux',
  'surat.craigslist.co.in': 'svt',
  'swks.craigslist.org': 'swk',
  'swmi.craigslist.org': 'swm',
  'swv.craigslist.org': 'swv',
  'strasbourg.craigslist.org': 'sxb',
  'sydney.craigslist.com.au': 'syd',
  'syracuse.craigslist.org': 'syr',
  'shenzhen.craigslist.com.cn': 'szx',
  'tallahassee.craigslist.org': 'tal',
  'statesboro.craigslist.org': 'tbr',
  'thunderbay.craigslist.ca': 'tby',
  'canarias.craigslist.es': 'tfn',
  'terrehaute.craigslist.org': 'tha',
  'thumb.craigslist.org': 'thb',
  'tijuana.craigslist.com.mx': 'tij',
  'toulouse.craigslist.org': 'tls',
  'telaviv.craigslist.org': 'tlv',
  'territories.craigslist.ca': 'toc',
  'tokyo.craigslist.jp': 'tok',
  'toledo.craigslist.org': 'tol',
  'toronto.craigslist.ca': 'tor',
  'tampa.craigslist.org': 'tpa',
  'topeka.craigslist.org': 'tpk',
  'tehran.craigslist.org': 'trh',
  'tricities.craigslist.org': 'tri',
  'torino.craigslist.it': 'trn',
  'troisrivieres.craigslist.ca': 'trs',
  'tuscaloosa.craigslist.org': 'tsc',
  'sanmarcos.craigslist.org': 'tsu',
  'twintiers.craigslist.org': 'tts',
  'tulsa.craigslist.org': 'tul',
  'tunis.craigslist.org': 'tun',
  'tucson.craigslist.org': 'tus',
  'taipei.craigslist.com.tw': 'twd',
  'twinfalls.craigslist.org': 'twf',
  'texarkana.craigslist.org': 'txk',
  'texoma.craigslist.org': 'txm',
  'dubai.craigslist.org': 'uae',
  'hattiesburg.craigslist.org': 'usm',
  'staugustine.craigslist.org': 'ust',
  'utica.craigslist.org': 'uti',
  'charlottesville.craigslist.org': 'uva',
  'valencia.craigslist.es': 'val',
  'vancouver.craigslist.ca': 'van',
  'swva.craigslist.org': 'vaw',
  'cornwall.craigslist.ca': 'vcc',
  'venice.craigslist.it': 'vce',
  'veracruz.craigslist.com.mx': 'vcz',
  'victoria.craigslist.ca': 'vic',
  'vienna.craigslist.at': 'vie',
  'visalia.craigslist.org': 'vis',
  'valdosta.craigslist.org': 'vld',
  'blacksburg.craigslist.org': 'vpi',
  'virgin.craigslist.org': 'vrg',
  'vietnam.craigslist.org': 'vtn',
  'victoriatx.craigslist.org': 'vtx',
  'wausau.craigslist.org': 'wau',
  'warsaw.craigslist.pl': 'waw',
  'waco.craigslist.org': 'wco',
  'washingtondc.craigslist.org': 'wdc',
  'wenatchee.craigslist.org': 'wen',
  'whitehorse.craigslist.ca': 'whh',
  'whistler.craigslist.ca': 'whi',
  'wheeling.craigslist.org': 'whl',
  'wichita.craigslist.org': 'wic',
  'winnipeg.craigslist.ca': 'win',
  'westky.craigslist.org': 'wky',
  'wellington.craigslist.org': 'wll',
  'waterloo.craigslist.org': 'wlo',
  'westernmass.craigslist.org': 'wma',
  'westmd.craigslist.org': 'wmd',
  'wilmington.craigslist.org': 'wnc',
  'naga.craigslist.com.ph': 'wnp',
  'wollongong.craigslist.com.au': 'wol',
  'worcester.craigslist.org': 'wor',
  'williamsport.craigslist.org': 'wpt',
  'winstonsalem.craigslist.org': 'wsl',
  'windsor.craigslist.ca': 'wsr',
  'wichitafalls.craigslist.org': 'wtf',
  'watertown.craigslist.org': 'wtn',
  'bigbend.craigslist.org': 'wtx',
  'wuhan.craigslist.com.cn': 'wuh',
  'wv.craigslist.org': 'wva',
  'morgantown.craigslist.org': 'wvu',
  'wyoming.craigslist.org': 'wyo',
  'xian.craigslist.com.cn': 'xiy',
  'yakima.craigslist.org': 'yak',
  'yubasutter.craigslist.org': 'ybs',
  'yellowknife.craigslist.ca': 'ykf',
  'youngstown.craigslist.org': 'yng',
  'peterborough.craigslist.ca': 'ypq',
  'okaloosa.craigslist.org': 'yps',
  'york.craigslist.org': 'yrk',
  'yucatan.craigslist.com.mx': 'yuc',
  'yuma.craigslist.org': 'yum',
  'up.craigslist.org': 'yup',
  'princegeorge.craigslist.ca': 'yxs',
  'zagreb.craigslist.org': 'zag',
  'zamboanga.craigslist.com.ph': 'zam',
  'zurich.craigslist.ch': 'zur',
  'zanesville.craigslist.org': 'zyl',
};