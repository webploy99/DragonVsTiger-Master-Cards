
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/dragonvstiger-master-cards/id6476137565";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b7/a8/9f/b7a89f2d-62e7-42d5-432e-0d3ea32588a4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/49/40/84/494084b6-4653-8ddd-a330-88b18cd2c058/8527a782-1c72-40e4-bb1d-1a4aa7ad1c5d_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/9e/eb/9b/9eeb9bf3-873b-7585-2afe-ee4d0e8616ff/e6248383-84b1-4bbb-a52e-ab42e392da22_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/9d/20/ec/9d20ec82-6f2c-a5ab-45dc-ef5ed53e01ed/8739a717-cf20-4c20-9987-ade8d2a6c892_3.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3
