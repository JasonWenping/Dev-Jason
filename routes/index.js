var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'CHARITY',
    tag:['HOME','DISCOVWERY','START CAMPAIGN','BLOG','SHOP','CONTACT','...'],
    slogen:'Helping People',
    s_slogen:'This is a paleform for someone to CAMPAIGN the one whom needs help.It is absolutly free platform. Welcome your visit. ',
    box_title:['SAVE LIVES','GIVE AN EDUCATION','CARE ABOUT HEALTH'],
    box_text:'Not usderstand to ask me how to read myproject.',
    live_title:['Live Campains','Our Story','How can you help','Buy campaign related goods','Best Donors'],
    live_text:'What ever,Just show some english sentence.SO listen to me to introduce this web to you.I hope you can fully have my words to usderstand this.',
    story_text:'What ever,Just show some english sentence.SO listen to me to introduce this web to you.I hope you can fully have my words to usderstand this. What ever,Just show some english sentence.SO listen to me to introduce this web to you.I hope you can fully have my words to usderstand this.',
    l_title:['Urgen rebuilding - 2500 Chennai flood survivors','Internet Opens New World of Learning Opportunities','Support 8 youth to succeed	in school and society','Use Soap to Empower 60 Rape Survivors in Mail'],
    l_text:'Sample Text is link shtt this heollo joke hah Next look loop Thanks!',
    l_name:['India','Slerra Leone','Guaternala','Mall'],
    funded:['40%','76%','55%','42%','35%','98%','21%','56%','15%','88%','26%','70%'],
    pledged:['$9,907','$45,213','$3,908','$23,907','$2,821','$32,123','$4,672','$9,086','$12,876','$32,800','$7,123','$9,086'],
    days:['15','21','33','24','11','24','05','16','12','21','15','17'],
    prize:['$12,893','$2,435','$1,345','$21.456','$34.876'],
    names:['Jason Lee','Luis Herry','Jams Roll Hely','Ketely Lee','Frank'],
    s_title:['Send a donation','Buy related goods','Donate blood','Become a volunteer'],
    s_text:'Sample Text is link shtt this heollo joke hah Next look loop Thanks!',
    url:url
  });
});

var l_title = ['Urgen rebuilding - 2500 Chennai flood survivors','Internet Opens New World of Learning Opportunities','Support 8 youth to succeed	in school and society','Use Soap to Empower 60 Rape Survivors in Mail','Urgen rebuilding - 2500 Chennai flood survivors','Internet Opens New World of Learning Opportunities','Support 8 youth to succeed	in school and society','Use Soap to Empower 60 Rape Survivors in Mail','Urgen rebuilding - 2500 Chennai flood survivors','Internet Opens New World of Learning Opportunities','Support 8 youth to succeed	in school and society','Use Soap to Empower 60 Rape Survivors in Mail']
var l_name = ['India','Slerra Leone','Guaternala','Mall','Guang','Heland','Austra','Runsso','Roma','Chengdu','Beijing','Shanghai'];
var pledged = ['$9,907','$45,213','$3,908','$23,907','$2,821','$32,123','$4,672','$9,086','$12,876','$32,800','$7,123','$9,086'];
var days = ['15','21','33','24','11','24','05','16','12','21','15','17'];
var funded = ['40%','76%','55%','42%','35%','98%','21%','56%','15%','88%','26%','70%'];
var url = ['pict_large1.gif','pict_large2.gif','pict_large3.gif','pict_large4.gif'];
router.get('/foo', function *(next) {
  yield this.render('newfile', {
    title: 'this is a new EJS file',
    l_text: 'Sample Text is link shtt this heollo joke hah Next look loop Thanks!',
    l_name: l_name,
    pledged:pledged,
    days:days,
    funded:funded,
    l_title:l_title,
    url:url
  });
});


var items=[{title:"A1"},{title:"A2"}];
router.get('/test',function *(next) {
	yield this.render('test',{
		title:'test file',
		items:items
	});
});


module.exports = router;
