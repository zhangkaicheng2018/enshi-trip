// ============================================================
// 2026 端午恩施 · 兄弟自然疗愈之旅 — 地图 & 行程数据
// ============================================================

// ---- 景点坐标 ----
const LOC = {
  airport:        [30.319, 109.485],
  hotel_enshi:    [30.290, 109.482],  // 金楠府合院（前3晚）
  tusi_city:      [30.282, 109.487],
  daughter_city:  [30.278, 109.498],
  barentang:      [30.278, 109.498],
  grand_canyon:   [30.390, 109.150],
  pingshan:       [29.980, 110.050],
  suobuya:        [30.630, 109.800],
  xuanen:         [29.987, 109.410],
  hotel_xuanen:   [29.988, 109.412],  // 宣恩河景民宿（第4晚）
  erma_bar:       [30.282, 109.478],
  helens:         [30.298, 109.491],
  massage_jiulong:[30.296, 109.488],  // 九隆国际
  massage_yunshang:[30.297, 109.490], // 云裳仙指
  massage_zhang:  [30.288, 109.477],  // 小张推拿
  massage_yoga:   [30.280, 109.484],  // 悠悦瑜伽
  massage_heda:   [30.305, 109.505],  // 合和大唐
  massage_meili:  [30.298, 109.490],  // 魅力无限影院足道
  train_station:  [30.312, 109.491],
  city_center:    [30.295, 109.482],
};

// ---- 图片（Unsplash 免费图源）----
const IMG = {
  grand_canyon:  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&q=80',
  pingshan:      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=400&fit=crop&q=80',
  suobuya:       'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&h=400&fit=crop&q=80',
  tusi_city:     'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop&q=80',
  xuanen_night:  'https://images.unsplash.com/photo-1519751138087-5e0e697e38e2?w=800&h=400&fit=crop&q=80',
  massage:       'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop&q=80',
  bar:           'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop&q=80',
  xuanen_hotel:  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&q=80',
  yoga:          'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=400&fit=crop&q=80',
};

// ---- 高德中文地图 ----
const GAODE_TILE = 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}';

// ---- 标记 ----
const MARKERS = [
  // 景区
  { pos:LOC.grand_canyon,  name:'恩施大峡谷',     icon:'scenic', desc:'5A·一炷香·云龙地缝·绝壁栈道', day:2 },
  { pos:LOC.pingshan,      name:'屏山峡谷',       icon:'scenic', desc:'中国仙本那·悬浮船·蒂芙尼蓝玻璃水', day:3 },
  { pos:LOC.suobuya,       name:'梭布垭石林',     icon:'scenic', desc:'4.6亿年前海底世界·中国第二大石林', day:4 },
  { pos:LOC.tusi_city,     name:'恩施土司城',     icon:'scenic', desc:'九进堂·土司王宫·土家族历史文化', day:1 },
  // 交通/酒店
  { pos:LOC.airport,       name:'恩施许家坪机场', icon:'transit',desc:'ENH·距市区约5km·打车≈¥20' },
  { pos:LOC.hotel_enshi,   name:'金楠府合院酒店', icon:'hotel',  desc:'⭐9.7·2025新开业·套房60㎡（前3晚）' },
  { pos:LOC.hotel_xuanen,  name:'合歡花河景民宿', icon:'hotel',  desc:'⭐9.9·2025新开·贡水河景大床房（第4晚）' },
  // 美食
  { pos:LOC.daughter_city, name:'土家女儿城',     icon:'food',   desc:'夜市·巴人堂摔碗酒·19:30实景演出', day:1 },
  { pos:LOC.barentang,     name:'巴人堂',         icon:'food',   desc:'土家吊锅宴·摔碗酒体验·人均¥80', day:1 },
  // 按摩
  { pos:LOC.massage_jiulong,  name:'九隆国际养生', icon:'massage',desc:'禅意SPA·中式推拿·轻奢新中式', day:2 },
  { pos:LOC.massage_yunshang, name:'云裳仙指足道', icon:'massage',desc:'穴位精准按摩·舒缓触感·连锁品牌', day:null },
  { pos:LOC.massage_zhang,    name:'小张推拿',     icon:'massage',desc:'舒经通络·全身放松·社区口碑好', day:null },
  { pos:LOC.massage_yoga,     name:'悠悦瑜伽',     icon:'massage',desc:'瑜伽拉伸·身体柔韧·身心舒缓', day:null },
  { pos:LOC.massage_heda,     name:'合和大唐',     icon:'massage',desc:'新中式·砭石经络·独立包间·自助餐', day:null },
  { pos:LOC.massage_meili,    name:'魅力无限·影院足道',icon:'massage',desc:'边按摩边观影·时尚年轻氛围', day:3 },
  // 酒吧
  { pos:LOC.erma_bar,      name:'贰麻酒馆',       icon:'bar',    desc:'1988文创园·网红清吧·人均¥116', day:1 },
  { pos:LOC.helens,        name:'海伦司 Helens',  icon:'bar',    desc:'金桂大道新天地·轻松社交·人均¥46', day:2 },
];

// ---- 路线（Day4不再折返恩施，宣恩住一晚）----
const ROUTES = [
  { from:LOC.airport,  to:LOC.hotel_enshi,    day:1, mode:'🚕 打车', dist:'5km·20min' },
  { from:LOC.hotel_enshi, to:LOC.tusi_city,   day:1, mode:'🚕 打车', dist:'3km·10min' },
  { from:LOC.tusi_city, to:LOC.daughter_city, day:1, mode:'🚕 打车', dist:'3km·8min' },
  { from:LOC.daughter_city, to:LOC.erma_bar,  day:1, mode:'🚕 打车', dist:'3km·10min' },

  { from:LOC.hotel_enshi, to:LOC.grand_canyon,  day:2, mode:'🚗 包车', dist:'54km·1.5h' },
  { from:LOC.grand_canyon, to:LOC.hotel_enshi,  day:2, mode:'🚗 包车', dist:'54km·1.5h' },
  { from:LOC.hotel_enshi, to:LOC.massage_jiulong, day:2, mode:'🚕 打车', dist:'3km·12min' },
  { from:LOC.massage_jiulong, to:LOC.helens,    day:2, mode:'🚕 打车', dist:'3km·12min' },

  { from:LOC.hotel_enshi, to:LOC.pingshan,  day:3, mode:'🚗 包车', dist:'150km·2.5h' },
  { from:LOC.pingshan, to:LOC.hotel_enshi,  day:3, mode:'🚗 包车', dist:'150km·2.5h' },

  // Day4: 恩施→梭布垭→宣恩（不折返！）
  { from:LOC.hotel_enshi, to:LOC.suobuya,   day:4, mode:'🚗 包车', dist:'54km·1h' },
  { from:LOC.suobuya, to:LOC.xuanen,        day:4, mode:'🚗 包车', dist:'40km·1h' },
  { from:LOC.xuanen, to:LOC.hotel_xuanen,   day:4, mode:'步行',   dist:'<500m' },

  // Day5: 宣恩→恩施机场
  { from:LOC.hotel_xuanen, to:LOC.airport,  day:5, mode:'🚗 包车', dist:'50km·1h' },
];

const DAY_COLORS = { 1:'#e6a817', 2:'#d63031', 3:'#0984e3', 4:'#6c5ce7', 5:'#00b894' };

// ===================== 地图初始化 =====================
const map = L.map('map', {
  center: [30.22, 109.65],
  zoom: 10,
  zoomControl: true,
  attributionControl: false,
});

L.tileLayer(GAODE_TILE, { subdomains:['1','2','3','4'], maxZoom:18, minZoom:4 }).addTo(map);

// ---- 图标 ----
function makeSvgIcon(color, emoji) {
  return L.divIcon({
    className:'custom-marker',
    html:`<div style="width:32px;height:32px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;font-size:16px">${emoji}</div>`,
    iconSize:[32,32], iconAnchor:[16,16], popupAnchor:[0,-18],
  });
}
function makeRouteLabel(text, color) {
  return L.divIcon({
    className:'route-label',
    html:`<div style="background:${color};color:#fff;padding:3px 8px;border-radius:5px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.2)">${text}</div>`,
    iconSize:[130,22], iconAnchor:[65,11],
  });
}

const ICON_EMOJI = {
  scenic: makeSvgIcon('#d63031','🏔️'),
  transit:makeSvgIcon('#0984e3','✈️'),
  hotel:  makeSvgIcon('#0984e3','🏨'),
  food:   makeSvgIcon('#e6a817','🍜'),
  massage:makeSvgIcon('#c62828','💆'),
  bar:    makeSvgIcon('#e65100','🍺'),
};

// 放置标记
MARKERS.forEach(m => {
  L.marker(m.pos,{icon:ICON_EMOJI[m.icon]}).addTo(map)
    .bindTooltip(m.name,{direction:'top',offset:[0,-8],className:'map-tooltip'})
    .bindPopup(`<strong>${m.name}</strong><div style="margin-top:4px;color:#555;font-size:12px;line-height:1.5">${m.desc}</div>`);
});

// 路线 + 距离标签
ROUTES.forEach(r => {
  const c = DAY_COLORS[r.day];
  L.polyline([r.from,r.to],{color:c,weight:3,opacity:0.75}).addTo(map);
  const mid = [(r.from[0]+r.to[0])/2, (r.from[1]+r.to[1])/2];
  L.marker(mid,{icon:makeRouteLabel(`${r.mode} · ${r.dist}`,c),interactive:false}).addTo(map);
});

// 景区范围圈
[
  { c:LOC.grand_canyon,r:2500,col:'#d63031',lbl:'恩施大峡谷' },
  { c:LOC.pingshan,    r:2500,col:'#0984e3',lbl:'屏山峡谷' },
  { c:LOC.suobuya,     r:2000,col:'#6c5ce7',lbl:'梭布垭石林' },
].forEach(a => {
  L.circle(a.c,{radius:a.r,color:a.col,fillColor:a.col,fillOpacity:0.06,weight:1.5,dashArray:'6 4'}).addTo(map)
    .bindTooltip(a.lbl,{permanent:true,direction:'center',className:'area-label'});
});

// 宣恩夜游区域高亮
L.circle(LOC.xuanen,{radius:800,color:'#6c5ce7',fillColor:'#6c5ce7',fillOpacity:0.08,weight:1.5,dashArray:'4 4'}).addTo(map)
  .bindTooltip('宣恩夜游区',{permanent:true,direction:'center',className:'area-label'});

// 自适应视图
try {
  const bounds = L.latLngBounds([
    [LOC.pingshan[0]-0.05, LOC.grand_canyon[1]-0.12],
    [LOC.suobuya[0]+0.05, LOC.pingshan[1]+0.12],
  ]);
  map.fitBounds(bounds,{padding:[50,50]});
} catch(e){}

// ===================== 侧边栏内容 =====================
const scrollArea = document.getElementById('scroll-area');

function imgCard(src, caption) {
  return `<div style="border-radius:10px;overflow:hidden;margin:10px 0;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
    <img src="${src}" style="width:100%;height:180px;object-fit:cover;display:block" loading="lazy" onerror="this.style.display='none'">
    ${caption?`<div style="padding:6px 12px;font-size:11px;color:var(--text-muted);background:#faf8f5;text-align:center">📷 ${caption}</div>`:''}
  </div>`;
}

const content = {
  itinerary: `
<div class="info-box" style="margin-top:0">
  <h4>✈️ 航班确认（每天仅一班直飞，尽早锁定）</h4>
  <table style="width:100%;font-size:12px;line-height:2">
    <tr><td style="width:36px">去程</td><td><strong>MU2460</strong></td><td>6/18 (周四)</td><td>北京大兴 08:30 → 恩施 11:05</td><td>2h35m</td></tr>
    <tr><td>回程</td><td><strong>MU2460</strong></td><td>6/22 (周一)</td><td>恩施 16:05 → 北京大兴 18:15</td><td>2h10m</td></tr>
  </table>
  <div style="margin-top:6px;font-size:11px;color:var(--text-muted)">⚠️ 端午旺季建议 <strong>4月底-5月初</strong> 锁定 | 往返预估 ¥2,200-2,800/人</div>
</div>

<!-- ===== DAY 1 ===== -->
<div class="day-card day1">
  <div class="day-header">
    <div class="day-num">1</div>
    <div><div class="day-title">抵达 · 土司文化 · 女儿城夜宴</div><div class="day-date">6月18日 周四</div></div>
  </div>
  ${imgCard(IMG.tusi_city,'恩施土司城 — 九进堂·土司王宫')}
  <ul class="timeline">
    <li><span class="time">08:30</span><span class="desc"><span class="tag tag-flight">飞行</span> 北京大兴机场起飞</span></li>
    <li><span class="time">11:05</span><span class="desc"><span class="tag tag-flight">抵达</span> 恩施许家坪机场，打车≈<strong>¥20/15min</strong></span></li>
    <li><span class="time">11:30</span><span class="desc"><span class="tag tag-hotel">入住</span> 金楠府合院酒店（⭐9.7·2025新开·金丝楠木大堂·套房60㎡）</span></li>
    <li><span class="time">12:30</span><span class="desc"><span class="tag tag-food">午餐</span> 余记家家腊鱼馆 — 腊鱼+藕笋炒肚丝，人均¥55</span></li>
    <li><span class="time">14:00</span><span class="desc"><span class="tag tag-scenic">文化</span> 🏯 <em>恩施土司城</em> — 九进堂·土司王宫（门票 <strong>¥45</strong>，游览2.5h）</span></li>
    <li><span class="time">16:30</span><span class="desc">回酒店休整，洗个澡换衣服</span></li>
    <li><span class="time">18:00</span><span class="desc"><span class="tag tag-food">晚餐</span> 🌃 <em>土家女儿城</em>（免门票）— <strong>巴人堂</strong> 吊锅宴+摔碗酒+民俗歌舞，人均¥80</span></li>
    <li><span class="time">19:30</span><span class="desc">🎭 《赶场相亲·女儿会》免费实景演出</span></li>
    <li><span class="time">21:00</span><span class="desc">女儿城夜市 — 炕小土豆·烤糍粑·米豆腐·土家酱香饼</span></li>
    <li><span class="time">22:00</span><span class="desc"><span class="tag tag-bar">酒吧</span> 🍺 <strong>贰麻酒馆</strong>（1988文创园）— 网红清吧·人均¥116</span></li>
  </ul>
</div>

<!-- ===== DAY 2 ===== -->
<div class="day-card day2">
  <div class="day-header">
    <div class="day-num">2</div>
    <div><div class="day-title">恩施大峡谷全天 · 端午节！🫔</div><div class="day-date">6月19日 周五 · 🫔 端午节</div></div>
  </div>
  ${imgCard(IMG.grand_canyon,'恩施大峡谷 — 一炷香·绝壁栈道·云龙地缝')}
  <ul class="timeline">
    <li><span class="time">07:00</span><span class="desc"><span class="tag tag-food">早餐</span> 袁氏油香 — 恩施早餐之光，人均¥10</span></li>
    <li><span class="time">07:30</span><span class="desc">🚗 包车前往恩施大峡谷 <strong>54km·1.5h</strong>（≈¥350/天÷3≈¥117/人）</span></li>
    <li><span class="time">09:00</span><span class="desc">🏔️ <em>七星寨</em> — 一炷香·绝壁栈道·迎客松（上行索道必买，省2h爬山）</span></li>
    <li><span class="time">12:00</span><span class="desc">景区简餐（建议自带干粮，景区溢价50%）</span></li>
    <li><span class="time">13:00</span><span class="desc"><em>云龙地缝</em> — "地球最美伤痕"，瀑布+碧潭</span></li>
    <li><span class="time">16:00</span><span class="desc">联票 <strong>¥270/人</strong>（七星寨¥105+地缝¥50+景交¥30+索道¥105）</span></li>
    <li><span class="time">18:30</span><span class="desc"><span class="tag tag-food">晚餐</span> 舅母子 — 腊蹄子火锅+酸豆角炒肥肠，人均¥70 🫔 加粽子过端午！</span></li>
    <li><span class="time">20:00</span><span class="desc"><span class="tag tag-massage">按摩</span> 💆 <strong>九隆国际养生</strong>（施州大道469号）<br><em style="font-size:11px;color:#c62828">禅意SPA · 中式轻柔推拿 · 经络疏通｜60min/¥138｜轻奢新中式环境·静谧私密</em></span></li>
    <li><span class="time">22:00</span><span class="desc"><span class="tag tag-bar">酒吧</span> 🍻 <strong>海伦司Helens</strong>（新天地）人均¥46 | 或 <strong>袋鼠手工精酿</strong> 续摊</span></li>
  </ul>
</div>

<!-- ===== DAY 3 ===== -->
<div class="day-card day3">
  <div class="day-header">
    <div class="day-num">3</div>
    <div><div class="day-title">屏山峡谷 · 中国仙本那 💎</div><div class="day-date">6月20日 周六</div></div>
  </div>
  ${imgCard(IMG.pingshan,'屏山峡谷 — 悬浮船·蒂芙尼蓝玻璃水（⚠️雨天水浑，出发前查鹤峰天气）')}
  <div style="margin-bottom:10px;padding:8px 12px;background:#fff5f5;border-left:3px solid #f44336;border-radius:4px;font-size:12px;line-height:1.7">
    ⚠️ <strong>天气敏感日</strong>：出发前48h查鹤峰县天气。如果中雨及以上或前1-2天刚下过大雨 → 水会变黄，"悬浮船"效果消失。
    建议改为 <strong>腾龙洞</strong>（亚洲最大溶洞·¥170·不受雨影响）或 <strong>鹿院坪</strong>。<br>
    详见「💡 实用贴士」→ 雨天Plan B。
  </div>
  <ul class="timeline">
    <li><span class="time">07:30</span><span class="desc">🚗 包车前往鹤峰屏山峡谷 <strong>150km·2.5h</strong>（¥400/天÷3≈¥133/人）</span></li>
    <li><span class="time">10:00</span><span class="desc"><span class="tag tag-scenic">核心</span> 💧 <em>屏山峡谷</em> — "中国仙本那"<br>门票 <strong>¥210/人</strong>（含船票）| 透明橡皮艇¥60 | 悬浮船自拍¥20-30<br>⚠️ 黄金光线 <strong>11:00-13:00</strong>，阳光直射谷底"玻璃海"最梦幻</span></li>
    <li><span class="time">14:00</span><span class="desc">鹤峰县城午餐 / 景区门口土家小吃</span></li>
    <li><span class="time">15:30</span><span class="desc">🚗 返程回市区（约2.5h）</span></li>
    <li><span class="time">18:30</span><span class="desc"><span class="tag tag-food">晚餐</span> 宣恩宏兴烤活鱼（恩施市区店）— 香辣+酸菜双拼，人均¥70</span></li>
    <li><span class="time">20:00</span><span class="desc"><span class="tag tag-massage">按摩</span> 💆 <strong>魅力无限·影院足道</strong>（硒都茶城）<br><em style="font-size:11px;color:#c62828">边按摩边观影 · 轻柔足道 · 兄弟三人不尴尬｜人均¥80-120</em></span></li>
    <li><span class="time">22:00</span><span class="desc">清江边散步消食，或回酒店早睡（两天爬山，今晚悠着点）</span></li>
  </ul>
</div>

<!-- ===== DAY 4 ===== -->
<div class="day-card day4">
  <div class="day-header">
    <div class="day-num">4</div>
    <div><div class="day-title">梭布垭石林 · 宣恩夜游 · 河景入眠 🌙</div><div class="day-date">6月21日 周日</div></div>
  </div>
  ${imgCard(IMG.xuanen_night,'宣恩贡水河夜景 — 音乐喷泉·竹筏夜游')}
  <ul class="timeline">
    <li><span class="time">09:00</span><span class="desc">😴 稍晚起床，酒店早餐后 <strong>退房</strong>（行李放车上）</span></li>
    <li><span class="time">10:00</span><span class="desc">🚗 包车出发，恩施→梭布垭石林 <strong>54km·1h</strong>（¥400/天÷3≈¥133/人）</span></li>
    <li><span class="time">11:00</span><span class="desc">🪨 <em>梭布垭石林</em> — 4.6亿年前海底世界（门票 <strong>¥98</strong>，游览2-3h）</span></li>
    <li><span class="time">14:00</span><span class="desc">景区附近午餐，之后🚗 直奔宣恩县城 <strong>40km·1h</strong></span></li>
    <li><span class="time">15:30</span><span class="desc"><span class="tag tag-hotel">入住</span> 🏨 <strong>合歡花河景民宿</strong>（⭐9.9·2025新开·贡水河景大床房）<br>或 <strong>惹溪景城民宿</strong>（⭐9.7·江景套房·楼下烤活鱼一条街）<br>💰 河景房约 ¥180-280/晚</span></li>
    <li><span class="time">16:30</span><span class="desc">宣恩漫步 — 墨达楼·钟楼·民族风情街拍照</span></li>
    <li><span class="time">18:00</span><span class="desc"><span class="tag tag-food">晚餐</span> 兴隆大道烤活鱼集市 — 李嫂合渣+烤活鱼双拼，人均¥60<br>必买：风雨桥头阿婆酸萝卜 ¥5/盒</span></li>
    <li><span class="time">19:00</span><span class="desc">🎆 <em>贡水河音乐喷泉</em>（免费！350m中国最长内陆河跑泉）<br>最佳观赏位：风雨桥（文澜桥）中段</span></li>
    <li><span class="time">19:50</span><span class="desc">🛶 <em>龙游贡水竹筏</em> — <strong>¥90/人</strong>，36艘竹筏长252m水上灯光秀</span></li>
    <li><span class="time">21:00</span><span class="desc">兴隆老街音乐演出 + 坝坝茶（¥30/人，边喝茶边看喷泉）</span></li>
    <li><span class="time">22:30</span><span class="desc">🌙 散步回民宿，推开窗就是贡水河夜景，伴着水声入眠</span></li>
  </ul>
  <div style="margin-top:10px;padding:10px;background:#f0f5ff;border-radius:8px;font-size:12px;line-height:1.8">
    💡 <strong>路线优化说明</strong>：Day4 从恩施退房 → 梭布垭石林 → 宣恩（不折返恩施！），晚上直接住宣恩河景民宿。
    Day5 上午从宣恩悠闲出发，1h直达恩施机场。完美消灭了来回折返的冤枉路。
  </div>
</div>

<!-- ===== DAY 5 ===== -->
<div class="day-card day5">
  <div class="day-header">
    <div class="day-num">5</div>
    <div><div class="day-title">宣恩晨光 · 返程</div><div class="day-date">6月22日 周一</div></div>
  </div>
  <ul class="timeline">
    <li><span class="time">09:00</span><span class="desc">🌅 自然醒，推开窗看贡水河晨雾，河边散步</span></li>
    <li><span class="time">09:30</span><span class="desc"><span class="tag tag-food">早餐</span> 宣恩老街 — 土家豆皮·油茶汤·社饭，人均¥15</span></li>
    <li><span class="time">10:30</span><span class="desc">宣恩早市逛一逛，买点本地硒茶、酸萝卜带回家</span></li>
    <li><span class="time">12:00</span><span class="desc">🚗 宣恩出发→恩施方向 <strong>50km·1h</strong></span></li>
    <li><span class="time">13:00</span><span class="desc"><span class="tag tag-food">午餐</span> 赵氏土家风味（火车站附近）— 炒腊肉，人均¥50</span></li>
    <li><span class="time">14:00</span><span class="desc"><span class="tag tag-flight">去机场</span> 午餐后前往恩施许家坪机场（距火车站打车¥20/15min）</span></li>
    <li><span class="time">16:05</span><span class="desc"><span class="tag tag-flight">返程</span> ✈️ MU2460 恩施起飞</span></li>
    <li><span class="time">18:15</span><span class="desc">🛬 抵达北京大兴机场，各回各家 🎉</span></li>
  </ul>
  <div style="margin-top:10px;padding:10px;background:#f5fff5;border-radius:8px;font-size:12px;line-height:1.8">
    💡 <strong>Day5路线说明</strong>：宣恩距恩施机场约50km/1h车程，比从恩施市区去机场多40分钟，完全赶得上16:05的航班。
    上午还能享受贡水河边晨光，比从恩施市区出发多了一段河畔慢时光。
  </div>
</div>
`,

  budget: `
<div style="margin-top:0">
  ${imgCard(IMG.xuanen_hotel,'宣恩河景民宿 — 推窗即贡水夜景')}
</div>

<div class="info-box">
  <h4>🏨 住宿方案（4晚·两处切换）</h4>
  <div class="hotel-card">
    <div class="rank" style="background:linear-gradient(135deg,#c8953e,#e6a817)">🥇</div>
    <div class="info"><h4>金楠府合院酒店 <span style="font-size:11px;color:var(--text-muted)">⭐9.7·2025新开</span></h4>
    <div style="font-size:12px;color:var(--text-muted)">前3晚(6/18-20) · 1间套房(60㎡·1大床+沙发床)+1标准房 ≈ <strong>¥800/晚×3=¥2,400</strong></div></div>
  </div>
  <div class="hotel-card">
    <div class="rank" style="background:linear-gradient(135deg,#6c5ce7,#a78bfa)">🏡</div>
    <div class="info"><h4>合歡花河景民宿 <span style="font-size:11px;color:var(--text-muted)">⭐9.9·2025新开·贡水河边</span></h4>
    <div style="font-size:12px;color:var(--text-muted)">第4晚(6/21) · 2间河景大床房 ≈ <strong>¥250×2=¥500</strong></div></div>
  </div>
  <div style="margin-top:8px;font-size:12px;line-height:1.8">
    <strong>住宿总费用</strong>：¥2,400 + ¥500 = <strong>¥2,900</strong> ÷ 3人 ≈ <strong>¥967/人</strong><br>
    <span style="font-size:11px;color:var(--text-muted)">备选：惹溪景城民宿（⭐9.7·江景套房·楼下烤活鱼一条街）≈¥200-280/晚</span>
  </div>
</div>

<div style="margin-top:16px">
  <h3 style="font-size:16px;margin-bottom:10px;color:#1a3c2a">💰 人均预算明细（优化版）</h3>
  <table class="budget-table">
    <tr><th>项目</th><th style="text-align:right">金额</th><th>备注</th></tr>
    <tr><td>✈️ 往返机票</td><td style="text-align:right">¥2,500</td><td style="font-size:11px;color:var(--text-muted)">端午旺季预估，提前60天订</td></tr>
    <tr><td>🏨 住宿（4晚）</td><td style="text-align:right">¥967</td><td style="font-size:11px;color:var(--text-muted)">金楠府3晚+宣恩河景民宿1晚</td></tr>
    <tr><td>🚗 当地交通</td><td style="text-align:right">¥420</td><td style="font-size:11px;color:var(--text-muted)">包车4天(≈¥1,160÷3)+打车</td></tr>
    <tr><td>🎫 门票</td><td style="text-align:right">¥713</td><td style="font-size:11px;color:var(--text-muted)">大峡谷270+屏山210+土司城45+石林98+竹筏90</td></tr>
    <tr><td>🍜 餐饮</td><td style="text-align:right">¥1,000</td><td style="font-size:11px;color:var(--text-muted)">≈¥200/天×5天</td></tr>
    <tr><td>💆 按摩SPA×2</td><td style="text-align:right">¥260</td><td style="font-size:11px;color:var(--text-muted)">九隆禅意SPA¥138+影院足道¥120</td></tr>
    <tr><td>🍺 酒吧放松×3</td><td style="text-align:right">¥300</td><td style="font-size:11px;color:var(--text-muted)">≈¥100/晚×3</td></tr>
    <tr><td>🛶 宣恩夜间</td><td style="text-align:right">¥120</td><td style="font-size:11px;color:var(--text-muted)">竹筏90+坝坝茶30</td></tr>
    <tr><td>🎁 伴手礼+杂费</td><td style="text-align:right">¥500</td><td style="font-size:11px;color:var(--text-muted)">茶叶+腊肉+保险+零食</td></tr>
    <tr class="total-row"><td>🎯 合计</td><td style="text-align:right">≈¥6,780</td><td>建议预算 ¥6,500-7,500/人</td></tr>
  </table>
  <div style="font-size:11px;color:var(--text-muted);margin-top:6px">
    💡 若选土司溪畔语酒店（亲子房≈¥300/晚）替代金楠府，可再省 ≈¥250/人，总预算约 <strong>¥6,500/人</strong>
  </div>
</div>
`,

  massage: `
<div style="margin-top:0">
  ${imgCard(IMG.yoga,'瑜伽拉伸 · 轻柔推拿 — 舒缓身心的治愈之旅')}
</div>

<div class="massage-card">
  <h4>💆‍♂️ 恩施轻柔按摩 · 瑜伽拉伸 精选6家</h4>
  <p style="font-size:12px;color:var(--text-muted);margin-bottom:10px">
    以下主打<strong>轻柔手法 + 瑜伽拉伸 + 经络疏通 + 身心舒缓</strong>，不含泰式和精油项目。适合爬山后真正放松而非"受力"。
  </p>

  <div class="massage-item">
    <h5>🥇 悠悦瑜伽</h5>
    <div class="meta">
      📍 舞阳坝施州大道硒都商城12楼 | 📞 0718-7933599<br>
      ✨ <strong>瑜伽拉伸 · 被动瑜伽 · 身体柔韧训练</strong><br>
      🧘 推荐项目：被动瑜伽拉伸（60min/¥128）· 瑜伽冥想放松<br>
      💬 恩施少有的专业瑜伽馆，教练可做一对一被动拉伸——你躺着，教练帮你完成瑜伽体式，极度舒展放松。适合爬山后僵硬的身体。
    </div>
  </div>

  <div class="massage-item">
    <h5>🥈 九隆国际养生（施州大道店）</h5>
    <div class="meta">
      📍 施州大道469号<br>
      ✨ <strong>禅意SPA · 中式轻柔推拿 · 经络疏通</strong><br>
      🧘 推荐项目：禅意舒压推拿（60min/¥138）· 经络疏通（90min/¥188）<br>
      💬 轻奢新中式装修，静谧私密。手法以"轻、柔、透"为核心理念，融合中医经络但不暴力按压。配有简茶休憩区，按摩后可慢慢喝茶。
    </div>
  </div>

  <div class="massage-item">
    <h5>🥉 云裳仙指足道馆</h5>
    <div class="meta">
      📍 施南古城店：金山大道施南古城与硒都茶城交口二楼<br>
      📍 火车站店：金桂大道98号汇通广场2号楼11楼<br>
      ✨ <strong>穴位精准按摩 · 舒缓触感 · 全身放松</strong><br>
      🧘 推荐项目：全身舒缓按摩（80min/¥108）· 足底穴位放松（60min/¥78）<br>
      💬 本地口碑连锁，手法轻盈精准，不走"大力出奇迹"路线。火车站店11楼整层，视野好。适合爬山后不想再被"虐"的放松需求。
    </div>
  </div>

  <div class="massage-item">
    <h5>④ 小张推拿连锁（欧逸家园店）</h5>
    <div class="meta">
      📍 恩施市市府路12号<br>
      ✨ <strong>舒经通络 · 全身放松 · 社区口碑好</strong><br>
      🧘 推荐项目：全身推拿放松（60min/¥88）· 肩颈疏通（45min/¥68）<br>
      💬 社区型连锁，邻里口碑积累多年。手法轻柔讲究"以柔克刚"，不追求"痛则不通"的暴力理念。价格亲民，性价比极高。
    </div>
  </div>

  <div class="massage-item">
    <h5>⑤ 合和大唐·SPA·足道（金龙大道店）</h5>
    <div class="meta">
      📍 金龙大道盛和大厦2楼 | 📞 18527270631<br>
      ✨ <strong>新中式·砭石经络·独立包间·免费自助餐</strong><br>
      🧘 推荐项目：砭石经络足道（60min/¥79.9起）· 中药足浴+穴位按摩<br>
      💬 2024年新开业，柔光+舒缓音乐氛围。砭石温热经络疏通，不疼不刺激。独立包间私密性好，还送养生汤+水果+糕点自助。
    </div>
  </div>

  <div class="massage-item">
    <h5>⑥ 魅力无限·影院足道</h5>
    <div class="meta">
      📍 金桂大道硒都茶城5A号楼2楼<br>
      ✨ <strong>影院式足道 · 边按摩边观影 · 轻松不尴尬</strong><br>
      🧘 推荐项目：影院足道套餐（80min/¥120）· 肩颈放松<br>
      💬 适合兄弟三人一起——躺在按摩椅上看电影，技师默默服务不尬聊。氛围时尚年轻，手法轻柔不施力。同商圈还有云裳仙指、水沐年华等可选。
    </div>
  </div>
</div>

<div class="info-box">
  <h4>📱 额外推荐：上门瑜伽拉伸 & 轻柔按摩</h4>
  <div style="font-size:12px;line-height:1.8">
    <p>如果不想出门，恩施也有上门服务：</p>
    <ul style="padding-left:16px;margin:6px 0">
      <li><strong>一悦到家</strong> — 瑜伽按摩+中式推拿，可选轻柔手法，酒店即达</li>
      <li><strong>爱尚往约</strong> — 被动瑜伽拉伸+穴位舒缓，持证技师</li>
    </ul>
    <p style="color:var(--text-muted)">💡 微信小程序搜索即可。预约时明确备注<strong>"只要轻柔手法，不要大力按压"</strong>。实体店更推荐，环境和服务更有保障。</p>
  </div>
</div>

<div class="info-box">
  <h4>🍺 酒吧 & 夜生活速查</h4>
  <table style="width:100%;font-size:12px;line-height:2">
    <tr><td><strong>贰麻酒馆</strong></td><td>1988文创园</td><td>成都网红清吧·氛围好</td><td>人均¥116</td><td>Day1</td></tr>
    <tr><td><strong>海伦司Helens</strong></td><td>金桂大道新天地</td><td>全国连锁·轻松社交</td><td>人均¥46</td><td>Day2</td></tr>
    <tr><td><strong>袋鼠手工精酿</strong></td><td>硒都茶城127号</td><td>手工精酿啤酒</td><td>人均¥70</td><td>备选</td></tr>
    <tr><td><strong>黑狗精酿啤酒馆</strong></td><td>福星城临江商铺</td><td>本地口碑精酿</td><td>人均¥60</td><td>备选</td></tr>
  </table>
  <div style="font-size:11px;color:var(--text-muted);margin-top:6px">📍 酒吧集中区：金桂大道硒都茶城/新天地 | 打车起步¥5/2km</div>
</div>
`,

  tips: `
<!-- ===== 天气专题 ===== -->
<div class="info-box" style="margin-top:0;border:2px solid #ff9800;background:#fffdf7">
  <h4>🌧️⚠️ 天气风险分析（重要！必读）</h4>

  <div style="font-size:12px;line-height:1.9">
    <p><strong>结论先行：6月18-22日是恩施全年降雨最集中的时段，存在较高降雨风险。</strong></p>
  </div>

  <table style="width:100%;font-size:11px;line-height:2;margin:8px 0">
    <tr style="background:#fff3e0"><td><strong>风险项</strong></td><td><strong>数据</strong></td><td><strong>影响</strong></td></tr>
    <tr><td>湖北入梅时间</td><td>常年6月17日</td><td>6/18-22 正好处于梅雨开场最猛阶段</td></tr>
    <tr><td>6月降雨概率</td><td><strong>47%-57%</strong>/天</td><td>约一半概率每天下雨</td></tr>
    <tr><td>月均降雨天数</td><td><strong>12.8天</strong></td><td>每3天就有2天可能下雨</td></tr>
    <tr><td>月均降雨量</td><td><strong>180-254mm</strong></td><td>属多雨月份</td></tr>
    <tr style="background:#ffebee"><td>⚠️ 2025年6/18-20</td><td><strong>特大暴雨</strong></td><td>全年最强降水，鹤峰（屏山所在县）降雨达723mm</td></tr>
    <tr><td>温度范围</td><td>22-32°C</td><td>白天炎热，山区早晚凉爽</td></tr>
    <tr><td>湿度</td><td>70%-89%</td><td>闷热潮湿</td></tr>
  </table>
</div>

<div class="info-box" style="border:2px solid #f44336;background:#fff5f5">
  <h4>💧 屏山峡谷 — 下雨即毁的头号风险点</h4>
  <div style="font-size:12px;line-height:1.9">
    <p>屏山峡谷的"悬浮船"效果<strong>完全依赖水质清澈</strong>。一旦下雨或雨后1-3天：</p>
    <ul style="padding-left:16px;margin:6px 0">
      <li>🚫 雨水冲刷泥沙 → 水体变成<strong>青黄色或土黄色</strong> → "船浮空中"效果彻底消失</li>
      <li>🚫 1900+级下行台阶湿滑，安全隐患大</li>
      <li>🚫 光线变暗，拍照效果大打折扣</li>
      <li>🚫 极端情况下景区可能临时关闭</li>
    </ul>
    <p style="margin-top:8px"><strong>判断标准</strong>：出行前查鹤峰县天气 → <span style="color:#f44336">中雨及以上/雨后1-2天 → 果断放弃屏山，启用Plan B</span></p>
    <p>屏山峡谷最佳季节其实是<strong>8月底-10月</strong>（雨季结束，水最清透），6月去纯属"赌天气"。</p>
  </div>
</div>

<div class="info-box" style="border:2px solid #4caf50;background:#f1f8e9">
  <h4>🔄 雨天Plan B — 灵活调日策略</h4>
  <div style="font-size:12px;line-height:2">
    <p><strong>策略0：出行前48小时看天气预报</strong></p>
    <p>如果6/18-22期间鹤峰/恩施持续中雨以上 → 考虑提前48小时免费取消屏山门票，启用替代方案。</p>

    <p style="margin-top:8px"><strong>策略1：Day2与Day3弹性互换</strong></p>
    <p>如果6/20（原定屏山日）预报晴天，6/19（原定大峡谷日）下雨 → 把屏山换到6/19晴天，大峡谷换到6/20。大峡谷雨中也能游览（云雾反而壮观），但屏山必须晴天。</p>

    <p style="margin-top:8px"><strong>策略2：放弃屏山，启用替代景点</strong></p>
    <table style="width:100%;font-size:11px;line-height:2;margin-top:4px">
      <tr style="font-weight:700"><td>替代景点</td><td>类型</td><td>门票</td><td>车程</td><td>下雨影响</td></tr>
      <tr><td>🕳️ <strong>腾龙洞</strong></td><td>亚洲最大溶洞</td><td>¥170</td><td>1.5h</td><td style="color:#4caf50">✅ 完全不受雨影响（洞内）</td></tr>
      <tr><td>🏯 <strong>恩施州博物馆</strong></td><td>巴人文化·免费</td><td>¥0</td><td>市区</td><td style="color:#4caf50">✅ 室内，不受影响</td></tr>
      <tr><td>🌲 <strong>鹿院坪</strong></td><td>与世隔绝古村落</td><td>¥128</td><td>1.5h</td><td style="color:#ff9800">⚠️ 小雨尚可，大雨慎入</td></tr>
      <tr><td>🏞️ <strong>地心谷</strong></td><td>喀斯特嶂谷</td><td>免大门票</td><td>1h</td><td style="color:#ff9800">⚠️ 雨中别有风味</td></tr>
      <tr><td>🧖 <strong>加一场按摩SPA</strong></td><td>悠悦瑜伽/九隆</td><td>¥128-188</td><td>市区</td><td style="color:#4caf50">✅ 室内享受</td></tr>
    </table>

    <p style="margin-top:8px"><strong>策略3：屏山峡谷替换为腾龙洞</strong>（最稳妥Plan B）</p>
    <p>腾龙洞是亚洲最大溶洞，洞内恒温14-18°C，激光秀+卧龙吞江奇观。下雨天洞里照玩不误。门票¥170 vs 屏山¥210，还能省¥40。但坦白说，震撼程度不如晴天的屏山峡谷。</p>
  </div>
</div>

<div class="info-box">
  <h4>⚠️ 行前必读</h4>
  <ul style="font-size:12px;line-height:2;padding-left:16px">
    <li><strong>订票时机</strong>：4月底-5月初锁定端午机票，每天仅1班直飞，晚了可能没票</li>
    <li><strong>景区预约</strong>：大峡谷提前3天公众号预约。屏山峡谷<strong>出行前48h根据天气决定是否购票</strong></li>
    <li><strong>着装</strong>：防滑登山鞋必备（雨天栈道极滑！），亮色衣服拍照出片</li>
    <li><strong>雨具</strong>：<strong>雨衣优于雨伞</strong>（山上风大，雨伞撑不住），每人带一件轻便雨衣</li>
    <li><strong>体力分配</strong>：Day2大峡谷+Day3屏山连续爬山，Day1按摩预热、Day4睡懒觉缓冲</li>
    <li><strong>包车</strong>：提前联系酒店约车，行情≈¥350-400/天。雨天包车更安全（本地司机熟悉山路）</li>
    <li><strong>宣恩河景民宿</strong>：端午旺季至少提前1-2周预订，河景房有限</li>
    <li><strong>摔碗酒</strong>：正常5元/碗，喊20元的直接走</li>
    <li><strong>宣恩喷泉</strong>：小雨喷泉照常运行，大雨可能取消。风雨桥中段最佳观赏位</li>
    <li><strong>实时天气</strong>：出行前关注"恩施气象"公众号 + 鹤峰县天气专报</li>
  </ul>
</div>

<div class="info-box">
  <h4>🎒 装备清单（雨天加强版）</h4>
  <table style="width:100%;font-size:12px;line-height:2">
    <tr><td>👟</td><td><strong>防滑登山鞋</strong></td><td>必备！雨天栈道极滑</td></tr>
    <tr><td>🧥</td><td>薄外套+防水冲锋衣</td><td>山区早晚温差大，溶洞14-18°C</td></tr>
    <tr><td>🌂</td><td><strong>雨衣（非雨伞）</strong></td><td>山上风大，雨伞撑不住</td></tr>
    <tr><td>📱</td><td>充电宝+手机防水袋</td><td>雨天手机易进水</td></tr>
    <tr><td>🎒</td><td>防水背包/背包防雨罩</td><td>保护电子设备和干粮</td></tr>
    <tr><td>🧴</td><td>防晒霜+驱蚊液</td><td>晴天紫外线强，雨天蚊虫多</td></tr>
    <tr><td>🧦</td><td><strong>备用袜子×2</strong></td><td>雨天鞋子易湿，干袜子幸福感爆棚</td></tr>
    <tr><td>🩴</td><td>拖鞋</td><td>酒店&按摩穿，解放湿脚</td></tr>
    <tr><td>💊</td><td>常用药+晕车药</td><td>山路弯多，雨天更颠</td></tr>
  </table>
</div>

<div class="info-box">
  <h4>🗺️ 每日路程概览</h4>
  <table style="width:100%;font-size:12px;line-height:2">
    <tr style="color:var(--day1)"><td><strong>Day 1</strong></td><td>恩施市区</td><td>机场→酒店→土司城→女儿城→酒吧</td><td>≈15km</td></tr>
    <tr style="color:var(--day2)"><td><strong>Day 2</strong></td><td>大峡谷</td><td>酒店→大峡谷→市区→按摩→酒吧</td><td>≈115km</td></tr>
    <tr style="color:var(--day3)"><td><strong>Day 3</strong></td><td>屏山峡谷</td><td>酒店→鹤峰屏山→市区→按摩 <span style="color:#f44336">⚠️雨天改腾龙洞</span></td><td>≈310km</td></tr>
    <tr style="color:var(--day4)"><td><strong>Day 4</strong></td><td>石林→宣恩</td><td>退房→石林→宣恩夜游→河景民宿</td><td>≈95km</td></tr>
    <tr style="color:var(--day5)"><td><strong>Day 5</strong></td><td>宣恩→返程</td><td>民宿→恩施市区→机场</td><td>≈55km</td></tr>
    <tr style="font-weight:700"><td colspan="2">📏 5天总计</td><td colspan="2">≈590km</td></tr>
  </table>
</div>

<div style="margin-top:16px;padding:16px;background:linear-gradient(135deg,#f0f8f2,#faf5ff);border-radius:12px;border:1px solid #e8e2d8">
  <h4 style="color:#1a3c2a;margin-bottom:6px">🎯 行程设计哲学</h4>
  <p style="font-size:12px;line-height:1.8;color:var(--text-muted)">
    两天硬核爬山（Day2大峡谷 + Day3屏山）之间穿插文化日（Day1土司城+女儿城）和慢节奏日（Day4宣恩夜游+河景民宿），
    Day4不再折返恩施，一路向宣恩住贡水河畔。Day5河边晨光后悠闲去机场。
    <strong>核心原则：屏山峡谷是天气敏感型景点，必须坚持"晴天去、雨天改"的灵活策略。</strong>
    每晚按摩/SPA/酒吧时间充裕，手法全部轻柔，真正舒缓身心。🏔️🍺💆🌙
  </p>
</div>
`
};

// ---- 初始渲染 ----
scrollArea.innerHTML = content.itinerary;

// ---- Tab 切换 ----
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const key = tab.dataset.tab;
    scrollArea.innerHTML = content[key] || '';

    // 入场动画
    requestAnimationFrame(() => {
      scrollArea.querySelectorAll('.day-card, .massage-item, .hotel-card, .info-box').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = `all 0.35s ease ${i*0.05}s`;
        requestAnimationFrame(() => { el.style.opacity='1'; el.style.transform='translateY(0)'; });
      });
    });
  });
});

// 初始入场动画
requestAnimationFrame(() => {
  scrollArea.querySelectorAll('.day-card, .info-box').forEach((el,i) => {
    el.style.opacity='0'; el.style.transform='translateY(10px)';
    el.style.transition=`all 0.35s ease ${i*0.06}s`;
    requestAnimationFrame(()=>{el.style.opacity='1';el.style.transform='translateY(0)';});
  });
});

// 自定义 CSS
const extraCSS = document.createElement('style');
extraCSS.textContent = `
.map-tooltip{background:#fff!important;border:1px solid #e8e2d8!important;border-radius:6px!important;color:#2d3436!important;font-size:12px!important;font-weight:600!important;padding:4px 10px!important;box-shadow:0 2px 8px rgba(0,0,0,0.12)!important}
.map-tooltip::before{border-top-color:#fff!important}
.area-label{background:transparent!important;border:none!important;color:#999!important;font-size:11px!important;font-weight:500!important;box-shadow:none!important}
.leaflet-control-zoom{border:1px solid #e8e2d8!important;border-radius:8px!important;overflow:hidden}
.leaflet-control-zoom a{background:#fff!important;color:#555!important;border-color:#e8e2d8!important}
.leaflet-control-zoom a:hover{background:#f5f5f5!important}
img{max-width:100%}
`;
document.head.appendChild(extraCSS);

console.log('🏔️ 2026端午恩施 — 页面已就绪');
console.log('🗺️ 高德中文地图 | 路线无折返优化 | 宣恩河景民宿过夜');
console.log('💆 按摩：仅轻柔+瑜伽拉伸（无泰式无精油）');
