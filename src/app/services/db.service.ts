import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Guess } from '../models/guess';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})

// DBService acts as an API to the rest of the project
export class DBService {
  private data = { // NO CHEATING !!!!
    1: new Question(1, "001.mp3", ["ba5ba39b31fe9ac8cb002305d1ecfff4", "fb7f6ffdf924c1f8397173c5e657fbb3"]),
    2: new Question(2, "002.mp3", ["6f03a97b24689efb249a671cf06f9801"]),
    3: new Question(3, "003.mp3", ["caecfa4a5896f1f918032ec46d169fbe"]),
    4: new Question(4, "004.mp3", ["8019bbde91550782bed02303883cd458"]),
    5: new Question(5, "005.mp3", ["1d0670cc0c3e8b7fe9f8f5ebf9e60af5"]),
    6: new Question(6, "006.mp3", ["03fdd4ba349c4d2115cde48f3ef7c769"]),
    7: new Question(7, "007.mp3", ["a3e3c6fd48ad55dac2c5b1adbdca0645"]),
    8: new Question(8, "008.mp3", ["432de5ae91969706d2ae0e0c8598c133"]),
    9: new Question(9, "009.mp3", ["b23076c194a651ba1db04776d4e7a2d2"]),
    10: new Question(10, "010.mp3", ["42216fd740c8b8d21ccefde1663fcd23"]),
    11: new Question(11, "011.mp3", ["740a5769ee4eadfcc613389d311fe817"]),
    12: new Question(12, "012.mp3", ["e3dcdb27bb0605a16069f0548af3c311"]),
    13: new Question(13, "013.mp3", ["1eeccf787b1a8c0197b47ce7450a1ee8"]),
    14: new Question(14, "014.mp3", ["643c80136e5cb2f8265c6bf8707ea281","8065333452bda9eba56a4777bb2e2b3b"]),
    15: new Question(15, "015.mp3", ["0771d9674439c2153bead046d4df4666"]),
    16: new Question(16, "016.mp3", ["e537ab834c9cd759830c29fa948ae7c7"]),
    17: new Question(17, "017.mp3", ["8ab9d9692a8bf57e5dbcb6511dfedb3a"]),
    18: new Question(18, "018.mp3", ["7bc44d97a4608f90122ebfe50291a23c"]),
    19: new Question(19, "019.mp3", ["57e4727545129f524a4c773c27a4818a"]),
    20: new Question(20, "020.mp3", ["58b3994b2fc2536ee6d208039d3f8849"]),
    21: new Question(21, "021.mp3", ["f2bce7604d3ce1652cd3e33fe6e9bbaf"]),
    22: new Question(22, "022.mp3", ["a8e5b6426a18b831f024867dcc0173d8"]),
    23: new Question(23, "023.mp3", ["da0ddac77bae231071182f6fe628a9af"]),
    24: new Question(24, "024.mp3", ["a956cdb042ec389c87ac0c3573c444f3", "68f614192d9334f1dcbfea27936f1582"]),
    25: new Question(25, "025.mp3", ["3f898d580c75efcc1f777a25d07ee87a", "c525d6ce658165387aa88ab7b33bfc9a"]),
    26: new Question(26, "026.mp3", ["a96ccc2b8128350199d0fdb44c2f3b5e"]),
    27: new Question(27, "027.mp3", ["a9a521bb615bf099b02caf6bb383599f"]),
    28: new Question(28, "028.mp3", ["df49d0466d30c0cae130d6de95fb602a"]),
    29: new Question(29, "029.mp3", ["a58747338cb431ce5b6aab90eb3eef57", "97ff5c4c63de5ef43cce46c66ee11ecf"]),
    30: new Question(30, "030.mp3", ["fa9e6e9a66b4cadd414c96a681b4d1bc", "e17c5be91a53d3b523b35ee7c5720fc8"]),
    31: new Question(31, "031.mp3", ["b623a7ab878082a49096612ac035b2c9", "6a14238fbf6deb020c045ff4fc139673"]),
    32: new Question(32, "032.mp3", ["90de871c20e6a4e2259ab996302267e9"]),
    33: new Question(33, "033.mp3", ["3401b36850145ed8ac09fd14febd0cf8"]),
    34: new Question(34, "034.mp3", ["b1d21ea1f158e447427ee8388dff3be4", "0dd57912dcd43d2bcb4531c061d3746c"]),
    35: new Question(35, "035.mp3", ["3e41d67d5461196c3e784fb6549f7763"]),
    36: new Question(36, "036.mp3", ["6a5f8188f75c7aa3896d3013f20f2eb1"]),
    37: new Question(37, "037.mp3", ["c87ffe24f98086a7c027b328b366efed", "1effce3f0ed3da0e1d973f88ddd8794c"]),
    38: new Question(38, "038.mp3", ["c485bb561918025e75545506984d363c"]),
    39: new Question(39, "039.mp3", ["5d98f64d3d00396b6459d43f720a176c"]),
    40: new Question(40, "040.mp3", ["dcc70aee50c889b0cacca1d333abb0d9"]),
    41: new Question(41, "041.mp3", ["362948139df5fc847e650e54bd30540e"]),
    42: new Question(42, "042.mp3", ["6064bb74fd6508b7edf99f1881c58a68"]),
    43: new Question(43, "043.mp3", ["2e13d85daa6f20848505930730cba223", "878a0d886d9610f8725cce82951fea26"]),
    44: new Question(44, "044.mp3", ["0e849f91c415cade253309b7e42ed7e4"]),
    45: new Question(45, "045.mp3", ["0edf6e6008c4f7aa73be751471f30d8d"]),
    46: new Question(46, "046.mp3", ["1e74841459d67d6680a9919eda33157a"]),
    47: new Question(47, "047.mp3", ["6e07dad7d7b2e31781275a16c1eee1e4", "87d437e7d074296c63f333aecbc76966"]),
    48: new Question(48, "048.mp3", ["69983e1b474154a8017050a62846985d"]),
    49: new Question(49, "049.mp3", ["3dc796ffb26c4a0050216b3f43c1ea87"]),
    50: new Question(50, "050.mp3", ["97999f0bcdb762056642e72954daaa8b", "b04f3c8965b5297215003d7e6665dcf5"]),
    51: new Question(51, "051.mp3", ["b07b89b1d596bc0d32cbabed34147efd"]),
    52: new Question(52, "052.mp3", ["2cb3f4f9bfede0a2476fc98e693e133a"]),
    53: new Question(53, "053.mp3", ["58873db49e8d8a91632f0d810c25a06f"]),
    54: new Question(54, "054.mp3", ["0a9ab640460634071aeaff0db1b16047"]),
    55: new Question(55, "055.mp3", ["281d4549f0d2c868ef310db898404854"]),
    56: new Question(56, "056.mp3", ["6fda5e3aacf216e789abb5ebcb1f1e4b", "0670055a64c1a53cce54017cc0a9175b"]),
    57: new Question(57, "057.mp3", ["6251734d8ce4a6034bd1d6b4672826ab"]),
    58: new Question(58, "058.mp3", ["1a066c0be1221f43c34039afcd937fda"]),
    59: new Question(59, "059.mp3", ["efd2828d06a781dd26b5c224baca946f"]),
    60: new Question(60, "060.mp3", ["f716f1fd8b3abe9615188c1e11592c46"]),
    61: new Question(61, "061.mp3", ["69dba75b641ccde433e0512496f72b28"]),
    62: new Question(62, "062.mp3", ["7c622bb6ca06fad62c84c65fad8d98e9"]),
    63: new Question(63, "063.mp3", ["e827aa1ed78e96a113182dce12143f9f"]),
    64: new Question(64, "064.mp3", ["7247f3a37037280833b9ece8113ab400"]),
    65: new Question(65, "065.mp3", ["8d6e3fb8c9908f1cddb3234e9dd8e241"]),
    66: new Question(66, "066.mp3", ["91bc91f0a136927fc7d64fbac77808ff", "959038ec068437d00fb54ab4650f601d"]),
    67: new Question(67, "067.mp3", ["82941f9fc1e62a9ba4c52f2ed4dd7991"]),
    68: new Question(68, "068.mp3", ["12c44e31efc48fb437fe5f4b6771ba3b"]),
    69: new Question(69, "069.mp3", ["659cf05b11c7a91271f87e871b22d007"]),
    70: new Question(70, "070.mp3", ["6a7052885129551d4b273e8e89c4e8a4"]),
    71: new Question(71, "071.mp3", ["22995f8817711b8762a31ccbd8cda64c", "941d5395f2ac50065dedddaac5b9c2b0"]),
    72: new Question(72, "072.mp3", ["ce942a4923554ec5ec3cd601f917aa85"]),
    73: new Question(73, "073.mp3", ["948952cba9c4a20c21e153c2dca17599"]),
    74: new Question(74, "074.mp3", ["c4663e9dc91f3441b0faf49f8f93c135"]),
    75: new Question(75, "075.mp3", ["05ec9f906f229428abf3ae7b750f2545", "20b1019a47eec3e5e344187bac8942e7", "e08b6cfcc111c90e51135482c6bb1963", "2b76e7158b49addfa61f36c94e756a42"]),
    76: new Question(76, "076.mp3", ["8b5b5754e457a785871b77f073982b94"]),
    77: new Question(77, "077.mp3", ["320e1014b6c145d431cd370a1883b352", "7eea0a82a3e1a288d33b97e28650618e"]),
    78: new Question(78, "078.mp3", ["e281b11d51d18a07109d3b894010350d"]),
    79: new Question(79, "079.mp3", ["3dac27bdae1ec3809f477985f796375b"]),
    80: new Question(80, "080.mp3", ["771ce60d897bcf12aa0a2813414c51d1"]),
    81: new Question(81, "081.mp3", ["4bb4fde65e2a139b670de0cbec859f75"]),
    82: new Question(82, "082.mp3", ["af17bc3b4a86a96a0f053a7e5f7c18ba"]),
    83: new Question(83, "083.mp3", ["2ca63cddd54f9490efad22421891a9d1"]),
    84: new Question(84, "084.mp3", ["06f0da25eb13d63385fea38a6a62a88f"]),
    85: new Question(85, "085.mp3", ["8e29ea661ae4f93601cae667a42ab193", "0b5c288e423df31798dc152fbdc0da42"]),
    86: new Question(86, "086.mp3", ["6f1bdb83ff15dbd1870998fa59801e0a", "81e0fd291c59af442639120db3b976d4"]),
    87: new Question(87, "087.mp3", ["90954349a0e42d8e4426a4672bde16b9"]),
    88: new Question(88, "088.mp3", ["ce85e3ffcc38e44bbf3c448a9425904d", "41bfaf43ff4e96ddec56ac6473f124e4"]),
    89: new Question(89, "089.mp3", ["f27a0ac36042a163fdb63caf7a73607f"]),
    90: new Question(90, "090.mp3", ["520783fffa010e3879bc51b61dfd79aa"]),
    91: new Question(91, "091.mp3", ["48d5dd56552302e4939ce75d0a7f3689"]),
    92: new Question(92, "092.mp3", ["70fcc05bbb80e77b59ab007e12d9ad7b"]),
    93: new Question(93, "093.mp3", ["af08ea9555ca356890722a99b133f432"]),
    94: new Question(94, "094.mp3", ["676425afc91f8c5b45e4c3ea367ce167"]),
    95: new Question(95, "095.mp3", ["eea5e5e3119e10f72be40985a37c4338"]),
    96: new Question(96, "096.mp3", ["8c6243fae5207046786ded7d6485196a"]),
    97: new Question(97, "097.mp3", ["875e327b0a581663c22c0e2e29b960e3"]),
    98: new Question(98, "098.mp3", ["b125aa37fbd830e6625f259e193defed"]),
    99: new Question(99, "099.mp3", ["2b755b30293f2f9f79ec1c86ab0943f2"]),
    100: new Question(100, "100.mp3", ["b9653cdf64950bfa2eaa39d8b07fd8ca"]),
    101: new Question(101, "101.mp3", ["7d59e65d30ee67d4533e29dd386288e7", "e9d5ac2b822abf28170e9d0c68fdb0b3"]),
    102: new Question(102, "102.mp3", ["b5e378a729f15c6fdc5b699d4f0492bd"]),
    103: new Question(103, "103.mp3", ["2644a06ad1c985ca635143015c8e55cd"]),
    104: new Question(104, "104.mp3", ["c6887cbf348ce5aeaa77dff31d57753e"]),
    105: new Question(105, "105.mp3", ["da11fefbd8d6d084ba5acb28c387d860"]),
    106: new Question(106, "106.mp3", ["91bd4c258a56ba36930b119c8a0d29c4"]),
    107: new Question(107, "107.mp3", ["8f4c6c880d1d90c01fd65924c8ab40d7"]),
    108: new Question(108, "108.mp3", ["502e42a162dd9910cb4973abbb2d48fa"]),
    109: new Question(109, "109.mp3", ["e737b404e7f5ef7cef1c952f3c3df861"]),
    110: new Question(110, "110.mp3", ["f4fd8ef8720ab5650f60f55aae44a8de"]),
    111: new Question(111, "111.mp3", ["c4ea0310de5eb9432aaf739f0cdb666d"]),
    112: new Question(112, "112.mp3", ["a91e739c8bf40e81f7f27fe292924893", "8361b8f205df98bb7d2fa2de24810eac", "c4da46d4f8ec2df8763a895397553118"]),
    113: new Question(113, "113.mp3", ["9f05aa4202e4ce8d6a72511dc735cce9", "1040b420f190576e9798b70f7af55168"]),
    114: new Question(114, "114.mp3", ["ec578a092f08fee24e7be937c86755c7"]),
    115: new Question(115, "115.mp3", ["d09066cfeef4736a5b6f15f8e09205a0"]),
    116: new Question(116, "116.mp3", ["10ae8d83c4e07e4b32d3a2652f20421c"]),
    117: new Question(117, "117.mp3", ["1bb7e5821a81055e38d0be660c372ace"]),
    118: new Question(118, "118.mp3", ["2cd701853436e398c105da346a305afe"]),
    119: new Question(119, "119.mp3", ["724874d1be77f450a09b305fc1534afb"]),
    120: new Question(120, "120.mp3", ["0f199d717cc0b0fe1e677a1f79e5c425"]),
    121: new Question(121, "121.mp3", ["819d1160fa0dc2a236bc02b3c4e992cf"]),
    122: new Question(122, "122.mp3", ["613cabc77ea10eedc720eda5cbb72bde"]),
    123: new Question(123, "123.mp3", ["a312618909ae3ca29028d15c5e67a69e"]),
    124: new Question(124, "124.mp3", ["fdebaa1a73dc97edeb22a1efa5d9d639"]),
    125: new Question(125, "125.mp3", ["8fd8cfec0b7c72cec0534cffc5716ab7"]),
    126: new Question(126, "126.mp3", ["45b19ddca662722fab8ec662982c26a0", "6d6a9cb97ea4c3edfc07a4757f3f49a9"]),
    127: new Question(127, "127.mp3", ["9dfb7ad9b01bd4b767814fea0c69b277"]),
    128: new Question(128, "128.mp3", ["747f1a50f6f47ebfe553bf448b04ea07"]),
    129: new Question(129, "129.mp3", ["f7127811ed2164f860029e30f2d10f62"]),
    130: new Question(130, "130.mp3", ["2164da8b15e2fed494f83cbe46bc7821"]),
    131: new Question(131, "131.mp3", ["2e92d188dbdbd88e7c15831f4abfe1fc"]),
    132: new Question(132, "132.mp3", ["a0a4b6162941b32c4153da8e6a52186f"]),
    133: new Question(133, "133.mp3", ["a86ab2ee2501c0c0ef5865024ce29a7a", "093991d02c6ae6793cdf64bca25124c9"]),
    134: new Question(134, "134.mp3", ["b85b9f545690d1278ed1fca330293f68"]),
    135: new Question(135, "135.mp3", ["b247a89ceb3e3139f758615a08996fa5"]),
    136: new Question(136, "136.mp3", ["c48ba993d35c3abe0380f91738fe2a34"]),
    137: new Question(137, "137.mp3", ["4a53471bea4035b07c04500b69528682", "5c7b1726db87ce8a7abea21f2100705c"]),
    138: new Question(138, "138.mp3", ["04ca3e8cbf95642b4f9abb456de64cbb"]),
    139: new Question(139, "139.mp3", ["7cc7e4aa13907bc72bd4f0102505195e"]),
    140: new Question(140, "140.mp3", ["f65eb10bf58bc8677ff42ba7935ace43"]),
    141: new Question(141, "141.mp3", ["2e54e32faa94121f809caa61b56fc643"]),
    142: new Question(142, "142.mp3", ["3493fc96411ca6dedc334064356bf03b"]),
    143: new Question(143, "143.mp3", ["0ca06ed5fe7ae581bea50722f4b86ffe"]),
    144: new Question(144, "144.mp3", ["f5888d0bb58d611107e11f7cbc41c97a"]),
    145: new Question(145, "145.mp3", ["1bbf55c419ac6199c15dbfd165ca0553"]),
    146: new Question(146, "146.mp3", ["a2e4a8c5f34cd234eff3f9fee34e03af"]),
    147: new Question(147, "147.mp3", ["853bdd86153fadfda4c0b73e6e462bec"]),
    148: new Question(148, "148.mp3", ["619b446f1df515147442f2e5f66be628"]),
    149: new Question(149, "149.mp3", ["af33cca8920794bd808044ce8c946ef0"]),
    150: new Question(150, "150.mp3", ["8a3ce04d4bc723b9e187cc84369738d2"]),
    151: new Question(151, "151.mp3", ["ec2182992215ec2a54506979a4ed715b"]),
    152: new Question(152, "152.mp3", ["910e96b4f055ea9cdf95885a12481869", "22320e4907e0bd3ac915c60ab1355896"]),
    153: new Question(153, "153.mp3", ["7fc8b01e77bcacf6d5662638f67c71b8"]),
    154: new Question(154, "154.mp3", ["2b8e1d80f78a47378940d49691b42369"]),
    155: new Question(155, "155.mp3", ["3079af37b1536156013166e9b8d9529e"]),
    156: new Question(156, "156.mp3", ["0e5fbe5fa96b50e6cd8e8e1542583cae"]),
    157: new Question(157, "157.mp3", ["ec0e2603172c73a8b644bb9456c1ff6e"]),
    158: new Question(158, "158.mp3", ["d04e5b568206b5caaa4cb1fc39aae0c1"]),
    159: new Question(159, "159.mp3", ["f110b57e6e99698c9e18405e9c8ab94e", "cf4c875f9391a897b6bb8a7faf8eb50c"]),
    160: new Question(160, "160.mp3", ["2eb4e15d0c98fec4ec126187c9a840d5", "18c085513f3b326792a2c0b593202aca"]),
    161: new Question(161, "161.mp3", ["bfc62199989429cdf3a778bfed5137f6"]),
    162: new Question(162, "162.mp3", ["c566cf41f3cfd7f9ec0ee27336132c92"]),
    163: new Question(163, "163.mp3", ["43a223d38f1c8624f3e64f19a51f4214"]),
    164: new Question(164, "164.mp3", ["c64434db85fcde1bd026a94b933c76a6"]),
    165: new Question(165, "165.mp3", ["261d0847f4ced77923a0193e97655df6"]),
    166: new Question(166, "166.mp3", ["3abcb1765302ef6e908ea2a355eedb39"]),
    167: new Question(167, "167.mp3", ["c9dc004fc3d039ad7fb49456e5902b01","6865c5a40b43eb8a9a250464b1d3e1ff"]),
    168: new Question(168, "168.mp3", ["9fab36cc63eac0a9951edd4e6a6ac6f8"]),
    169: new Question(169, "169.mp3", ["ebeb757ff15e42e209af67037776f107"]),
    170: new Question(170, "170.mp3", ["d2d4197b1a4f7777c5682e78af4f85f1"]),
    171: new Question(171, "171.mp3", ["29675bc070c0947fcad138acb704b4a9"]),
    172: new Question(172, "172.mp3", ["9452226bdde35f369f4eb210f4b07481","adb892f575c3664da4f13c81d8e7c90f"]),
    173: new Question(173, "173.mp3", ["30e4e72de0240353b7b44a6ff15e8391"]),
    174: new Question(174, "174.mp3", ["15fa047acd14a9700f3ff0bc0b7bb87b", "2da3edf6229946e9fee404b3d4450e47"]),
    175: new Question(175, "175.mp3", ["17e14d828e367d5000305841282fbe29"]),
    176: new Question(176, "176.mp3", ["5503aca25f0c4dbdbde776cf42149eb7", "60f9263cc13b12388fad4fa2ce77147b"]),
    177: new Question(177, "177.mp3", ["a197f8794f33d77ed7df35054eab9bed"]),
    178: new Question(178, "178.mp3", ["0e128c860cba366eb5f76e03cafd640b"]),
    179: new Question(179, "179.mp3", ["26d2472d518081c3345c4206d5ff2c12"]),
    180: new Question(180, "180.mp3", ["28f20a02bf8a021fab4fcec48afb584e"]),
    181: new Question(181, "181.mp3", ["da5816e386d41245fdf72909540821e5", "b4a740ecd709fcc0a4e9e8716bbff8a5"]),
    182: new Question(182, "182.mp3", ["8b9276f10dcc21c0330c39a7ffdd7004"]),
    183: new Question(183, "183.mp3", ["7b8b08ba43f9784f370d8341ccc28b58"]),
    184: new Question(184, "184.mp3", ["8d52a7b986c3da214c5fa9e727d39b54"]),
    185: new Question(185, "185.mp3", ["f5a3a1836d4dc89ded44f8f19f1eaa7f"]),
    186: new Question(186, "186.mp3", ["f76df044f28a80ca1c4e5736705f9164"]),
    187: new Question(187, "187.mp3", ["1a582767fe46f543701151fd77822c33"]),
    188: new Question(188, "188.mp3", ["eda068609ddc676db8e4507148d7910a"]),
    189: new Question(189, "189.mp3", ["64e538d4e96a48621aec189d549803fe"]),
    190: new Question(190, "190.mp3", ["0b659bfa6bda30297ccd1a8920eb82cf", "145fb20bda81a8a5837721ad702f2c17"]),
    191: new Question(191, "191.mp3", ["b77df2d0a5e3a1923c60a3b846d040b5", "6b331e04bcdb15a940ffe977183dc840"]),
    192: new Question(192, "192.mp3", ["ab31c83a470b4445f38cc1a76ac42be9"]),
    193: new Question(193, "193.mp3", ["5d7483803d032615150d74fc59a427d1"]),
    194: new Question(194, "194.mp3", ["5664229a969f7e8d9f5dd2deb5373d61"]),
    195: new Question(195, "195.mp3", ["b3d97019ebec40aa80f53f9e48ba63ea"]),
    196: new Question(196, "196.mp3", ["2aba97fc55396df812326d95056779ed"]),
    197: new Question(197, "197.mp3", ["85a19efb71a20688b8e629c577542bed"]),
    198: new Question(198, "198.mp3", ["98045b0b718879ef51bda28f054dc759", "1d9637034f20a9b38a34d56c507da965"]),
    199: new Question(199, "199.mp3", ["54581daf626cd7f77980e7999b7dd6ab"]),
    200: new Question(200, "200.mp3", ["0a9ab640460634071aeaff0db1b16047"])
  };
  

  constructor(private cache: CacheService) { }

  async getAll(): Promise<Question[]>{
    return this.prepare().then(_ => {
      return this.questions();
    })
  }

  saveQuestion(question: Question){
    this.cache.saveQuestion(question);
  }

  async reset(): Promise<void>{
    this.questions().forEach((q: Question) => {
      q.guess.reset();
    });
    return this.cache.reset();
  }

  // build questions and merge cached results
  private async prepare(): Promise<void>{
    return this.cache.getAll().then((resp: Guess[]) => { 
      resp.forEach(guess => { this.processCachedGuess(guess); });
    });
  }

  private processCachedGuess(guess: Guess) {
    let question = this.data[guess.id]; // avoid scanner loops
    if(question){
      // not sure if the original raw data should be modified
      question.guess.answer = guess.answer;
      question.guess.status = guess.status;
    }
  }

  private questions(): Question[]{
    return Object.values(this.data);
  }
}
