// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const port = process.env.PORT || 5000

var app = express();

let emailTopic = [`Hey, can you help me out?`, `Can you do me a solid?`, `Hot young logos in your area`, `Any chance you can do this?`, `Offering a very lucrative exposure deal`, `You like this stuff right?`, `So...I'm in a jam`, `OH GOD PLEASE`];

let colours = [{ name: 'AliceBlue', hex: '#f0f8ff' }, { name: 'AntiqueWhite', hex: '#faebd7' }, { name: 'Aqua', hex: '#00ffff' }, { name: 'Aquamarine', hex: '#7fffd4' }, { name: 'Azure', hex: '#f0ffff' }, { name: 'Beige', hex: '#f5f5dc' }, { name: 'Bisque', hex: '#ffe4c4' }, { name: 'Black', hex: '#000000' }, { name: 'BlanchedAlmond', hex: '#ffebcd' }, { name: 'Blue', hex: '#0000ff' }, { name: 'BlueViolet', hex: '#8a2be2' }, { name: 'Brown', hex: '#a52a2a' }, { name: 'BurlyWood', hex: '#deb887' }, { name: 'CadetBlue', hex: '#5f9ea0' }, { name: 'Chartreuse', hex: '#7fff00' }, { name: 'Chocolate', hex: '#d2691e' }, { name: 'Coral', hex: '#ff7f50' }, { name: 'CornflowerBlue', hex: '#6495ed' }, { name: 'Cornsilk', hex: '#fff8dc' }, { name: 'Crimson', hex: '#dc143c' }, { name: 'Cyan', hex: '#00ffff' }, { name: 'DarkBlue', hex: '#00008b' }, { name: 'DarkCyan', hex: '#008b8b' }, { name: 'DarkGoldenRod', hex: '#b8860b' }, { name: 'DarkGray', hex: '#a9a9a9' }, { name: 'DarkGreen', hex: '#006400' }, { name: 'DarkKhaki', hex: '#bdb76b' }, { name: 'DarkMagenta', hex: '#8b008b' }, { name: 'DarkOliveGreen', hex: '#556b2f' }, { name: 'DarkOrange', hex: '#ff8c00' }, { name: 'DarkOrchid', hex: '#9932cc' }, { name: 'DarkRed', hex: '#8b0000' }, { name: 'DarkSalmon', hex: '#e9967a' }, { name: 'DarkSeaGreen', hex: '#8fbc8f' }, { name: 'DarkSlateBlue', hex: '#483d8b' }, { name: 'DarkSlateGray', hex: '#2f4f4f' }, { name: 'DarkTurquoise', hex: '#00ced1' }, { name: 'DarkViolet', hex: '#9400d3' }, { name: 'DeepPink', hex: '#ff1493' }, { name: 'DeepSkyBlue', hex: '#00bfff' }, { name: 'DimGray', hex: '#696969' }, { name: 'DodgerBlue', hex: '#1e90ff' }, { name: 'FireBrick', hex: '#b22222' }, { name: 'FloralWhite', hex: '#fffaf0' }, { name: 'ForestGreen', hex: '#228b22' }, { name: 'Fuchsia', hex: '#ff00ff' }, { name: 'Gainsboro', hex: '#dcdcdc' }, { name: 'GhostWhite', hex: '#f8f8ff' }, { name: 'Gold', hex: '#ffd700' }, { name: 'GoldenRod', hex: '#daa520' }, { name: 'Gray', hex: '#808080' }, { name: 'Green', hex: '#008000' }, { name: 'GreenYellow', hex: '#adff2f' }, { name: 'HoneyDew', hex: '#f0fff0' }, { name: 'HotPink', hex: '#ff69b4' }, { name: 'IndianRed', hex: '#cd5c5c' }, { name: 'Ivory', hex: '#fffff0' }, { name: 'Khaki', hex: '#f0e68c' }, { name: 'Lavender', hex: '#e6e6fa' }, { name: 'LavenderBlush', hex: '#fff0f5' }, { name: 'LawnGreen', hex: '#7cfc00' }, { name: 'LemonChiffon', hex: '#fffacd' }, { name: 'LightBlue', hex: '#add8e6' }, { name: 'LightCoral', hex: '#f08080' }, { name: 'LightCyan', hex: '#e0ffff' }, { name: 'LightGoldenRodYellow', hex: '#fafad2' }, { name: 'LightGrey', hex: '#d3d3d3' }, { name: 'LightGreen', hex: '#90ee90' }, { name: 'LightPink', hex: '#ffb6c1' }, { name: 'LightSalmon', hex: '#ffa07a' }, { name: 'LightSeaGreen', hex: '#20b2aa' }, { name: 'LightSkyBlue', hex: '#87cefa' }, { name: 'LightSlateGray', hex: '#778899' }, { name: 'LightSteelBlue', hex: '#b0c4de' }, { name: 'LightYellow', hex: '#ffffe0' }, { name: 'Lime', hex: '#00ff00' }, { name: 'LimeGreen', hex: '#32cd32' }, { name: 'Linen', hex: '#faf0e6' }, { name: 'Magenta', hex: '#ff00ff' }, { name: 'Maroon', hex: '#800000' }, { name: 'MediumAquaMarine', hex: '#66cdaa' }, { name: 'MediumBlue', hex: '#0000cd' }, { name: 'MediumOrchid', hex: '#ba55d3' }, { name: 'MediumPurple', hex: '#9370d8' }, { name: 'MediumSeaGreen', hex: '#3cb371' }, { name: 'MediumSlateBlue', hex: '#7b68ee' }, { name: 'MediumSpringGreen', hex: '#00fa9a' }, { name: 'MediumTurquoise', hex: '#48d1cc' }, { name: 'MediumVioletRed', hex: '#c71585' }, { name: 'MidnightBlue', hex: '#191970' }, { name: 'MintCream', hex: '#f5fffa' }, { name: 'MistyRose', hex: '#ffe4e1' }, { name: 'Moccasin', hex: '#ffe4b5' }, { name: 'NavajoWhite', hex: '#ffdead' }, { name: 'Navy', hex: '#000080' }, { name: 'OldLace', hex: '#fdf5e6' }, { name: 'Olive', hex: '#808000' }, { name: 'OliveDrab', hex: '#6b8e23' }, { name: 'Orange', hex: '#ffa500' }, { name: 'OrangeRed', hex: '#ff4500' }, { name: 'Orchid', hex: '#da70d6' }, { name: 'PaleGoldenRod', hex: '#eee8aa' }, { name: 'PaleGreen', hex: '#98fb98' }, { name: 'PaleTurquoise', hex: '#afeeee' }, { name: 'PaleVioletRed', hex: '#d87093' }, { name: 'PapayaWhip', hex: '#ffefd5' }, { name: 'PeachPuff', hex: '#ffdab9' }, { name: 'Peru', hex: '#cd853f' }, { name: 'Pink', hex: '#ffc0cb' }, { name: 'Plum', hex: '#dda0dd' }, { name: 'PowderBlue', hex: '#b0e0e6' }, { name: 'Purple', hex: '#800080' }, { name: 'RebeccaPurple', hex: '#663399' }, { name: 'Red', hex: '#ff0000' }, { name: 'RosyBrown', hex: '#bc8f8f' }, { name: 'RoyalBlue', hex: '#4169e1' }, { name: 'SaddleBrown', hex: '#8b4513' }, { name: 'Salmon', hex: '#fa8072' }, { name: 'SandyBrown', hex: '#f4a460' }, { name: 'SeaGreen', hex: '#2e8b57' }, { name: 'SeaShell', hex: '#fff5ee' }, { name: 'Sienna', hex: '#a0522d' }, { name: 'Silver', hex: '#c0c0c0' }, { name: 'SkyBlue', hex: '#87ceeb' }, { name: 'SlateBlue', hex: '#6a5acd' }, { name: 'SlateGray', hex: '#708090' }, { name: 'Snow', hex: '#fffafa' }, { name: 'SpringGreen', hex: '#00ff7f' }, { name: 'SteelBlue', hex: '#4682b4' }, { name: 'Tan', hex: '#d2b48c' }, { name: 'Teal', hex: '#008080' }, { name: 'Thistle', hex: '#d8bfd8' }, { name: 'Tomato', hex: '#ff6347' }, { name: 'Turquoise', hex: '#40e0d0' }, { name: 'Violet', hex: '#ee82ee' }, { name: 'Wheat', hex: '#f5deb3' }, { name: 'White', hex: '#ffffff' }, { name: 'WhiteSmoke', hex: '#f5f5f5' }, { name: 'Yellow', hex: '#ffff00' }, { name: 'YellowGreen', hex: '#9acd32' }];
let icons = ['rubber duck', 'bottle', 'candy wrapper', 'pen', 'wagon', 'drawer', 'lamp', 'scotch tape', 'rubber band', 'table', 'twezzers', 'doll', 'paper', 'chair', 'charger', 'flag', 'bracelet', 'twister', 'radio', 'milk', 'chapter book', 'bag', 'street lights', 'bookmark', 'photo album', 'shoes', 'wallet', 'stockings', 'mp3 player', 'video games', 'pants', 'toilet', 'slipper', 'bread', 'mouse pad', 'sofa', 'tree', 'CD', 'speakers', 'camera', 'toe ring', 'greeting card', 'sun glasses', 'leg warmers', 'tire swing', 'water bottle', 'phone', 'mirror', 'lip gloss', 'bananas', 'brocolli', 'blouse', 'lotion', 'white out', 'soap', 'soy sauce packet', 'knife', 'thermometer', 'cell phone', 'pillow', 'hair brush', 'bottle cap', 'button', 'spring', 'ring', 'television', 'drill press', 'balloon', 'checkbook', 'fake flowers', 'deodorant', 'candle', 'hair tie', 'monitor', 'lace', 'washing machine', 'sponge', 'keys', 'toothbrush', 'air freshener', 'sandal', 'rug', 'model car', 'picture frame', 'zipper', 'newspaper', 'clock', 'lamp shade', 'pencil', 'boom box', 'desk', 'needle', 'cinder block', 'controller', 'tomato', 'pool stick', 'cork', 'grid paper', 'face wash', 'keyboard', 'glasses', 'sailboat', 'tv', 'paint brush', 'truck', 'apple', 'clay pot', 'plate', 'nail file', 'food', 'tooth picks', 'bow', 'sketch pad', 'canvas', 'perfume', 'eye liner', 'floor', 'socks', 'blanket', 'fork', 'headphones', 'tissue box', 'toothpaste', 'outlet', 'glass', 'house', 'sticky note', 'door', 'playing card', 'cookie jar', 'nail clippers', 'carrots', 'spoon', 'sand paper', 'window', 'key chain', 'teddies', 'piano', 'buckel', 'chalk', 'helmet', 'hanger', 'cat', 'magnet', 'car', 'packing peanuts', 'fridge', 'mop', 'watch', 'towel', 'thread', 'bowl', 'clamp', 'USB drive', 'vase', 'conditioner', 'coasters', 'computer', 'puddle', 'clothes', 'glow stick', 'shoe lace', 'plastic fork', 'money', 'book', 'beef', 'bed', 'ipod', 'soda can', 'shovel', 'remote', 'ice cube tray', 'shirt', 'shawl', 'sharpie', 'flowers', 'screw', 'purse', 'chocolate', 'shampoo', 'thermostat', 'credit card', 'cup', 'eraser', 'sidewalk', 'seat belt', 'rusty nail', 'stop sign', 'couch', 'box'];
let logoTypes = ['Abstract Mark', 'Mascot Logo', 'Combination Mark', 'Emblem Logo', 'Lettermark', 'Pictorial Mark', 'Wordmark'];
let companyTypes = ['Antiques Dealer', 'Art Gallery', 'Bartending Service', 'Boat Tours', 'Clothing Boutique', 'Clothing Line', 'Clown Service', 'Coin or Stamp Dealer', 'Coffee Bar/Tea Salon', 'Cookie Business', 'Craft Beer Pub', 'Creative Arts Day Camp', 'Cupcake Business', 'Garden Center', 'Gift-Basket Design', 'Golf Coach', 'Gourmet Candy Cart', 'Hot Air Balloon Rides', 'Ice Cream Shop', 'Import/Export Business', 'Jewelry Designer', 'Knitting/Crocheting Lessons', 'Logo Design', 'Martini Bar', 'Miniature Golf Course', 'Mobile DJ', 'Night Club Promoter', 'Outdoor Adventures', 'Personal Trainer', 'Rare Book Dealer/Search Service', 'Sport Fishing Charter Boat', 'Vintage Toy Producer', 'Wine Bar', 'Basement Remodeler', 'Carpet/Upholstery Cleaning', 'Craft Classes', 'Dance Instructor', 'Day Care Service', 'Event Organizing', 'Freelance Writer', 'Financial Planner', 'Gardening Consultant', 'Home Bakery', 'Home Inspection Business', 'Home Landscaping', 'House Cleaning', 'Interior Decorating', 'Local Marketing Service', `Manufacturer's Representative`, 'Music Teaching', 'Pet Sitting', 'Photography', 'Promotional Material', 'Room Rental', 'Sales Trainer', 'Soap and Lotion Making', 'Sports Coaching and Training', 'Virtual Assistant', 'Art Lessons', 'Bicycle Repair', 'Car Resale', 'Career Counselor', 'Cooking Class Instructor', 'Collectibles Trading', 'Craft Business', 'Custom Embroidery', 'Editing Service', 'Errand Service', 'Family History Writer (Genealogical Service)', 'Financial Aid Consultant', 'Flea Market Vendor', 'Floating Art Gallery', 'Grants-Proposal Writer', 'Graphic Designer', 'Gutter Cleaner', 'Hat Making Business', 'Interior Room Painting/Wallpapering', 'Life Coaching', 'Party Planner', 'Personal Shopping Service', 'Scrapbooking', 'Speaking and Presentation Coaching', 'Test Prep Coach', 'Used Boat Sales', 'Yard Sales', 'Antique Refurbishment', 'Arbitration Service', 'Art Restoration Services', 'Art-Buying Consultant', 'Baby Proofing Service', 'Bicycle Rentals', 'Book Packager', 'Bookkeeping', 'Boudoir Photography', 'Business Broker', 'Carpet Installation', 'Catering Service', 'Furniture Making', 'House Painting', 'Human Resources Service', 'Image Consultant', 'Irrigation Services', 'Makeup Consulting', 'Map Publisher/Distributor', 'Messenger Service', 'Mobile Hair Salon', 'Nursery Design Service', 'Personal Computer Training', 'Pet Taxi Service', 'Publicity', 'Smartphone Repair', 'Stair Lift Business', 'Vintage Clothing Business', 'Affiliate Marketing', 'App Creator', 'Content Marketing', 'Domain Name Trading', 'Dropship Business', 'eBay Selling', 'eBook Publishing', 'E-commerce business', 'Fashion blog', 'Internet Marketing Specialist', 'Internet Researcher', 'Lead Generator for Local Businesses', 'Local Interest Blog', 'Online Game', 'Podcasting', 'Product Reviewer', 'Resume Writing', 'Sell on Etsy', 'SEO Specialist', 'Social Media Influencer', 'Social Media Specialist', 'UI/UX Design Business', 'Virtual Consignment Store', 'Website Developer', 'Advertising Agency', 'Air Charter Service', 'Apartment Building Owner', 'Automotive Parts Rebuilder', 'Banquet Facility', 'Beer Brewery', 'Car Wash', 'Commercial Real Estate Broker', 'Concert Promoter', 'Corporate Insurance Broker', 'Damage Restoration Service', 'Day Spa', 'Demolition/Wrecking Contractor', 'Executive Search Firm', 'Fitness Rental Equipment', 'Fund-Raising Firm', 'Health Club', 'Home Health Care Service', 'Liquidator', 'Meal Preparation Service', 'Mobile Billboard Service', 'Money Broker', 'Musical Instrument Leasing', 'Nanny Service', 'Outplacement Service', 'Porta Potty Rental Business', 'Prefab Home Sales/Construction', 'Real Estate Investor', 'Rehabbing Houses', 'Residence for the Elderly', 'Restaurant', 'Security Business', 'Senior Care Business', 'Shipping/Freight Forwarding Service', 'Temporary Employment Agency', 'Tree Service', 'Used Car Leasing', 'Used Industrial Equipment Sales', 'Venture Capitalist', 'Wedding Venue Business', 'Weight Loss Center', 'Window Treatment Specialist', 'Alterations/Seamstress Business', 'Aquarium Maintenance', 'Association Management Service', 'Boat Maintenance/Cleaning Service', 'Building Maintenance Service', 'Coin-Operated Laundry', 'Commercial Plant-Watering Service', 'Employee Leasing', 'Fabric Coverings', 'Jewelry/Clock/Watch Repair', 'Lawn Service', 'Locksmith', 'Mobile Car Inspection/Repair', 'Office Cleaning', 'Pest Control Service', 'Pet Grooming', 'Pool Maintenance and Cleaning', 'Property Management Service', 'Sandwich Shop', 'Spa Service Business', 'Storage Service', 'Tailoring Service', 'Television Repair', 'Uniform Service', 'Vending Machine Owner', 'Apartment Preparation Service', 'Baby-Sitting Service', 'Balloon Delivery Service', 'Boat Operation Instructor', 'Bridal Consultant', 'Bulletin Board Service', 'Business Plan Writer', 'Chef for Hire', 'Cosmetic Sales', 'Decks/Outdoor Furniture'];

let companySurnames = ['Gray', 'Clements', 'Schmitt', 'Petersen', 'Hooper', 'French', 'Stein', 'Gill', 'Key', 'Houston', 'Gonzalez', 'Murphy', 'Goodwin', 'Huff', 'Kelly', 'Paul', 'Luna', 'Ayers', 'Herring', 'Huerta', 'Khan', 'James', 'Duffy', 'Wiley', 'McKee', 'Finley', 'Armstrong', 'Fry', 'Huang', 'Blevins', 'Bridges', 'Richards', 'Wiggins', 'Prince', 'Zavala', 'Vasquez', 'Best', 'Strong', 'Knight', 'McCoy', 'Buck', 'Montgomery', 'Fritz', 'Espinoza', 'Grimes', 'Short', 'Lindsey', 'Hancock', 'Fuentes', 'Morse', 'Duran', 'Roth', 'Leonard', 'Petty', 'Salazar', 'Terry', 'Patton', 'Maynard', 'Madden', 'Cortez', 'Howard', 'McNeil', 'Stewart', 'Blanchard', 'Scott', 'Sexton', 'Fernandez', 'Irwin', 'Charles', 'Cook', 'Esparza', 'Bass', 'Rangel', 'Griffith', 'Cox', 'Duke', 'Delgado', 'Fox', 'Daugherty', 'Garner', 'Castro', 'Padilla', 'Kane', 'Horton', 'Phelps', 'Francis', 'Browning', 'Levine', 'Summers', 'Poole', 'Cunningham', 'Bonilla', 'Brock', 'Marquez', 'Olsen', 'Cowan', 'Bartlett', 'Archer', 'McIntosh', 'Vang'];
let companyEnd = ["Association", "Business", "Company", "Co.", "Corporation", "Corp.", "Club", "Emporium", "Foundation", "Fund", "Incorporated", "Inc.", "Institute", "Ltd.", "Society", "Syndicate", "Union", "& Sons"];
let company = { companyName: "", clientName: "" };

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', express.static('./images/favicon.ico'));

app.get('/', function (req, res, next) {
  generateCompanyName();
  res.render('index', {
    title: 'Keep It Brief - Client brief generator',
    emailSubject: emailTopic[Math.floor(Math.random() * emailTopic.length)],
    clientName: company.clientName,
    clientEmail: `${company.clientName.replace(/[^\w\s!?]/g, '').replace(" ", "").toLowerCase()}`,
    dateReceived: getDate(),
    companyName: company.companyName,
    companyType: companyTypes[Math.floor(Math.random() * companyTypes.length)],
    logoType: logoTypes[Math.floor(Math.random() * logoTypes.length)],
    icon: setTitleCase(icons[Math.floor(Math.random() * icons.length)]),
    colour: colours[Math.floor(Math.random() * colours.length)]
  });
});

const setTitleCase = (string) => {
  if (string.length > 2) {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  } else {
    return string.toUpperCase();
  }
};


const generateCompanyName = () => {
  let returnName = "";
  var letters =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
      , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var letter = letters[Math.floor(Math.random() * letters.length)];
  let familyName = companySurnames[Math.floor(Math.random() * companySurnames.length)];
  let businessEnd = companyEnd[Math.floor(Math.random() * companyEnd.length)];
  company.clientName = `${letter.toUpperCase()}. ${familyName}`;

  let nameFormat = Math.floor(Math.random() * 3) + 1;
  if (nameFormat === 1) {
    if (familyName.toUpperCase().charAt(familyName.length - 1) === "S") {
      familyName += `'`;
    } else {
      familyName += `'s`;
    }
    returnName = familyName + " " + businessEnd;
  } else if (nameFormat === 2) {
    returnName = `The ${familyName} ${businessEnd}`;
  } else {
    if (familyName.toUpperCase().charAt(familyName.length - 1) === "S") {
      familyName += `'`;
    } else {
      familyName += `'s`;
    }
    returnName = familyName;
  }
  company.companyName = returnName;
};

const getDate = () => {
  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  let time = new Date();

  let amPMTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  let timeString = `${monthNames[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()} at ${amPMTime}`;
  return timeString;
};

app.listen(port, () => {
  console.log(`Keep It Brief running on port: ${port}`);
});

module.exports = app;
