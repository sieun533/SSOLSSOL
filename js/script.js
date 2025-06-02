let opening = document.querySelector('.opening');
let text2 = document.querySelector('.text_2');
let text3 = document.querySelector('.text_3');
let text5 = document.querySelector('.text_5');
let eyes = document.querySelector('.eyes');
let star = document.querySelector('.star_1_img');
let star2 = document.querySelector('.star_2_img');
const scrollContainer = document.querySelector('.SSOLSSOL');

// 디자인 페이지 클릭 구현
// let designBtns = document.querySelectorAll('.design');

let designLogoBtn = document.querySelector('.d_logo')
let designColorBtn = document.querySelector('.d_color')
let designTypoBtn = document.querySelector('.d_typo')
let designGrapicBtn = document.querySelector('.d_grapic')

let designLogo = document.querySelector('.LOGO');
let designColor = document.querySelector('.COLOR');
let designTypo = document.querySelector('.TYPO');
let designGrapic = document.querySelector('.GRAPIC');

text5.style.marginRight = "2rem";
eyes.style.opacity = "0";

setTimeout(function() {
  opening.classList.add('none');
}, 2000);

setTimeout(function() {
  text2.style.marginRight = "5rem";
  text3.style.marginRight = "5rem";
}, 4000);

setTimeout(function() {
  text5.style.marginRight = "7.5rem";
}, 5200);

setTimeout(function() {
  star.classList.add('rotate')
  star2.classList.add('opa')
  eyes.style.opacity = "1";

}, 6600);

let designBtns = document.querySelectorAll('.design');
let designInfos = document.querySelectorAll('.designInfo');

designBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 모든 버튼에서 'choice' 제거
    designBtns.forEach(b => b.classList.remove('choice'));
    btn.classList.add('choice');

    // 모든 designInfo 숨김
    designInfos.forEach(info => info.style.display = 'none');

    // data-target과 일치하는 designInfo만 표시
    const targetClass = btn.dataset.target;
    const targetInfo = document.querySelector(`.designInfo.${targetClass}`);
    if (targetInfo) {
      targetInfo.style.display = 'block';
    }
  });
});

let colorBoxes = document.querySelectorAll('.colorful > div');
let achromaticColor = document.querySelector('.achromatic_color');
let colorfulContainer = document.querySelector('.colorful');

let colorfulRed = document.querySelector('.red');
let colorfulYellow = document.querySelector('.yellow');
let colorfulGreen = document.querySelector('.green');
let colorfulSky = document.querySelector('.sky');
let colorfulNavy = document.querySelector('.navy');


colorfulRed.addEventListener('mouseover', () => {
  achromaticColor.classList.add('shrink');
  colorfulRed.style.left = '-7vw';

});
colorfulRed.addEventListener('mouseleave', () => {
  achromaticColor.classList.remove('shrink');

  colorfulRed.style.left = '0vw';
});

colorfulYellow.addEventListener('mouseover', () => {
  achromaticColor.classList.add('shrink');

  colorfulRed.style.left = '-7vw';

  colorfulYellow.style.left = '2vw';
  colorfulYellow.style.width = '20vw';


});
colorfulYellow.addEventListener('mouseleave', () => {
  achromaticColor.classList.remove('shrink');

  colorfulRed.style.left = '0vw';

  colorfulYellow.style.left = '9vw';
  colorfulYellow.style.width = '15vw';
});

colorfulGreen.addEventListener('mouseover', () => {
  achromaticColor.classList.add('shrink');

  colorfulRed.style.left = '-7vw';

  colorfulYellow.style.left = '2vw';
  colorfulYellow.style.width = '20vw';

  colorfulGreen.style.left = '11vw';
  colorfulGreen.style.width = '20vw';


});
colorfulGreen.addEventListener('mouseleave', () => {
  achromaticColor.classList.remove('shrink');

  colorfulRed.style.left = '0vw';
  colorfulYellow.style.left = '9vw';
  colorfulYellow.style.width = '15vw';

  colorfulGreen.style.left = '18vw';
  colorfulGreen.style.width = '15vw';
});

colorfulSky.addEventListener('mouseover', () => {
  achromaticColor.classList.add('shrink');

  colorfulRed.style.left = '-7vw';

  colorfulYellow.style.left = '2vw';
  colorfulYellow.style.width = '20vw';

  colorfulGreen.style.left = '11vw';
  colorfulGreen.style.width = '20vw';

  colorfulSky.style.left = '20vw';
  colorfulSky.style.width = '20vw';


});
colorfulSky.addEventListener('mouseleave', () => {
  achromaticColor.classList.remove('shrink');

  colorfulRed.style.left = '0vw';
  colorfulYellow.style.left = '9vw';
  colorfulYellow.style.width = '15vw';

  colorfulGreen.style.left = '18vw';
  colorfulGreen.style.width = '15vw';

  colorfulSky.style.left = '27vw';
  colorfulSky.style.width = '15vw';
});

colorfulNavy.addEventListener('mouseover', () => {
  achromaticColor.classList.add('shrink');

  colorfulRed.style.left = '-7vw';

  colorfulYellow.style.left = '2vw';
  colorfulYellow.style.width = '20vw';

  colorfulGreen.style.left = '11vw';
  colorfulGreen.style.width = '20vw';

  colorfulSky.style.left = '20vw';
  colorfulSky.style.width = '20vw';

  colorfulNavy.style.left = '29vw';
  colorfulNavy.style.width = '21vw';


});
colorfulNavy.addEventListener('mouseleave', () => {
  achromaticColor.classList.remove('shrink');

  colorfulRed.style.left = '0vw';
  colorfulYellow.style.left = '9vw';
  colorfulYellow.style.width = '15vw';

  colorfulGreen.style.left = '18vw';
  colorfulGreen.style.width = '15vw';

  colorfulSky.style.left = '27vw';
  colorfulSky.style.width = '15vw';

  colorfulNavy.style.left = '36vw';
  colorfulNavy.style.width = '15vw';
});

let imBtn = document.querySelector('.impulsive_btn');
let brBtn = document.querySelector('.brand_btn');
let exBtn = document.querySelector('.experience_btn');
let seBtn = document.querySelector('.selfcare_btn');
let vaBtn = document.querySelector('.value_btn');
let trBtn = document.querySelector('.trendy_btn');
let prBtn = document.querySelector('.practical_btn');
let plBtn = document.querySelector('.planner_btn');
let ovBtn = document.querySelector('.overspender_btn');
let characterImgBox = document.querySelector('.characterImgBox');
let chName = document.querySelector('.chName');

let btn_1 = document.querySelector('.btn_1');
let btn_2 = document.querySelector('.btn_2');
let btn_3 = document.querySelector('.btn_3');

imBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '충동형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/충동.gif" alt="충동형 캐릭터 기본형">`;

  btn_1.innerHTML = '';
  btn_1.innerHTML = `<img src="img/change1.png" alt="캐릭터 기본형 체인지 버튼">`;
  btn_2.innerHTML = '';
  btn_2.innerHTML = `<img src="img/change2.png" alt="캐릭터 체인지 버튼">`;
  btn_3.innerHTML = '';
  btn_3.innerHTML = `<img src="img/change3.png" alt="캐릭터 체인지 버튼">`;

  btn_1.addEventListener('click', () => {
    characterImgBox.innerHTML = '';
    characterImgBox.innerHTML = `<img src="img/충동.gif" alt="충동형 캐릭터 기본 이미지">`;
  })
  btn_2.addEventListener('click', () => {
    characterImgBox.innerHTML = '';
    characterImgBox.innerHTML = `<img src="img/충동1.gif" alt="충동형 캐릭터 박스 쓴 이미지">`;
  })
  btn_3.addEventListener('click', () => {
    characterImgBox.innerHTML = '';
    characterImgBox.innerHTML = `<img src="img/충동2.gif" alt="충동형 캐릭터 신발신고 커피 들고 있는 이미지">`;
  })
});


brBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '브랜드형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/브랜드.gif" alt="브랜드형 캐릭터 기본형">`;

  btn_1.innerHTML = '';
  btn_1.innerHTML = `<img src="img/change2.png" alt="캐릭터 기본형 체인지 버튼">`;
});

exBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '경험형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/경험.gif" alt="경험형 캐릭터 기본형">`;
});

seBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '자기개발형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/자기개발.gif" alt="자기개발형 캐릭터 기본형">`;
});

vaBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '가치소비형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/가치소비.gif" alt="가치소비형 캐릭터 기본형">`;
});

trBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '유행선호형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/유행선호.gif" alt="유행선호형 캐릭터 기본형">`;
});

prBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '실속형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/실속.gif" alt="실속형 캐릭터 기본형">`;
});

plBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '계획형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/계획.gif" alt="계획형 캐릭터 기본형">`;
});

ovBtn.addEventListener('click', () => {
  chName.innerText = '';
  chName.innerText = '과소비형';

  characterImgBox.innerHTML = '';
  characterImgBox.innerHTML = `<img src="img/과소비.gif" alt="과소비형 캐릭터 기본형">`;
});


























