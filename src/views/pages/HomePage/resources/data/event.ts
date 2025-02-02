import { Session, Timetable, Track } from '~/types/event';
import 강예형 from '../images/speakers/강예형.png';
import 김혜성 from '../images/speakers/김혜성.png';
import 노용구 from '../images/speakers/노용구.png';
import 박세문 from '../images/speakers/박세문.png';
import 박서진 from '../images/speakers/박서진.png';
import 박신연 from '../images/speakers/박신연.gif';
import 오창영 from '../images/speakers/오창영.png';
import 이동현 from '../images/speakers/이동현.png';
import 이소영 from '../images/speakers/이소영.png';
import 정미량 from '../images/speakers/정미량.png';
import 최수형 from '../images/speakers/최수형.png';
import titles from '~/views/pages/HomePage/resources/titles';

const timetable: Timetable = [
  ['13:00', '13:40'],
  ['13:50', '14:30'],
  ['14:40', '15:20'],
  ['15:30', '16:10'],
  ['16:20', '17:00'],
];

const sessionList: Session[] = [
  {
    track: Track.A,
    time: timetable[0],
    title: 'ReScript 같이 해요',
    titleSvg: titles.정미량,
    description:
      "함수형의 '함' 자도 몰랐던 저는 함수형 프로그래밍과 ReScript를 처음 접했을 때 어렵게만 느껴졌습니다. 어떤 부분이 생소했는지, 달랐는지, ReScript의 안전하고 명료한 코드 작성의 매력에 어쩌다 빠지게 되었는지 얘기해 보려 합니다.<br/><br/>" +
      '그리고 우리 ReScript 같이 해요!',
    speakers: [
      {
        name: '정미량',
        company: {
          name: '그린랩스',
        },
        image: 정미량.src,
      },
    ],
  },
  {
    track: Track.A,
    time: timetable[1],
    title: '@webtoon/psd 라이브러리 개발기',
    titleSvg: titles.웹툰팀,
    description:
      '@webtoon/psd 라이브러리를 소개합니다.<br/> JavaScript로 포토샵 파일 파서를 만들면서 알게 된 지식과, 성능을 개선하기 위해 고민했던 내용을 공유합니다.',
    speakers: [
      {
        name: '이동현',
        company: {
          name: '네이버웹툰',
        },
        image: 이동현.src,
      },
      {
        name: '강예형',
        company: {
          name: '네이버웹툰',
        },
        image: 강예형.src,
      },
    ],
  },
  {
    track: Track.A,
    time: timetable[2],
    title: '프론트엔드 DDD를 만나다',
    titleSvg: titles.박세문,
    description:
      '프론트엔드 어플리케이션이 시간이 지날수록 점점 커져가고,<br/>' +
      '이를 어떻게 관리에 용이하게 구조를 바꿀지에 대해서 고민하고,<br/>' +
      '어떻게 나눌지에 대한 고민을 DDD를 통해 풀어보는 시간을 가져보고자 합니다.',
    speakers: [
      {
        name: '박세문',
        company: {
          name: '라포랩스',
        },
        image: 박세문.src,
      },
    ],
  },
  {
    track: Track.A,
    time: timetable[3],
    title: '텍스트 에디터? 그게 뭘 만드는 건데?',
    titleSvg: titles.노용구,
    description:
      '텍스트 에디터는 어떻게 만들어질지 궁금증을 가져보신 적이 있으신가요?<br/>' +
      '텍스트 에디터 발전의 역사를 기술적인 측면에서 알아보고,<br/>' +
      'React + contenteditable 기반의 새로운 에디터를 만들게 된 배경과 만들며 겪은 기술적인 도전을 공유합니다.',
    speakers: [
      {
        name: '노용구',
        company: {
          name: '네이버',
        },
        image: 노용구.src,
      },
    ],
  },

  {
    track: Track.A,
    time: timetable[4],
    title: 'Edge Computing으로 가져올 웹 개발의 변화',
    titleSvg: titles.김혜성,
    description:
      '엣지 컴퓨팅이라는 기술 트렌드가 가져온, 그리고 앞으로 가져올 웹 개발의 변화들을 사례와 함께 설명합니다.<br/><br/> 최근 등장한 다양한 엣지 컴퓨팅 플랫폼들을 슬기롭게 응용해서 웹 프론트엔드 개발을 확장하는 방법들을 소개하고, 앞으로 다가올 미래를 이야기합니다.',
    speakers: [
      {
        name: '김혜성',
        company: {
          name: '당근마켓',
        },
        image: 김혜성.src,
      },
    ],
  },
  {
    track: Track.B,
    time: timetable[0],
    title: '디자인 시스템, 형태를 넘어서',
    titleSvg: titles.이소영,
    description:
      '"기능이 형태에 결합되지 않는 디자인 시스템은 어떻게 만들어야 할까?"<br/>' +
      'flex의 세 번째 디자인 시스템 "linear"이야기를 통해 이 물음에 답을 찾아가는 과정을 공유합니다."',
    speakers: [
      {
        name: '이소영',
        company: {
          name: 'flex',
        },
        image: 이소영.src,
      },
    ],
  },
  {
    track: Track.B,
    time: timetable[1],
    title: '일백개 패키지 모노레포 우아하게 운영하기',
    titleSvg: titles.오창영,
    description:
      '토스 전 계열사에서 사용하고 있는 거대한 사내 라이브러리 모노레포의 운영 경험에 대해 공유합니다.',
    speakers: [
      {
        name: '오창영',
        company: {
          name: '토스',
        },
        image: 오창영.src,
      },
    ],
  },
  {
    track: Track.B,
    time: timetable[2],
    titleSvg: titles.박신연,
    title: 'UX 개발자, 대형 서비스 빠르게 프로토타입하기',
    description:
      '다소 생소할 수 있는 UX 개발자와 그 역할 중 프로토타입 제작에 대해 이야기합니다.<br/>' +
      '최근에 구글 검색, 쇼핑에서 주로 사용하는 프로토타입 유형들을 알아보고 그중 대형 서비스의 특성상 발견하게 된 특별한 프로토타입 유형을 자세히 소개 합니다.',
    speakers: [
      {
        name: '박신연',
        company: {
          name: '구글 검색',
        },
        image: 박신연.src,
      },
    ],
  },
  {
    track: Track.B,
    time: timetable[3],
    title: '내 import 문이 그렇게 이상했나요?',
    titleSvg: titles.박서진,
    description:
      '프론트엔드 개발자에게 있어 import 문은 더 이상 낯선 개념이 아닙니다. 그런데 잘 살펴보면 그렇게 작성된 import 문은 JavaScript 표준과는 거리가 있을 가능성이 높습니다.<br/><br/> 표준 모듈 시스템인 ECMAScript Modules에 대해 소개하면서, 왜 ESM으로 가야 하는지, 어떻게 갈 수 있는지 소개합니다.',
    speakers: [
      {
        name: '박서진',
        company: {
          name: '토스',
        },
        image: 박서진.src,
      },
    ],
  },
  {
    track: Track.B,
    time: timetable[4],
    title: '상태관리 이 전쟁을 끝내러 왔다',
    titleSvg: titles.최수형,
    description:
      'Redux를 쓰면서 여전히 고통받고 계신가요?<br/> 프론트엔드 개발에 OOP를 도입하고 싶지만 어려움을 겪고 계신가요?<br/><br/> 그렇다면 주목해주세요. 최근 상태 관리의 새로운 흐름인 micro store를 구축하는 핵심 아이디어를 직접 보여드리면서 어려움을 해결해드리겠습니다.<br/><br/> 궁극적으로 프론트엔드 개발에서 UI와 상태를 다루는 방법에 대한 많은 오해들을 바로 잡고 더 나은 설계를 위한 원칙들을 소개하려 합니다.',
    speakers: [
      {
        name: '최수형',
        company: {
          name: '메가테라',
        },
        image: 최수형.src,
      },
    ],
  },
];

export default sessionList;
