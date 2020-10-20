import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myProfile: {
      name: 'my_name__',
      img: 'https://picsum.photos/id/1014/200/300',
    },
    story: [
      {
        name: 'myprofile',
        img:
          'https://i.pinimg.com/originals/18/c6/a6/18c6a65ad9e71996ec9daeaabe20eae1.jpg',
      },
      {
        name: 'good_man',
        img:
          'https://images.chosun.com/resizer/e_XfBvoOfR92cYym-TkRB4tsKqE=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RSITTQF5C7LGXQXY5MZ56EGNHE.jpg',
      },
      {
        name: 'very_girl',
        img:
          'https://www.smlounge.co.kr/upload/woman/article/202003/thumb/44345-405412-sampleM.jpg',
      },
      {
        name: 'limahah',
        img:
          'https://img6.yna.co.kr/photo/yna/YH/2018/06/04/PYH2018060410990001300_P2.jpg',
      },
      {
        name: 'leegigeum',
        img:
          'https://i.pinimg.com/originals/18/c6/a6/18c6a65ad9e71996ec9daeaabe20eae1.jpg',
      },
      {
        name: 'good_man',
        img:
          'https://images.chosun.com/resizer/e_XfBvoOfR92cYym-TkRB4tsKqE=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RSITTQF5C7LGXQXY5MZ56EGNHE.jpg',
      },
      {
        name: 'very_girl',
        img:
          'https://www.smlounge.co.kr/upload/woman/article/202003/thumb/44345-405412-sampleM.jpg',
      },
      {
        name: 'limahah',
        img:
          'https://img6.yna.co.kr/photo/yna/YH/2018/06/04/PYH2018060410990001300_P2.jpg',
      },
    ],
    posts: [
      {
        userProfile: {
          name: 'iu',
          img:
            'https://akns-images.eonline.com/eol_images/Entire_Site/2019630/rs_600x600-190730011745-e-asia-IU-youtube-million-thumbnails.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top',
          describe: '가수 아이유 입니다.',
        },
        content: {
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmGLCscNnMbrhpVIO0ik491E94p1tBHv5Wow&usqp=CAU',
          text:
            '아이유 10주년 콘서트 합니다. 많이 보러와 주세요 열심히 준비 했으니 아주 멋진 공연이 될것이라 예상합니다. #아이유 #10주년 #콘서트',
        },
        like: ['sldjf', 'iulove', 'myboo', 'gogoiu', 'hahaha'],
        comments: [
          { name: '270mm', text: '아이유 사랑해요' },
          { name: '이지금', text: '너무 기대되' },
          { name: '유애나1기', text: '좋아요 아주' },
          { name: '아이유1호팬', text: '콘서트 표 예매 실패 했어요 슬퍼' },
        ],
      },
      {
        userProfile: {
          name: 'shiba',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQoAuI2RODBbm-RpVEquiug-h2Mte8Mcg6kw&usqp=CAU',
          describe: '댕청 댕청 시바견',
        },
        content: {
          img:
            'https://images-na.ssl-images-amazon.com/images/I/A19KXPdHSJL._SL1500_.jpg',
          text: '나는 시바견이 에요 #아시바 #시바시바 #개시바',
        },
        like: ['shibaba', 'shibalove', 'myshibababa', 'fububu', 'hahaha'],
        comments: [
          { name: '90mm', text: '시바 사랑해요' },
          { name: '시바사랑', text: '시바 너무 기대되' },
          { name: '시바주인', text: '좋아요 아주 시바' },
          { name: '시바견주', text: '시바견 너무 귀여워 시바' },
        ],
      },
    ],
    hash: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
