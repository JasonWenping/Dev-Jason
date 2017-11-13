var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'CHARITY',
    tag:['HOME','DISCOVWERY','START CAMPAIGN','BLOG','SHOP','CONTACT','...'],
    slogen:'Helping People',
    s_slogen:'This is a paleform for someone to CAMPAIGN the one whom needs help.It is absolutly free platform. Welcome your visit. ',
    box_title:['SAVE LIVES','GIVE AN EDUCATION','CARE ABOUT HEALTH'],
    box_text:'Not usderstand to ask me how to read myproject.',
    live_title:'Live Campains',
    live_text:'What ever,Just show some english sentence.SO listen to me to introduce this web to you.I hope you can fully have my words to usderstand this.',

  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
