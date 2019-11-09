const sqlFirstStep = [
  { content: "데이터베이스에 대한 기본적인 개념을 잡는데 도움이 되는 책이다." },
  { content: "레벨 2에서는 \"4장 데이터의 추가, 삭제, 갱신\"까지 읽을 것을 추천한다." },
]

const httpFromPicture = [
  { content: "HTTP와 Network에 대한 기본 지식을 습득하는데 도움이 되는 책이다." },
]

const headFirstServlet = [
  { content: "서블릿 컨테이너와 서블릿의 관계를 그림을 통해 잘 설명하고 있다. 정말 오래된 서블릿 책이다. 오래된 버전을 다루고 있어 굳이 구매할 것을 추천하지 않는다." },
]

const onePercent = [
  { content: "이 책은 기존의 다른 네트워크 책들과 달리 전체 과정을 쉽게 풀어 설명하고 있어 초보자가 읽기에 그나마 적합한 네트워크 책이다." },
  { content: "웹 개발자가 이 책의 모든 내용을 상세하게 이해할 필요는 없다고 생각한다. 브라우저를 통해 전달된 데이터가 서버까지 어떻게 전달되고, 서버에서 보낸 응답 데이터가 브라우저까지 전달되는 흐름을 이해해도 충분하다." },
]

const javaORM = [
  { content: "JPA 전반에 대한 내용을 깊이 있게 다루고 있는 책이다. 자바 객체와 테이블을 매핑하는 방법을 참고할 수 있다." },
]

const linuxCommandLine = [
  { content: "쉘 스크립트에 대한 기본적인 학습은 이 책의 PART4를 참고한다." },
  { content: "쉘 스크립트 작성 능력을 키우려면 책을 통해서는 한계가 있기 때문에 작은 것이라도 자기 주변에서 발생하는 불편한 점을 쉘 스크립트를 통해 개선해 나가는 경험을 하는 것이 가장 좋은 학습 방법이다." },
]

const webDevWorkBook = [
  { content: "자바 웹 개발 기초에서 프레임워크를 사용하는 실무 내용" },
]

const level2Books = [
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/311/x9788968482311.jpg",
    title: "SQL 첫걸음",
    author: "아사이 아츠시 저 | 박준용 역",
    publisher: "한빛미디어",
    desc: sqlFirstStep
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/897/x9788931447897.jpg",
    title: "그림으로 배우는 HTTP & Network Basic",
    author: "우에노 센 저 | 이병억 역",
    publisher: "영진닷컴",
    desc: httpFromPicture
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/639/x9788979146639.jpg",
    title: "[참고서] Head First Servlet & JSP",
    author: "케이시 시에라, 버트 베이츠, 브라얀 바샴 저 | 김종호 역",
    publisher: "한빛미디어",
    desc: headFirstServlet
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/769/x9788931555769.jpg",
    title: "[참고서] 1%의 네트워크 원리",
    author: "Tsutomu Tone 저 | 이도희 역 ",
    publisher: "성안당",
    desc: onePercent
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/330/x9788960777330.jpg",
    title: "[참고서] 자바 ORM 표준 JPA 프로그래밍",
    author: "김영한",
    publisher: "에이콘출판사",
    desc: javaORM
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/299/x9788994774299.jpg",
    title: "[참고서] 리눅스 커맨드라인 완벽 입문서",
    author: "윌리엄 E. 샤츠 주니어 저 | 이종우, 정영신 역",
    publisher: "비제이퍼블릭",
    desc: linuxCommandLine
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/677/x9788965400677.jpg",
    title: "[참고서] 열혈강의 자바 웹 개발 워크북",
    author: "엄진영",
    publisher: "프리렉",
    desc: webDevWorkBook
  },
  {
    image: "http://image.kyobobook.co.kr/images/book/xlarge/417/x9788960773417.jpg",
    title: "[참고서] 토비의 스프링 Vol 1.",
    author: "이일민",
    publisher: "에이콘출판사"
  },
]

export default level2Books