import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Md5 } from 'ts-md5/dist/md5'; 
import { Guess } from '../guess';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  private data: any = [
    {
      id: 1,
      filename: "001.mp3",
      options: ["ba5ba39b31fe9ac8cb002305d1ecfff4", "fb7f6ffdf924c1f8397173c5e657fbb3"]
    },
    {
      id: 2,
      filename: "002.mp3",
      options: ["6f03a97b24689efb249a671cf06f9801"]
    },
    {
      id: 3,
      filename: "003.mp3",
      options: ["caecfa4a5896f1f918032ec46d169fbe"]
    },
    {
      id: 4,
      filename: "004.mp3",
      options: ["8019bbde91550782bed02303883cd458"]
    },
    {
      id: 5,
      filename: "005.mp3",
      options: ["1d0670cc0c3e8b7fe9f8f5ebf9e60af5"]
    },
    {
      id: 6,
      filename: "006.mp3",
      options: ["03fdd4ba349c4d2115cde48f3ef7c769"]
    },
    {
      id: 7,
      filename: "007.mp3",
      options: ["a3e3c6fd48ad55dac2c5b1adbdca0645"]
    },
    {
      id: 8,
      filename: "008.mp3",
      options: ["432de5ae91969706d2ae0e0c8598c133"]
    },
    {
      id: 9,
      filename: "009.mp3",
      options: ["b23076c194a651ba1db04776d4e7a2d2"]
    },
    {
      id: 10,
      filename: "010.mp3",
      options: ["42216fd740c8b8d21ccefde1663fcd23"]
    },
    {
      id: 11,
      filename: "011.mp3",
      options: ["740a5769ee4eadfcc613389d311fe817"]
    },
    {
      id: 12,
      filename: "012.mp3",
      options: ["e3dcdb27bb0605a16069f0548af3c311"]
    },
    {
      id: 13,
      filename: "013.mp3",
      options: ["1eeccf787b1a8c0197b47ce7450a1ee8"]
    },
    {
      id: 14,
      filename: "014.mp3",
      options: ["643c80136e5cb2f8265c6bf8707ea281","8065333452bda9eba56a4777bb2e2b3b"]
    },
    {
      id: 15,
      filename: "015.mp3",
      options: ["0771d9674439c2153bead046d4df4666"]
    },
    {
      id: 16,
      filename: "016.mp3",
      options: ["e537ab834c9cd759830c29fa948ae7c7"]
    },
    {
      id: 17,
      filename: "017.mp3",
      options: ["8ab9d9692a8bf57e5dbcb6511dfedb3a"]
    },
    {
      id: 18,
      filename: "018.mp3",
      options: ["7bc44d97a4608f90122ebfe50291a23c"]
    },
    {
      id: 19,
      filename: "019.mp3",
      options: ["57e4727545129f524a4c773c27a4818a"]
    },
    {
      id: 20,
      filename: "020.mp3",
      options: ["58b3994b2fc2536ee6d208039d3f8849"]
    },
    {
      id: 21,
      filename: "021.mp3",
      options: ["f2bce7604d3ce1652cd3e33fe6e9bbaf"]
    },
    {
      id: 22,
      filename: "022.mp3",
      options: ["a8e5b6426a18b831f024867dcc0173d8"]
    },
    {
      id: 23,
      filename: "023.mp3",
      options: ["da0ddac77bae231071182f6fe628a9af"]
    },
    {
      id: 24,
      filename: "024.mp3",
      options: ["a956cdb042ec389c87ac0c3573c444f3", "68f614192d9334f1dcbfea27936f1582"]
    },
    {
      id: 25,
      filename: "025.mp3",
      options: ["3f898d580c75efcc1f777a25d07ee87a"]
    },
    {
      id: 26,
      filename: "026.mp3",
      options: ["a96ccc2b8128350199d0fdb44c2f3b5e"]
    },
    {
      id: 27,
      filename: "027.mp3",
      options: ["a9a521bb615bf099b02caf6bb383599f"]
    },
    {
      id: 28,
      filename: "028.mp3",
      options: ["df49d0466d30c0cae130d6de95fb602a"]
    },
    {
      id: 29,
      filename: "029.mp3",
      options: ["a58747338cb431ce5b6aab90eb3eef57", "97ff5c4c63de5ef43cce46c66ee11ecf"]
    },
    {
      id: 30,
      filename: "030.mp3",
      options: ["fa9e6e9a66b4cadd414c96a681b4d1bc", "e17c5be91a53d3b523b35ee7c5720fc8"]
    },
    {
      id: 31,
      filename: "031.mp3",
      options: ["b623a7ab878082a49096612ac035b2c9", "6a14238fbf6deb020c045ff4fc139673"]
    },
    {
      id: 32,
      filename: "032.mp3",
      options: ["90de871c20e6a4e2259ab996302267e9"]
    },
    {
      id: 33,
      filename: "033.mp3",
      options: ["3401b36850145ed8ac09fd14febd0cf8"]
    },
    {
      id: 34,
      filename: "034.mp3",
      options: ["b1d21ea1f158e447427ee8388dff3be4", "0dd57912dcd43d2bcb4531c061d3746c"]
    },
    {
      id: 35,
      filename: "035.mp3",
      options: ["3e41d67d5461196c3e784fb6549f7763"]
    },
    {
      id: 36,
      filename: "036.mp3",
      options: ["6a5f8188f75c7aa3896d3013f20f2eb1"]
    },
    {
      id: 37,
      filename: "037.mp3",
      options: ["c87ffe24f98086a7c027b328b366efed", "1effce3f0ed3da0e1d973f88ddd8794c"]
    },
    {
      id: 38,
      filename: "038.mp3",
      options: ["c485bb561918025e75545506984d363c"]
    },
    {
      id: 39,
      filename: "039.mp3",
      options: ["5d98f64d3d00396b6459d43f720a176c"]
    },
    {
      id: 40,
      filename: "040.mp3",
      options: ["dcc70aee50c889b0cacca1d333abb0d9"]
    },
    {
      id: 41,
      filename: "041.mp3",
      options: ["362948139df5fc847e650e54bd30540e"]
    },
    {
      id: 42,
      filename: "042.mp3",
      options: ["6064bb74fd6508b7edf99f1881c58a68"]
    },
    {
      id: 43,
      filename: "043.mp3",
      options: ["2e13d85daa6f20848505930730cba223", "878a0d886d9610f8725cce82951fea26"]
    },
    {
      id: 44,
      filename: "044.mp3",
      options: ["0e849f91c415cade253309b7e42ed7e4"]
    },
    {
      id: 45,
      filename: "045.mp3",
      options: ["0edf6e6008c4f7aa73be751471f30d8d"]
    },
    {
      id: 46,
      filename: "046.mp3",
      options: ["1e74841459d67d6680a9919eda33157a"]
    },
    {
      id: 47,
      filename: "047.mp3",
      options: ["6e07dad7d7b2e31781275a16c1eee1e4", "87d437e7d074296c63f333aecbc76966"]
    },
    {
      id: 48,
      filename: "048.mp3",
      options: ["69983e1b474154a8017050a62846985d"]
    },
    {
      id: 49,
      filename: "049.mp3",
      options: ["3dc796ffb26c4a0050216b3f43c1ea87"]
    },
    {
      id: 50,
      filename: "050.mp3",
      options: ["97999f0bcdb762056642e72954daaa8b", "b04f3c8965b5297215003d7e6665dcf5"]
    },
    {
      id: 51,
      filename: "051.mp3",
      options: ["b07b89b1d596bc0d32cbabed34147efd"]
    },
    {
      id: 52,
      filename: "052.mp3",
      options: ["2cb3f4f9bfede0a2476fc98e693e133a"]
    },
    {
      id: 53,
      filename: "053.mp3",
      options: ["58873db49e8d8a91632f0d810c25a06f"]
    },
    {
      id: 54,
      filename: "054.mp3",
      options: ["0a9ab640460634071aeaff0db1b16047"]
    },
    {
      id: 55,
      filename: "055.mp3",
      options: ["281d4549f0d2c868ef310db898404854"]
    },
    {
      id: 56,
      filename: "056.mp3",
      options: ["6fda5e3aacf216e789abb5ebcb1f1e4b", "0670055a64c1a53cce54017cc0a9175b"]
    },
    {
      id: 57,
      filename: "057.mp3",
      options: ["6251734d8ce4a6034bd1d6b4672826ab"]
    },
    {
      id: 58,
      filename: "058.mp3",
      options: ["1a066c0be1221f43c34039afcd937fda"]
    },
    {
      id: 59,
      filename: "059.mp3",
      options: ["efd2828d06a781dd26b5c224baca946f"]
    },
    {
      id: 60,
      filename: "060.mp3",
      options: ["f716f1fd8b3abe9615188c1e11592c46"]
    },
    {
      id: 61,
      filename: "061.mp3",
      options: ["69dba75b641ccde433e0512496f72b28"]
    },
    {
      id: 62,
      filename: "062.mp3",
      options: ["7c622bb6ca06fad62c84c65fad8d98e9"]
    },
    {
      id: 63,
      filename: "063.mp3",
      options: ["e827aa1ed78e96a113182dce12143f9f"]
    },
    {
      id: 64,
      filename: "064.mp3",
      options: ["7247f3a37037280833b9ece8113ab400"]
    },
    {
      id: 65,
      filename: "065.mp3",
      options: ["8d6e3fb8c9908f1cddb3234e9dd8e241"]
    },
    {
      id: 66,
      filename: "066.mp3",
      options: ["91bc91f0a136927fc7d64fbac77808ff", "959038ec068437d00fb54ab4650f601d"]
    },
    {
      id: 67,
      filename: "067.mp3",
      options: ["82941f9fc1e62a9ba4c52f2ed4dd7991"]
    },
    {
      id: 68,
      filename: "068.mp3",
      options: ["12c44e31efc48fb437fe5f4b6771ba3b"]
    },
    {
      id: 69,
      filename: "069.mp3",
      options: ["659cf05b11c7a91271f87e871b22d007"]
    },
    {
      id: 70,
      filename: "070.mp3",
      options: ["6a7052885129551d4b273e8e89c4e8a4"]
    },
    {
      id: 71,
      filename: "071.mp3",
      options: ["22995f8817711b8762a31ccbd8cda64c"]
    },
    {
      id: 72,
      filename: "072.mp3",
      options: ["ce942a4923554ec5ec3cd601f917aa85"]
    },
    {
      id: 73,
      filename: "073.mp3",
      options: ["948952cba9c4a20c21e153c2dca17599"]
    },
    {
      id: 74,
      filename: "074.mp3",
      options: ["c4663e9dc91f3441b0faf49f8f93c135"]
    },
    {
      id: 75,
      filename: "075.mp3",
      options: ["05ec9f906f229428abf3ae7b750f2545"]
    },
    {
      id: 76,
      filename: "076.mp3",
      options: ["f1067e7173c7b9e6714ec7c88cf04bb1"]
    },
    {
      id: 77,
      filename: "077.mp3",
      options: ["320e1014b6c145d431cd370a1883b352", "7eea0a82a3e1a288d33b97e28650618e"]
    },
    {
      id: 78,
      filename: "078.mp3",
      options: ["e281b11d51d18a07109d3b894010350d"]
    },
    {
      id: 79,
      filename: "079.mp3",
      options: ["3dac27bdae1ec3809f477985f796375b"]
    },
    {
      id: 80,
      filename: "080.mp3",
      options: ["771ce60d897bcf12aa0a2813414c51d1"]
    },
    {
      id: 81,
      filename: "081.mp3",
      options: ["4bb4fde65e2a139b670de0cbec859f75"]
    },
    {
      id: 82,
      filename: "082.mp3",
      options: ["af17bc3b4a86a96a0f053a7e5f7c18ba"]
    },
    {
      id: 83,
      filename: "083.mp3",
      options: ["2ca63cddd54f9490efad22421891a9d1"]
    },
    {
      id: 84,
      filename: "084.mp3",
      options: ["06f0da25eb13d63385fea38a6a62a88f"]
    },
    {
      id: 85,
      filename: "085.mp3",
      options: ["8e29ea661ae4f93601cae667a42ab193", "0b5c288e423df31798dc152fbdc0da42"]
    },
    {
      id: 86,
      filename: "086.mp3",
      options: ["6f1bdb83ff15dbd1870998fa59801e0a", "d309a9885a6d0f111a8773d416aa723b"]
    },
    {
      id: 87,
      filename: "087.mp3",
      options: ["90954349a0e42d8e4426a4672bde16b9"]
    },
    {
      id: 88,
      filename: "088.mp3",
      options: ["ce85e3ffcc38e44bbf3c448a9425904d", "41bfaf43ff4e96ddec56ac6473f124e4"]
    },
    {
      id: 89,
      filename: "089.mp3",
      options: ["f27a0ac36042a163fdb63caf7a73607f"]
    },
    {
      id: 90,
      filename: "090.mp3",
      options: ["520783fffa010e3879bc51b61dfd79aa"]
    },
    {
      id: 91,
      filename: "091.mp3",
      options: ["48d5dd56552302e4939ce75d0a7f3689"]
    },
    {
      id: 92,
      filename: "092.mp3",
      options: ["70fcc05bbb80e77b59ab007e12d9ad7b"]
    },
    {
      id: 93,
      filename: "093.mp3",
      options: ["af08ea9555ca356890722a99b133f432"]
    },
    {
      id: 94,
      filename: "094.mp3",
      options: ["676425afc91f8c5b45e4c3ea367ce167"]
    },
    {
      id: 95,
      filename: "095.mp3",
      options: ["eea5e5e3119e10f72be40985a37c4338"]
    },
    {
      id: 96,
      filename: "096.mp3",
      options: ["8c6243fae5207046786ded7d6485196a"]
    },
    {
      id: 97,
      filename: "097.mp3",
      options: ["875e327b0a581663c22c0e2e29b960e3"]
    },
    {
      id: 98,
      filename: "098.mp3",
      options: ["b125aa37fbd830e6625f259e193defed"]
    },
    {
      id: 99,
      filename: "099.mp3",
      options: ["2b755b30293f2f9f79ec1c86ab0943f2"]
    },
    {
      id: 100,
      filename: "100.mp3",
      options: ["b9653cdf64950bfa2eaa39d8b07fd8ca"]
    },
    {
      id: 101,
      filename: "101.mp3",
      options: ["7d59e65d30ee67d4533e29dd386288e7"]
    },
    {
      id: 102,
      filename: "102.mp3",
      options: ["b5e378a729f15c6fdc5b699d4f0492bd"]
    },
    {
      id: 103,
      filename: "103.mp3",
      options: ["2644a06ad1c985ca635143015c8e55cd"]
    },
    {
      id: 104,
      filename: "104.mp3",
      options: ["c6887cbf348ce5aeaa77dff31d57753e"]
    },
    {
      id: 105,
      filename: "105.mp3",
      options: ["da11fefbd8d6d084ba5acb28c387d860"]
    },
    {
      id: 106,
      filename: "106.mp3",
      options: ["91bd4c258a56ba36930b119c8a0d29c4"]
    },
    {
      id: 107,
      filename: "107.mp3",
      options: ["8f4c6c880d1d90c01fd65924c8ab40d7"]
    },
    {
      id: 108,
      filename: "108.mp3",
      options: ["502e42a162dd9910cb4973abbb2d48fa"]
    },
    {
      id: 109,
      filename: "109.mp3",
      options: ["e737b404e7f5ef7cef1c952f3c3df861"]
    },
    {
      id: 110,
      filename: "110.mp3",
      options: ["f4fd8ef8720ab5650f60f55aae44a8de"]
    },
    {
      id: 111,
      filename: "111.mp3",
      options: ["c4ea0310de5eb9432aaf739f0cdb666d"]
    },
    {
      id: 112,
      filename: "112.mp3",
      options: ["a91e739c8bf40e81f7f27fe292924893", "8361b8f205df98bb7d2fa2de24810eac", "c4da46d4f8ec2df8763a895397553118"]
    },
    {
      id: 113,
      filename: "113.mp3",
      options: ["9f05aa4202e4ce8d6a72511dc735cce9", "1040b420f190576e9798b70f7af55168"]
    },
    {
      id: 114,
      filename: "114.mp3",
      options: ["ec578a092f08fee24e7be937c86755c7"]
    },
    {
      id: 115,
      filename: "115.mp3",
      options: ["d09066cfeef4736a5b6f15f8e09205a0"]
    },
    {
      id: 116,
      filename: "116.mp3",
      options: ["10ae8d83c4e07e4b32d3a2652f20421c"]
    },
    {
      id: 117,
      filename: "117.mp3",
      options: ["1bb7e5821a81055e38d0be660c372ace"]
    },
    {
      id: 118,
      filename: "118.mp3",
      options: ["2cd701853436e398c105da346a305afe"]
    },
    {
      id: 119,
      filename: "119.mp3",
      options: ["724874d1be77f450a09b305fc1534afb"]
    },
    {
      id: 120,
      filename: "120.mp3",
      options: ["0f199d717cc0b0fe1e677a1f79e5c425"]
    },
    {
      id: 121,
      filename: "121.mp3",
      options: ["819d1160fa0dc2a236bc02b3c4e992cf"]
    },
    {
      id: 122,
      filename: "122.mp3",
      options: ["613cabc77ea10eedc720eda5cbb72bde"]
    },
    {
      id: 123,
      filename: "123.mp3",
      options: ["a312618909ae3ca29028d15c5e67a69e"]
    },
    {
      id: 124,
      filename: "124.mp3",
      options: ["fdebaa1a73dc97edeb22a1efa5d9d639"]
    },
    {
      id: 125,
      filename: "125.mp3",
      options: ["8fd8cfec0b7c72cec0534cffc5716ab7"]
    },
    {
      id: 126,
      filename: "126.mp3",
      options: ["45b19ddca662722fab8ec662982c26a0", "6d6a9cb97ea4c3edfc07a4757f3f49a9"]
    },
    {
      id: 127,
      filename: "127.mp3",
      options: ["9dfb7ad9b01bd4b767814fea0c69b277"]
    },
    {
      id: 128,
      filename: "128.mp3",
      options: ["747f1a50f6f47ebfe553bf448b04ea07"]
    },
    {
      id: 129,
      filename: "129.mp3",
      options: ["f7127811ed2164f860029e30f2d10f62"]
    },
    {
      id: 130,
      filename: "130.mp3",
      options: ["2164da8b15e2fed494f83cbe46bc7821"]
    },
    {
      id: 131,
      filename: "131.mp3",
      options: ["2e92d188dbdbd88e7c15831f4abfe1fc"]
    },
    {
      id: 132,
      filename: "132.mp3",
      options: ["e27683171ad462f8ee06fdf1d7ed68bc"]
    },
    {
      id: 133,
      filename: "133.mp3",
      options: ["a86ab2ee2501c0c0ef5865024ce29a7a", "093991d02c6ae6793cdf64bca25124c9"]
    },
    {
      id: 134,
      filename: "134.mp3",
      options: ["b85b9f545690d1278ed1fca330293f68"]
    },
    {
      id: 135,
      filename: "135.mp3",
      options: ["b247a89ceb3e3139f758615a08996fa5"]
    },
    {
      id: 136,
      filename: "136.mp3",
      options: ["c48ba993d35c3abe0380f91738fe2a34"]
    },
    {
      id: 137,
      filename: "137.mp3",
      options: ["4a53471bea4035b07c04500b69528682", "5c7b1726db87ce8a7abea21f2100705c"]
    },
    {
      id: 138,
      filename: "138.mp3",
      options: ["04ca3e8cbf95642b4f9abb456de64cbb"]
    },
    {
      id: 139,
      filename: "139.mp3",
      options: ["7cc7e4aa13907bc72bd4f0102505195e"]
    },
    {
      id: 140,
      filename: "140.mp3",
      options: ["f65eb10bf58bc8677ff42ba7935ace43"]
    },
    {
      id: 141,
      filename: "141.mp3",
      options: ["2e54e32faa94121f809caa61b56fc643"]
    },
    {
      id: 142,
      filename: "142.mp3",
      options: ["3493fc96411ca6dedc334064356bf03b"]
    },
    {
      id: 143,
      filename: "143.mp3",
      options: ["0ca06ed5fe7ae581bea50722f4b86ffe"]
    },
    {
      id: 144,
      filename: "144.mp3",
      options: ["f5888d0bb58d611107e11f7cbc41c97a"]
    },
    {
      id: 145,
      filename: "145.mp3",
      options: ["1bbf55c419ac6199c15dbfd165ca0553"]
    },
    {
      id: 146,
      filename: "146.mp3",
      options: ["a2e4a8c5f34cd234eff3f9fee34e03af"]
    },
    {
      id: 147,
      filename: "147.mp3",
      options: ["c2945b9993e2e0025b25ba6bad86bcc8"]
    },
    {
      id: 148,
      filename: "148.mp3",
      options: ["619b446f1df515147442f2e5f66be628"]
    },
    {
      id: 149,
      filename: "149.mp3",
      options: ["af33cca8920794bd808044ce8c946ef0"]
    },
    {
      id: 150,
      filename: "150.mp3",
      options: ["8a3ce04d4bc723b9e187cc84369738d2"]
    },
    {
      id: 151,
      filename: "151.mp3",
      options: []
    },
    {
      id: 152,
      filename: "152.mp3",
      options: ["910e96b4f055ea9cdf95885a12481869", "22320e4907e0bd3ac915c60ab1355896"]
    },
    {
      id: 153,
      filename: "153.mp3",
      options: ["7fc8b01e77bcacf6d5662638f67c71b8"]
    },
    {
      id: 154,
      filename: "154.mp3",
      options: ["2b8e1d80f78a47378940d49691b42369"]
    },
    {
      id: 155,
      filename: "155.mp3",
      options: ["3079af37b1536156013166e9b8d9529e"]
    },
    {
      id: 156,
      filename: "156.mp3",
      options: ["0e5fbe5fa96b50e6cd8e8e1542583cae"]
    },
    {
      id: 157,
      filename: "157.mp3",
      options: ["ec0e2603172c73a8b644bb9456c1ff6e"]
    },
    {
      id: 158,
      filename: "158.mp3",
      options: ["d04e5b568206b5caaa4cb1fc39aae0c1"]
    },
    {
      id: 159,
      filename: "159.mp3",
      options: ["f110b57e6e99698c9e18405e9c8ab94e", "cf4c875f9391a897b6bb8a7faf8eb50c"]
    },
    {
      id: 160,
      filename: "160.mp3",
      options: ["2eb4e15d0c98fec4ec126187c9a840d5", "18c085513f3b326792a2c0b593202aca"]
    },
    {
      id: 161,
      filename: "161.mp3",
      options: ["bfc62199989429cdf3a778bfed5137f6"]
    },
    {
      id: 162,
      filename: "162.mp3",
      options: ["c566cf41f3cfd7f9ec0ee27336132c92"]
    },
    {
      id: 163,
      filename: "163.mp3",
      options: ["43a223d38f1c8624f3e64f19a51f4214"]
    },
    {
      id: 164,
      filename: "164.mp3",
      options: ["c64434db85fcde1bd026a94b933c76a6"]
    },
    {
      id: 165,
      filename: "165.mp3",
      options: ["261d0847f4ced77923a0193e97655df6"]
    },
    {
      id: 166,
      filename: "166.mp3",
      options: ["3abcb1765302ef6e908ea2a355eedb39"]
    },
    {
      id: 167,
      filename: "167.mp3",
      options: ["c9dc004fc3d039ad7fb49456e5902b01","6865c5a40b43eb8a9a250464b1d3e1ff"]
    },
    {
      id: 168,
      filename: "168.mp3",
      options: ["9fab36cc63eac0a9951edd4e6a6ac6f8"]
    },
    {
      id: 169,
      filename: "169.mp3",
      options: ["ebeb757ff15e42e209af67037776f107"]
    },
    {
      id: 170,
      filename: "170.mp3",
      options: ["d2d4197b1a4f7777c5682e78af4f85f1"]
    },
    {
      id: 171,
      filename: "171.mp3",
      options: ["29675bc070c0947fcad138acb704b4a9"]
    },
    {
      id: 172,
      filename: "172.mp3",
      options: ["9452226bdde35f369f4eb210f4b07481","adb892f575c3664da4f13c81d8e7c90f"]
    },
    {
      id: 173,
      filename: "173.mp3",
      options: ["30e4e72de0240353b7b44a6ff15e8391"]
    },
    {
      id: 174,
      filename: "174.mp3",
      options: ["15fa047acd14a9700f3ff0bc0b7bb87b", "2da3edf6229946e9fee404b3d4450e47"]
    },
    {
      id: 175,
      filename: "175.mp3",
      options: ["17e14d828e367d5000305841282fbe29"]
    },
    {
      id: 176,
      filename: "176.mp3",
      options: ["5503aca25f0c4dbdbde776cf42149eb7", "60f9263cc13b12388fad4fa2ce77147b"]
    },
    {
      id: 177,
      filename: "177.mp3",
      options: ["a197f8794f33d77ed7df35054eab9bed"]
    },
    {
      id: 178,
      filename: "178.mp3",
      options: ["0e128c860cba366eb5f76e03cafd640b"]
    },
    {
      id: 179,
      filename: "179.mp3",
      options: ["26d2472d518081c3345c4206d5ff2c12"]
    },
    {
      id: 180,
      filename: "180.mp3",
      options: ["28f20a02bf8a021fab4fcec48afb584e"]
    },
    {
      id: 181,
      filename: "181.mp3",
      options: ["da5816e386d41245fdf72909540821e5"]
    },
    {
      id: 182,
      filename: "182.mp3",
      options: ["8b9276f10dcc21c0330c39a7ffdd7004"]
    },
    {
      id: 183,
      filename: "183.mp3",
      options: ["7b8b08ba43f9784f370d8341ccc28b58"]
    },
    {
      id: 184,
      filename: "184.mp3",
      options: ["8d52a7b986c3da214c5fa9e727d39b54"]
    },
    {
      id: 185,
      filename: "185.mp3",
      options: ["f5a3a1836d4dc89ded44f8f19f1eaa7f"]
    },
    {
      id: 186,
      filename: "186.mp3",
      options: ["f76df044f28a80ca1c4e5736705f9164"]
    },
    {
      id: 187,
      filename: "187.mp3",
      options: ["1a582767fe46f543701151fd77822c33"]
    },
    {
      id: 188,
      filename: "188.mp3",
      options: ["eda068609ddc676db8e4507148d7910a"]
    },
    {
      id: 189,
      filename: "189.mp3",
      options: ["64e538d4e96a48621aec189d549803fe"]
    },
    {
      id: 190,
      filename: "190.mp3",
      options: ["0b659bfa6bda30297ccd1a8920eb82cf", "145fb20bda81a8a5837721ad702f2c17"]
    },
    {
      id: 191,
      filename: "191.mp3",
      options: ["b77df2d0a5e3a1923c60a3b846d040b5", "6b331e04bcdb15a940ffe977183dc840"]
    },
    {
      id: 192,
      filename: "192.mp3",
      options: ["ab31c83a470b4445f38cc1a76ac42be9"]
    },
    {
      id: 193,
      filename: "193.mp3",
      options: ["5d7483803d032615150d74fc59a427d1"]
    },
    {
      id: 194,
      filename: "194.mp3",
      options: ["5664229a969f7e8d9f5dd2deb5373d61"]
    },
    {
      id: 195,
      filename: "195.mp3",
      options: ["b3d97019ebec40aa80f53f9e48ba63ea"]
    },
    {
      id: 196,
      filename: "196.mp3",
      options: ["2aba97fc55396df812326d95056779ed"]
    },
    {
      id: 197,
      filename: "197.mp3",
      options: ["85a19efb71a20688b8e629c577542bed"]
    },
    {
      id: 198,
      filename: "198.mp3",
      options: ["98045b0b718879ef51bda28f054dc759", "1d9637034f20a9b38a34d56c507da965"]
    },
    {
      id: 199,
      filename: "199.mp3",
      options: ["54581daf626cd7f77980e7999b7dd6ab"]
    },
    {
      id: 200,
      filename: "200.mp3",
      options: ["0a9ab640460634071aeaff0db1b16047"]
    }
  ]

  constructor(private cache: CacheService) { }

  async getAll(): Promise<any>{
    return this.prepare().then(resp => {
      return this.data;
    })
  }

  saveQuestion(question){
    this.cache.saveQuestion(question);
  }

  private async prepare(): Promise<any>{
    this.data = this.data.map(it => {
      it.guess = new Guess(null, false);
      return it;
    });
    return this.cache.getAll().then(resp => { 
      resp.forEach(guess => { this.processCachedGuess(guess); }); 
    });
  }

  private processCachedGuess(guess) {
    let question = this.data.find(item => { return item.id == guess.id; });
    console.log(guess)
    console.log(question);
    if(question){
      question.guess.answer = guess.answer;
      question.guess.status = guess.status;
    }
  }
}
