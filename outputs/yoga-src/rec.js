const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:540,height:960},deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/anim.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
const fps=30,dur=16;require('fs').mkdirSync(__dirname+'/f',{recursive:true});
for(let i=0;i<fps*dur;i++){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`${__dirname}/f/${String(i).padStart(4,'0')}.png`});}
await b.close()})();
