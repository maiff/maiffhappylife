const puppeteer = require('puppeteer');


const csv = require('csv-parser')
const fs = require('fs')
const results = [];
function getC(file) {
  return new Promise((resolve) => {
    // fs.createReadStream('/Users/maiff/Downloads/info2.csv')
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results)
        console.log(results)

      });
  })


}


const input = async function a() {
  
  // console.log(key)
  
  const browser = await puppeteer.launch({
    headless: false
  });
  
  const page = await browser.newPage();
  // await page.setCookie(...objs);

  const mouse = page.mouse
  page.setViewport({
    width: 2080,
    height: 1000
  })
  await page.goto('http://47.106.97.70:8000/');
  p = page
  let es = await getC('./test.csv')
  let num = 0
  es = es.slice(num)
  for(const i in es){
    try{
      let key = await getP()

      // const frames = (await page.frames())
      // let form = frames[frames.length - 1]
      form = p
      let obj = es[i]
      await form.type('#name', obj['name'])
      await form.type('#age', obj['age'])
      await form.select('#num', obj['type'])
      await form.click(`input[value=${obj['gender']}]`)


      console.log('input complete')
    }catch(e){
      console.log(e)
    }
    

  }
  
  
}

input()

function getP(){
  return new Promise((resolve) => {
    var stdin = process.stdin;

    stdin.resume();
    // i don't want binary, do you?
    stdin.setEncoding('utf8');
    stdin.on('data', function (key) {
      resolve(key)
    });
  })

  
}
