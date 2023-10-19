import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const albumData = [
  {
    title: 'Image 1',
    image: '/fb_imgs/img (1).jpg',
  },
{
    title: 'Image 2',
    image: '/fb_imgs/img (2).jpg',
  },
{
    title: 'Image 3',
    image: '/fb_imgs/img (3).jpg',
  },
{
    title: 'Image 4',
    image: '/fb_imgs/img (4).jpg',
  },
{
    title: 'Image 5',
    image: '/fb_imgs/img (5).jpg',
  },
{
    title: 'Image 6',
    image: '/fb_imgs/img (6).jpg',
  },
{
    title: 'Image 7',
    image: '/fb_imgs/img (7).jpg',
  },
{
    title: 'Image 8',
    image: '/fb_imgs/img (8).jpg',
  },
{
    title: 'Image 9',
    image: '/fb_imgs/img (9).jpg',
  },
{
    title: 'Image 10',
    image: '/fb_imgs/img (10).jpg',
  },
{
    title: 'Image 11',
    image: '/fb_imgs/img (11).jpg',
  },
{
    title: 'Image 12',
    image: '/fb_imgs/img (12).jpg',
  },
{
    title: 'Image 13',
    image: '/fb_imgs/img (13).jpg',
  },
{
    title: 'Image 14',
    image: '/fb_imgs/img (14).jpg',
  },
{
    title: 'Image 15',
    image: '/fb_imgs/img (15).jpg',
  },
{
    title: 'Image 16',
    image: '/fb_imgs/img (16).jpg',
  },
{
    title: 'Image 17',
    image: '/fb_imgs/img (17).jpg',
  },
{
    title: 'Image 18',
    image: '/fb_imgs/img (18).jpg',
  },
{
    title: 'Image 19',
    image: '/fb_imgs/img (19).jpg',
  },
{
    title: 'Image 20',
    image: '/fb_imgs/img (20).jpg',
  },
{
    title: 'Image 21',
    image: '/fb_imgs/img (21).jpg',
  },
{
    title: 'Image 22',
    image: '/fb_imgs/img (22).jpg',
  },
{
    title: 'Image 23',
    image: '/fb_imgs/img (23).jpg',
  },
{
    title: 'Image 24',
    image: '/fb_imgs/img (24).jpg',
  },
{
    title: 'Image 25',
    image: '/fb_imgs/img (25).jpg',
  },
{
    title: 'Image 26',
    image: '/fb_imgs/img (26).jpg',
  },
{
    title: 'Image 27',
    image: '/fb_imgs/img (27).jpg',
  },
{
    title: 'Image 28',
    image: '/fb_imgs/img (28).jpg',
  },
{
    title: 'Image 29',
    image: '/fb_imgs/img (29).jpg',
  },
{
    title: 'Image 30',
    image: '/fb_imgs/img (30).jpg',
  },
{
    title: 'Image 31',
    image: '/fb_imgs/img (31).jpg',
  },
{
    title: 'Image 32',
    image: '/fb_imgs/img (32).jpg',
  },
{
    title: 'Image 33',
    image: '/fb_imgs/img (33).jpg',
  },
{
    title: 'Image 34',
    image: '/fb_imgs/img (34).jpg',
  },
{
    title: 'Image 35',
    image: '/fb_imgs/img (35).jpg',
  },
{
    title: 'Image 36',
    image: '/fb_imgs/img (36).jpg',
  },
{
    title: 'Image 37',
    image: '/fb_imgs/img (37).jpg',
  },
{
    title: 'Image 38',
    image: '/fb_imgs/img (38).jpg',
  },
{
    title: 'Image 39',
    image: '/fb_imgs/img (39).jpg',
  },
{
    title: 'Image 40',
    image: '/fb_imgs/img (40).jpg',
  },
{
    title: 'Image 41',
    image: '/fb_imgs/img (41).jpg',
  },
{
    title: 'Image 42',
    image: '/fb_imgs/img (42).jpg',
  },
{
    title: 'Image 43',
    image: '/fb_imgs/img (43).jpg',
  },
{
    title: 'Image 44',
    image: '/fb_imgs/img (44).jpg',
  },
{
    title: 'Image 45',
    image: '/fb_imgs/img (45).jpg',
  },
{
    title: 'Image 46',
    image: '/fb_imgs/img (46).jpg',
  },
{
    title: 'Image 47',
    image: '/fb_imgs/img (47).jpg',
  },
{
    title: 'Image 48',
    image: '/fb_imgs/img (48).jpg',
  },
{
    title: 'Image 49',
    image: '/fb_imgs/img (49).jpg',
  },
{
    title: 'Image 50',
    image: '/fb_imgs/img (50).jpg',
  },
{
    title: 'Image 51',
    image: '/fb_imgs/img (51).jpg',
  },
{
    title: 'Image 52',
    image: '/fb_imgs/img (52).jpg',
  },
{
    title: 'Image 53',
    image: '/fb_imgs/img (53).jpg',
  },
{
    title: 'Image 54',
    image: '/fb_imgs/img (54).jpg',
  },
{
    title: 'Image 55',
    image: '/fb_imgs/img (55).jpg',
  },
{
    title: 'Image 56',
    image: '/fb_imgs/img (56).jpg',
  },
{
    title: 'Image 57',
    image: '/fb_imgs/img (57).jpg',
  },
{
    title: 'Image 58',
    image: '/fb_imgs/img (58).jpg',
  },
{
    title: 'Image 59',
    image: '/fb_imgs/img (59).jpg',
  },
{
    title: 'Image 60',
    image: '/fb_imgs/img (60).jpg',
  },
{
    title: 'Image 61',
    image: '/fb_imgs/img (61).jpg',
  },
{
    title: 'Image 62',
    image: '/fb_imgs/img (62).jpg',
  },
{
    title: 'Image 63',
    image: '/fb_imgs/img (63).jpg',
  },
{
    title: 'Image 64',
    image: '/fb_imgs/img (64).jpg',
  },
{
    title: 'Image 65',
    image: '/fb_imgs/img (65).jpg',
  },
{
    title: 'Image 66',
    image: '/fb_imgs/img (66).jpg',
  },
{
    title: 'Image 67',
    image: '/fb_imgs/img (67).jpg',
  },
{
    title: 'Image 68',
    image: '/fb_imgs/img (68).jpg',
  },
{
    title: 'Image 69',
    image: '/fb_imgs/img (69).jpg',
  },
{
    title: 'Image 70',
    image: '/fb_imgs/img (70).jpg',
  },
{
    title: 'Image 71',
    image: '/fb_imgs/img (71).jpg',
  },
{
    title: 'Image 72',
    image: '/fb_imgs/img (72).jpg',
  },
{
    title: 'Image 73',
    image: '/fb_imgs/img (73).jpg',
  },
{
    title: 'Image 74',
    image: '/fb_imgs/img (74).jpg',
  },{
    title: 'Image 75',
    image: '/fb_imgs/img (75).jpg',
  },
{
    title: 'Image 76',
    image: '/fb_imgs/img (76).jpg',
  },
{
    title: 'Image 77',
    image: '/fb_imgs/img (77).jpg',
  },
{
    title: 'Image 78',
    image: '/fb_imgs/img (78).jpg',
  },
{
    title: 'Image 79',
    image: '/fb_imgs/img (79).jpg',
  },
{
    title: 'Image 80',
    image: '/fb_imgs/img (80).jpg',
  },
{
    title: 'Image 81',
    image: '/fb_imgs/img (81).jpg',
  },
{
    title: 'Image 82',
    image: '/fb_imgs/img (82).jpg',
  },
{
    title: 'Image 83',
    image: '/fb_imgs/img (83).jpg',
  },
{
    title: 'Image 84',
    image: '/fb_imgs/img (84).jpg',
  },
{
    title: 'Image 85',
    image: '/fb_imgs/img (85).jpg',
  },
{
    title: 'Image 86',
    image: '/fb_imgs/img (86).jpg',
  },
{
    title: 'Image 87',
    image: '/fb_imgs/img (87).jpg',
  },
{
    title: 'Image 88',
    image: '/fb_imgs/img (88).jpg',
  },
{
    title: 'Image 89',
    image: '/fb_imgs/img (89).jpg',
  },
{
    title: 'Image 90',
    image: '/fb_imgs/img (90).jpg',
  },
{
    title: 'Image 91',
    image: '/fb_imgs/img (91).jpg',
  },
{
    title: 'Image 92',
    image: '/fb_imgs/img (92).jpg',
  },
{
    title: 'Image 93',
    image: '/fb_imgs/img (93).jpg',
  },{
    title: 'Image 94',
    image: '/fb_imgs/img (94).jpg',
  },
{
    title: 'Image 95',
    image: '/fb_imgs/img (95).jpg',
  },
{
    title: 'Image 96',
    image: '/fb_imgs/img (96).jpg',
  },
{
    title: 'Image 97',
    image: '/fb_imgs/img (97).jpg',
  },
{
    title: 'Image 98',
    image: '/fb_imgs/img (98).jpg',
  },
{
    title: 'Image 99',
    image: '/fb_imgs/img (99).jpg',
  },
{
    title: 'Image 100',
    image: '/fb_imgs/img (100).jpg',
  },
{
    title: 'Image 101',
    image: '/fb_imgs/img (101).jpg',
  },
{
    title: 'Image 102',
    image: '/fb_imgs/img (102).jpg',
  },
{
    title: 'Image 103',
    image: '/fb_imgs/img (103).jpg',
  },
{
    title: 'Image 104',
    image: '/fb_imgs/img (104).jpg',
  },{
    title: 'Image 105',
    image: '/fb_imgs/img (105).jpg',
  },
{
    title: 'Image 106',
    image: '/fb_imgs/img (106).jpg',
  },
{
    title: 'Image 107',
    image: '/fb_imgs/img (107).jpg',
  },
{
    title: 'Image 108',
    image: '/fb_imgs/img (108).jpg',
  },
{
    title: 'Image 109',
    image: '/fb_imgs/img (109).jpg',
  },
{
    title: 'Image 110',
    image: '/fb_imgs/img (110).jpg',
  },
{
    title: 'Image 111',
    image: '/fb_imgs/img (111).jpg',
  },
{
    title: 'Image 112',
    image: '/fb_imgs/img (112).jpg',
  },
{
    title: 'Image 113',
    image: '/fb_imgs/img (113).jpg',
  },
{
    title: 'Image 114',
    image: '/fb_imgs/img (114).jpg',
  },
{
    title: 'Image 115',
    image: '/fb_imgs/img (115).jpg',
  },
{
    title: 'Image 116',
    image: '/fb_imgs/img (116).jpg',
  },
{
    title: 'Image 117',
    image: '/fb_imgs/img (117).jpg',
  },
{
    title: 'Image 118',
    image: '/fb_imgs/img (118).jpg',
  },
{
    title: 'Image 119',
    image: '/fb_imgs/img (119).jpg',
  },
{
    title: 'Image 120',
    image: '/fb_imgs/img (120).jpg',
  },
{
    title: 'Image 121',
    image: '/fb_imgs/img (121).jpg',
  },
{
    title: 'Image 122',
    image: '/fb_imgs/img (122).jpg',
  },
{
    title: 'Image 123',
    image: '/fb_imgs/img (123).jpg',
  },
{
    title: 'Image 124',
    image: '/fb_imgs/img (124).jpg',
  },
{
    title: 'Image 125',
    image: '/fb_imgs/img (125).jpg',
  },
{
    title: 'Image 126',
    image: '/fb_imgs/img (126).jpg',
  },
{
    title: 'Image 127',
    image: '/fb_imgs/img (127).jpg',
  },
{
    title: 'Image 128',
    image: '/fb_imgs/img (128).jpg',
  },
{
    title: 'Image 129',
    image: '/fb_imgs/img (129).jpg',
  },
{
    title: 'Image 130',
    image: '/fb_imgs/img (130).jpg',
  },
{
    title: 'Image 131',
    image: '/fb_imgs/img (131).jpg',
  },
{
    title: 'Image 132',
    image: '/fb_imgs/img (132).jpg',
  },
{
    title: 'Image 133',
    image: '/fb_imgs/img (133).jpg',
  },
{
    title: 'Image 134',
    image: '/fb_imgs/img (134).jpg',
  },
{
    title: 'Image 135',
    image: '/fb_imgs/img (135).jpg',
  },
{
    title: 'Image 136',
    image: '/fb_imgs/img (136).jpg',
  },
{
    title: 'Image 137',
    image: '/fb_imgs/img (137).jpg',
  },
{
    title: 'Image 138',
    image: '/fb_imgs/img (138).jpg',
  },
{
    title: 'Image 139',
    image: '/fb_imgs/img (139).jpg',
  },
{
    title: 'Image 140',
    image: '/fb_imgs/img (140).jpg',
  },
{
    title: 'Image 141',
    image: '/fb_imgs/img (141).jpg',
  },
{
    title: 'Image 142',
    image: '/fb_imgs/img (142).jpg',
  },
{
    title: 'Image 143',
    image: '/fb_imgs/img (143).jpg',
  },
{
    title: 'Image 144',
    image: '/fb_imgs/img (144).jpg',
  },
{
    title: 'Image 145',
    image: '/fb_imgs/img (145).jpg',
  },
{
    title: 'Image 146',
    image: '/fb_imgs/img (146).jpg',
  },
{
    title: 'Image 147',
    image: '/fb_imgs/img (147).jpg',
  },
{
    title: 'Image 148',
    image: '/fb_imgs/img (148).jpg',
  },
{
    title: 'Image 149',
    image: '/fb_imgs/img (149).jpg',
  },
{
    title: 'Image 150',
    image: '/fb_imgs/img (150).jpg',
  },
{
    title: 'Image 151',
    image: '/fb_imgs/img (151).jpg',
  },
{
    title: 'Image 152',
    image: '/fb_imgs/img (152).jpg',
  },
{
    title: 'Image 153',
    image: '/fb_imgs/img (153).jpg',
  },{
    title: 'Image 154',
    image: '/fb_imgs/img (154).jpg',
  },
{
    title: 'Image 155',
    image: '/fb_imgs/img (155).jpg',
  },
{
    title: 'Image 156',
    image: '/fb_imgs/img (156).jpg',
  },
{
    title: 'Image 157',
    image: '/fb_imgs/img (157).jpg',
  },
{
    title: 'Image 158',
    image: '/fb_imgs/img (158).jpg',
  },
{
    title: 'Image 159',
    image: '/fb_imgs/img (159).jpg',
  },
{
    title: 'Image 160',
    image: '/fb_imgs/img (160).jpg',
  },
{
    title: 'Image 161',
    image: '/fb_imgs/img (161).jpg',
  },
{
    title: 'Image 162',
    image: '/fb_imgs/img (162).jpg',
  },
{
    title: 'Image 163',
    image: '/fb_imgs/img (163).jpg',
  },
{
    title: 'Image 164',
    image: '/fb_imgs/img (164).jpg',
  },
{
    title: 'Image 165',
    image: '/fb_imgs/img (165).jpg',
  },
{
    title: 'Image 166',
    image: '/fb_imgs/img (166).jpg',
  },
{
    title: 'Image 167',
    image: '/fb_imgs/img (167).jpg',
  },
{
    title: 'Image 168',
    image: '/fb_imgs/img (168).jpg',
  },
{
    title: 'Image 169',
    image: '/fb_imgs/img (169).jpg',
  },
{
    title: 'Image 170',
    image: '/fb_imgs/img (170).jpg',
  },
{
    title: 'Image 171',
    image: '/fb_imgs/img (171).jpg',
  },
{
    title: 'Image 172',
    image: '/fb_imgs/img (172).jpg',
  },
{
    title: 'Image 173',
    image: '/fb_imgs/img (173).jpg',
  },
{
    title: 'Image 174',
    image: '/fb_imgs/img (174).jpg',
  },
{
    title: 'Image 175',
    image: '/fb_imgs/img (175).jpg',
  },
{
    title: 'Image 176',
    image: '/fb_imgs/img (176).jpg',
  },
{
    title: 'Image 177',
    image: '/fb_imgs/img (177).jpg',
  },
{
    title: 'Image 178',
    image: '/fb_imgs/img (178).jpg',
  },
{
    title: 'Image 179',
    image: '/fb_imgs/img (179).jpg',
  },
{
    title: 'Image 180',
    image: '/fb_imgs/img (180).jpg',
  },
{
    title: 'Image 181',
    image: '/fb_imgs/img (181).jpg',
  },
{
    title: 'Image 182',
    image: '/fb_imgs/img (182).jpg',
  },
{
    title: 'Image 183',
    image: '/fb_imgs/img (183).jpg',
  },
{
    title: 'Image 184',
    image: '/fb_imgs/img (184).jpg',
  },
{
    title: 'Image 185',
    image: '/fb_imgs/img (185).jpg',
  },
{
    title: 'Image 186',
    image: '/fb_imgs/img (186).jpg',
  },
{
    title: 'Image 187',
    image: '/fb_imgs/img (187).jpg',
  },
{
    title: 'Image 188',
    image: '/fb_imgs/img (188).jpg',
  },
{
    title: 'Image 189',
    image: '/fb_imgs/img (189).jpg',
  },
{
    title: 'Image 190',
    image: '/fb_imgs/img (190).jpg',
  },
{
    title: 'Image 191',
    image: '/fb_imgs/img (191).jpg',
  },
{
    title: 'Image 192',
    image: '/fb_imgs/img (192).jpg',
  },
{
    title: 'Image 193',
    image: '/fb_imgs/img (193).jpg',
  },
{
    title: 'Image 194',
    image: '/fb_imgs/img (194).jpg',
  },
{
    title: 'Image 195',
    image: '/fb_imgs/img (195).jpg',
  },
{
    title: 'Image 196',
    image: '/fb_imgs/img (196).jpg',
  },
{
    title: 'Image 197',
    image: '/fb_imgs/img (197).jpg',
  },
{
    title: 'Image 198',
    image: '/fb_imgs/img (198).jpg',
  },
{
    title: 'Image 199',
    image: '/fb_imgs/img (199).jpg',
  },
{
    title: 'Image 200',
    image: '/fb_imgs/img (200).jpg',
  },
{
    title: 'Image 201',
    image: '/fb_imgs/img (201).jpg',
  },
{
    title: 'Image 202',
    image: '/fb_imgs/img (202).jpg',
  },
{
    title: 'Image 203',
    image: '/fb_imgs/img (203).jpg',
  },{
    title: 'Image 204',
    image: '/fb_imgs/img (204).jpg',
  },
{
    title: 'Image 205',
    image: '/fb_imgs/img (205).jpg',
  },
{
    title: 'Image 206',
    image: '/fb_imgs/img (206).jpg',
  },
{
    title: 'Image 207',
    image: '/fb_imgs/img (207).jpg',
  },
{
    title: 'Image 208',
    image: '/fb_imgs/img (208).jpg',
  },
{
    title: 'Image 209',
    image: '/fb_imgs/img (209).jpg',
  },
{
    title: 'Image 210',
    image: '/fb_imgs/img (210).jpg',
  },
{
    title: 'Image 211',
    image: '/fb_imgs/img (211).jpg',
  },
{
    title: 'Image 212',
    image: '/fb_imgs/img (212).jpg',
  },
{
    title: 'Image 213',
    image: '/fb_imgs/img (213).jpg',
  },
{
    title: 'Image 214',
    image: '/fb_imgs/img (214).jpg',
  },
{
    title: 'Image 215',
    image: '/fb_imgs/img (215).jpg',
  },
{
    title: 'Image 216',
    image: '/fb_imgs/img (216).jpg',
  },
{
    title: 'Image 217',
    image: '/fb_imgs/img (217).jpg',
  },
{
    title: 'Image 218',
    image: '/fb_imgs/img (218).jpg',
  },
{
    title: 'Image 219',
    image: '/fb_imgs/img (219).jpg',
  },
{
    title: 'Image 220',
    image: '/fb_imgs/img (220).jpg',
  },
{
    title: 'Image 221',
    image: '/fb_imgs/img (221).jpg',
  },
{
    title: 'Image 222',
    image: '/fb_imgs/img (222).jpg',
  },
{
    title: 'Image 223',
    image: '/fb_imgs/img (223).jpg',
  },
{
    title: 'Image 224',
    image: '/fb_imgs/img (224).jpg',
  },
{
    title: 'Image 225',
    image: '/fb_imgs/img (225).jpg',
  },
{
    title: 'Image 226',
    image: '/fb_imgs/img (226).jpg',
  },
{
    title: 'Image 227',
    image: '/fb_imgs/img (227).jpg',
  },
{
    title: 'Image 228',
    image: '/fb_imgs/img (228).jpg',
  },
{
    title: 'Image 229',
    image: '/fb_imgs/img (229).jpg',
  },
{
    title: 'Image 230',
    image: '/fb_imgs/img (230).jpg',
  },
{
    title: 'Image 231',
    image: '/fb_imgs/img (231).jpg',
  },
{
    title: 'Image 232',
    image: '/fb_imgs/img (232).jpg',
  },
{
    title: 'Image 233',
    image: '/fb_imgs/img (233).jpg',
  },
{
    title: 'Image 234',
    image: '/fb_imgs/img (234).jpg',
  },
{
    title: 'Image 235',
    image: '/fb_imgs/img (235).jpg',
  },
{
    title: 'Image 236',
    image: '/fb_imgs/img (236).jpg',
  },
{
    title: 'Image 237',
    image: '/fb_imgs/img (237).jpg',
  },{
    title: 'Image 238',
    image: '/fb_imgs/img (238).jpg',
  },
{
    title: 'Image 239',
    image: '/fb_imgs/img (239).jpg',
  },
{
    title: 'Image 240',
    image: '/fb_imgs/img (240).jpg',
  },
{
    title: 'Image 241',
    image: '/fb_imgs/img (241).jpg',
  },
{
    title: 'Image 242',
    image: '/fb_imgs/img (242).jpg',
  },
{
    title: 'Image 243',
    image: '/fb_imgs/img (243).jpg',
  },
{
    title: 'Image 244',
    image: '/fb_imgs/img (244).jpg',
  },
{
    title: 'Image 245',
    image: '/fb_imgs/img (245).jpg',
  },
{
    title: 'Image 246',
    image: '/fb_imgs/img (246).jpg',
  },
{
    title: 'Image 247',
    image: '/fb_imgs/img (247).jpg',
  },
{
    title: 'Image 248',
    image: '/fb_imgs/img (248).jpg',
  },
{
    title: 'Image 249',
    image: '/fb_imgs/img (249).jpg',
  },
{
    title: 'Image 250',
    image: '/fb_imgs/img (250).jpg',
  },
{
    title: 'Image 251',
    image: '/fb_imgs/img (251).jpg',
  },
{
    title: 'Image 252',
    image: '/fb_imgs/img (252).jpg',
  },
{
    title: 'Image 253',
    image: '/fb_imgs/img (253).jpg',
  }
];

export default function Home() {
  return (
    <main>
        <div className="pb-40 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-w-800 pt-20 pb-20">Happy Woman's Day</h1>
          <p class="text-lg text-gray-600 mt-4 pb-20 text-center">Nhân ngày Phụ nữ Việt Nam 20/10/2023 con chúc mẹ thật nhiều sức khỏe, thật nhiệt hạnh phúc và kiếm được nhiều tiền ❤❤❤</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {albumData.map(album => (
              <div
                key={album.title}
                className="bg-white rounded-3xl overflow-hidden shadow-none transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black/30"
              >
                <div>
                  <Image
                    src={album.image}
                    alt={album.title}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
