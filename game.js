
var phase_mode=1;


var Game = {

preload : function() {

    game.load.spritesheet('button', './assets/number-buttons-90x90.png', 90,90);
    game.load.image('background','./assets/starfield.jpg');

    game.load.audio('paris_001', './assets/The Chainsmokers - Paris/paris_001.wav');
    game.load.audio('paris_002', './assets/The Chainsmokers - Paris/paris_002.wav');
    game.load.audio('paris_003', './assets/The Chainsmokers - Paris/paris_003.wav');
    game.load.audio('paris_004', './assets/The Chainsmokers - Paris/paris_004.wav');
    game.load.audio('paris_005', './assets/The Chainsmokers - Paris/paris_005.wav');
    game.load.audio('paris_006', './assets/The Chainsmokers - Paris/paris_006.wav');
    game.load.audio('paris_007', './assets/The Chainsmokers - Paris/paris_007.wav');
    game.load.audio('paris_008', './assets/The Chainsmokers - Paris/paris_008.wav');
    game.load.audio('paris_009', './assets/The Chainsmokers - Paris/paris_009.wav');
    game.load.audio('paris_010', './assets/The Chainsmokers - Paris/paris_010.wav');
    game.load.audio('paris_011', './assets/The Chainsmokers - Paris/paris_011.wav');
    game.load.audio('paris_012', './assets/The Chainsmokers - Paris/paris_012.wav');
    game.load.audio('paris_013', './assets/The Chainsmokers - Paris/paris_013.wav');
    game.load.audio('paris_014', './assets/The Chainsmokers - Paris/paris_014.wav');
    game.load.audio('paris_015', './assets/The Chainsmokers - Paris/paris_015.wav');
    game.load.audio('paris_016', './assets/The Chainsmokers - Paris/paris_016.wav');
    game.load.audio('paris_017', './assets/The Chainsmokers - Paris/paris_017.wav');
    game.load.audio('paris_018', './assets/The Chainsmokers - Paris/paris_018.wav');
    game.load.audio('paris_019', './assets/The Chainsmokers - Paris/paris_019.wav');
    game.load.audio('paris_020', './assets/The Chainsmokers - Paris/paris_020.wav');
    game.load.audio('paris_021', './assets/The Chainsmokers - Paris/paris_021.wav');
    game.load.audio('paris_022', './assets/The Chainsmokers - Paris/paris_022.wav');
    game.load.audio('paris_030', './assets/The Chainsmokers - Paris/paris_030.wav');
    game.load.audio('paris_031', './assets/The Chainsmokers - Paris/paris_031.wav');
    game.load.audio('paris_032', './assets/The Chainsmokers - Paris/paris_032.wav');
    game.load.audio('paris_033', './assets/The Chainsmokers - Paris/paris_033.wav');
    game.load.audio('paris_034', './assets/The Chainsmokers - Paris/paris_034.wav');
    game.load.audio('paris_035', './assets/The Chainsmokers - Paris/paris_035.wav');
    game.load.audio('paris_036', './assets/The Chainsmokers - Paris/paris_036.wav');
    game.load.audio('paris_037', './assets/The Chainsmokers - Paris/paris_037.wav');
    game.load.audio('paris_038', './assets/The Chainsmokers - Paris/paris_038.wav');
    game.load.audio('paris_039', './assets/The Chainsmokers - Paris/paris_039.wav');
    game.load.audio('paris_047', './assets/The Chainsmokers - Paris/paris_047.wav');
    game.load.audio('paris_048', './assets/The Chainsmokers - Paris/paris_048.wav');
    game.load.audio('paris_049', './assets/The Chainsmokers - Paris/paris_049.wav');
    game.load.audio('paris_050', './assets/The Chainsmokers - Paris/paris_050.wav');
    game.load.audio('paris_051', './assets/The Chainsmokers - Paris/paris_051.wav');
    game.load.audio('paris_052', './assets/The Chainsmokers - Paris/paris_052.wav');
    game.load.audio('paris_053', './assets/The Chainsmokers - Paris/paris_053.wav');
    game.load.audio('paris_054', './assets/The Chainsmokers - Paris/paris_054.wav');
    game.load.audio('paris_055', './assets/The Chainsmokers - Paris/paris_055.wav');
    game.load.audio('paris_056', './assets/The Chainsmokers - Paris/paris_056.wav');
    game.load.audio('paris_057', './assets/The Chainsmokers - Paris/paris_057.wav');
    game.load.audio('paris_058', './assets/The Chainsmokers - Paris/paris_058.wav');
    game.load.audio('paris_059', './assets/The Chainsmokers - Paris/paris_059.wav');
    game.load.audio('paris_060', './assets/The Chainsmokers - Paris/paris_060.wav');
    game.load.audio('paris_061', './assets/The Chainsmokers - Paris/paris_061.wav');
    game.load.audio('paris_062', './assets/The Chainsmokers - Paris/paris_062.wav');
    game.load.audio('paris_063', './assets/The Chainsmokers - Paris/paris_063.wav');
    game.load.audio('paris_064', './assets/The Chainsmokers - Paris/paris_064.wav');
    game.load.audio('paris_065', './assets/The Chainsmokers - Paris/paris_065.wav');
    game.load.audio('paris_066', './assets/The Chainsmokers - Paris/paris_066.wav');
    game.load.audio('paris_067', './assets/The Chainsmokers - Paris/paris_067.wav');
    game.load.audio('paris_068', './assets/The Chainsmokers - Paris/paris_068.wav');
    game.load.audio('paris_069', './assets/The Chainsmokers - Paris/paris_069.wav');
    game.load.audio('paris_070', './assets/The Chainsmokers - Paris/paris_070.wav');
    game.load.audio('paris_071', './assets/The Chainsmokers - Paris/paris_071.wav');
    game.load.audio('paris_072', './assets/The Chainsmokers - Paris/paris_072.wav');
    game.load.audio('paris_073', './assets/The Chainsmokers - Paris/paris_073.wav');
    game.load.audio('paris_074', './assets/The Chainsmokers - Paris/paris_074.wav');
    game.load.audio('paris_075', './assets/The Chainsmokers - Paris/paris_075.wav');
    game.load.audio('paris_076', './assets/The Chainsmokers - Paris/paris_076.wav');
    game.load.audio('paris_077', './assets/The Chainsmokers - Paris/paris_077.wav');
    game.load.audio('paris_078', './assets/The Chainsmokers - Paris/paris_078.wav');
    game.load.audio('paris_079', './assets/The Chainsmokers - Paris/paris_079.wav');
    game.load.audio('paris_080', './assets/The Chainsmokers - Paris/paris_080.wav');
    game.load.audio('paris_081', './assets/The Chainsmokers - Paris/paris_081.wav');
    game.load.audio('paris_082', './assets/The Chainsmokers - Paris/paris_082.wav');
    game.load.audio('paris_083', './assets/The Chainsmokers - Paris/paris_083.wav');
    game.load.audio('paris_084', './assets/The Chainsmokers - Paris/paris_084.wav');
    game.load.audio('paris_085', './assets/The Chainsmokers - Paris/paris_085.wav');
    game.load.audio('paris_086', './assets/The Chainsmokers - Paris/paris_086.wav');
    game.load.audio('paris_087', './assets/The Chainsmokers - Paris/paris_087.wav');
    game.load.audio('paris_088', './assets/The Chainsmokers - Paris/paris_088.wav');
    game.load.audio('paris_089', './assets/The Chainsmokers - Paris/paris_089.wav');
    game.load.audio('paris_090', './assets/The Chainsmokers - Paris/paris_090.wav');
    game.load.audio('paris_091', './assets/The Chainsmokers - Paris/paris_091.wav');
    game.load.audio('paris_092', './assets/The Chainsmokers - Paris/paris_092.wav');
    game.load.audio('paris_093', './assets/The Chainsmokers - Paris/paris_093.wav');
    game.load.audio('beat', './assets/The Chainsmokers - Paris/beat4_001.wav');
    game.load.audio('paris_094', './assets/The Chainsmokers - Paris/paris_094.wav');
    game.load.audio('paris_095', './assets/The Chainsmokers - Paris/paris_095.wav');
    game.load.audio('paris_096', './assets/The Chainsmokers - Paris/paris_096.wav');
    game.load.audio('paris_097', './assets/The Chainsmokers - Paris/paris_097.wav');
    game.load.audio('paris_098', './assets/The Chainsmokers - Paris/paris_098.wav');
    game.load.audio('paris_099', './assets/The Chainsmokers - Paris/paris_099.wav');
    game.load.audio('paris_100', './assets/The Chainsmokers - Paris/paris_100.wav');
    game.load.audio('paris_101', './assets/The Chainsmokers - Paris/paris_101.wav');
    game.load.audio('paris_102', './assets/The Chainsmokers - Paris/paris_102.wav');
    game.load.audio('paris_103', './assets/The Chainsmokers - Paris/paris_103.wav');
    game.load.audio('paris_104', './assets/The Chainsmokers - Paris/paris_104.wav');
    game.load.audio('paris_105', './assets/The Chainsmokers - Paris/paris_105.wav');
    game.load.audio('paris_106', './assets/The Chainsmokers - Paris/paris_106.wav');
    game.load.audio('paris_107', './assets/The Chainsmokers - Paris/paris_107.wav');
    game.load.audio('paris_108', './assets/The Chainsmokers - Paris/paris_108.wav');
    game.load.audio('paris_109', './assets/The Chainsmokers - Paris/paris_109.wav');
    game.load.audio('paris_114', './assets/The Chainsmokers - Paris/paris_114.wav');
    game.load.audio('paris_115', './assets/The Chainsmokers - Paris/paris_115.wav');
    game.load.audio('paris_116', './assets/The Chainsmokers - Paris/paris_116.wav');

},


create : function() {

var background;
var paris_001, paris_002,paris_003,paris_004,paris_005,paris_006,paris_007,paris_008,paris_009,paris_010,paris_011,paris_012,paris_013,paris_014,paris_015,paris_016,paris_017,paris_018,paris_019,paris_020,paris_021,paris_022,paris_030,paris_031,paris_032,paris_033,paris_034,paris_035,paris_036,paris_037,paris_038,paris_039,paris_047,paris_048,paris_049,paris_050,paris_051,paris_052,paris_053,paris_054,paris_055,paris_056,paris_057,paris_058,paris_059,paris_060,paris_061,paris_062,paris_063,paris_064,paris_065,paris_066,paris_067,paris_068,paris_069,paris_070,paris_071,paris_072,paris_073,paris_074,paris_075,paris_076,paris_077,paris_078,paris_079,paris_080,paris_081,paris_082,paris_083,paris_084,paris_085,paris_086,paris_087,paris_088,paris_089,paris_090,paris_091,paris_092,paris_093,beat,paris_094,paris_095,paris_096,paris_097,paris_098,paris_099,paris_100,paris_101,paris_102,paris_103,paris_104,paris_105,paris_106,paris_107,paris_108,paris_109,paris_114,paris_115,paris_116;
var pahse1;
var phase2;
var phase3;
var phase4;
var phase5;
    //  Setting the background colour
    game.add.tileSprite(0, 0, 1200, 1000, 'background');
    game.stage.backgroundColor = '#182d3b';
    //game.input.touch.preventDefault = false;

    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();

    paris_001 = game.add.audio('paris_001');
    paris_002 = game.add.audio('paris_002');
    paris_003 = game.add.audio('paris_003');
    paris_004 = game.add.audio('paris_004');
    paris_005 = game.add.audio('paris_005');
    paris_006 = game.add.audio('paris_006');
    paris_007 = game.add.audio('paris_007');
    paris_008 = game.add.audio('paris_008');
    paris_009 = game.add.audio('paris_009');
    paris_010 = game.add.audio('paris_010');
    paris_011 = game.add.audio('paris_011');
    paris_012 = game.add.audio('paris_012');
    paris_013 = game.add.audio('paris_013');
    paris_014 = game.add.audio('paris_014');
    paris_015 = game.add.audio('paris_015');
    paris_016 = game.add.audio('paris_016');
    paris_017 = game.add.audio('paris_017');
    paris_018 = game.add.audio('paris_018');
    paris_019 = game.add.audio('paris_019');
    paris_020 = game.add.audio('paris_020');
    paris_021 = game.add.audio('paris_021');
    paris_022 = game.add.audio('paris_022');
    paris_030 = game.add.audio('paris_030');
    paris_031 = game.add.audio('paris_031');
    paris_032 = game.add.audio('paris_032');
    paris_033 = game.add.audio('paris_033');
    paris_034 = game.add.audio('paris_034');
    paris_035 = game.add.audio('paris_035');
    paris_036 = game.add.audio('paris_036');
    paris_037 = game.add.audio('paris_037');
    paris_038 = game.add.audio('paris_038');
    paris_039 = game.add.audio('paris_039');
    paris_047 = game.add.audio('paris_047');
    paris_048 = game.add.audio('paris_048');
    paris_049 = game.add.audio('paris_049');
    paris_050 = game.add.audio('paris_050');
    paris_051 = game.add.audio('paris_051');
    paris_052 = game.add.audio('paris_052');
    paris_053 = game.add.audio('paris_053');
    paris_054 = game.add.audio('paris_054');
    paris_055 = game.add.audio('paris_055');
    paris_056 = game.add.audio('paris_056');
    paris_057 = game.add.audio('paris_057');
    paris_058 = game.add.audio('paris_058');
    paris_059 = game.add.audio('paris_059');
    paris_060 = game.add.audio('paris_060');
    paris_061 = game.add.audio('paris_061');
    paris_062 = game.add.audio('paris_062');
    paris_063 = game.add.audio('paris_063');
    paris_064 = game.add.audio('paris_064');
    paris_065 = game.add.audio('paris_065');
    paris_066 = game.add.audio('paris_066');
    paris_067 = game.add.audio('paris_067');
    paris_068 = game.add.audio('paris_068');
    paris_069 = game.add.audio('paris_069');
    paris_070 = game.add.audio('paris_070');
    paris_071 = game.add.audio('paris_071');
    paris_072 = game.add.audio('paris_072');
    paris_073 = game.add.audio('paris_073');
    paris_074 = game.add.audio('paris_074');
    paris_075 = game.add.audio('paris_075');
    paris_076 = game.add.audio('paris_076');
    paris_077 = game.add.audio('paris_077');
    paris_078 = game.add.audio('paris_078');
    paris_079 = game.add.audio('paris_079');
    paris_080 = game.add.audio('paris_080');
    paris_081 = game.add.audio('paris_081');
    paris_082 = game.add.audio('paris_082');
    paris_083 = game.add.audio('paris_083');
    paris_084 = game.add.audio('paris_084');
    paris_085 = game.add.audio('paris_085');
    paris_086 = game.add.audio('paris_086');
    paris_087 = game.add.audio('paris_087');
    paris_088 = game.add.audio('paris_088');
    paris_089 = game.add.audio('paris_089');
    paris_090 = game.add.audio('paris_090');
    paris_091 = game.add.audio('paris_091');
    paris_092 = game.add.audio('paris_092');
    paris_093 = game.add.audio('paris_093');
    beat = game.add.audio('beat');
    paris_094 = game.add.audio('paris_094');
    paris_095 = game.add.audio('paris_095');
    paris_096 = game.add.audio('paris_096');
    paris_097 = game.add.audio('paris_097');
    paris_098 = game.add.audio('paris_098');
    paris_099 = game.add.audio('paris_099');
    paris_100 = game.add.audio('paris_100');
    paris_101 = game.add.audio('paris_101');
    paris_102 = game.add.audio('paris_102');
    paris_103 = game.add.audio('paris_103');
    paris_104 = game.add.audio('paris_104');
    paris_105 = game.add.audio('paris_105');
    paris_106 = game.add.audio('paris_106');
    paris_107 = game.add.audio('paris_107');
    paris_108 = game.add.audio('paris_108');
    paris_109 = game.add.audio('paris_109');
    paris_114 = game.add.audio('paris_114');
    paris_115 = game.add.audio('paris_115');
    paris_116 = game.add.audio('paris_116');

    paris_001.addMarker('paris_001');
    paris_002.addMarker('paris_002');
    paris_003.addMarker('paris_003');
    paris_004.addMarker('paris_004');
    paris_005.addMarker('paris_005');
    paris_006.addMarker('paris_006');
    paris_007.addMarker('paris_007');
    paris_008.addMarker('paris_008');
    paris_009.addMarker('paris_009');
    paris_010.addMarker('paris_010');
    paris_011.addMarker('paris_011');
    paris_012.addMarker('paris_012');
    paris_013.addMarker('paris_013');
    paris_014.addMarker('paris_014');
    paris_015.addMarker('paris_015');
    paris_016.addMarker('paris_016');
    paris_017.addMarker('paris_017');
    paris_018.addMarker('paris_018');
    paris_019.addMarker('paris_019');
    paris_020.addMarker('paris_020');
    paris_021.addMarker('paris_021');
    paris_022.addMarker('paris_022');
    paris_030.addMarker('paris_030');
    paris_031.addMarker('paris_031');
    paris_032.addMarker('paris_032');
    paris_033.addMarker('paris_033');
    paris_034.addMarker('paris_034');
    paris_035.addMarker('paris_035');
    paris_036.addMarker('paris_036');
    paris_037.addMarker('paris_037');
    paris_038.addMarker('paris_038');
    paris_039.addMarker('paris_039');
    paris_047.addMarker('paris_047');
    paris_048.addMarker('paris_048');
    paris_049.addMarker('paris_049');
    paris_050.addMarker('paris_050');
    paris_051.addMarker('paris_051');
    paris_052.addMarker('paris_052');
    paris_053.addMarker('paris_053');
    paris_054.addMarker('paris_054');
    paris_055.addMarker('paris_055');
    paris_056.addMarker('paris_056');
    paris_057.addMarker('paris_057');
    paris_058.addMarker('paris_058');
    paris_059.addMarker('paris_059');
    paris_060.addMarker('paris_060');
    paris_061.addMarker('paris_061');
    paris_062.addMarker('paris_062');
    paris_063.addMarker('paris_063');
    paris_064.addMarker('paris_064');
    paris_065.addMarker('paris_065');
    paris_066.addMarker('paris_066');
    paris_067.addMarker('paris_067');
    paris_068.addMarker('paris_068');
    paris_069.addMarker('paris_069');
    paris_070.addMarker('paris_070');
    paris_071.addMarker('paris_071');
    paris_072.addMarker('paris_072');
    paris_073.addMarker('paris_073');
    paris_074.addMarker('paris_074');
    paris_075.addMarker('paris_075');
    paris_076.addMarker('paris_076');
    paris_077.addMarker('paris_077');
    paris_078.addMarker('paris_078');
    paris_079.addMarker('paris_079');
    paris_080.addMarker('paris_080');
    paris_081.addMarker('paris_081');
    paris_082.addMarker('paris_082');
    paris_083.addMarker('paris_083');
    paris_084.addMarker('paris_084');
    paris_085.addMarker('paris_085');
    paris_086.addMarker('paris_086');
    paris_087.addMarker('paris_087');
    paris_088.addMarker('paris_088');
    paris_089.addMarker('paris_089');
    paris_090.addMarker('paris_090');
    paris_091.addMarker('paris_091');
    paris_092.addMarker('paris_092');
    paris_093.addMarker('paris_093');
    beat.addMarker('beat');
    paris_094.addMarker('paris_094');
    paris_095.addMarker('paris_095');
    paris_096.addMarker('paris_096');
    paris_097.addMarker('paris_097');
    paris_098.addMarker('paris_098');
    paris_099.addMarker('paris_099');
    paris_100.addMarker('paris_100');
    paris_101.addMarker('paris_101');
    paris_102.addMarker('paris_102');
    paris_103.addMarker('paris_103');
    paris_104.addMarker('paris_104');
    paris_105.addMarker('paris_105');
    paris_106.addMarker('paris_106');
    paris_107.addMarker('paris_107');
    paris_108.addMarker('paris_108');
    paris_109.addMarker('paris_109');
    paris_114.addMarker('paris_114');
    paris_115.addMarker('paris_115');
    paris_116.addMarker('paris_116');

 phase1 = [paris_002,paris_003,paris_004,paris_005,paris_006,paris_007,paris_008,paris_009,paris_010,paris_011,paris_012,paris_013,paris_014,paris_015,paris_016,paris_017,paris_018,paris_019,paris_020,paris_021,paris_022,paris_030,paris_031];

 phase2 = [paris_032,paris_033,paris_034,paris_035,paris_036,paris_037,paris_038,paris_039,paris_047];

 phase3 = [paris_048,paris_049,paris_050,paris_051,paris_052,paris_053,paris_054,paris_055,paris_056,paris_057,paris_058,paris_059,paris_060,paris_061,paris_062,paris_063,paris_064,paris_065,paris_066,paris_067,paris_068,paris_069,paris_070,paris_071,paris_072,paris_073,paris_074,paris_075,paris_076,paris_077,paris_078];

 phase4 = [paris_079,paris_080,paris_081,paris_082,paris_083,paris_084,paris_085,paris_086,paris_087,paris_088,paris_089,paris_090,paris_091,paris_092,paris_093];

 phase5 = [paris_094,paris_095,paris_096,paris_097,paris_098,paris_099,paris_100,paris_101,paris_102,paris_103,paris_104,paris_105,paris_106,paris_107,paris_108,paris_109,paris_114,paris_115,paris_116];

var button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18,button19,button20,button21,button22,button23,button24,button25,button26,button27,button28,button29,button30,button30,button31,button32,button33,button34,button35,button36,button37,button38,button39,button40,button41,button42,button43,button44,button45,button46,button47,button48,button49;


//row1
    button1 = makeButton0('button1',game.world.centerX-300, game.world.centerY-300,phase1[0],paris_001,paris_001,paris_001);
    button2 = makeButton0('button2',game.world.centerX-200, game.world.centerY-300,phase1[1],paris_001,phase3[29],paris_001);
    button3 = makeButton0('button3',game.world.centerX-100, game.world.centerY-300,phase1[2],paris_001,phase3[30],paris_001);
    button4 = makeButton0('button4',game.world.centerX, game.world.centerY-300,phase1[3],paris_001,paris_001,paris_001);
    button5 = makeButton0('button5',game.world.centerX+100, game.world.centerY-300,phase1[14],paris_001,phase3[2],paris_001,phase5[2]);
    button6 = makeButton0('button6',game.world.centerX+200, game.world.centerY-300,phase1[16],paris_001,phase3[1],paris_001,phase5[1]);
    button7 = makeButton0('button7',game.world.centerX+300, game.world.centerY-300,phase1[18],paris_001,phase3[0],paris_001,phase5[0]); 
//row2
    button8 = makeButton1('button8',game.world.centerX-300, game.world.centerY-200,phase1[4],paris_001,phase3[28],paris_001);
    button9 = makeButton1('button9',game.world.centerX-200, game.world.centerY-200,phase1[5],phase2[0],phase3[27],phase4[2]);
    button10 = makeButton1('button10',game.world.centerX-100, game.world.centerY-200,phase1[6],paris_001,phase3[26],paris_001);
    button11 = makeButton1('button11',game.world.centerX, game.world.centerY-200,phase1[7],paris_001,phase3[25],paris_001);
    button12 = makeButton1('button12',game.world.centerX+100, game.world.centerY-200,phase1[18],paris_001,phase3[7],paris_001);
    button13 = makeButton1('button13',game.world.centerX+200, game.world.centerY-200,phase1[20],phase2[1],phase3[8],phase4[0]);
    button14 = makeButton1('button14',game.world.centerX+300, game.world.centerY-200,phase1[19],paris_001,paris_001,paris_001,phase5[3]);
//row3
    button15 = makeButton2('button15',game.world.centerX-300, game.world.centerY-100,phase1[8],paris_001,paris_001,paris_001);
    button16 = makeButton2('button16',game.world.centerX-200, game.world.centerY-100,phase1[9],phase2[2],paris_001,paris_001);
    button17 = makeButton2('button17',game.world.centerX-100, game.world.centerY-100,phase1[10],paris_001,paris_001,phase4[6]);
    button18 = makeButton2('button18',game.world.centerX, game.world.centerY-100,phase1[11],paris_001,phase3[6],paris_001);
    button19 = makeButton2('button19',game.world.centerX+100, game.world.centerY-100,phase1[13],paris_001,phase3[5],phase4[4],phase5[6]);
    button20 = makeButton2('button20',game.world.centerX+200, game.world.centerY-100,phase1[8],phase2[3],phase3[4],phase4[13],phase5[5]);
    button21 = makeButton2('button21',game.world.centerX+300, game.world.centerY-100,phase1[20],paris_001,phase3[3],phase4[10],phase5[4]);
//row4
    button22 = makeButton3('button22',game.world.centerX-300, game.world.centerY,phase1[8],paris_001,paris_001,paris_001);
    button23 = makeButton3('button23',game.world.centerX-200, game.world.centerY,phase1[11],phase2[4],paris_001,paris_001);
    button24 = makeButton3('button24',game.world.centerX-100, game.world.centerY,phase1[1],paris_001,paris_001,paris_001);
    button25 = makeButton3('button25',game.world.centerX, game.world.centerY,phase1[12],paris_001,phase3[10],phase4[14]);
    button26 = makeButton3('button26',game.world.centerX+100, game.world.centerY,phase1[15],paris_001,phase3[12],paris_001);
    button27 = makeButton3('button27',game.world.centerX+200, game.world.centerY,phase1[17],phase2[5],phase3[11],phase4[12]);
    button28 = makeButton3('button28',game.world.centerX+300, game.world.centerY,phase1[8],paris_001,phase3[9],phase4[9],phase5[7]); 
//row5
    button29 = makeButton2('button29',game.world.centerX-300, game.world.centerY+100,phase1[9],paris_001,paris_001,paris_001,phase5[14]);
    button30 = makeButton2('button30',game.world.centerX-200, game.world.centerY+100,phase1[12],phase2[6],paris_001,paris_001,phase5[13]);
    button31 = makeButton2('button31',game.world.centerX-100, game.world.centerY+100,phase1[2],paris_001,paris_001,phase4[5],phase5[12]);
    button32 = makeButton2('button32',game.world.centerX, game.world.centerY+100,phase1[14],paris_001,phase3[14],paris_001);
    button33 = makeButton2('button33',game.world.centerX+100, game.world.centerY+100,phase1[16],paris_001,phase3[16],phase4[7],phase5[10]); 
    button34 = makeButton2('button34',game.world.centerX+200, game.world.centerY+100,phase1[19],phase2[7],phase3[15],phase4[11],phase5[9]);
    button35 = makeButton2('button35',game.world.centerX+300, game.world.centerY+100,phase1[8],paris_001,phase3[13],phase4[8],phase5[8]);
//row6   
    button36 = makeButton1('button36',game.world.centerX-300, game.world.centerY+200,phase1[10],paris_001,paris_001,paris_001);
    button37 = makeButton1('button37',game.world.centerX-200, game.world.centerY+200,phase1[13],paris_001,paris_001,phase4[1]);
    button38 = makeButton1('button38',game.world.centerX-100, game.world.centerY+200,phase1[15],paris_001,paris_001,paris_001,phase5[15]);
    button39 = makeButton1('button39',game.world.centerX, game.world.centerY+200,phase1[17],paris_001,phase3[18],paris_001);
    button40 = makeButton1('button40',game.world.centerX+100, game.world.centerY+200,phase1[18],paris_001,phase3[20],paris_001);
    button41 = makeButton1('button41',game.world.centerX+200, game.world.centerY+200,phase1[19],phase2[8],phase3[19],phase4[3]); 
    button42 = makeButton1('button42',game.world.centerX+300, game.world.centerY+200,phase1[20],paris_001,phase3[17],paris_001,phase5[11]);
//row7
    button43 = makeButton0('button43',game.world.centerX-300, game.world.centerY+300,phase1[11],paris_001,paris_001,beat);
    button44 = makeButton0('button44',game.world.centerX-200, game.world.centerY+300,phase1[13],paris_001,paris_001,paris_001);
    button45 = makeButton0('button45',game.world.centerX-100, game.world.centerY+300,phase1[15],paris_001,paris_001,paris_001);
    button46 = makeButton0('button46',game.world.centerX, game.world.centerY+300,phase1[17],paris_001,phase3[22],paris_001);
    button47 = makeButton0('button47',game.world.centerX+100, game.world.centerY+300,phase1[15],paris_001,phase3[24],paris_001,phase5[18]); 
    button48 = makeButton0('button48',game.world.centerX+200, game.world.centerY+300,phase1[21],paris_001,phase3[23],paris_001,phase5[17]);
    button49 = makeButton0('button49',game.world.centerX+300, game.world.centerY+300,phase1[22],paris_001,phase3[21],paris_001,phase5[16]);

    makePhaseButton(game.world.centerX+420, game.world.centerY-300,1);
    makePhaseButton(game.world.centerX+420, game.world.centerY-200,2);
    makePhaseButton(game.world.centerX+420, game.world.centerY-100,3);
    makePhaseButton(game.world.centerX+420, game.world.centerY,4);
    makePhaseButton(game.world.centerX+420, game.world.centerY+100,5);
    makePhaseButton(game.world.centerX+420, game.world.centerY+200,6);
    makePhaseButton(game.world.centerX+420, game.world.centerY+300,7);
}

};

function makeButton0(name, x, y, sound1, sound2, sound3, sound4, sound5) { 
     var button = game.add.button(x-50, y, 'button', function(){ button.alpha=1; game.time.events.add(Phaser.Timer.SECOND*0.5,function(){button.alpha=0.6;},this); if(phase_mode==1){sound1.play();} else if(phase_mode==2)sound2.play(); else if(phase_mode==3)sound3.play(); else if(phase_mode==4)sound4.play(); else if(phase_mode==5)sound5.play(); }, this, 0, 0, 0); 
     button.name = name;
     button.anchor.setTo(0.5,0.5); 
     button.scale.set(1, 1); 
     button.smoothed = true; 
     button.alpha = 0.65;
 
 } 

 function makeButton1(name, x, y, sound1, sound2, sound3, sound4, sound5) { 
 
     var button = game.add.button(x-50, y, 'button', function(){  button.alpha=1; game.time.events.add(Phaser.Timer.SECOND*0.5,function(){button.alpha=0.6;},this);
        if(phase_mode==1){sound1.play();} else if(phase_mode==2)sound2.play(); else if(phase_mode==3)sound3.play(); else if(phase_mode==4)sound4.play(); else if(phase_mode==5)sound5.play(); }, this, 1, 1, 1); 
     button.name = name;
     button.anchor.setTo(0.5,0.5); 
     button.scale.set(1, 1); 
     button.smoothed = true; 
     button.alpha = 0.65;
 
 } 
 
function makeButton2(name, x, y, sound1, sound2, sound3, sound4, sound5) { 
 
     var button = game.add.button(x-50, y, 'button', function(){ button.alpha=1; game.time.events.add(Phaser.Timer.SECOND*0.5,function(){button.alpha=0.6;},this); if(phase_mode==1){sound1.play();} else if(phase_mode==2)sound2.play(); else if(phase_mode==3)sound3.play(); else if(phase_mode==4)sound4.play(); else if(phase_mode==5)sound5.play(); }, this, 2, 2, 2); 
     button.name = name;
     button.anchor.setTo(0.5,0.5); 
     button.scale.set(1, 1); 
     button.smoothed = true; 
     button.alpha = 0.65;
 
 }

function makeButton3(name, x, y, sound1, sound2, sound3, sound4, sound5) { 
 
     var button = game.add.button(x-50, y, 'button', function(){  button.alpha=1; game.time.events.add(Phaser.Timer.SECOND*0.5,function(){button.alpha=0.6;},this); if(phase_mode==1){sound1.play();} else if(phase_mode==2)sound2.play(); else if(phase_mode==3)sound3.play(); else if(phase_mode==4)sound4.play(); else if(phase_mode==5)sound5.play(); }, this, 3, 3, 3); 
     button.name = name;
     button.anchor.setTo(0.5,0.5); 
     button.scale.set(1, 1); 
     button.smoothed = true; 
     button.alpha = 0.65;
 
 }

function makePhaseButton(x, y, num) { 
 
     var button = game.add.button(x, y, 'button', function(){button.alpha=1; phase_mode=num;}, this, 1, 2, 0); 
     button.anchor.setTo(0.5,0.5); 
     button.scale.set(0.9, 0.9); 
     button.smoothed = true; 
     button.alpha = 0.65;
 
 } 
