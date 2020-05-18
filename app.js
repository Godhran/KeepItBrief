// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const port = process.env.PORT || 5000

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

let emailTopic = [`Hey, can you help me out?`, `Can you do me a solid?`, `Hot young logos in your area`, `Any chance you can do this?`, `Offering a very lucrative exposure deal`, `You like this stuff right?`, `So...I'm in a jam`, `OH GOD PLEASE`];

let colours = ['White', 'Yellow', 'Blue', 'Red', 'Green', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Purple', 'Navy blue', 'Pea green', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hot pink', 'Magenta', 'Olden', 'Plum', 'Olive', 'Cyan'];
let icons = ['rubber duck', 'bottle', 'candy wrapper', 'pen', 'wagon', 'drawer', 'lamp', 'scotch tape', 'rubber band', 'table', 'twezzers', 'doll', 'paper', 'chair', 'charger', 'flag', 'bracelet', 'twister', 'radio', 'milk', 'chapter book', 'bag', 'street lights', 'bookmark', 'photo album', 'shoes', 'wallet', 'stockings', 'mp3 player', 'video games', 'pants', 'toilet', 'slipper', 'bread', 'mouse pad', 'sofa', 'tree', 'CD', 'speakers', 'camera', 'toe ring', 'greeting card', 'sun glasses', 'leg warmers', 'tire swing', 'water bottle', 'phone', 'mirror', 'lip gloss', 'bananas', 'brocolli', 'blouse', 'lotion', 'white out', 'soap', 'soy sauce packet', 'knife', 'thermometer', 'cell phone', 'pillow', 'hair brush', 'bottle cap', 'button', 'spring', 'ring', 'television', 'drill press', 'balloon', 'checkbook', 'fake flowers', 'deodorant', 'candle', 'hair tie', 'monitor', 'lace', 'washing machine', 'sponge', 'keys', 'toothbrush', 'air freshener', 'sandal', 'rug', 'model car', 'picture frame', 'zipper', 'newspaper', 'clock', 'lamp shade', 'pencil', 'boom box', 'desk', 'needle', 'cinder block', 'controller', 'tomato', 'pool stick', 'cork', 'grid paper', 'face wash', 'keyboard', 'glasses', 'sailboat', 'tv', 'paint brush', 'truck', 'apple', 'clay pot', 'plate', 'nail file', 'food', 'tooth picks', 'bow', 'sketch pad', 'canvas', 'perfume', 'eye liner', 'floor', 'socks', 'blanket', 'fork', 'headphones', 'tissue box', 'toothpaste', 'outlet', 'glass', 'house', 'sticky note', 'door', 'playing card', 'cookie jar', 'nail clippers', 'carrots', 'spoon', 'sand paper', 'window', 'key chain', 'teddies', 'piano', 'buckel', 'chalk', 'helmet', 'hanger', 'cat', 'magnet', 'car', 'packing peanuts', 'fridge', 'mop', 'watch', 'towel', 'thread', 'bowl', 'clamp', 'USB drive', 'vase', 'conditioner', 'coasters', 'computer', 'puddle', 'clothes', 'glow stick', 'shoe lace', 'plastic fork', 'money', 'book', 'beef', 'bed', 'ipod', 'soda can', 'shovel', 'remote', 'ice cube tray', 'shirt', 'shawl', 'sharpie', 'flowers', 'screw', 'purse', 'chocolate', 'shampoo', 'thermostat', 'credit card', 'cup', 'eraser', 'sidewalk', 'seat belt', 'rusty nail', 'stop sign', 'couch', 'box'];
let logoTypes = ['Abstract Mark', 'Mascot Logo', 'Combination Mark', 'Emblem Logo', 'Lettermark', 'Pictorial Mark', 'Wordmark'];
let companyTypes = ['Antiques Dealer', 'Art Gallery', 'Bartending Service', 'Boat Tours', 'Clothing Boutique', 'Clothing Line', 'Clown Service', 'Coin or Stamp Dealer', 'Coffee Bar/Tea Salon', 'Cookie Business', 'Craft Beer Pub', 'Creative Arts Day Camp', 'Cupcake Business', 'Garden Center', 'Gift-Basket Design', 'Golf Coach', 'Gourmet Candy Cart', 'Hot Air Balloon Rides', 'Ice Cream Shop', 'Import/Export Business', 'Jewelry Designer', 'Knitting/Crocheting Lessons', 'Logo Design', 'Martini Bar', 'Miniature Golf Course', 'Mobile DJ', 'Night Club Promoter', 'Outdoor Adventures', 'Personal Trainer', 'Rare Book Dealer/Search Service', 'Sport Fishing Charter Boat', 'Vintage Toy Producer', 'Wine Bar', 'Basement Remodeler', 'Carpet/Upholstery Cleaning', 'Craft Classes', 'Dance Instructor', 'Day Care Service', 'Event Organizing', 'Freelance Writer', 'Financial Planner', 'Gardening Consultant', 'Home Bakery', 'Home Inspection Business', 'Home Landscaping', 'House Cleaning', 'Interior Decorating', 'Local Marketing Service', `Manufacturer's Representative`, 'Music Teaching', 'Pet Sitting', 'Photography', 'Promotional Material', 'Room Rental', 'Sales Trainer', 'Soap and Lotion Making', 'Sports Coaching and Training', 'Virtual Assistant', 'Art Lessons', 'Bicycle Repair', 'Car Resale', 'Career Counselor', 'Cooking Class Instructor', 'Collectibles Trading', 'Craft Business', 'Custom Embroidery', 'Editing Service', 'Errand Service', 'Family History Writer (Genealogical Service)', 'Financial Aid Consultant', 'Flea Market Vendor', 'Floating Art Gallery', 'Grants-Proposal Writer', 'Graphic Designer', 'Gutter Cleaner', 'Hat Making Business', 'Interior Room Painting/Wallpapering', 'Life Coaching', 'Party Planner', 'Personal Shopping Service', 'Scrapbooking', 'Speaking and Presentation Coaching', 'Test Prep Coach', 'Used Boat Sales', 'Yard Sales', 'Antique Refurbishment', 'Arbitration Service', 'Art Restoration Services', 'Art-Buying Consultant', 'Baby Proofing Service', 'Bicycle Rentals', 'Book Packager', 'Bookkeeping', 'Boudoir Photography', 'Business Broker', 'Carpet Installation', 'Catering Service', 'Furniture Making', 'House Painting', 'Human Resources Service', 'Image Consultant', 'Irrigation Services', 'Makeup Consulting', 'Map Publisher/Distributor', 'Messenger Service', 'Mobile Hair Salon', 'Nursery Design Service', 'Personal Computer Training', 'Pet Taxi Service', 'Publicity', 'Smartphone Repair', 'Stair Lift Business', 'Vintage Clothing Business', 'Affiliate Marketing', 'App Creator', 'Content Marketing', 'Domain Name Trading', 'Dropship Business', 'eBay Selling', 'eBook Publishing', 'E-commerce business', 'Fashion blog', 'Internet Marketing Specialist', 'Internet Researcher', 'Lead Generator for Local Businesses', 'Local Interest Blog', 'Online Game', 'Podcasting', 'Product Reviewer', 'Resume Writing', 'Sell on Etsy', 'SEO Specialist', 'Social Media Influencer', 'Social Media Specialist', 'UI/UX Design Business', 'Virtual Consignment Store', 'Website Developer', 'Advertising Agency', 'Air Charter Service', 'Apartment Building Owner', 'Automotive Parts Rebuilder', 'Banquet Facility', 'Beer Brewery', 'Car Wash', 'Commercial Real Estate Broker', 'Concert Promoter', 'Corporate Insurance Broker', 'Damage Restoration Service', 'Day Spa', 'Demolition/Wrecking Contractor', 'Executive Search Firm', 'Fitness Rental Equipment', 'Fund-Raising Firm', 'Health Club', 'Home Health Care Service', 'Liquidator', 'Meal Preparation Service', 'Mobile Billboard Service', 'Money Broker', 'Musical Instrument Leasing', 'Nanny Service', 'Outplacement Service', 'Porta Potty Rental Business', 'Prefab Home Sales/Construction', 'Real Estate Investor', 'Rehabbing Houses', 'Residence for the Elderly', 'Restaurant', 'Security Business', 'Senior Care Business', 'Shipping/Freight Forwarding Service', 'Temporary Employment Agency', 'Tree Service', 'Used Car Leasing', 'Used Industrial Equipment Sales', 'Venture Capitalist', 'Wedding Venue Business', 'Weight Loss Center', 'Window Treatment Specialist', 'Alterations/Seamstress Business', 'Aquarium Maintenance', 'Association Management Service', 'Boat Maintenance/Cleaning Service', 'Building Maintenance Service', 'Coin-Operated Laundry', 'Commercial Plant-Watering Service', 'Employee Leasing', 'Fabric Coverings', 'Jewelry/Clock/Watch Repair', 'Lawn Service', 'Locksmith', 'Mobile Car Inspection/Repair', 'Office Cleaning', 'Pest Control Service', 'Pet Grooming', 'Pool Maintenance and Cleaning', 'Property Management Service', 'Sandwich Shop', 'Spa Service Business', 'Storage Service', 'Tailoring Service', 'Television Repair', 'Uniform Service', 'Vending Machine Owner', 'Apartment Preparation Service', 'Baby-Sitting Service', 'Balloon Delivery Service', 'Boat Operation Instructor', 'Bridal Consultant', 'Bulletin Board Service', 'Business Plan Writer', 'Chef for Hire', 'Cosmetic Sales', 'Decks/Outdoor Furniture'];


let companySurnames = ['Gray', 'Clements', 'Schmitt', 'Petersen', 'Hooper', 'French', 'Stein', 'Gill', 'Key', 'Houston', 'Gonzalez', 'Murphy', 'Goodwin', 'Huff', 'Kelly', 'Paul', 'Luna', 'Ayers', 'Herring', 'Huerta', 'Khan', 'James', 'Duffy', 'Wiley', 'Mckee', 'Finley', 'Armstrong', 'Fry', 'Huang', 'Blevins', 'Bridges', 'Richards', 'Wiggins', 'Prince', 'Zavala', 'Vasquez', 'Best', 'Strong', 'Knight', 'Mccoy', 'Buck', 'Montgomery', 'Fritz', 'Espinoza', 'Grimes', 'Short', 'Lindsey', 'Hancock', 'Fuentes', 'Morse', 'Duran', 'Roth', 'Leonard', 'Petty', 'Salazar', 'Terry', 'Patton', 'Maynard', 'Madden', 'Cortez', 'Howard', 'Mcneil', 'Stewart', 'Blanchard', 'Scott', 'Sexton', 'Fernandez', 'Irwin', 'Charles', 'Cook', 'Esparza', 'Bass', 'Rangel', 'Griffith', 'Cox', 'Duke', 'Delgado', 'Fox', 'Daugherty', 'Garner', 'Castro', 'Padilla', 'Kane', 'Horton', 'Phelps', 'Francis', 'Browning', 'Levine', 'Summers', 'Poole', 'Cunningham', 'Bonilla', 'Brock', 'Marquez', 'Olsen', 'Cowan', 'Bartlett', 'Archer', 'McIntosh', 'Vang'];
let companyEnd = ["Association", "Business", "Company", "Co.", "Corporation", "Corp.", "Club", "Emporium", "Foundation", "Fund", "Incorporated", "Inc.", "Institute", "Ltd.", "Society", "Syndicate", "Union", "& Sons"];
let company = { companyName: "", clientName: "" };
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   console.log("Running on " + )
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', express.static('./images/favicon.ico'));

// app.get('/', function(req, res, next) {
//     res.render('index', {
//         title: 'LYIT | Netball',
//         playersOBJ:JSON.stringify(playerArray),
//         session:req.session
//     });
// });

app.get('/', function (req, res, next) {
  generateCompanyName();
  res.render('index', {
    title: 'Keep It Brief - Client brief generator',
    emailSubject: emailTopic[Math.floor(Math.random() * emailTopic.length)],
    imageSource: `https://api.adorable.io/avatars/512/${company.companyName}`,
    clientName: company.clientName,
    clientEmail: `${company.clientName.replace(/[^\w\s!?]/g,'').replace(" ","").toLowerCase()}`,
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
  // if((Math.floor(Math.random * 6)+1)===5){
  //   familyNam
  // }
  console.log(familyName);
  company.clientName = `${letter.toUpperCase()}. ${familyName}`;
  if (familyName.toUpperCase().charAt(familyName.length - 1) === "S") {
    familyName += `'`;
  } else {
    familyName += `'s`;
  }
  returnName = familyName + " " + businessEnd;
  company.companyName = returnName;
  // return returnName.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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
