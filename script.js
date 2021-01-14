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
    ],
    recentNews: [
      {
        img: 'images/tazze.jpg',
        date: '03 Dec 2013',
        comments: '0 Comments',
        title: 'sedial eiusmod tempor',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'images/tavolo.jpg',
        date: '03 Dec 2013',
        comments: '2 Comments',
        title: 'donec luctus imperdiet',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'images/speakeratpresent.jpg',
        date: '03 Dec 2013',
        comments: '2 Comments',
        title: 'magna pars studiorum',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    ticketsOnSale: [
      {
        days: 'ONE DAY PASS',
        price: 'FREE',
        activities: [
          'One Day Access',
          'Coffee Break',
          'Lunch(International Buffet)',
          'Document Sheets',
          '50 USD Voucher For Next Event'
        ]
      },
      {
        days: 'FOUR DAY PASSES',
        price: '750.00 USD',
        activities: [
          'Four Day Access',
          'Coffee Break',
          'Lunch(International Buffet)',
          'Document Sheets',
          '100 USD Voucher For Next Event'
        ]
      },
      {
        days: 'TWO DAY PASSES',
        price: '580.00 USD',
        activities: [
          'Two Day Access',
          'Coffee Break',
          'Lunch(International Buffet)',
          'Document Sheets',
          '70 USD Voucher For Next Event'
        ]
      }
    ],
    twitterFeed: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span>@Envato</span> sed do eiusmod tempor incididunt ut labore et dolore magna ali...<span>https://bitly.com/</span>',
        date: '3 days ago',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna ali...<span>https://bitly.com/</span>',
        date: '9 days ago',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna ali...<span>https://bitly.com/</span>',
        date: '11 days ago',
      }
    ],
    blocks: [
      'images/banner-1.jpg',
      'images/banner-2.jpg',
      'images/banner-3.jpg',
      'images/banner-4.jpg',
      'images/banner-5.jpg',
      'images/banner-6.jpg'
    ]
	},
  methods: {

  },
  mounted:
    function () {

    }
});
