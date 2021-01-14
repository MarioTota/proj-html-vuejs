var app = new Vue({
  el: '#root',
  data: {
    linkHeader: [
      {
        name: 'home',
        link: 'https://i.pinimg.com/236x/70/2a/a0/702aa076cc2137ea971257f78c4b5269.jpg'
      },
      {
        name: 'pages',
        link: 'https://www.napolitan.it/wp-content/uploads/2017/10/ssimg_235-1024x683.jpg',
      },
      {
        name: 'program',
        link: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/giappone-1080x720.jpg?v=134538'
      },
      {
        name: 'tickets',
        link: 'https://cameranation.it/wp-content/uploads/2020/03/paesaggi.jpg'
      },
      {
        name: 'speakers',
        link: 'https://dbdzm869oupei.cloudfront.net/img/photomural/large/5df11869474cd.jpg'
      },
      {
        name: 'papers',
        link: 'https://www.reterurale.it/flex/images/6/6/8/D.f2c2072928623596b6ad/1.jpg'
      },
      {
        name: 'blog',
        link: 'https://www.raiplayradio.it/cropgd/853x480/dl/img/2018/04/26/1524742758393_paesaggio.jpg'
      },
      {
        name: 'shortcodes',
        link: 'https://www.jovittorio.com/wp-content/uploads/2018/01/fotografare-paesaggi-1.jpg'
      }
    ],
    whoWhatWhy: [
      {
        icon:'fas fa-trophy',
        title:'Who we are',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      },
      {
        icon:'fas fa-bolt',
        title:'What we do',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      },
      {
        icon:'fas fa-question',
        title:'Why us?',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      }
    ],
    numbersOfCountdown: [
      {
        number: '17',
        textNumber: 'hours'
      },
      {
        number: '28',
        textNumber: 'mins'
      },
      {
        number: '17',
        textNumber: 'secs'
      }
    ],
    speakers: [
      {
        photo: 'images/speaker-6.jpg',
        name: 'patrick spencer',
        profession: 'S&P Analyzer'
      },
      {
        photo: 'images/speaker-5.jpg',
        name: 'janet jones',
        profession: "Newyork Post's GM"
      },
      {
        photo: 'images/speaker-4.jpg',
        name: 'michael dover',
        profession: "Starbuck's CEO"
      },
      {
        photo: 'images/speaker-3.jpg',
        name: 'angelina holy',
        profession: "Maxii's Manager"
      }
    ],
    programSingleDay: [
      {
        day: 'day 1',
        date: '23 May 2016'
      },
      {
        day: 'day 2',
        date: '23 May 2030'
      },
      {
        day: 'day 3',
        date: '24 May 2016'
      },
      {
        day: 'day 4',
        date: '25 May 2016'
      },
      {
        day: 'day 5',
        date: '26 May 2016'
      },
      {
        day: '',
        date: ''
      }
    ]
	},
  methods: {

  },
  mounted:
    function () {

    }
});
