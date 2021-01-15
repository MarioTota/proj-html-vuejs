var app = new Vue({
  el: '#root',
  data: {
    linkHeader: [
      {  name: 'home'},
      {  name: 'pages'},
      {  name: 'program'},
      {  name: 'tickets'},
      {  name: 'speakers'},
      {  name: 'papers'},
      {  name: 'blog'},
      {  name: 'shortcodes'}
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. @Envato sed do eiusmod tempor incididunt ut labore et dolore magna ali...https://bitly.com/',
        date: '3 days ago',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna ali...https://bitly.com/',
        date: '9 days ago',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna ali...https://bitly.com/',
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
    ],
    socials: [
      'fab fa-facebook-f',
      'fab fa-twitter',
      'fab fa-linkedin-in',
      'fab fa-google-plus-g',
      'fab fa-pinterest-p',
      'fas fa-ellipsis-h'
    ],
    listNews: [
      'Lorem ipsum dolor sit',
      'consectetur adipisicing elit',
      'sed do eiusmod tempor ',
      'Ut enim ad minim veniam',
      'sunt in culpa qui '
    ],
    gallery: [
      'images/tazzecoffee.jpg',
      'images/codino.jpg',
      'images/felpagialla.jpg',
      'images/assemblea.jpg',
      'images/photodune-8797753-multiethnic-people-with-startup-business-t2.jpg',
      'images/card04-150x150.jpg',
      'images/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg',
      'images/photodune-6745585-modern-creative-workspace-m-150x150.jpg',
      'images/6426608875_186070f8ca_o-150x150.jpg',
      'images/carte.jpg',
      'images/13349065283_64d09b067c_o-150x150.jpg',
      'images/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg'
    ]
	},
  methods: {
    handleSelectItem(navName){
      this.selectedItem = navName.name;
      this.selectedItem = this.selectedItem.toLowerCase();
      console.log(this.selectedItem);
      if (this.selectedItem == 'home') {
        window.scrollTo(0, 0);
      }
      if (this.selectedItem == 'program') {
        window.scrollTo(0, 1325);
      }
      if (this.selectedItem == 'tickets') {
        window.scrollTo(0, 3080);
      }
      if (this.selectedItem == 'speakers') {
        window.scrollTo(0, 950);
      }
      if (this.selectedItem == 'blog') {
        window.scrollTo(0, 2570);
      }
    },
    functionReload: function () {
      window.scrollTo(0, 0);
    }
  },
  mounted:
    function () {

    }
});
