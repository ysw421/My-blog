export const mainNodes = {
  'My Blog': {
    value: 'My Blog',
    x: 0,
    y: 0,
    link: '',
    edges: ['Machine Learning', 'Math', '나의 일상'],
    circleSize: 60,
  },
  'Machine Learning': {
    value: 'Machine Learning',
    x: -80,
    y: -70,
    link: '/mind-map/machine-learning',
    edges: [],
    circleSize: 20,
  },
  Math: {
    value: 'Math',
    x: 120,
    y: 30,
    link: '/mind-map/math',
    edges: [],
    circleSize: 25,
  },
  '나의 일상': {
    value: '나의 일상',
    x: -70,
    y: 80,
    link: '/mind-map/나의-일상',
    edges: [],
    circleSize: 20,
  },
};

export const mindMapNodes = {
  'machine-learning': {
    'Machine Learning': {
      value: 'Machine Learning',
      x: 0,
      y: 0,
      link: '/paper/Machine-Learning',
      edges: ['b', 'c'],
      circleSize: 60,
    },
    b: {
      value: '한글123English',
      x: -70,
      y: -50,
      link: '/paper/b',
      edges: ['d', 'e'],
      circleSize: 20,
    },
    c: {
      value: '3',
      x: 60,
      y: 100,
      link: '/paper/c',
      edges: [],
      circleSize: 20,
    },
    d: {
      value: '4',
      x: -140,
      y: -70,
      link: '/paper/d',
      edges: [],
      circleSize: 27,
    },
    e: {
      value: '5',
      x: -20,
      y: -120,
      link: '/paper/e',
      edges: [],
      circleSize: 20,
    },
  },

  math: {
    Math: {
      value: 'Math',
      x: 0,
      y: 0,
      link: '/paper/Math',
      edges: ['선형 대수학'],
      circleSize: 60,
    },
    '선형 대수학': {
      value: '선형 대수학',
      x: -70,
      y: -50,
      link: '/paper/선형-대수학',
      edges: ['행렬'],
      circleSize: 20,
    },
    행렬: {
      value: '행렬',
      x: -20,
      y: -110,
      link: '/paper/행렬',
      edges: ['가우스 소거법'],
      circleSize: 40,
    },
    '가우스 소거법': {
      value: '가우스 소거법',
      x: -80,
      y: -180,
      link: '/paper/가우스-소거법',
      edges: [],
      circleSize: 30,
    },
  },

  '나의-일상': {
    '나의 일상': {
      value: '나의 일상',
      x: 0,
      y: 0,
      link: '/paper/나의-일상',
      edges: ['디미고', '영화'],
      circleSize: 60,
    },
    디미고: {
      value: '디미고',
      x: 30,
      y: 100,
      link: '/paper/디미고',
      edges: ['2학년 1, 2일'],
      circleSize: 30,
    },
    영화: {
      value: '영화',
      x: -70,
      y: -60,
      link: '/paper/영화',
      edges: ['타이타닉'],
      circleSize: 25,
    },
    타이타닉: {
      value: '타이타닉',
      x: -20,
      y: -120,
      link: '/paper/타이타닉',
      edges: [],
      circleSize: 20,
    },
    '2학년 1, 2일': {
      value: '2학년 1, 2일',
      x: -10,
      y: 160,
      link: '/paper/2학년-1,-2일',
      edges: [],
      circleSize: 20,
    },
  },
};
