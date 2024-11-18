let wrapper = document.querySelector(".wrapper");

let offerArray = [
 {
    company: "impex",
    itemGroup: "air fryer",
    groupName: "air fryer",
    itemName: "air fryer smart",
    Price: 3490
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "10 ltr dum",
    Price: 2290
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "12 ltr dum",
    Price: 2450
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "royal RCS4 2 pcs",
    Price: 2190
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave ICTP28",
    Price: 798
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "diecast ruby 27",
    Price: 675
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "pan ITP 2620",
    Price: 650
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "SS STP 24 Shine",
    Price: 950
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "diecast ruby 24",
    Price: 690
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "SS SFP 24 shine",
    Price: 990
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "SS SKP 24 shine",
    Price: 1490
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "kuzhiyappam",
    itemName: "kuzhiyappam 9",
    Price: 695
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "milk pan",
    itemName: "milk pan 1875",
    Price: 675
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "2 pcs set TF",
    Price: 790
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set KTF 444",
    Price: 1390
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set NV 444",
    Price: 1250
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set RKTF24",
    Price: 1600
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set ROYAL",
    Price: 1590
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "FTA 4603 pcs set",
    Price: 1295
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "wokpan",
    itemName: "wokpan IB-IWP28",
    Price: 1150
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "sausepan",
    itemName: "sausepan B pot shine 24",
    Price: 1650
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 10 ltr",
    Price: 1890
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 5 ltr",
    Price: 990
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 3 ltr",
    Price: 790
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 2",
    Price: 850
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 3",
    Price: 850
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 5",
    Price: 1100
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 7",
    Price: 1790
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 2+3+5",
    Price: 1990
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep2",
    Price: 1190
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep3",
    Price: 1250
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep5",
    Price: 1650
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart 2.5 ltr",
    Price: 1395
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart 4.5 ltr",
    Price: 1950
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart norma 2.5 ltr",
    Price: 950
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart norma 4.5 ltr",
    Price: 1200
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "black",
    itemName: "HA 2.5ltr Dripless",
    Price: 1190
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "black",
    itemName: "HA 4.5ltr Dripless",
    Price: 1600
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 10",
    Price: 1850
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 7",
    Price: 1695
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 5",
    Price: 1150
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 3",
    Price: 890
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 5+3",
    Price: 1890
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "enlight 2B",
    Price: 250
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "IGS1 3B",
    Price: 3550
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "aspira ador 2B",
    Price: 2850
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "fiera 2B",
    Price: 3250
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "fiera 3B",
    Price: 4150
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 2B",
    Price: 3990
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 3B",
    Price: 4950
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 3B regular",
    Price: 4650
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 2b elite",
    Price: 2900
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 2b NEO",
    Price: 2350
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 3B NEO",
    Price: 3100
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "welfire 2B",
    Price: 1900
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "aira 2B frameless",
    Price: 4750
  },{
    company: "impex",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "omega H2A  SL220",
    Price: 2950
  },{
    company: "impex",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "omega H6A DX",
    Price: 2250
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1001c",
    Price: 995
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1501",
    Price: 650
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle GK 18",
    Price: 1395
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle JB15 Black",
    Price: 1250
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ceiling fan Aero Alora",
    Price: 1790
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ceiling fan BLDC atom28",
    Price: 3150
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "wall fan",
    itemName: "oreon",
    Price: 1990
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "wall fan",
    itemName: "zolo 1969",
    Price: 2250
  },{
    company: "impex",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "ss 1 kg",
    Price: 1900
  },{
    company: "impex",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "ss 1.5 kg",
    Price: 2250
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "grind D Q 600",
    Price: 2400
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "Panter 800w",
    Price: 3600
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "starmix 750w",
    Price: 2500
  },{
    company: "impex",
    itemGroup: "oven",
    groupName: "oven",
    itemName: "OTG 19 ltr + btr",
    Price: 4700
  },{
    company: "impex",
    itemGroup: "oven",
    groupName: "oven",
    itemName: "OTG 28 ltr",
    Price: 6100 
  },{
    company: "impex",
    itemGroup: "magic pan",
    groupName: "magic pan",
    itemName: "magic pan ws 18",
    Price: 1990
  },{
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 1 kg",
    Price: 1590
  },{
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 1.5 kg",
    Price: 1790
  },{
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 2 kg",
    Price: 2690
  },{
    company: "bPL",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1.8 00118",
    Price: 850
  },{
    company: "bPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "3 jar 500w 46150 +c",
    Price: 2250
  },{
    company: "bPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "3 jar 750w 30975 + c",
    Price: 3600
  },{
    company: "bPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "4 jar 750w 45275 + c",
    Price: 3990
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 5 ltr",
    Price: 2750
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 7.5",
    Price: 3250
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 10 ltr",
    Price: 1450
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 2ltr ss",
    Price: 1795
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 3ltr ss",
    Price: 1990
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 5 ltr",
    Price: 2350
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 2 ltr",
    Price: 2250
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 3 ltr",
    Price: 2490
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "STD 3 ltr",
    Price: 950
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "STD 10 ltr",
    Price: 2250
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "STD 5 ltr",
    Price: 1350
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 5 ltr",
    Price: 3250
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "Ace",
    Price: 2750
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "rhino",
    Price: 2150
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "treo 3 B",
    Price: 3990
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "treo pluse 3 B",
    Price: 3990
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "duo pluse 2 B",
    Price: 2950
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "cyclone 3 jar",
    Price: 3850
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "pestle 3 jar",
    Price: 3400
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "ruby elite 3 jar",
    Price: 2600
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "jubilant 3 jar",
    Price: 3600
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "rhino 500w 3 jar",
    Price: 2500
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "stalion 3 jar",
    Price: 3950
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "bhima 3 1000w",
    Price: 5300
  },{
    company: "butterfly",
    itemGroup: "non-stick",
    groupName: "appachatty",
    itemName: "appachatty",
    Price: 650
  },{
    company: "butterfly",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave tawa 280",
    Price: 985
  },{
    company: "butterfly",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave tawa 300",
    Price: 1075
  },{
    company: "butterfly",
    itemGroup: "grinder",
    groupName: "grinder",
    itemName: "flora pluse 2.0",
    Price: 4600
  },{
    company: "L L M",
    itemGroup: "Rice cooker",
    groupName: "steel",
    itemName: "Rice cooker 1.5kg",
    Price: 2890
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "20 Ltr",
    Price: 3150
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "15 Ltr",
    Price: 2650 
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "10 Ltr",
    Price: 2200
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "8 Ltr",
    Price: 1750
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "6 Ltr",
    Price: 1650
  },{
    company: "gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "4.5 Ltr",
    Price: 1350
  },{
    company: "gabry",
    itemGroup: "cooking Pot",
    groupName: "cooking Pot",
    itemName: "cooking pot med",
    Price: 995
  },{
    company: "gabry",
    itemGroup: "cooking Pot",
    groupName: "cooking Pot",
    itemName: "cooking pot sml",
    Price: 925
  },{
    company: "gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan mini",
    Price: 475
  },{
    company: "gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan small elgnt + lid",
    Price: 750
  },{
    company: "gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan med basic",
    Price: 550
  },{
    company: "gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan large basic",
    Price: 860
  },{
    company: "gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan small IB + lid",
    Price: 720
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa small basic",
    Price: 475
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa med basic",
    Price: 575
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa large basic",
    Price: 630
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa large basic IB",
    Price: 750
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "elegent",
    itemName: "tawa small elg",
    Price: 530
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "elegent",
    itemName: "tawa large elegant",
    Price: 630 
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "edgless",
    itemName: "tawa mini edgless",
    Price: 1230
  },{
    company: "gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa med basic IB",
    Price: 595
  },{
    company: "gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai med",
    Price: 925
  },{
    company: "gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai med elegant + glass lid",
    Price: 1050
  },{
    company: "gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai small basic",
    Price: 720
  },{
    company: "gabry",
    itemGroup: "non-stick set",
    groupName: "set",
    itemName: "tawa + frypan + kadai KTF",
    Price: 1150
  },{
    company: "gabry",
    itemGroup: "non-stick set",
    groupName: "set",
    itemName: "tawa + frypan FT combo",
    Price: 799
  },{
    company: "gabry",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "SQ flat edg 2259",
    Price: 1395
  },{
    company: "gabry",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "SQ flat edg 2688",
    Price: 1675
  },{
    company: "gabry",
    itemGroup: "stew pot",
    groupName: "stewpot",
    itemName: "stewpot glass lid",
    Price: 795
  },{
    company: "gabry",
    itemGroup: "stew pot",
    groupName: "stewpot",
    itemName: "stewpot SS lid",
    Price: 725
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "cosmo 3 ltr",
    Price: 750
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "hexagon 3 ltr",
    Price: 750
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "namo 3 ltr",
    Price: 725
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "grand 5 ltr",
    Price: 950
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "compact 1.5 ltr",
    Price: 990
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "classic curve 3 ltr",
    Price: 1375
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "classic curve 5 ltr",
    Price: 1600
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "economy 2B",
    Price: 1650
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "super slim 2B",
    Price: 1600
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "economy pro 2b",
    Price: 2100
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "bliss 2B",
    Price: 2100
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "crystal pluse 2 B",
    Price: 2150
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "popular 3B",
    Price: 2600
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "namo 2B",
    Price: 2200
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "namo 3B",
    Price: 3200
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa 285 namo",
    Price: 420
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa IB 280 mm",
    Price: 490
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "appachatty",
    itemName: "appachatty",
    Price: 450
  },{
    company: "havells",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "Astura",
    Price: 2650
  },{
    company: "havells",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "super speed",
    Price: 2100
  },{
    company: "havells",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "BLDC eficiency dx",
    Price: 3100
  },{
    company: "havells",
    itemGroup: "fan",
    groupName: "wall fan",
    itemName: "swing off",
    Price: 2750
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "Aquilla amber 1000w",
    Price: 895
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "dazzle",
    Price: 990
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "glance ruby 750w",
    Price: 895
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "hawk blue weight",
    Price: 1350
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "eso 3 jar",
    Price: 3990
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "hexo 3 jar 1000w",
    Price: 5900
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "hexo 4 jar 1000w",
    Price: 6800
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "zello 750",
    Price: 3800
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "hydro 3 jar 750w",
    Price: 3990
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "power hunk 800w",
    Price: 4350
  },{
    company: "havells",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle Aqua pluse",
    Price: 1850
  },{
    company: "lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan IB sml",
    Price: 590
  },{
    company: "lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan IB med",
    Price: 640
  },{
    company: "lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan med",
    Price: 575
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa large",
    Price: 650
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa med",
    Price: 498
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa small",
    Price: 475
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa large IB",
    Price: 650
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa med IB",
    Price: 550
  },{
    company: "lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa small IB",
    Price: 525
  },{
    company: "lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi med",
    Price: 975
  },{
    company: "lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi med IB",
    Price: 995
  },{
    company: "lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi small IB",
    Price: 850
  },{
    company: "lisma",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa flat edge",
    Price: 1295
  },{
    company: "lisma",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa four edge",
    Price: 1350
  },{
    company: "lisma",
    itemGroup: "appachatty",
    groupName: "appachatty",
    itemName: "appachatty 4 mm",
    Price: 495
  },{
    company: "lisma",
    itemGroup: "gravy pot ",
    groupName: "gravy pot ",
    itemName: "gravy pot IB",
    Price: 1395
  },{
    company: "lisma",
    itemGroup: "nonstick set",
    groupName: "nonstick set",
    itemName: "nonstick set 3 pcs",
    Price: 1395
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "galaxy 750w",
    Price: 4150
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "peppy 3 jar",
    Price: 3900
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "peppy pro",
    Price: 6500
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "zodiac black + atchmnt",
    Price: 8600
  },{
    company: "preethi",
    itemGroup: "cocunut scraper",
    groupName: "cocunut scraper",
    itemName: "cocunut scraper COCOSTA",
    Price: 4300
  },{
    company: "prestige",
    itemGroup: "gas stove",
    groupName: "Hobetop",
    itemName: "hobetop 3B PHTD AI",
    Price: 12400
  },{
    company: "prestige",
    itemGroup: "gas stove",
    groupName: "glass",
    itemName: "duo 3B",
    Price: 7900
  },{
    company: "prestige",
    itemGroup: "nonstick",
    groupName: "nonstick",
    itemName: "appachatty",
    Price: 850
  },{
    company: "prestige",
    itemGroup: "nonstick",
    groupName: "nonstick",
    itemName: "3pcs set BYK grnt",
    Price: 2100
  },{
    company: "prestige",
    itemGroup: "nonstick",
    groupName: "nonstick",
    itemName: "tawa omega slt + 250m",
    Price: 820
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr swatch",
    Price: 1490
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr popular",
    Price: 1300
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr swatch",
    Price: 2050 
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr popular",
    Price: 1790
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "7.5 ltr popular",
    Price: 2950
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "3 ltr popular ss",
    Price: 2200
  },{
    company: "prestige",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "5 ltr popular ss",
    Price: 2300
  },{
    company: "gflame",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "gas stove eco 2B",
    Price: 1800
  },{
    company: "qbee",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "SS 2B classic",
    Price: 1750
  },{
    company: "qbee",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "max",
    Price: 1900
  },{
    company: "qbee",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "2B mini/nano",
    Price: 1500
  },{
    company: "qbee",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "Big",
    Price: 2400
  },{
    company: "qbee",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "2B splendour",
    Price: 2990
  },{
    company: "qbee",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "SS 1 Kg",
    Price: 1550
  },{
    company: "qbee",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "SS 1.5 Kg",
    Price: 1750
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "1.5 ltr o/l",
    Price: 575
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "2 ltr o/l",
    Price: 595
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium inner lid",
    itemName: "2 ltr i/l",
    Price: 590
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "3 ltr o/l",
    Price: 650
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium inner lid",
    itemName: "3 ltr i/l",
    Price: 785
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "5 ltr o/l",
    Price: 790
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium inner lid",
    itemName: "5 ltr i/l",
    Price: 990
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "5 Ltr + 3 Ltr combo",
    Price: 990
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "7.5 ltr pluse heavy",
    Price: 1190
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "10 ltr heavy",
    Price: 1290
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium outer lid",
    itemName: "12 ltr heavy",
    Price: 1450
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "3 Ltr o/l IB",
    Price: 730
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "3 Ltr i/l IB",
    Price: 850
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "5 Ltr o/l IB",
    Price: 990
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "5 Ltr i/l IB",
    Price: 1050
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "3 Ltr SS",
    Price: 1290
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "5 Ltr SS",
    Price: 1650
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 3 ltr glass lid",
    Price: 790
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 5 ltr glass lid",
    Price: 950 
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 8 ltr",
    Price: 1195
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 12 ltr",
    Price: 1750
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa 4mm",
    Price: 800
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa 5mm",
    Price: 950
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa 250 3mm",
    Price: 300
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "3pcs set",
    itemName: "3pcs Set",
    Price: 1200
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "3pcs set 2.6MM",
    itemName: "3pcs Set",
    Price: 1100
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "kadayi 150 mini",
    Price: 249
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "kadayi 280 3mm ss lid",
    Price: 790
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "frypan mini 160",
    Price: 230
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "appachatty",
    itemName: "appachatty",
    Price: 375
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 2000ml",
    Price: 575
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 3000ml",
    Price: 720
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 4000ml",
    Price: 825
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 5000ml",
    Price: 895
  },{
    company: "rasoiya",
    itemGroup: "Gas stove",
    groupName: "gas stove",
    itemName: "smart 2B steel",
    Price: 1800
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "supermix",
    Price: 5250
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "dynamix",
    Price: 5900
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "multimix",
    Price: 7200
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "frootmix",
    Price: 4750
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "powermatic pluse",
    Price: 5700
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "powermatic",
    Price: 4990
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG01",
    Price: 6100
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG02",
    Price: 6750
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG03",
    Price: 7500
  },{
    company: "sujata",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "morning Breez",
    Price: 2350
  },{
    company: "sujata",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ST270 es 18",
    Price: 1790
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "dry fast max",
    Price: 650
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "espira",
    Price: 750
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "smooth slide",
    Price: 750
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "kettle",
    itemName: "kettle ek-01",
    Price: 1750
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "Blender",
    itemName: "blend graft",
    Price: 2490
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "grill",
    itemName: "griller multi purpos",
    Price: 5300
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "haize + 48",
    Price: 1650
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "romanza art",
    Price: 3650
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "wilo VX 48",
    Price: 1750
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "splendid 2A 2B",
    Price: 2650
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "splendid 3B",
    Price: 4600
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "idalia 2B",
    Price: 3890
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "idalia 3B",
    Price: 4950
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "insight frameles",
    Price: 5200
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "insignia DX 4 jar",
    Price: 7450
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "velocity 500w",
    Price: 2700
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "insignia 750w",
    Price: 5150
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "invidia 750 3jar GT",
    Price: 3900
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "velocity 750w",
    Price: 4300
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "VX 750 3jar",
    Price: 3900
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "VX 750 pluse 4 jar",
    Price: 4100
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "wizmix",
    Price: 3700 
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "dreams pluse 48",
    Price: 1790
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "wilovx 48",
    Price: 1750
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "4 leaf dreams+/ haize",
    Price: 1950
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "BLDC Enviro neo 48",
    Price: 3490
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "BLDC Enviro pro",
    Price: 3950
  },{
    company: "vguard",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "VIC 150",
    Price: 3350
  },{
    company: "vguard",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "VIC 35",
    Price: 2950
  },{
    company: "vguard",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "VIC 100",
    Price: 3250
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr",
    Price: 790
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr",
    Price: 1100
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "10 ltr",
    Price: 1450
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "12 ltr",
    Price: 1590
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "3 ltr ss",
    Price: 1250
  },{
    company: "vyan",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "5 ltr ss",
    Price: 1590
  },{
    company: "vyan",
    itemGroup: "kuzhiyappam",
    groupName: "kuzhiyappam",
    itemName: "7 regular",
    Price: 475
  },{
    company: "vyan",
    itemGroup: "kuzhiyappam",
    groupName: "kuzhiyappam",
    itemName: "7 special",
    Price: 530
  },{
    company: "vyan",
    itemGroup: "kuzhiyappam",
    groupName: "kuzhiyappam",
    itemName: "7 jumbo",
    Price: 990
  },{
    company: "vyan",
    itemGroup: "kuzhiyappam",
    groupName: "kuzhiyappam",
    itemName: "9 sepcial",
    Price: 685
  },{
    company: "vyan",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan 240/3mm",
    Price: 595
  },{
    company: "vyan",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan cute 200/3mm",
    Price: 430
  },{
    company: "vyan",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan cute 200/3mm + lid",
    Price: 465
  },{
    company: "vyan",
    itemGroup: "tawa",
    groupName: "tawa",
    itemName: "tawa 260/3mm",
    Price: 425
  },{
    company: "vyan",
    itemGroup: "tawa",
    groupName: "tawa",
    itemName: "tawa 280/4mm",
    Price: 525
  },{
    company: "vyan",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai cute 200",
    Price: 495
  },{
    company: "vyan",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai 24",
    Price: 620
  },{
    company: "vyan",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai 28",
    Price: 750
  },{
    company: "vyan",
    itemGroup: "pathiri Tawa",
    groupName: "pathiri Tawa",
    itemName: "super 320/5mm",
    Price: 760
  },{
    company: "vyan",
    itemGroup: "appachatty",
    groupName: "appachatty",
    itemName: "appachatty deep 23",
    Price: 450
  },{
    company: "premix",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr",
    Price: 625
  },{
    company: "premix",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr",
    Price: 790
  },{
    company: "premix",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "3 ltr ss",
    Price: 1100
  },{
    company: "premix",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "5 ltr ss",
    Price: 1450
  },{
    company: "premix",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "1 kg",
    Price: 1550
  },{
    company: "premix",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "1.5 kg",
    Price: 1690
  },{
    company: "sukanya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr swatch",
    Price: 650
  },{
    company: "sukanya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr swatch",
    Price: 800
  }
];
wrapper.addEventListener("click", function (e) {

  if (e.target.classList[0] === "on-item") {
    hideAll();
    e.target.parentElement.nextElementSibling.classList.add("grpSh");
    e.target.parentElement.parentElement.classList.add("clickBg");
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-item");
    e.target.classList.remove("on-item");
  } 
  else if (e.target.classList[0] === "off-item" ) {
    e.target.parentElement.nextElementSibling.classList.remove("grpSh");
    e.target.parentElement.parentElement.classList.remove("clickBg");
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-item");
    e.target.classList.remove("off-item");
  }else if (e.target.classList[0] === "on-group" ) {
    hideAllGrp();
    e.target.parentElement.nextElementSibling.classList.add("itemSh");
    e.target.parentElement.classList.add("item-change");
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-group");
    e.target.classList.remove("on-group");
  } else if (e.target.classList[0] === "off-group") {
    e.target.parentElement.nextElementSibling.classList.remove("itemSh");
    e.target.parentElement.classList.remove("item-change");
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-group");
    e.target.classList.remove("off-group");
  };
  if (e.target.classList[0]==="comp"||e.target.classList[0]==="gpr") {
    
    if(e.target.nextElementSibling.classList[0]==="on-item"){
      hideAll();
      e.target.parentElement.nextElementSibling.classList.add("grpSh");
      e.target.parentElement.parentElement.classList.add("clickBg");
      e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
      e.target.nextElementSibling.classList.add("off-item");
      e.target.nextElementSibling.classList.remove("on-item");
    } else if (e.target.nextElementSibling.classList[0] === "off-item" ) {
      e.target.parentElement.nextElementSibling.classList.remove("grpSh");
      e.target.parentElement.parentElement.classList.remove("clickBg");
      e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
      e.target.nextElementSibling.classList.add("on-item");
      e.target.nextElementSibling.classList.remove("off-item");
    }else if (e.target.nextElementSibling.classList[0] === "on-group" ) {
      hideAllGrp();
      e.target.parentElement.nextElementSibling.classList.add("itemSh");
      e.target.parentElement.classList.add("item-change");
      e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
      e.target.nextElementSibling.classList.add("off-group");
      e.target.nextElementSibling.classList.remove("on-group");
    }else if (e.target.nextElementSibling.classList[0] === "off-group") {
      e.target.parentElement.nextElementSibling.classList.remove("itemSh");
      e.target.parentElement.classList.remove("item-change");
      e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
      e.target.nextElementSibling.classList.add("on-group");
      e.target.nextElementSibling.classList.remove("off-group");
    }
  }
  
});

function sortoutArray() {
  let pushcode =``;
  let sorted = companySort();
  sorted.forEach((comp) => {
    let grpary = [];
    let newAry = [];

    pushcode += `<div class="items">
            <div class="header">
                <p class="comp">${comp.charAt(0).toUpperCase() + comp.slice(1)}</p>
                <div class="on-item"></div>
            </div>
                      <div class="groups">
                      <div class = "grpHd">`;


    offerArray.forEach((val) => {
      if (val.company == comp) {
        grpary.push(val.itemGroup);
        newAry.push(val);
      }
    });
    grpary = [...new Set(grpary)];
    grpary.forEach((grp) => {
      let itnm = [];
      let new2ary = [];
      pushcode += ` 
            <div class="item-names">
                <div class="itmnm-head">
                    <p class="gpr">${grp.charAt(0).toUpperCase() + grp.slice(1)}</p>
                    <div class="on-group"></div>
                </div>
                         <div class="item-divs">
                         <div class = "itemHd">`;
                            
      newAry.forEach((val) => {
        if (val.itemGroup == grp) {
          itnm.push(val.groupName);
          new2ary.push(val);
        }
      });
      itnm = [...new Set(itnm)];
      itnm.forEach((itm) => {
        pushcode += `<fieldset>
                        <legend>${itm.charAt(0).toUpperCase() + itm.slice(1)}</legend>`;
        new2ary.forEach((val) => {
          if (val.groupName == itm) {
            pushcode += ` <div>
                            <p>${val.itemName.charAt(0).toUpperCase() + val.itemName.slice(1) }</p>
                            <p>Price : ${val.Price} /-</p>
                        </div>`;
          }
        });
        pushcode += `</fieldset>`;
      });
      pushcode +=`</div>
            </div>
        </div>`;
    });
    
    pushcode += `</div>
                </div>
                </div> `;
  });
  wrapper.innerHTML = pushcode;
}

function companySort() {
  let sortedItemArray = [];
  offerArray.forEach((val) => {
    sortedItemArray.push(val.company);
  });
  let sortedDArray = [...new Set(sortedItemArray)];
  let sortsorted = sortedDArray.sort();
  return sortsorted;
}

function callLocalstroage() {
  if (localStorage.getItem("offerPascode") && localStorage.getItem("offerPascode") == "vrs.0.11") {
    sortoutArray();
  }else{
  let msg = prompt('Please tha password', "");
  if (msg == "IQB-PKD") {
    localStorage.setItem("offerPascode","vrs.0.11");
    sortoutArray();
  }else{
   document.write("No Data found"); 
  }
  }
};

function hideAll(){
const offAll = document.querySelectorAll('.off-item');
const offAllg = document.querySelectorAll('.off-group');
offAll.forEach(function(offAll) {
  offAll.parentElement.nextElementSibling.classList.remove("grpSh");
  offAll.parentElement.parentElement.classList.remove("clickBg");
  offAll.style.cssText = "background-image: url(down-button.png);";
  offAll.classList.add("on-item");
  offAll.classList.remove("off-item");
});
  offAllg.forEach(function(offAllg) {
  offAllg.parentElement.nextElementSibling.classList.remove("itemSh");
  offAllg.parentElement.classList.remove("item-change");
  offAllg.style.cssText = "background-image: url(down-button.png);";
  offAllg.classList.add("on-group");
  offAllg.classList.remove("off-group");
});

}

function hideAllGrp(){
  const offAllg = document.querySelectorAll('.off-group');
  offAllg.forEach(function(offAllg) {
    offAllg.parentElement.nextElementSibling.classList.remove("itemSh");
      offAllg.parentElement.classList.remove("item-change");
    offAllg.style.cssText = "background-image: url(down-button.png);";
    offAllg.classList.add("on-group");
    offAllg.classList.remove("off-group");
});
}

callLocalstroage();
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("srworker.js").then(registration=>{
      console.log("Service worker registered")
      console.log(registration);
  }).catch(error=>{
      console.log("Service worker error")
      console.log(error)
  })
}else{
  alert("Service worker not working")
}

