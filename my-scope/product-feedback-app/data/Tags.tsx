export const Tags = [
  {
    id: 1,
    heading: '4 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Bug',
    voteCount: 44,
    commentCount: 4,
    comments: [
      {
        comment_id: 'c1',
        name: 'Anne Maria',
        username: '@anne_m',
        comment: 'It is a great one!',
        imgsrc: require('../assets/images/image-anne.jpg'),
        replies: [
          {
            reply_id: 'r1',
            name: '33ts Reed',
            username: '@tsreed33',
            comment: 'Cool one!!',
            imgsrc: require('../assets/images/image-reed.jpg'),
          },
          {
            reply_id: 'r2',
            name: 'Harry D',
            username: '@harry_43',
            comment: "It's just great to have this!",
            imgsrc: require('../assets/images/image-harry.jpg'),
          },
        ],
      },
      {
        comment_id: 'c2',
        name: 'Winston Tyler',
        username: '@winston_ty24',
        comment: 'Super cool!',
        imgsrc: require('../assets/images/image-winston.jpg'),
      },
    ],
  },
  {
    id: 2,
    heading: '2 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UI',
    voteCount: 22,
    commentCount: 2,
    comments: [
      {
        comment_id: 'c1',
        name: 'Rick Livemore',
        username: '@ricky452',
        comment: 'Easier than expected!',
        imgsrc: require('../assets/images/image-rick.jpg'),
      },
      {
        comment_id: 'c2',
        name: 'Larry River',
        username: '@bike_racerlarry',
        comment: 'Its basically cherry on top!',
        imgsrc: require('../assets/images/image-larry.jpg'),
      },
    ],
  },
  {
    id: 3,
    heading: '3 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UX',
    voteCount: 19,
    commentCount: 3,
    comments: [
      {
        comment_id: 'c1',
        name: 'Hannah Tyler',
        username: '@hannahty',
        comment: 'This theme is really cool!',
        imgsrc: require('../assets/images/image-hannah.jpg'),
        replies: [
          {
            reply_id: 'r1',
            name: 'Tim Churchill',
            username: '@churchill232',
            comment: 'The theme looks quite exquisite',
            imgsrc: require('../assets/images/image-tim.jpg'),
          },
          {
            reply_id: 'r2',
            name: 'Kimberley Jones',
            username: '@kim_jones32',
            comment: 'It is real a cool one!',
            imgsrc: require('../assets/images/image-kimberley.jpg'),
          },
        ],
      },
    ],
  },
  {
    id: 4,
    heading: 'Add tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Enhancement',
    voteCount: 17,
    commentCount: 4,
    comments: [
      {
        comment_id: 'c1',
        name: 'Liana Grever',
        username: '@liana_gr',
        comment: 'This is a really cool one!!',
        imgsrc: require('../assets/images/image-liana.jpg'),
        replies: [
          {
            reply_id: 'r1',
            name: 'Awesome Maniac',
            username: '@maniac_4ever',
            comment: 'It is simply awesome.',
            imgsrc: require('../assets/images/image-maniac.jpg'),
          },
        ],
      },
      {
        comment_id: 'c2',
        name: 'Vanny Len',
        username: '@vanny34len',
        comment: 'This is one of the coolest things I have ever seen.',
        imgsrc: require('../assets/images/image-vanny.jpg'),
        replies: [
          {
            reply_id: 'r2',
            name: 'Ryan Tyson',
            username: '@cooltyson',
            comment: 'It is really simple and easy also.',
            imgsrc: require('../assets/images/image-ryan.jpg'),
          },
        ],
      },
    ],
  },
];

localStorage.setItem('Tags', JSON.stringify(Tags));
