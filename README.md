# 📺 SABA SCRIPT

### 🎬 OTT Web Streaming Service (Spring Legacy Project)

**SABA SCRIPT**는 HTML, CSS, JavaScript 기반으로 구축된 **Spring Legacy Framework** 기반의 OTT(Over-The-Top) 웹 스트리밍 플랫폼입니다.  
이 프로젝트는 사용자 중심의 콘텐츠 경험을 제공하기 위해 커스터마이즈된 디자인과 Oracle DB, Spring MVC 아키텍처를 통해 구현되었습니다.

---

## 🎨 브랜드 아이덴티티 (Brand Identity)

- **브랜드명**: `SABA SCRIPT`
- **슬로건**: *新鮮なコードを、もっと美味しく。* (신선한 코드를, 더 맛있게)
- **톤 앤 매너**
  - Coral Red `#F25252`
  - Charcoal Black `#595959`
  - Soft White `#F2F0EB`
- **UI 특성**: Bootstrap 기반 디자인을 커스터마이징하여 감각적인 스트리밍 UI 구현
- **로고 디자인**: 헤더, 로그인, 회원가입 페이지에 브랜드 로고 삽입

---

## 🌟 주요 기능 (Key Features)

- 사용자 로그인/회원가입 (쿠키 저장, Remember Me 기능 포함)
- 메인 페이지 영상 슬라이드(Carousel)
- 영상 목록 및 상세 페이지
- 콘텐츠 재생 (HTML5 Video Player)
- 콘텐츠 찜(스크랩) 기능
- 찜한 콘텐츠 목록 페이지
- 댓글(리플) 등록 및 조회
- 반응형 웹 레이아웃 (해상도 1200px 기준 최적화)
- 관리자 영상 등록은 생략 → DB 직접 INSERT 방식

---

## 🛠️ 사용 기술 스택 (Tech Stack)

- **Frontend**
  - HTML5 / CSS3 / JavaScript (Vanilla JS)
  - SASS (SCSS) for style structuring
  - Bootstrap 커스터마이징

- **Backend**
  - Java (Spring Legacy Framework)
  - Spring MVC, Spring JDBC (or MyBatis)
  - Apache Tomcat

- **Database**
  - Oracle DB
  - JDBC 연동

- **개발 환경**
  - Eclipse IDE
  - Oracle SQL Developer

---

## 📁 프로젝트 구조 (Project Structure)


---

## 🧱 DB 테이블 구조 (Oracle SQL)

## 📋 개발 내역 (Development Summary)
## ✅ 완료된 작업
- 브랜드 아이덴티티 기획 및 적용

- 상단 고정 헤더 및 본문 겹침 이슈 해결

- 메인 Carousel 슬라이드 구현

- 사이드바 레이아웃 커스터마이징

- 콘텐츠 / 찜 / 댓글 DB 테이블 설계 및 구축

- 콘텐츠 상세페이지 구현 및 영상 재생

- 로그인 기능 개선 (쿠키 저장 및 Remember Me)

- 찜하기 기능 + 찜 콘텐츠 확인 페이지 구성

## 🛠️ 진행 중 / 예정 작업
- 썸네일 이미지 연결 및 상세페이지 세부 디자인

- 댓글(리뷰) 게시판 작성 기능 보완

- MyBatis 설정 및 전체 구조 리팩토링 (VO/DAO/Service/Controller)

- GitHub 저장소 정리 및 배포

- README 정리 및 프로젝트 문서화

## 💡 향후 개선 방향 (Future Plans)
- Spring Security 기반 인증 도입

- HLS 또는 DASH를 활용한 스트리밍 고도화

- 사용자 맞춤 추천 알고리즘 도입

- 관리자 페이지 및 CMS 기능 추가

- REST API + React로 구조 확장 고려

- 모바일 UX 개선 및 반응형 확장

## 👥 Contributors
승원: 로그인 기능, Remember Me, 찜한 콘텐츠 페이지, 레이아웃 개선

호준: 찜 기능(스크랩), 상세페이지 찜 버튼, 댓글 기능 설계

기획/브랜딩: 공동

## 📄 라이선스 (License)
이 프로젝트는 포트폴리오 및 교육용으로 제작되었으며, 상업적 사용은 금지됩니다.
별도 사용을 원하시면 제작자에게 문의 바랍니다.

yaml
