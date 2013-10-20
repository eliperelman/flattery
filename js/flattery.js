(function ($, ko) {

    var biomes = {
        0: 'Ocean',
        1: 'Plains',
        2: 'Desert',
        3: 'Extreme Hills',
        4: 'Forest',
        5: 'Taiga',
        6: 'Swampland',
        7: 'River',
        8: 'Nether',
        9: 'The End (Sky)',
        10: 'Frozen Ocean',
        11: 'Frozen River',
        12: 'Ice Plains',
        14: 'Mushroom Island',
        15: 'Mushroom Island Shore',
        16: 'Beach',
        21: 'Jungle',
        23: 'Jungle Edge',
        24: 'Deep Ocean',
        25: 'Stone Beach',
        26: 'Cold Beach',
        27: 'Birch Forest',
        29: 'Roofed Forest',
        30: 'Snowless Taiga',
        32: 'Mega Taiga',
        34: 'Extreme Hills+',
        35: 'Savanna',
        37: 'Mesa',
        129: 'Sunflower Plains',
        130: 'Desert M',
        131: 'Extreme Hills M',
        132: 'Flower Forest',
        133: 'Taiga M',
        134: 'Swampland M',
        140: 'Ice Plains Spikes',
        149: 'Jungle M',
        151: 'Jungle Edge M',
        155: 'Birch Forest M',
        156: 'Birch Forest Hills M',
        157: 'Roofed Forest M',
        158: 'Cold Taiga M',
        160: 'Mega Spruce Taiga',
        162: 'Extreme Hills+ M',
        163: 'Savanna M',
        165: 'Mesa Bryce'
    };
    var items = {
        "0": "Air",
        "1": "Stone",
        "2": "Grass",
        "3": "Dirt",
        "4": "Cobblestone",
        "5": "Oak Wood Plank",
        "6": "Oak Sapling",
        "7": "Bedrock",
        "8": "Water",
        "9": "Stationary Water",
        "10": "Lava",
        "11": "Stationary Lava",
        "12": "Sand",
        "13": "Gravel",
        "14": "Gold Ore",
        "15": "Iron Ore",
        "16": "Coal Ore",
        "17": "Oak Wood",
        "18": "Oak Leaves",
        "19": "Sponge",
        "20": "Glass",
        "21": "Lapis Lazuli Ore",
        "22": "Lapis Lazuli Block",
        "23": "Dispenser",
        "24": "Sandstone",
        "25": "Note Block",
        "26": "Bed Block",
        "27": "Powered Rail",
        "28": "Detector Rail",
        "29": "Sticky Piston",
        "30": "Web",
        "31": "Dead Shrub",
        "32": "Dead Shrub",
        "33": "Piston",
        "34": "Piston Head",
        "35": "White Wool",
        "37": "Dandelion",
        "38": "Rose",
        "39": "Brown Mushroom",
        "40": "Red Mushroom",
        "41": "Gold Block",
        "42": "Iron Block",
        "43": "Double Stone Slab",
        "44": "Stone Slab",
        "45": "Brick",
        "46": "TNT",
        "47": "Bookshelf",
        "48": "Mossy Cobblestone",
        "49": "Obsidian",
        "50": "Torch",
        "51": "Fire",
        "52": "Monster Spawner",
        "53": "Oak Wood Stairs",
        "54": "Chest",
        "55": "Redstone Wire",
        "56": "Diamond Ore",
        "57": "Diamond Block",
        "58": "Workbench",
        "59": "Wheat Crops",
        "60": "Soil",
        "61": "Furnace",
        "62": "Burning Furnace",
        "63": "Sign Post",
        "64": "Wooden Door Block",
        "65": "Ladder",
        "66": "Rails",
        "67": "Cobblestone Stairs",
        "68": "Wall Sign",
        "69": "Lever",
        "70": "Stone Pressure Plate",
        "71": "Iron Door Block",
        "72": "Wooden Pressure Plate",
        "73": "Redstone Ore",
        "74": "Glowing Redstone Ore",
        "75": "Redstone Torch (off)",
        "76": "Redstone Torch (on)",
        "77": "Stone Button",
        "78": "Snow",
        "79": "Ice",
        "80": "Snow Block",
        "81": "Cactus",
        "82": "Clay",
        "83": "Sugar Cane",
        "84": "Jukebox",
        "85": "Fence",
        "86": "Pumpkin",
        "87": "Netherrack",
        "88": "Soul Sand",
        "89": "Glowstone",
        "90": "Portal",
        "91": "Jack-O-Lantern",
        "92": "Cake Block",
        "93": "Redstone Repeater Block (off)",
        "94": "Redstone Repeater Block (on)",
        "95": "Locked Chest",
        "96": "Trapdoor",
        "97": "Stone (Silverfish)",
        "98": "Stone Brick",
        "99": "Red Mushroom Cap",
        "100": "Brown Mushroom Cap",
        "101": "Iron Bars",
        "102": "Glass Pane",
        "103": "Melon Block",
        "104": "Pumpkin Stem",
        "105": "Melon Stem",
        "106": "Vines",
        "107": "Fence Gate",
        "108": "Brick Stairs",
        "109": "Stone Brick Stairs",
        "110": "Mycelium",
        "111": "Lily Pad",
        "112": "Nether Brick",
        "113": "Nether Brick Fence",
        "114": "Nether Brick Stairs",
        "115": "Nether Wart",
        "116": "Enchantment Table",
        "117": "Brewing Stand",
        "118": "Cauldron",
        "119": "End Portal",
        "120": "End Portal Frame",
        "121": "End Stone",
        "122": "Dragon Egg",
        "123": "Redstone Lamp (inactive)",
        "124": "Redstone Lamp (active)",
        "125": "Double Oak Wood Slab",
        "126": "Oak Wood Slab",
        "127": "Cocoa Plant",
        "128": "Sandstone Stairs",
        "129": "Emerald Ore",
        "130": "Ender Chest",
        "131": "Tripwire Hook",
        "132": "Tripwire",
        "133": "Emerald Block",
        "134": "Spruce Wood Stairs",
        "135": "Birch Wood Stairs",
        "136": "Jungle Wood Stairs",
        "137": "Command Block",
        "138": "Beacon Block",
        "139": "Cobblestone Wall",
        "140": "Flower Pot",
        "141": "Carrots",
        "142": "Potatoes",
        "143": "Wooden Button",
        "144": "Mob Head",
        "145": "Anvil",
        "146": "Trapped Chest",
        "147": "Weighted Pressure Plate (light)",
        "148": "Weighted Pressure Plate (heavy)",
        "149": "Redstone Comparator (inactive)",
        "150": "Redstone Comparator (active)",
        "151": "Daylight Sensor",
        "152": "Redstone Block",
        "153": "Nether Quartz Ore",
        "154": "Hopper",
        "155": "Quartz Block",
        "156": "Quartz Stairs",
        "157": "Activator Rail",
        "158": "Dropper",
        "159": "White Stained Clay",
        "170": "Hay Bale",
        "171": "White Carpet",
        "172": "Hardened Clay",
        "173": "Block of Coal",
        "256": "Iron Shovel",
        "257": "Iron Pickaxe",
        "258": "Iron Axe",
        "259": "Flint and Steel",
        "260": "Apple",
        "261": "Bow",
        "262": "Arrow",
        "263": "Coal",
        "264": "Diamond",
        "265": "Iron Ingot",
        "266": "Gold Ingot",
        "267": "Iron Sword",
        "268": "Wooden Sword",
        "269": "Wooden Shovel",
        "270": "Wooden Pickaxe",
        "271": "Wooden Axe",
        "272": "Stone Sword",
        "273": "Stone Shovel",
        "274": "Stone Pickaxe",
        "275": "Stone Axe",
        "276": "Diamond Sword",
        "277": "Diamond Shovel",
        "278": "Diamond Pickaxe",
        "279": "Diamond Axe",
        "280": "Stick",
        "281": "Bowl",
        "282": "Mushroom Soup",
        "283": "Gold Sword",
        "284": "Gold Shovel",
        "285": "Gold Pickaxe",
        "286": "Gold Axe",
        "287": "String",
        "288": "Feather",
        "289": "Sulphur",
        "290": "Wooden Hoe",
        "291": "Stone Hoe",
        "292": "Iron Hoe",
        "293": "Diamond Hoe",
        "294": "Gold Hoe",
        "295": "Wheat Seeds",
        "296": "Wheat",
        "297": "Bread",
        "298": "Leather Helmet",
        "299": "Leather Chestplate",
        "300": "Leather Leggings",
        "301": "Leather Boots",
        "302": "Chainmail Helmet",
        "303": "Chainmail Chestplate",
        "304": "Chainmail Leggings",
        "305": "Chainmail Boots",
        "306": "Iron Helmet",
        "307": "Iron Chestplate",
        "308": "Iron Leggings",
        "309": "Iron Boots",
        "310": "Diamond Helmet",
        "311": "Diamond Chestplate",
        "312": "Diamond Leggings",
        "313": "Diamond Boots",
        "314": "Gold Helmet",
        "315": "Gold Chestplate",
        "316": "Gold Leggings",
        "317": "Gold Boots",
        "318": "Flint",
        "319": "Raw Porkchop",
        "320": "Cooked Porkchop",
        "321": "Painting",
        "322": "Golden Apple",
        "323": "Sign",
        "324": "Wooden Door",
        "325": "Bucket",
        "326": "Water Bucket",
        "327": "Lava Bucket",
        "328": "Minecart",
        "329": "Saddle",
        "330": "Iron Door",
        "331": "Redstone",
        "332": "Snowball",
        "333": "Boat",
        "334": "Leather",
        "335": "Milk Bucket",
        "336": "Clay Brick",
        "337": "Clay Balls",
        "338": "Sugarcane",
        "339": "Paper",
        "340": "Book",
        "341": "Slimeball",
        "342": "Storage Minecart",
        "343": "Powered Minecart",
        "344": "Egg",
        "345": "Compass",
        "346": "Fishing Rod",
        "347": "Clock",
        "348": "Glowstone Dust",
        "349": "Raw Fish",
        "350": "Cooked Fish",
        "351": "Ink Sack",
        "352": "Bone",
        "353": "Sugar",
        "354": "Cake",
        "355": "Bed",
        "356": "Redstone Repeater",
        "357": "Cookie",
        "358": "Map",
        "359": "Shears",
        "360": "Melon",
        "361": "Pumpkin Seeds",
        "362": "Melon Seeds",
        "363": "Raw Beef",
        "364": "Steak",
        "365": "Raw Chicken",
        "366": "Cooked Chicken",
        "367": "Rotten Flesh",
        "368": "Ender Pearl",
        "369": "Blaze Rod",
        "370": "Ghast Tear",
        "371": "Gold Nugget",
        "372": "Nether Wart Seeds",
        "373": "Potion",
        "374": "Glass Bottle",
        "375": "Spider Eye",
        "376": "Fermented Spider Eye",
        "377": "Blaze Powder",
        "378": "Magma Cream",
        "379": "Brewing Stand",
        "380": "Cauldron",
        "381": "Eye of Ender",
        "382": "Glistering Melon",
        "384": "Bottle o' Enchanting",
        "385": "Fire Charge",
        "386": "Book and Quill",
        "387": "Written Book",
        "388": "Emerald",
        "389": "Item Frame",
        "390": "Flower Pot",
        "391": "Carrots",
        "392": "Potato",
        "393": "Baked Potato",
        "394": "Poisonous Potato",
        "395": "Map",
        "396": "Golden Carrot",
        "397": "Mob Head (Skeleton)",
        "398": "Carrot on a Stick",
        "399": "Nether Star",
        "400": "Pumpkin Pie",
        "401": "Firework Rocket",
        "402": "Firework Star",
        "403": "Enchanted Book",
        "404": "Redstone Comparator",
        "405": "Nether Brick",
        "406": "Nether Quartz",
        "407": "Minecart with TNT",
        "408": "Minecart with Hopper",
        "417": "Iron Horse Armor",
        "418": "Gold Horse Armor",
        "419": "Diamond Horse Armor",
        "420": "Lead",
        "421": "Name Tag",
        "2256": "13 Disc",
        "2257": "Cat Disc",
        "2258": "Blocks Disc",
        "2259": "Chirp Disc",
        "2260": "Far Disc",
        "2261": "Mall Disc",
        "2262": "Mellohi Disc",
        "2263": "Stal Disc",
        "2264": "Strad Disc",
        "2265": "Ward Disc",
        "2266": "11 Disc",
        "2267": "Wait Disc",
        "5:1": "Spruce Wood Plank",
        "5:2": "Birch Wood Plank",
        "5:3": "Jungle Wood Plank",
        "6:1": "Spruce Sapling",
        "6:2": "Birch Sapling",
        "6:3": "Jungle Sapling",
        "17:1": "Spruce Wood",
        "17:2": "Birch Wood",
        "17:3": "Jungle Wood",
        "18:1": "Spruce Leaves",
        "18:2": "Birch Leaves",
        "18:3": "Jungle Leaves",
        "24:1": "Chiseled Sandstone",
        "24:2": "Smooth Sandstone",
        "31:1": "Grass",
        "31:2": "Fern",
        "35:1": "Orange Wool",
        "35:2": "Magenta Wool",
        "35:3": "Light Blue Wool",
        "35:4": "Yellow Wool",
        "35:5": "Lime Wool",
        "35:6": "Pink Wool",
        "35:7": "Gray Wool",
        "35:8": "Light Gray Wool",
        "35:9": "Cyan Wool",
        "35:10": "Purple Wool",
        "35:11": "Blue Wool",
        "35:12": "Brown Wool",
        "35:13": "Green Wool",
        "35:14": "Red Wool",
        "35:15": "Black Wool",
        "43:1": "Double Sandstone Slab",
        "43:2": "Double Wooden Slab",
        "43:3": "Double Cobblestone Slab",
        "43:4": "Double Brick Slab",
        "43:5": "Double Stone Brick Slab",
        "43:6": "Double Nether Brick Slab",
        "43:7": "Double Quartz Slab",
        "44:1": "Sandstone Slab",
        "44:2": "Wooden Slab",
        "44:3": "Cobblestone Slab",
        "44:4": "Brick Slab",
        "44:5": "Stone Brick Slab",
        "44:6": "Nether Brick Slab",
        "44:7": "Quartz Slab",
        "97:1": "Cobblestone (Silverfish)",
        "97:2": "Stone Brick (Silverfish)",
        "98:1": "Mossy Stone Brick",
        "98:2": "Cracked Stone Brick",
        "98:3": "Chiseled Stone Brick",
        "125:1": "Double Spruce Wood Slab",
        "125:2": "Double Birch Wood Slab",
        "125:3": "Double Jungle Wood Slab",
        "126:1": "Spruce Wood Slab",
        "126:2": "Birch Wood Slab",
        "126:3": "Jungle Wood Slab",
        "139:1": "Mossy Cobblestone Wall",
        "155:1": "Chiseled Quartz Block",
        "155:2": "Pillar Quartz Block",
        "159:1": "Orange Stained Clay",
        "159:2": "Magenta Stained Clay",
        "159:3": "Light Blue Stained Clay",
        "159:4": "Yellow Stained Clay",
        "159:5": "Lime Stained Clay",
        "159:6": "Pink Stained Clay",
        "159:7": "Gray Stained Clay",
        "159:8": "Light Gray Stained Clay",
        "159:9": "Cyan Stained Clay",
        "159:10": "Purple Stained Clay",
        "159:11": "Blue Stained Clay",
        "159:12": "Brown Stained Clay",
        "159:13": "Green Stained Clay",
        "159:14": "Red Stained Clay",
        "159:15": "Black Stained Clay",
        "171:1": "Orange Carpet",
        "171:2": "Magenta Carpet",
        "171:3": "Light Blue Carpet",
        "171:4": "Yellow Carpet",
        "171:5": "Lime Carpet",
        "171:6": "Pink Carpet",
        "171:7": "Gray Carpet",
        "171:8": "Light Gray Carpet",
        "171:9": "Cyan Carpet",
        "171:10": "Purple Carpet",
        "171:11": "Blue Carpet",
        "171:12": "Brown Carpet",
        "171:13": "Green Carpet",
        "171:14": "Red Carpet",
        "171:15": "Black Carpet",
        "263:1": "Charcoal",
        "322:1": "Enchanted Golden Apple",
        "351:1": "Rose Red",
        "351:2": "Cactus Green",
        "351:3": "Coco Beans",
        "351:4": "Lapis Lazuli",
        "351:5": "Purple Dye",
        "351:6": "Cyan Dye",
        "351:7": "Light Gray Dye",
        "351:8": "Gray Dye",
        "351:9": "Pink Dye",
        "351:10": "Lime Dye",
        "351:11": "Dandelion Yellow",
        "351:12": "Light Blue Dye",
        "351:13": "Magenta Dye",
        "351:14": "Orange Dye",
        "351:15": "Bone Meal",
        "383:50": "Spawn Creeper",
        "383:51": "Spawn Skeleton",
        "383:52": "Spawn Spider",
        "383:54": "Spawn Zombie",
        "383:55": "Spawn Slime",
        "383:56": "Spawn Ghast",
        "383:57": "Spawn Pigman",
        "383:58": "Spawn Enderman",
        "383:59": "Spawn Cave Spider",
        "383:60": "Spawn Silverfish",
        "383:61": "Spawn Blaze",
        "383:62": "Spawn Magma Cube",
        "383:65": "Spawn Bat",
        "383:66": "Spawn Witch",
        "383:90": "Spawn Pig",
        "383:91": "Spawn Sheep",
        "383:92": "Spawn Cow",
        "383:93": "Spawn Chicken",
        "383:94": "Spawn Squid",
        "383:95": "Spawn Wolf",
        "383:96": "Spawn Mooshroom",
        "383:98": "Spawn Ocelot",
        "383:100": "Spawn Horse",
        "383:120": "Spawn Villager",
        "397:1": "Mob Head (Wither Skeleton)",
        "397:2": "Mob Head (Zombie)",
        "397:3": "Mob Head (Human)",
        "397:4": "Mob Head (Creeper)"
    };
    var getItemIdClass = function (id) {
        if (id == null) {
            return '';
        }

        var value = '' + id;

        if (value.indexOf(':') === -1) {
            value += ':0'
        }

        return 'item-' + value.replace(':', '-');
    };

    var viewModel = {};

    viewModel.version = ko.observable(2);
    viewModel.layers = ko.observableArray();
    viewModel.showOptions = ko.observable(false);
    viewModel.items = $.map(items, function (value, key) {
        return {
            id: key,
            text: value
        };
    });
    viewModel.biomes = $.map(biomes, function (name, id) {
        return {
            name: name,
            id: id
        };
    });

    viewModel.strongholds = {};
    viewModel.strongholds.show = ko.observable(false);
    viewModel.strongholds.distance = ko.observable(32);
    viewModel.strongholds.count = ko.observable(3);
    viewModel.strongholds.spread = ko.observable(3);
    viewModel.strongholds.display = ko.computed(function () {
        var show = this.show();
        var distance = this.distance();
        var count = this.count();
        var spread = this.spread();
        var stringBuilder = [];

        if (!show) {
            return '';
        }

        stringBuilder.push('distance=' + distance);
        stringBuilder.push('count=' + count);
        stringBuilder.push('spread=' + spread);

        return 'stronghold(' + stringBuilder.join(' ') + ')';
    }, viewModel.strongholds);

    viewModel.villages = {};
    viewModel.villages.show = ko.observable(false);
    viewModel.villages.size = ko.observable(1);
    viewModel.villages.distance = ko.observable(32);
    viewModel.villages.display = ko.computed(function () {
        var show = this.show();
        var size = this.size();
        var distance = this.distance();
        var stringBuilder = [];

        if (!show) {
            return '';
        }

        stringBuilder.push('size=' + size);
        stringBuilder.push('distance=' + distance);

        return 'village(' + stringBuilder.join(' ') + ')';
    }, viewModel.villages);

    viewModel.mineshafts = {};
    viewModel.mineshafts.show = ko.observable(false);
    viewModel.mineshafts.chance = ko.observable(0.01);
    viewModel.mineshafts.display = ko.computed(function () {
        var show = this.show();
        var chance = this.chance();
        var stringBuilder = [];

        if (!show) {
            return '';
        }

        stringBuilder.push('chance=' + chance);

        return 'mineshaft(' + stringBuilder.join(' ') + ')';
    }, viewModel.mineshafts);

    viewModel.biome = {};
    viewModel.biome.id = ko.observable();
    viewModel.biome.structures = ko.observable(false);
    viewModel.biome.structureDistance = ko.observable(32);
    viewModel.biome.display = ko.computed(function () {
        var structures = this.structures();
        var structureDistance = this.structureDistance();
        var stringBuilder = [];

        if (!structures) {
            return '';
        }

        stringBuilder.push('distance=' + structureDistance);

        return 'biome_1(' + stringBuilder.join(' ') + ')';
    }, viewModel.biome);

    viewModel.dungeons = ko.observable(false);
    viewModel.decoration = ko.observable(false);
    viewModel.lakes = ko.observable(false);
    viewModel.lavaLakes = ko.observable(false);
    viewModel.preset = ko.computed(function () {
        var stringBuilder = [];
        var generationBuilder = [];
        var _layers = viewModel.layers().slice().reverse();
        var layers = $.map(_layers, function (layer, index) {
            var id = layer.item.id();
            var height = layer.height();

            if (id == null) {
                return;
            }

            return height === 1 ? '' + id : height + 'x' + id;
        });
        var biome = viewModel.biome.id();
        var strongholds = viewModel.strongholds.display();
        var villages = viewModel.villages.display();
        var mineshafts = viewModel.mineshafts.display();
        var biomeDisplay = viewModel.biome.display();
        var dungeons = viewModel.dungeons();
        var decoration = viewModel.decoration();
        var lakes = viewModel.lakes();
        var lavaLakes = viewModel.lavaLakes();

        // 1. Version number
        stringBuilder.push( viewModel.version() );

        // 2. Add all the block layers and their heights
        stringBuilder.push( layers.join(',') );

        // 3. Biome ID
        stringBuilder.push( biome );

        // 4. All the generation options
        if (strongholds) {
            generationBuilder.push( viewModel.strongholds.display() );
        }

        if (villages) {
            generationBuilder.push( viewModel.villages.display() );
        }

        if (mineshafts) {
            generationBuilder.push( viewModel.mineshafts.display() );
        }

        if (dungeons) {
            generationBuilder.push('dungeon');
        }

        if (decoration) {
            generationBuilder.push('decoration');
        }

        if (lakes) {
            generationBuilder.push('lake');
        }

        if (lavaLakes) {
            generationBuilder.push('lava_lake');
        }

        if (biomeDisplay) {
            generationBuilder.push( viewModel.biome.display() );
        }

        stringBuilder.push( generationBuilder.join(',') );

        return stringBuilder.join(';');
    });

    var Layer = function layer() {
        this.id = layer.nextId++;
        this.height = ko.observable(1);
    };
    Layer.nextId = 0;

    var Item = function item() {
        var item = this;

        this.id = ko.observable();
        this.name = ko.computed(function () {
            if (item.id() == null) {
                return '';
            }

            return items[ item.id() ];
        });
        this.idClass = ko.computed(function () {
            getItemIdClass( item.id() );
        });
    };

    $(document)
        .on('click', '.toggle-options', function () {
            viewModel.showOptions( !viewModel.showOptions() );
        })
        .on('focusin mouseup', '.preset-box', function (e) {
            if (e.type === 'mouseup') {
                e.preventDefault();
                return;
            }

            $(this).select();
        })
        .on('click', '.add-layer', function () {
            var layer = new Layer();
            layer.item = new Item();

            viewModel.layers.unshift(layer);
        })
        .on('click', '.remove', function () {
            var index = +$(this).attr('data-index');
            var layer = viewModel.layers()[index];

            viewModel.layers.remove(layer);
        })
        .on('click', '.move-down', function () {
            var index = +$(this).attr('data-index');
            var layers = viewModel.layers();

            viewModel.layers.splice(index, 2, layers[index + 1], layers[index]);
        })
        .on('click', '.move-up', function () {
            var index = +$(this).attr('data-index');
            var layers = viewModel.layers();

            viewModel.layers.splice(index - 1, 2, layers[index], layers[index - 1]);
        });

    ko.applyBindings(viewModel);

})(jQuery, ko);