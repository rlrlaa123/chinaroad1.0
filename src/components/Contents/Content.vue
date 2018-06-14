<template>
    <div>
      <headers v-bind:headerName=header></headers>
      <div class="contents-wrapper">
        <h3 class="contents-title-korean"> &lt; {{ content.title_k }} &gt; </h3>
        <h3 class="contents-title-chinese"> &lt;{{ content.title_c }} &gt;</h3>
        <img class="contents-image" :src="content.image">
        <p class="contents-text" v-if="language">{{ content.content_k }}</p>
        <p class="contents-text" v-else>{{ content.content_c }}</p>
        <div style="text-align: right;">
          <img class="contents-btn" src="../../assets/trans.png" v-if="language"
               @click="language=false">
          <img class="contents-btn" src="../../assets/korean.png" v-else
               @click="language=true">
        </div>
      </div>
    </div>
</template>

<script>
import Headers from '../Header_back';

export default {
  components: {
    Headers,
  },
  data() {
    return {
      header: '컨텐츠',
      language: true,
      content: {
        title_k: '국내 연구진, 128억년전 새 블랙홀 발견',
        title_c: '韩国研究团队发现了128亿年前的新黑洞',
        // eslint-disable-next-line
        image: require('../../assets/contents/10.jpg'),
        // eslint-disable-next-line
        audio: require('../../assets/audio/sound_sample.mp3'),
        content_k: '< 국내 연구진, 128억년전 새 블랙홀 발견 >\n' +
        '\n' +
        '우주생성 초기 신비 풀 단서될듯\n' +
        '\n' +
        '국내 연구진이 우주 생성 초기인 128억 년 전에 형성된 새로운 ‘블랙홀’을 찾아냈다. 우주 초창기에 무슨 일이 있었는지 분석할 수 있다는 점에서 국내외 천문학계의 관심을 끌고 있다. 우주 생성 초기 블랙홀을 발견한 것은 2011년 캐나다, 올해 초 일본 연구진에 이어 세계에서 세 번째다. \n' +
        '\n' +
        '김민진 한국천문연구원 은하진화그룹 선임연구원팀과 임명신 서울대 물리천문학부 교수팀은 미국과 칠레 ‘제미니 천문대’에 각각 설치된 직경 8m인 쌍둥이 거대망원경을 통해 블랙홀 때문에 나타나는 ‘퀘이사(Quasar•거대 발광체)’라는 천체현상을 관측했다고 9일 밝혔다. \n' +
        '\n' +
        '블랙홀은 빛까지 흡수하기 때문에 눈에 보이지 않는다. 이 때문에 천문학자들은 주변 우주먼지 등이 블랙홀로 빠르게 끌려 들어가면서 밝은 빛을 내는 퀘이사 현상에 주목한다. 퀘이사 중앙에 반드시 블랙홀이 있기 때문이다.\n' +
        '\n' +
        '연구진은 새로 발견한 블랙홀에 ‘IMS J2204+0111’이란 고유 명칭을 부여했다. 새 블랙홀은 우주 생성 초기에 만들어진 ‘원조’ 격 블랙홀이라는 점에서 우주의 생성 비밀을 푸는 데 도움을 줄 것으로 보인다. 퀘이사에서 지구까지 오는 빛을 분광조사하면 우주 생성 초기에 어떤 일이 벌어졌는지 추정할 수 있기 때문이다.\n' +
        '\n' +
        '이번 연구 성과는 천문학 분야 국제 학술지인 ‘천체물리학 저널 레터’에 소개됐다.\n' +
        '\n' +
        '\n' +
        '링크 : http://news.donga.com/3/all/20151110/74685650/1',
        content_c: '< 韩国研究团队发现了128亿年前的新黑洞 >\n' +
        '\n' +
        '可成为解开宇宙形成初期神秘的线索\n' +
        '\n' +
        '韩国研究团队找到了宇宙形成初期128亿年前形成的新‘黑洞’。通过这一黑洞，可以分析宇宙初期到底发生了什么事情，引起了国内外天文学界的极大关注。这是继2011年加拿大、今年年初日本研究团队之后，世界上第三次发现宇宙形成初期的黑洞。\n' +
        '\n' +
        '金敏镇韩国天文研究院银河进化集团首席研究员小组和任明晨首尔大学物理天文学系教授团队9日宣布，通过美国和智利的双子星天文台设置的直径8米的双胞胎巨型望远镜，观测了因黑洞而产生的‘类星体（Quasar）’天体现象。\n' +
        '\n' +
        '因为黑洞能吸收光线，因此眼睛并不能看见，正因为如此，天文学家们都十分关注周边宇宙灰尘等被迅速吸入黑洞并发出亮光的类星体现象，因为，在类星体中央一定存在着黑洞。\n' +
        '\n' +
        '研究团队给新发现的黑洞起了“IMS J2204+0111”的固有名称。新的黑洞因为是宇宙初创期而形成的‘元祖’级黑洞，因此在解开宇宙形成的秘密方面将会有所帮助。这是因为，如果把类星体来到地球的光线进行分光分析的话，就有可能推测宇宙形成初期究竟发生了什么事情。\n' +
        '\n' +
        '这一研究结果已经登载在天文学领域的国际学术刊物《天体物理学通讯》上。',
      },
    };
  },
};
</script>

<style scoped>
  .contents-wrapper {
    margin: 50px 10px 10px 10px;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
  }

  .contents-title-korean {
    margin: 10px;
    font-weight: lighter;
    font-size: 13px;
  }

  .contents-title-chinese {
    margin: 10px;
    font-weight: bold;
    color: #c21720;
    font-size: 13px;
  }

  .contents-image {
    width: 100%;
    border-radius: 20px;
    margin: 10px 0;
  }

  .contents-text {
    text-align: left;
    white-space: pre-line;
    word-break: break-all;
    letter-spacing: 0.5px;
    font-size: 13px;
    font-weight: lighter;
  }

  .contents-btn {
    width: 40px;
  }
</style>
