// JavaScript
console.log('Hello world!');

import { LeafletMap, TileLayer, Marker, Popup, Icon, Circle, Polygon } from 'leaflet';

const map = new LeafletMap('map').setView([33.65951862567123, 130.4441130795236], 15);

// 国土地理院
new TileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', { attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>', }).addTo(map);

//const marker = new Marker([33.65951862567123, 130.4441130795236]).addTo(map);
//marker.bindPopup('<b>Hello world!</b><br>I am a popup.<img src="images/img01.png" alt="img">').openPopup();

// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("ここは" + e.latlng.toString() + "です")
        .openOn(map);
}

map.on('click', onMapClick);

//アイコン
//const whiteIcon = new Icon({
//iconUrl: 'images/ico.png',
//shadowUrl: 'images/ico_shadow.png',

//iconSize: [40, 40], // size of the icon
//shadowSize: [40, 40], // size of the shadow
//iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
//shadowAnchor: [20, 40],  // the same for the shadow
//popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
//});

//複数アイコンをまとめて定義
class circleIcon extends Icon {
    static defaultOptions = {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    };
}

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });


new Marker([33.659480318855465, 130.4426791527721], { icon: whiteIcon }).addTo(map).bindPopup('カシイカラ マーラータン<img src="images/img01.png" alt="img">').openPopup();
new Marker([33.650882299999985, 130.43650655939996], { icon: pinkIcon }).addTo(map).bindPopup('福恩麻辣湯 千早店<img src="images/img02.png" alt="img">');
new Marker([33.657353981981764, 130.43027699599986], { icon: blueIcon }).addTo(map).bindPopup('麻辣湯 檳榔之夜 イオンモール香椎浜店<img src="images/img03.png" alt="img">');


const circle = new Circle([33.659480318855465, 130.4426791527721], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1500 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = new Polygon([
    [33.659480318855465, 130.4426791527721],
    [33.650882299999985, 130.43650655939996],
    [33.657353981981764, 130.43027699599986]
], {
    color: 'blue',
    fillColor: 'rgb(0, 110, 255)',
    fillOpacity: 0.3
}).addTo(map);