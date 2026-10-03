/** Build the standalone page from the same Workshop file used in Framer.
 * Run: node scripts/build.cjs [--embed-images]
 * No dependencies. The recovered published TSX contains standard JavaScript.
 */
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
let code = fs.readFileSync(path.join(root, 'Workshop/VesselArchiveSite.tsx'), 'utf8');
code = code.replace(/import\{[^;]*?from"(?:react\/jsx-runtime|react|framer)";/g, '');
code = code.replace('export default function VesselArchiveSite', 'function VesselArchiveSite');
code = code.replace(/\nexport const __FramerMetadata__ = [\s\S]*$/, '');
let options;
const sandbox = { URL, encodeURIComponent, _jsx:()=>({}), _jsxs:()=>({}), _Fragment:{}, useEffect:()=>{}, useMemo:fn=>fn(), ControlType:{Enum:'enum'}, addPropertyControls:(_, props)=>{options=props.route;} };
vm.createContext(sandbox);
vm.runInContext(code + ';globalThis.build={CSS,PRELUDE,HEADER,JS,ROUTE_KEYS,GROOMSMEN_META,GROOMSMEN_PAGE,GROOMSMEN_FOOTER,GROOMSMEN_CREW,GROOMSMEN_WALK,mountGroomsmenPage};', sandbox, {timeout:5000});
const b = sandbox.build;
if(b.ROUTE_KEYS.length!==options.optionTitles.length) throw new Error('Route/title pairing mismatch');
if(b.GROOMSMEN_CREW.some(p=>!p.photo)) throw new Error('A crew portrait is missing');
const boot = 'const GROOMSMEN_META='+JSON.stringify(b.GROOMSMEN_META)+';('+b.mountGroomsmenPage.toString()+')(document.querySelector(".gm-page"));';
// On a standalone GitHub project site, marketing-site links belong to Vessel's domain.
const header = b.HEADER.replaceAll('href="/', 'href="https://vessel-archive.com/');
const footer = b.GROOMSMEN_FOOTER.replaceAll('href="/"', 'href="https://vessel-archive.com/"');
let html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><title>'+b.GROOMSMEN_META.title+'</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=Instrument+Serif:ital@0;1&family=Martian+Mono:wght@300;400;500;600&display=swap"><style>'+b.CSS+'</style></head><body>'+b.PRELUDE+header+'<div id="site-route" data-route="/groomsmen">'+b.GROOMSMEN_PAGE+'</div>'+footer+'<script>'+b.JS+'</script><script>'+boot+'</script></body></html>';
if(process.argv.includes('--embed-images')) {
  html=html.replace(/src="(assets\/[^"]+\.(?:webp|png))"/g,(_,name)=>'src="data:image/'+(name.endsWith('.png')?'png':'webp')+';base64,'+fs.readFileSync(path.join(root,name)).toString('base64')+'"');
  fs.writeFileSync(path.join(root,'preview.html'),html);
} else fs.writeFileSync(path.join(root,'index.html'),html);
console.log(JSON.stringify({roles:b.GROOMSMEN_CREW.length,portraits:b.GROOMSMEN_CREW.filter(p=>p.photo).length,walk:b.GROOMSMEN_WALK.length,routeKeys:b.ROUTE_KEYS.length,optionTitles:options.optionTitles.length,bytes:html.length}));
