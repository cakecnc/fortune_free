const sajuList = [
  {
    title: "JOIN운세",
    service: [
      "정통사주",
      "도사사주",
      "선녀사주",
      "택일",
      "인생총운",
      "궁합",
      "성명학",
      "기타",
    ],
    url: "http://www.jointip.com/www/dangsaju/dangsaju.php?menu=1",
    img_url: "image/jointip.png",
    billing: "무료",
    desc: "모바일웹불가",
  },
  {
    title: "사주인",
    service: [
      "토정비결",
      "신년운세",
      "오늘의 일진",
      "타고난 성격",
      "유명인 사주",
      "드라마 사주",
      "스타와의 궁합",
    ],
    url: "https://www.sajuin.com/services/index?s=saju00",
    img_url: "image/sajuin.png",
    billing: "부분유료",
    desc: "유명인사주,드라마사주,스타와의궁합컨텐츠제공",
  },
  {
    title: "인크루트취업운세",
    service: [
      "토정비결",
      "평생운세",
      "취업운",
      "직장운",
      "사업운",
      "시험운",
      "금전운",
      "오늘의운세",
      "택일",
      "꿈해몽",
    ],
    url: "http://unse.incruit.com/main/unse.asp?utm_source=incruit&utm_medium=email&utm_content=shownow&utm_campaign=inc_mail_unse",
    img_url: "image/incruit.png",
    billing: "무료",
    desc: "회원가입필요",
  },

  {
    title: "김사주",
    service: ["내 인물 유형 알아보기", "자미두수"],
    url: "http://kimsaju.com/",
    img_url: "image/kimsaju.jpeg",
    billing: "무료",
    desc: "",
  },
  {
    title: "삼성생명운세",
    service: [
      "토정비결",
      "평생운세",
      "월간종합운세",
      "띠별운세",
      "오늘의운세",
      "꿈자리해몽",
      "오늘의타로",
      "월간타로",
      "속마음타로",
      "고민해결타로",
      "정통궁합",
      "운명의사랑찾기",
    ],
    url: "https://m.samsunglife.com/display/service/fortune/MDP-IFBES010100M",
    img_url: "image/samsunglife.jpeg",
    billing: "무료",
    desc: "",
  },
  {
    title: "고산철학관",
    service: ["자미두수", "십이지법"],
    url: "http://egosan.com/menu_02_1.html",
    img_url: "image/gosan.jpeg",
    billing: "무료",
    desc: "",
  },
  {
    title: "내일은",
    service: [
      "풀어서 보는 사주",
      "내 사주 얼마나 좋을까?",
      "궁합",
      "토정비결",
      "이름풀이",
      "오늘운세",
    ],
    url: "https://8za.me/",
    img_url: "image/naeil.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "사주닷컴",
    service: [
      "주역 오늘운세",
      "나의 사상체질",
      "띠별신년운세",
      "별자리신년운세",
      "키워드",
      "재물운",
      "개운법",
      "살풀이",
    ],
    url: "https://i.sazoo.com/run/main/index.php",
    img_url: "image/saju.com.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "포스텔러",
    service: [
      "신년운세",
      "재회운",
      "타로",
      "별자리",
      "풍수지리",
      "대인관계",
      "커플",
      "고민",
    ],
    url: "https://forceteller.com/",
    img_url: "image/forceteller.png",
    billing: "부분유료",
    desc: "아기자기하다",
  },
  {
    title: "궁합닷컴",
    service: ["궁합", "운세", "결혼택일", "이사택일", "별자리"],
    url: "http://www.gunghap.com/",
    img_url: "image/gunghap.com.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "운세의신",
    service: [
      "신년운세",
      "월간운세",
      "만남",
      "짝사랑",
      "금전",
      "인생운",
      "오늘의 운세",
      "스타운세",
    ],
    url: "https://unse.sportschosun.com/",
    img_url: "image/unsin.jpeg",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "헬로우봇",
    service: [
      "매일 다른 무료컨텐츠",
      "오늘 내  인기지수",
      "연락할까 말까?",
      "오늘의 내 사주운세",
      "오늘의 솔로 연애운",
      "포춘쿠키",
    ],
    url: "https://hellobot.co/store/free",
    img_url: "image/hellobot.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "신한생명운세",
    service: [
      "월간종합운세",
      "평생운세",
      "토정비결",
      "부자운",
      "오늘의운세",
      "주간종합운세",
      "오늘의타로",
      "로또운세",
      "내사랑반쪽찾기",
      "내운명의배우자",
    ],
    url: "https://www.shinhanlife.co.kr/hp/cdhg0130.do",
    img_url: "image/shinhanlife.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "디지털역술방",
    service: [
      "무료 이름풀이",
      "무료 토정비결",
      "동물점",
      "별점",
      "꽃점",
      "동전점",
    ],
    url: "http://www.yuksul.com/index2.html",
    img_url: "image/digitalyeoksul.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "뽐뿌무료운세",
    service: [
      "오늘의 게임운세",
      "커플운세",
      "퓨전운세",
      "로또운세",
      "고스톱운세",
      "경마운세",
      "플라워운세",
    ],
    url: "https://www.ppomppu.co.kr/fortune/index.html",
    img_url: "image/ppomppu.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "포춘82",
    service: [
      "네이버 오늘 운세",
      "전생궁합",
      "간단 재물운",
      "하늘에서 맺어준 나의 인연",
      "개운을 위한 옷스타일",
      "혈액형운세",
    ],
    url: "https://www.fortune82.com/index.asp",
    img_url: "image/fortune82.jpeg",
    billing: "부분유료",
    desc: "네이버오늘운세제공사이트.네이버로그인혹은회원가입필요",
  },
  {
    title: "무료운세",
    service: [
      "사주풍수운세",
      "육효이름풀이",
      "행운의 로또번호",
      "띠별운세",
      "띠별성격",
      "성명궁합운세",
      "사주체질운세",
      "꿈풀이",
    ],
    url: "http://www.freesaju.net/unjoa/stargunghap/stargunghap.php",
    img_url: "image/freesaju.net.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "농협운세",
    service: [
      "정통운세",
      "신토정비결",
      "평생운세",
      "월간 종합운세",
      "나의 성격",
      "좋은날 받기",
      "사상오행",
      "생활운세",
      "심리테스트",
    ],
    url: "https://nh.sinbiun.co.kr/",
    img_url: "image/nonghyup.png",
    billing: "무료",
    desc: "",
  },
  // {
  //   title: "신년운세",
  //   service: ["삼재궁합", "고부갈등", "바람기 생기는 궁합"],
  //   url: "http://www.yearunse.com/up2/saju/day.htm",
  //   img_url: "image/yearunse.jpeg",
  //   billing: "유료",
  //   desc: "",
  // },
  // {
  //   title: "사주온",
  //   service: ["만세력"],
  //   url: "http://www.sajuon.com/saju_new2/_page/page_web.php?page_name=index&folder=content&page_title=%26%2365533%3B%26%2365533%3B&pagedate=1641310925161&screen=web",
  //   img_url: "image/sajuon.png",
  //   billing: "유료",
  //   desc: "",
  // },
  {
    title: "운수도원",
    service: ["토정비결", "띠운세", "오늘의운세", "별자리운세"],
    url: "https://unse.nhnent.com/introduction",
    img_url: "image/unsudowon.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "신비운닷컴",
    service: ["무료운세", "무료서양운세", "무료타로", "별자리운세"],
    url: "http://sinbiun.com/unse/main.asp",
    img_url: "image/sinbiun.png",
    billing: "부분유료",
    desc: "",
  },
  // {
  //   title: "신비의거울",
  //   service: [],
  //   url: "http://www.sinbe.net/",
  //   img_url: "image/",
  //   billing: "유료",
  //   desc: "상담사체제",
  // },
  {
    title: "사주플러스",
    service: [
      "플러스 만세력",
      "플러스 운세력",
      "플러스궁합",
      "플러스명리학",
      "플러스관상",
      "플러스손금",
    ],
    url: "http://www.sajuplus.net/",
    img_url: "image/sajuplus.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "무료운세",
    service: [
      "무료 살풀이",
      "황실 사주운세",
      "정통궁합",
      "그의 러브스타일",
      "사주팔자",
      "사주에 타고난 사업적성",
      "행운을 주는 숫자",
    ],
    url: "http://m1.2019unse.com/wooriunse/jgunghap/jgunghap.php",
    img_url: "image/muryounse.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "아시아경제운세",
    service: [
      "정통사주",
      "사주의고저",
      "토정비결",
      "신년운세",
      "택일",
      "이름풀이",
      "작명",
      "꿈해몽",
    ],
    url: "https://www.asiae.co.kr/fortune/saju.htm",
    img_url: "image/asiaecon.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "사주7",
    service: [
      "오늘의 운세",
      "주간 운세",
      "월간 운세",
      "평생 사주",
      "토정 비결",
      "꿈해몽",
    ],
    url: "http://www.saju7.com/sub/tradition5.php",
    img_url: "image/saju7.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "사주풀이도우미",
    service: [
      "셀프 작명",
      "이름 평가",
      "오늘의 운세",
      "택일 만세력",
      "재미로보는 당사주",
      "재미로보는 토정비결",
    ],
    url: "https://kr.fateup.com/",
    img_url: "image/fateup.com.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "팔자닷컴",
    service: [
      "사주",
      "궁합",
      "꿈해몽",
      "토정비결",
      "살풀이",
      "성리추명학",
      "성명풀이",
      "로또",
    ],
    url: "http://paljja.com/zbxe/?mid=saju1",
    img_url: "image/palja.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "60갑자사주운세",
    service: [
      "자평명리 오늘의 운세",
      "오늘의 띠별운세",
      "오행기운세",
      "12신살 장애운",
      "행운번호 운세",
      "부모형제 육친운",
    ],
    url: "http://www.60gabja.com/",
    img_url: "image/60gabja.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "사주포럼",
    service: [
      "무료 이름풀이",
      "관상",
      "손금",
      "개업택일",
      "띠궁합",
      "바이오리듬",
      "별자리운세",
    ],
    url: "https://m.sajuforum.com/forum/main/",
    img_url: "image/sajuforum.jpeg",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "명리",
    service: [
      "오늘의 운세",
      "나의 연애스타일",
      "궁합지수",
      "성격지수",
      "당사주",
      "토정비결",
      "단시점",
      "나의 성적스타일",
    ],
    url: "http://www.myungri.com/unse/unse.asp",
    img_url: "image/myungli.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "사주팔콤",
    service: ["만세력", " 스스로 보는 토정비결"],
    url: "http://saju8.com/",
    img_url: "image/saju8com.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "명리보감",
    service: ["무료 만세력", "세계 만세력"],
    url: "http://www.goodcycle.com/alib/",
    img_url: "image/myunglibogam.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "인터넷역학",
    service: ["기본운세", "만세력", "역학정보/강의"],
    url: "http://lifesci.net/pod/",
    img_url: "image/internetsci.jpeg",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "갑술만세력",
    service: ["만세력", "이름풀이"],
    url: "http://www.ksmanse.com/",
    img_url: "image/gabsulmanse.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "백송사주",
    service: ["운세", "궁합"],
    url: "http://www.sixtelling.com/fortune/main/main.jsp",
    img_url: "image/baeksongsaju.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "무료운세",
    service: [
      "오늘의 운세",
      "주간운세",
      "월간운세",
      "토정비결",
      "평생사주",
      "궁합",
      "무료꿈해몽",
      "심심풀이 심리테스트",
    ],
    url: "http://month.freeunse.funstory.biz/",
    img_url: "image/freeunse.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "네임소프트",
    service: ["무료 이름풀이", "무료선호이름작명"],
    url: "https://www.namesoft.co.kr/",
    img_url: "image/namesoft2.jpeg",
    billing: "무료",
    desc: "https://www.namesoft.co.kr/namemake/free.asp",
  },
  {
    title: "백송성명학회",
    service: ["셀프작명", "이름풀이", "무료운세", "진로시험"],
    url: "http://www.nameluck.com/unse/",
    img_url: "image/baeksong.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "따고요",
    service: [
      "운세",
      "토정비결",
      "사주풀이",
      "꿈해몽",
      "별자리",
      "애정궁합",
      "탄생화",
      "성명풀이",
    ],
    url: "http://ddagoyo.com/main/index2/unse/todayunse",
    img_url: "image/ddagoyo.jpeg",
    billing: "무료",
    desc: "",
  },
  {
    title: "복신",
    service: [
      "오늘의 종합운세",
      "꿈해몽",
      "토정비결",
      "심리분석",
      "직업운",
      "전생운",
      "살풀이",
      "질병운",
    ],
    url: "https://www.boksin.com/fortune",
    img_url: "image/boksin.jpeg",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "송연암",
    service: [
      "사주",
      "인생총운",
      "10년 운세풀이",
      "평생운세",
      "60갑자 운세",
      "사주오행",
    ],
    url: "http://aaabbb.zc.bz/saju1/saju1.php?menu=2",
    img_url: "image/songyeonam.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "사주게이트",
    service: ["무료 만세력"],
    url: "https://sajugate.com/",
    img_url: "image/sajugate.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "사주가이드",
    service: [
      "한달운세",
      "오늘운세",
      "평생애정운",
      "올해의 건강",
      "나의 주택궁합",
      "올해의 입학운",
      "올해의 사업운",
      "나의 취직운",
    ],
    url: "http://www.sajuguide.co.kr/",
    img_url: "image/sajuguide.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "네이트운세",
    service: ["오늘의 운세", "주간/월간운세", "애정/궁합", "대인관계", "퓨전"],
    url: "https://fortune.nate.com/contents/freeunse/freeunseframe.nate?freeUnseId=today03",
    img_url: "image/nate.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "무료사주보기",
    service: ["무료 사주팔자"],
    url: "http://unsefree.gazio.to/user/f_saju/main.htm",
    img_url: "image/muryosajubogi.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "사주은행",
    service: [
      "꿈해몽",
      "심층특정일운세",
      "특정일별자리운세",
      "오늘의 타로운세",
      "신비의 부적",
      "대박로또운세",
    ],
    url: "http://www.46bank.co.kr/?http_nc&NVKWD=%EC%82%AC%EC%A3%BC%EA%B6%81%ED%95%A9&NVADKWD=%EC%82%AC%EC%A3%BC%EA%B6%81%ED%95%A9&NVAR=PL&NVADID=172497089",
    img_url: "image/sajubank.png",
    billing: "부분유료",
    desc: "",
  },
  {
    title: "바람도인",
    service: [
      "도인사주",
      "귀곡궁합",
      "사주로 보는 부적",
      "오늘의 운세",
      "평생이름풀이",
      "일본동물점",
      "사랑의 스튜디오",
      "데이트달력",
    ],
    url: "https://www.unse.us/hgdoin/saju/doin_saju.jsp",
    img_url: "image/baramdoin.gif",
    billing: "부분유료",
    desc: "회원가입필요",
  },
  {
    title: "무료운세사이트",
    service: [
      "토정비결",
      "오늘운세",
      "주간운세",
      "월간운세",
      "평생사주",
      "궁합",
      "꿈해몽",
    ],
    url: "https://www.freeunsesite.co.kr/m/sub/tradition4.php",
    img_url: "image/freeunsesite.png",
    billing: "무료",
    desc: "",
  },
  {
    title: "사주바주",
    service: ["회원가입필요", "당령운세", "띠별운세", "나의 이상형 찾기"],
    url: "https://sajubaju.com/",
    img_url: "image/sajubaju.jpeg",
    billing: "부분유료",
    desc: "회원가입필요",
  },
  // {
  //   title: "무료사주사이트",
  //   service: [],
  //   url: "http://www.freesajusite.com/",
  //   img_url: "image/freesajusite.png",
  //   billing: "무료",
  //   desc: "",
  // },
];

// DOM
const cardList = document.getElementById("articles-container");

// function

// 방문자 카운트

function onLoad() {
  for (let i = 0; i < sajuList.length; i++) {
    const imgUrl = sajuList[i]["img_url"];
    const title = sajuList[i]["title"];
    const url = sajuList[i]["url"];
    const billing = sajuList[i]["billing"];
    const cardDesc = sajuList[i]["desc"];
    let randomNum = Math.floor(Math.random() * 100);

    const serviceList = sajuList[i]["service"];

    const item = document.createElement("div");
    item.classList.add("article-container");

    // 태그 버튼을 한번에 스트링으로 만들어 주기 위해서 spanTags를 empty string으로 만들어준다.
    let pTags = "";

    // 루프를 돌면서 위에서 정의한 spanTags에 span태그를 스트링 방식으로 하나씩 더해준다.
    for (let j = 0; j < serviceList.length; j++) {
      pTags += `<p class="s${j} service-tag">#${serviceList[j]}</p>`;
      if (j == 8) {
        console.log(title);
        break;
      }
    }

    // 위에서 만든 spanTags를 통째로 string literal로 넣어준다.
    item.innerHTML = ` <div class="article-block">
                        <a class="url-tag" href="${url}" target="_blank">
                          <img
                          src="${imgUrl}"
                          alt="image of article"
                          class="article-image"
                          />
                        </a>
                        <div class="article-block-text">
                        <div class="article-title-block">
                            <a href="${url}" target="_blank">
                            <h2 class="article-title">${title}</h2>
                            </a>
                            <p class="article-category">${billing}</p>
                        </div>

                        <div class="article-service">
                            ${pTags}
                        </div>
                        <div class="article-data">
                            <span class="number-of-visited"> 오늘 ${randomNum}명이 방문했어요 </span>
                        </div>
                        </div>
                    </div>
`;
    cardList.append(item);
  }
}

onLoad();

// eventlistener
