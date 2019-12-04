

const robots = {
  dir: 		require('../robots/diretorios.js'),
  confPages: 	require('../robots/confPages.js'),
  pages: 		require('../robots/pages.js'),
  zipWidget: 	require('../robots/zipWidget.js')
}

async function robot(content){

  if(content.typeWidget == 0){
    await robots.dir(content);
    await robots.confPages(content);
    await robots.pages(content);
    await robots.zipWidget(content);
  }else{
    await robots.dir(content);
    await robots.confPages(content);
    await robots.pages(content);
    await robots.zipWidget(content);
  }
}


module.exports = robot