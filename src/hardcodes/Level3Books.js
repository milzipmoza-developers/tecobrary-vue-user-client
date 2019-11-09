const softwareJangIn = [
  { content: "소프트웨어 개발자가 추구해야 할 가치와 태도에 대해 다루고 있다. 이 책을 통해 시니어 개발자, 리더의 모습을 그리면서 내가 성장해 나가야할 방향에 대한 힌트를 얻을 수 있다." },
]
const httpFromPicture = [
  { content: "HTTP 학습은 예상보다 지루하고 재미없다. 책을 통해 HTTP 요청 헤더와 응답 헤더 전체를 하나씩 학습하는 것이 싫다면 먼저 HTTP (HyperText Transfer Protocol) 문서에 있는 내용만이라도 학습하자." },
]

const onePercent = [
  { content: "HTTP 다음 단계로 학습할 내용은 클라이언트와 서버 간에 데이터를 주고 받는 과정에 대해서이다. 클라이언트에서 보낸 데이터가 어떻게 서버까지 전달되며, 서버에서 전달된 데이터가 어떤 과정으로 클라이언트까지 전달되는지 알아야 한다. 이는 네트워크에 대해 학습함으로써 알 수 있다." }
]

const perfectGuide = [
  { content: "이 책을 통해 HTTP에 대한 기본적인 역량을 쌓았다면 다음 단계로 읽을 책은 HTTP 완벽 가이드(데이빗 고울리,브라이언 토티,마조리 세이어,세일루 레디,안슈 아가왈 공저/이응준,정상일 공역, 인사이트(insight)/2014) 책이다. 다음 단계로 읽을 책이 “HTTP 완벽 가이드”라는 뜻이지 두 번째 양파 껍질 단계에서 읽은 책은 아니다. HTTP & Network : 그림으로 배우는 책으로 학습 책 수준이면 충분하다. “HTTP 완벽 가이드” 책은 HTTP의 끝판왕 수준이므로 경력을 쌓아가면서 천천히 읽어도 괜찮다. “HTTP 완벽 가이드” 책은 HTTP의 바이블과 같은 책으로 처음부터 끝까지 읽기 쉽지 않다. 가능하면 혼자 읽기 보다는 책 읽기 스터디를 만들어 읽고 토론할 것을 추천한다. 나 또한 스터디를 통해 이 책을 끝까지 읽었다." }
]

const javaTune = [
  { content: "필자가 다년간 튜닝하고 다른 개발자들에게 조언하던 중에 반복적으로 제시하던 주제들을 정리하여 엮은 책이다. 아직 성능 개선을 위해 어떤 부분을 학습해야할지 감이 오지 않는다면 도움을 줄 수 있을거라 생각한다. 그리고 면접을 대비하는 데에 있어서도 좋은 주제들을 담고 있다고 생각한다." }
]

const linuxKernel = [
  { content: "OS 주제들을 Operating System Concept 등의 책으로 학습하는 것도 좋다. 하지만 나의 경우 OS는 고시공부하듯 할 때 목적이 불분명하여 학습 효율이 떨어지곤 했다. DevOps와 SE를 위한 리눅스 커널 이야기(강진우, 인사이트(insight/2017) 의 필자는 카카오 시스템엔지니어로 실제 운영을 하며 중요하다고 생각하는 시스템 본질적인 주제들을 커널 코드와 함께 설명한다. 저자의 블로그도 흥미로운 주제가 많으니 같이 보는 것도 좋겠다." },
  { content: "https://brunch.co.kr/@alden#articles" }
]

const databaseTech = [
  { content: "SQL문을 작성하는데 익숙한 사람들에게 다음 단계로 고민해볼 법한 주제들을 제시한다. 데이터 저장소는 각각의 컨셉은 다르지만, 하나를 깊이있게 학습하면 다른 기술을 학습하기도 수월해진다. MySQL에 대해 보다 깊이있는 학습을 원한다면 읽어보길 권장한다." }
]

const javaOptimize = [
  { content: "JVM, GC 동작원리 및 로깅, 모니터링에 대해 깊이있는 정보를 전달한다. 그리고 최근의 동시성 라이브러리에 대한 설명도 간단히 다루고 있다. 글로만 학습하기 어려운 주제들을 코드/모니터링 화면 등 예제 그림들이 많이 제시하여 이해를 높여준다." }
]

const level3Books = [
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/489/x9791186659489.jpg",
    title: "소프트웨어 장인",
    author: "산드로 만쿠소 지음 | 권오인 역",
    publisher: "길벗 출판사",
    desc: softwareJangIn
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/897/x9788931447897.jpg",
    title: "그림으로 배우는 HTTP & Network Basic",
    author: "우에노 센 저 | 이병억 역",
    publisher: "영진닷컴",
    desc: httpFromPicture
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/769/x9788931555769.jpg",
    title: "1%의 네트워크 원리",
    author: "Tsutomu Tone 저 | 이도희 역",
    publisher: "성안당",
    desc: onePercent
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/208/x9788966261208.jpg",
    title: "[참고서] HTTP 완벽 가이드",
    author: "데이빗 고울리 저",
    publisher: "인사이트",
    desc: perfectGuide
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/928/x9788966260928.jpg",
    title: "[참고서] 자바 성능 튜닝 이야기",
    author: "이상민 저",
    publisher: "인사이트",
    desc: javaTune
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/049/x9788966264049.jpg",
    title: "[참고서] 리눅스 커널 이야기",
    author: "강진우 저",
    publisher: "인사이트",
    desc: linuxKernel
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/555/x9788994506555.jpg",
    title: "[참고서] 데이터베이스를 지탱하는 기술",
    author: "마쓰노부 요시노리 저",
    publisher: "제이펍",
    desc: databaseTech
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/776/x9791162241776.jpg",
    title: "[참고서] 자바 최적화",
    author: "벤저민 J.에번스 저",
    publisher: "한빛미디어",
    desc: javaOptimize
  },
]

export default level3Books