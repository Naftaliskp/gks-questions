import React, { useState } from 'react';
import './App.css';
import { questionsData } from './questionsData';
import Category from './components/Category';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isEssaysOpen, setIsEssaysOpen] = useState(false);
  const [isPersonalStatementOpen, setIsPersonalStatementOpen] = useState(false);
  const [isStudyPlanOpen, setIsStudyPlanOpen] = useState(false);

  // Personal Statement - English Version
  const personalStatementEnglish = `Talent and ambition need real interest to reach their full potential. For years, I followed a path built on ability, not choice. I entered elementary school at five due to advanced reading, writing, and mathematical skills, consistently ranked top and I trained extensively for math competitions. I was first chosen for the mathematics Olympiad team in senior high school. But after recognizing my strength in logical reasoning over memorization, my teachers reassigned me to the informatics Olympiad team. Though unexpected, this shift revealed where my strengths truly lay. In the city-level National Science Olympiad in Informatics, I won second as a first-year student and won first the next year. I also took part in a few national math and logic competitions. I learned from these experiences that the only thing you can control when you are given a direction is how fully you commit. Later, external constraints shaped my path again. Raised by a single mother, I gave up on going to medical school. I applied for Information Technology at Sepuluh Nopember Institute of Technology through Indonesia's national merit-based selection (SNMPTN), which was the most cost-effective way. Entering without a specific academic interest, I actively explored applied IT by attending webinars on topics like cybersecurity and engineering systems.

I also developed problem-solving and collaboration skills through organizational roles that complemented my academic exploration. As Head of the Public Relations for INI LHO ITS 2021 under BEM ITS, I coordinated outreach with high schools in Kudus, refining stakeholder management. In HMIT ITS, I facilitated student training programs and led several initiatives under PSDM (Student Resource Development Department). Leading the Health Division of OKKBK IT 2022, the official orientation program for new IT students, I managed budgets, coordinated team execution, and ensured comprehensive health support. As Chief Executive of BerkaIT, I designed program plans, set fundraising targets, and successfully delivered aid, establishing it as an annual initiative. I also balanced studies by joining a cinematography club and a music competition. Alongside this, I participated in technical competitions. For FindIT 2022 data analytics competition, I analyzed big data to develop a practical solution. In the IEC 2023 UI/UX Design Competition, I designed EcoHealZ app that connects health and environmental care through user focused design and prototyping. In the PKM-K 2024 Student Creativity Program, I proposed BlissBuddy, a personal shopping platform that bridges local and international services, which involved solution design and business innovation. Each experience taught me to approach challenges systematically and build effective solutions.

I found my academic direction when I took a web development class in my third semester that introduced me to building structured systems that turned logic into visible results. But I soon understood that IT required me into wider areas like cloud computing, cybersecurity, IoT, artificial intelligence, and smart city. This grew during my fourth semester in an Internet of Things class, where I learned how physical environments could be connected with automated decision processes. For the final project, my teammate and I built a Smart Parking Lot System to solve real-time parking in busy public spaces. The system connected ESP32 and ESP32-CAM microcontrollers, used the YOLO algorithm with OpenCV for AI-based vehicle detection. The system showed live parking availability on an LCD screen and through LED lights for drivers. Our project achieved the top grade and was chosen for ExploIT, a university exhibition that introduces high school students to applied IT. Through this, I saw how intelligent systems could improve efficiency in everyday situations. In fifth semester, I volunteered in an IoT training program for middle school teachers, explaining IoT devices and implementation using ESP32 microcontrollers and the ThingsSpeak platform. In this experience, I faced the challenge of explaining complex systems in simple terms, which made me aware that technological solutions must be accessible and human-centered.

That same semester, I became a Data Modelling class Lecturer Assistant. I assisted group projects with discussion and graded assignments which strengthened my conceptual understanding and sharpened my ability to explain technical material effectively. I was also accepted into MBKM independent study program at Skilvul's Front End Development track and took the National University of Singapore Product Innovation Challenge. The program focused on real world problems and our challenge was to develop a web-based solution addressing the COVID-19 pandemic. As our solution, we built a web platform that connected affected communities with local support providers. Our project was recognized as one of the Top 9 teams at Demo Day. This experience shifted my focus from building technology for its own sake toward solving real human problems. The next semester, I completed an MBKM certified internship at Metrodata as a low code web developer using OutSystems platform to build enterprise applications. Because the platform relies on low-code rather than full manual programming, I observed how technological choices affect development speed and efficiency. In parallel, I was exploring other fields such as cloud computing, but I realized that I grew increasingly interested in systems that continuously learn and respond to users.

Entering final year, I had to decide on a focused thesis topic. I was still interested in IoT, but the hardware costs made independent research difficult. My prior IoT project introduced me to Artificial Intelligence through computer vision, so I started to explore machine learning and natural language processing more deeply and saw that AI could solve problems in a much wider way. The motivation came during a visit to my sister's home. Her husband managed a residential community and was constantly flooded with the same questions from residents. The situation revealed how organizations still rely heavily on manual communication processes that are inefficient and difficult to scale. This concern motivated me to develop an AI solution that could automatically manage conversations. Then I proposed developing an AI based customer service chatbot using Natural Language Processing and deep learning models and my supervisor approved it. Over the next semester, I trained language models to classify question data, recognize user intent, and generate appropriate responses. NLP works by combining various computational techniques to analyze, understand and generate human language in a way that machines can process. This makes it possible to build conversational systems that automate interaction and respond in meaningful ways. At the same time, I learned that the main challenge of conversational AI is achieving reliable contextual understanding so systems can interpret user intention accurately. This experience clarified my academic direction toward Natural Language Processing for conversational AI and the development of reliable human-centered language systems. I earned my degree with Cum Laude honors and a clearer sense of direction.

After graduation, my long-term goal was to become an AI engineer. But in Indonesia, the field is still growing, and most roles require experiences beyond the reach of fresh graduates. In late 2024, entry level machine learning roles were under 15% of postings. I changed my plan and used my experience with OutSystems to enter the industry. I got opportunity to join an OutSystems bootcamp, hoping to continue as an application developer. When I finished, developer openings were limited, so I was offered a role in performance testing instead. Given my financial needs, I accepted as a Junior Performance Engineer on a major banking system and responsible for running stress and load tests with LoadRunner, while also monitoring system stability. This hands-on work taught me what makes applications scalable and how to identify performance bottlenecks. Yet I realized performance testing had me more of an executor than someone designing intelligent solutions. To gain deeper involvement in the development lifecycle, I moved into Software Quality Assurance. In QA, I participated from the start of agile sprints. I tested features from a user perspective and collaborated with developers to improve implementation. I also built automation tests with Playwright, translating system requirements into logical steps and the entire flow of user interactions. The test results, logs, and performance data were often complex and varied by environment. This strengthened my skill in spotting patterns, interpreting irregularities, and assessing real system behavior. This period clarified that while industry experience taught me how software is built, my real drive is designing intelligent systems rather than testing finished ones.

This realization strengthened my decision to pursue advanced study in Natural Language Processing and deep learning research. Then I took professional AI courses. I began with the University of California Irvine's Data Science Fundamentals program, which taught me from problem definition and data preparation to evaluation. Then I learned about how architectural and training choices influence learning and generalization through the IBM Deep Learning Professional Certificate, where I developed and trained neural networks with PyTorch and TensorFlow. Then I got Natural Language Processing specialization from DeepLearning.AI, implementing models for sentiment analysis and question answering that connected to my undergraduate thesis. I completed the Microsoft AI and Machine Learning Engineering Professional Certificate, which introduced end to end AI workflows and MLOps practices. I also earned IBM AI Developer Professional Certificate which helped me get better at integrating AI models into web applications using Python and Flask.

Through these academic and professional experiences, I realized the challenge extends beyond building better systems to a bigger structural problem. Many organizations still depend on direct human interaction to deliver information and communication services which limits efficiency and scalability. Repetitive inquiries must be handled manually and responses often vary between individuals. Although human-centered language AI could automate communication and improve service delivery, existing systems frequently struggle to provide accurate information and often misinterpret user intent due to limitations in contextual understanding and language processing.

These limitations reflect deeper structural challenges in developing reliable human-centered language systems. Building conversational models requires advanced Natural Language Processing research infrastructure and large-scale language datasets. In Indonesia, AI education and development still focus on applying pre-trained models rather than designing core models for contextual understanding. This limits innovation in areas such as semantic modeling, multilingual processing, and intent recognition. Limited access to computational resources and research environments further slows experimentation. The e-Conomy SEA 2023 report also highlights Southeast Asia's shortage of advanced AI talent and research capacity. As a result, organizations rely on manual communication systems because developing reliable human-centered language systems is difficult to develop locally.

South Korea offers a different picture that provides a highly advanced environment for Natural Language Processing and conversational AI research. Strong national investment in AI, advanced infrastructure, and close academia-industry collaboration have made it a leader in conversational AI and NLP research. This is demonstrated by hosting major international research forums such as the IEEE International Conference 2024 on Acoustics, Speech, and Signal Processing and the AI Seoul Summit. Technology companies such as Samsung Electronics have developed intelligent language systems like Bixby, showing practical implementation of human-centered AI in real-world services. In addition, leading universities host specialized laboratories in natural language processing, speech processing, and conversational AI with strong academic supervision and access to advanced infrastructure. My decision to study in South Korea is also based on personal preparation. A gate to Korean language and culture started in elementary school through popular media and grew into Korean language study over time. This enables me to read Korean news, follow local tech discussions, and engage directly in coursework, laboratory communication, and research. In AI research, where local data is important, this language skill is a practical research tool.

While South Korea offers the academic and research environment required for my development, accessing it requires institutional support. Coming from a single-parent household, I have progressed by earning merit-based opportunities rather than financial means. Overseas study is beyond what I can manage independently and pursuing it without stable support would compromise my focus. In this context the Global Korea Scholarship is more than financial aid but a mechanism that will allow my genuine academic interest to become meaningful contribution. GKS-G directly aligns with my path, as it is designed to build researchers who can absorb advanced knowledge and later strengthen research capacity in their home countries.

Through a Master's degree in South Korea, I intend to build the theoretical foundation and research discipline in reliable human-centered language technologies. I aim to pursue an AI program at Korea University, Kyung Hee University, or Kyungpook National University, where specialized laboratories focus on natural language processing, speech technology, and multimodal language understanding. These programs provide the advanced research environment necessary to address limitations in contextual understanding. My main focus will be deep engagement in laboratory research in natural language processing, which I aim to explore how AI models interpret meaning and intent across data types. I plan to strengthen my research through experimentation and participation in Korea's academic and industry ecosystem, such as AI Expo Korea and the K-Startup and Tech Conference. I am committed to developing research that meets the standard for publication in top field conferences, such as EMNLP (Empirical Methods in Natural Language Processing) or conferences organized by the Association for Computational Linguistics (ACL) and the IEEE.

My path has moved from ability shaped by circumstance toward clear purpose. Early academic achievement, exploration across information technology, professional experience, and especially my undergraduate thesis gradually led me to focus on advancing reliable human-centered language systems. I seek to address the limitations in contextual understanding that continue to make conversational AI inefficient and keep organizations dependent on manual interaction. But Indonesia's research environment has structural limits that make developing such technologies difficult. The research ecosystem in South Korea offers the academic depth and infrastructure necessary to pursue this work at a higher level. Through graduate study, I aim to deepen my research capability and contribute to the development of intelligent systems that strengthen technological and research capacity in Indonesia.

Date (yyyy-mm-dd)               Applicant's Full Name                            Signature`;

  // Personal Statement - Korean Version
  const personalStatementKorean = `재능과 야망은 진정한 관심이 있어야 그 잠재력을 최대한 발휘할 수 있습니다. 수년 동안 저는 선택이 아닌 능력에 기반한 길을 따라왔습니다. 뛰어난 읽기, 쓰기, 수학 능력으로 인해 다섯 살에 초등학교에 입학했고, 항상 최상위권을 유지하며 수학 경시대회를 위해 집중적으로 훈련받았습니다. 고등학교 1학년 때 처음으로 수학 올림피아드 팀에 선발되었습니다. 그러나 암기보다 논리적 추론에 강점이 있다는 것을 깨닫고, 선생님들께서 저를 정보 올림피아드 팀으로 재배정하셨습니다. 예상치 못한 변화였지만, 이 경험은 제 진정한 강점이 어디에 있는지 보여주었습니다. 시 수준의 국가과학올림피아드 정보학 부문에서 1학년 때 2등, 이듬해에는 1등을 차지했습니다. 또한 몇몇 전국 수학 및 논리 경시대회에도 참가했습니다. 이러한 경험을 통해 방향이 주어졌을 때 통제할 수 있는 유일한 것은 그 방향에 얼마나 온전히 헌신하느냐는 것을 배웠습니다. 이후 외부적 제약이 다시 제 진로를 형성했습니다. 한부모 슬하에서 자란 저는 의과대학 진학을 포기해야 했습니다. 가장 비용 효율적인 방법이었던 인도네시아 국가 성적 기반 선발(SNMPTN)을 통해 인도네시아 공과대학(ITS) 정보기술학과에 지원했습니다. 특별한 학문적 관심 없이 입학했지만, 사이버보안, 엔지니어링 시스템과 같은 주제의 웨비나에 참석하며 응용 IT 분야를 적극적으로 탐구했습니다.

또한 학문적 탐구를 보완하는 조직 활동을 통해 문제 해결 능력과 협업 능력을 키웠습니다. BEM ITS 산하 INI LHO ITS 2021의 홍보 책임자로서 쿠두스 지역 고등학교와의 교류 활동을 조정하며 이해관계자 관리 능력을 다듬었습니다. HMIT ITS에서는 학생 교육 프로그램을 진행하고 PSDM(학생역량개발부) 산하 여러 이니셔티브를 이끌었습니다. 신입 IT 학생들을 위한 공식 오리엔테이션 프로그램인 OKKBK IT 2022의 건강 분과장으로서 예산을 관리하고, 팀 실행을 조정하며, 포괄적인 건강 지원을 보장했습니다. BerkaIT의 총책임자로서 프로그램 계획을 설계하고, 기금 마련 목표를 설정했으며, 성공적으로 지원 물품을 전달하여 이 행사를 연례 행사로 자리잡게 했습니다. 또한 영화 동아리와 음악 경연 대회에 참여하며 학업과의 균형을 맞추었습니다. 이와 동시에 기술 경진대회에도 참가했습니다. FindIT 2022 데이터 분석 경진대회에서는 빅데이터를 분석하여 실용적인 솔루션을 개발했습니다. IEC 2023 UI/UX 디자인 경진대회에서는 사용자 중심 디자인과 프로토타이핑을 통해 건강 관리와 환경 보호를 연결하는 EcoHealZ 앱을 디자인했습니다. PKM-K 2024 학생 창의 프로그램에서는 국내외 서비스를 연결하는 개인 쇼핑 플랫폼인 BlissBuddy를 제안하며 솔루션 설계와 비즈니스 혁신을 경험했습니다. 각 경험은 제게 과제를 체계적으로 접근하고 효과적인 솔루션을 구축하는 방법을 가르쳐 주었습니다.

3학년 때 웹 개발 수업을 들으면서 논리를 가시적인 결과로 전환하는 체계적인 시스템을 구축하는 것에 처음 관심을 가지게 되었고, 이를 통해 학문적 방향을 찾게 되었습니다. 그러나 곧 IT 분야가 클라우드 컴퓨팅, 사이버보안, 사물인터넷(IoT), 인공지능, 스마트시티 등 더 넓은 영역을 포함한다는 것을 깨달았습니다. 이러한 관심은 4학년 IoT 수업에서 더욱 커졌습니다. 물리적 환경이 자동화된 의사 결정 과정과 어떻게 연결될 수 있는지 배웠습니다. 기말 프로젝트로 팀원과 함께 혼잡한 공공장소의 실시간 주차 문제를 해결하기 위한 스마트 주차 시스템을 구축했습니다. 이 시스템은 ESP32 및 ESP32-CAM 마이크로컨트롤러를 연결하고, AI 기반 차량 감지를 위해 OpenCV와 함께 YOLO 알고리즘을 사용했습니다. 시스템은 LCD 화면과 LED 조명을 통해 실시간 주차 가능 여부를 운전자에게 표시했습니다. 우리 프로젝트는 학급에서 최고 성적을 받았고, 고등학생들에게 응용 IT를 소개하는 대학 전시회인 ExploIT에 선정되었습니다. 이를 통해 지능형 시스템이 일상 상황에서 효율성을 어떻게 향상시킬 수 있는지 목격했습니다. 5학년 때는 중학교 교사를 대상으로 한 IoT 교육 프로그램에서 자원봉사자로 활동하며 ESP32 마이크로컨트롤러와 ThingsSpeak 플랫폼을 사용한 IoT 기기 및 구현에 대해 설명했습니다. 이 경험에서 복잡한 시스템을 간단한 용어로 설명해야 하는 어려움에 직면했고, 기술 솔루션은 접근 가능하고 인간 중심적이어야 한다는 점을 깨닫게 되었습니다.

같은 학기에 저는 데이터 모델링 수업의 조교로 활동했습니다. 그룹 프로젝트를 지도하고 과제를 평가하며 개념적 이해를 강화하고 기술 자료를 효과적으로 설명하는 능력을 더욱 발전시켰습니다. 또한 MBKM 독립 학습 프로그램의 Skilvul 프론트엔드 개발 트랙에 선발되어 싱가포르 국립 대학교의 제품 혁신 챌린지에 참가했습니다. 이 프로그램은 실제 문제에 초점을 맞추었고, 우리의 과제는 COVID-19 팬데믹에 대응하는 웹 기반 솔루션을 개발하는 것이었습니다. 우리는 피해를 입은 지역사회와 지역 지원 기관을 연결하는 웹 플랫폼을 구축했습니다. 우리 프로젝트는 데모 데이에서 Top 9 팀 중 하나로 선정되었습니다. 이 경험은 기술 자체를 위한 개발에서 실제 인간의 문제를 해결하는 쪽으로 제 초점을 전환시켰습니다. 다음 학기에는 메트로데이터에서 MBKM 공인 인턴십을 이수하며 OutSystems 플랫폼을 사용한 로우코드 웹 개발자로 기업 애플리케이션을 구축했습니다. 플랫폼이 완전한 수동 프로그래밍보다 로우코드에 의존하기 때문에, 기술 선택이 개발 속도와 효율성에 어떤 영향을 미치는지 관찰할 수 있었습니다. 이와 동시에 클라우드 컴퓨팅과 같은 다른 분야도 탐구했지만, 지속적으로 학습하고 사용자에게 반응하는 시스템에 대한 관심이 점점 커지고 있음을 깨달았습니다.

졸업반에 접어들면서 집중적인 논문 주제를 결정해야 했습니다. 여전히 IoT에 관심이 있었지만, 하드웨어 비용으로 인해 독립적인 연구가 어려웠습니다. 이전 IoT 프로젝트를 통해 컴퓨터 비전을 통해 인공지능을 접하게 되었고, 머신러닝과 자연어 처리에 대해 더 깊이 탐구하기 시작하면서 AI가 훨씬 더 광범위한 방식으로 문제를 해결할 수 있다는 것을 알게 되었습니다. 동기가 된 것은 언니 집을 방문했을 때였습니다. 언니의 남편이 주거 커뮤니티를 관리하고 있었는데, 주민들로부터 같은 질문이 끊임없이 쏟아진다고 했습니다. 이 상황은 조직들이 여전히 비효율적이고 확장하기 어려운 수동 커뮤니케이션 프로세스에 크게 의존하고 있음을 보여주었습니다. 이 문제는 대화를 자동으로 관리할 수 있는 AI 솔루션을 개발하려는 동기가 되었습니다. 그 후 자연어 처리와 딥러닝 모델을 사용한 AI 기반 고객 서비스 챗봇 개발을 제안했고 지도교수님의 승인을 받았습니다. 다음 학기 동안 저는 질문 데이터를 분류하고, 사용자 의도를 인식하며, 적절한 응답을 생성하도록 언어 모델을 훈련시켰습니다. NLP는 기계가 처리할 수 있는 방식으로 인간의 언어를 분석, 이해 및 생성하기 위해 다양한 계산 기술을 결합하여 작동합니다. 이를 통해 상호 작용을 자동화하고 의미 있는 방식으로 응답하는 대화형 시스템을 구축할 수 있습니다. 동시에 대화형 AI의 주요 과제는 시스템이 사용자의 의도를 정확하게 해석할 수 있도록 안정적인 맥락 이해를 달성하는 것임을 배웠습니다. 이 경험을 통해 제 학문적 방향은 대화형 AI를 위한 자연어 처리와 신뢰할 수 있는 인간 중심 언어 시스템의 개발로 명확해졌습니다. 저는 우등 졸업(Cum Laude)과 함께 더욱 분명해진 진로 방향을 가지고 학위를 마쳤습니다.

졸업 후 제 장기 목표는 AI 엔지니어가 되는 것이었습니다. 그러나 인도네시아에서는 이 분야가 아직 성장 중이며, 대부분의 직무는 신입 졸업생이 도달하기 어려운 경험을 요구합니다. 2024년 말 기준, 엔트리 레벨 머신러닝 채용 공고는 전체의 15% 미만이었습니다. 저는 계획을 변경하고 OutSystems 경험을 활용하여 업계에 진출하기로 했습니다. OutSystems 부트캠프에 참여할 기회를 얻었고, 애플리케이션 개발자로 계속 일하기를 희망했습니다. 과정을 마쳤을 때 개발자 채용은 제한적이어서 대신 성능 테스트 직무를 제안받았습니다. 재정적 필요를 고려하여 주니어 성능 엔지니어로 승낙했고, 주요 은행 시스템에서 LoadRunner를 사용한 부하 및 스트레스 테스트를 실행하고 시스템 안정성을 모니터링하는 책임을 맡았습니다. 이 실무 경험을 통해 애플리케이션의 확장성을 결정하는 요소와 성능 병목 현상을 식별하는 방법을 배웠습니다. 그러나 성능 테스트는 지능형 솔루션을 설계하는 사람보다는 실행자로서의 역할에 더 가깝다는 것을 깨달았습니다. 개발 수명 주기에 더 깊이 관여하기 위해 소프트웨어 품질 보증(QA)으로 자리를 옮겼습니다. QA에서는 애자일 스프린트 시작부터 참여했습니다. 사용자 관점에서 기능을 테스트하고 개발자와 협력하여 구현을 개선했습니다. 또한 Playwright로 자동화 테스트를 구축하여 시스템 요구사항을 논리적 단계와 사용자 상호 작용의 전체 흐름으로 전환했습니다. 테스트 결과, 로그 및 성능 데이터는 종종 복잡했고 환경에 따라 달랐습니다. 이는 패턴을 발견하고, 불규칙성을 해석하며, 실제 시스템 동작을 평가하는 능력을 강화했습니다. 이 기간을 통해 산업 경험이 소프트웨어가 어떻게 구축되는지 가르쳐 주었지만, 제 진정한 동기는 완성된 제품을 테스트하는 것보다 지능형 시스템을 설계하는 데 있음이 분명해졌습니다.

이 깨달음은 자연어 처리 및 딥러닝 연구에 대한 고급 학위를 추구하려는 결심을 더욱 굳건히 했습니다. 그 후 전문 AI 과정을 수강하기 시작했습니다. 캘리포니아 대학교 어바인 분교의 데이터 사이언스 기초 프로그램을 시작으로 문제 정의, 데이터 준비부터 평가까지 배웠습니다. 그런 다음 IBM 딥러닝 전문 자격증을 통해 아키텍처 및 훈련 선택이 학습과 일반화에 미치는 영향에 대해 배우고 PyTorch와 TensorFlow로 신경망을 개발하고 훈련시켰습니다. 다음으로 DeepLearning.AI의 자연어 처리 전문 과정을 수강하여 감정 분석 및 질의응답을 위한 모델을 구현했고, 이는 학부 논문 주제와 연결되었습니다. 또한 Microsoft AI 및 머신러닝 엔지니어링 전문 자격증을 이수하여 종단 간 AI 워크플로우와 MLOps 관행을 접했습니다. IBM AI 개발자 전문 자격증도 취득하여 Python과 Flask를 사용해 AI 모델을 웹 애플리케이션에 통합하는 능력을 향상시켰습니다.

이러한 학문적, 직업적 경험을 통해 더 나은 시스템을 구축하는 것 이상의 더 큰 구조적 문제가 있다는 것을 깨달았습니다. 많은 조직들이 정보 및 커뮤니케이션 서비스를 제공하기 위해 여전히 직접적인 인간 상호 작용에 의존하고 있어 효율성과 확장성이 제한됩니다. 반복적인 문의 사항을 수동으로 처리해야 하며, 응답은 개인마다 달라질 수 있습니다. 인간 중심 언어 AI가 커뮤니케이션을 자동화하고 서비스 제공을 개선할 수 있음에도 불구하고, 기존 시스템은 맥락 이해 및 언어 처리의 한계로 인해 정확한 정보를 제공하는 데 어려움을 겪거나 사용자 의도를 잘못 해석하는 경우가 많습니다.

이러한 한계는 신뢰할 수 있는 인간 중심 언어 시스템을 개발하는 데 있어 더 깊은 구조적 문제를 반영합니다. 대화형 모델을 구축하려면 고급 자연어 처리 연구 인프라와 대규모 언어 데이터 세트가 필요합니다. 인도네시아의 AI 교육과 개발은 여전히 맥락 이해를 위한 핵심 모델을 설계하기보다는 사전 훈련된 모델을 적용하는 데 초점을 맞추고 있습니다. 이는 의미 모델링, 다국어 처리, 의도 인식과 같은 분야의 혁신을 제한합니다. 컴퓨팅 자원과 연구 환경에 대한 제한된 접근은 실험을 더욱 지연시킵니다. e-Conomy SEA 2023 보고서는 동남아시아의 고급 AI 인재 및 연구 역량 부족을 강조합니다. 결과적으로, 조직들은 신뢰할 수 있는 인간 중심 언어 시스템을 현지에서 개발하기 어렵기 때문에 수동 커뮤니케이션 시스템에 의존하고 있습니다.

한국은 이와 다른 그림을 보여주며, 자연어 처리 및 대화형 AI 연구를 위한 매우 진보된 환경을 제공합니다. 국가의 강력한 AI 투자, 첨단 인프라, 긴밀한 산학 협력은 한국을 대화형 AI 및 NLP 연구의 선두 주자로 만들었습니다. 이는 2024년 IEEE 음향, 음성, 신호 처리 국제 회의(ICASSP)와 AI 서울 정상회의와 같은 주요 국제 연구 포럼을 개최하는 데서 입증됩니다. 삼성전자와 같은 기술 기업은 빅스비와 같은 지능형 언어 시스템을 개발하여 실제 서비스에서 인간 중심 AI의 실제 구현을 보여주고 있습니다. 또한, 주요 대학들은 자연어 처리, 음성 처리, 대화형 AI 분야의 전문 연구실을 갖추고 있으며, 강력한 교수진의 지도와 첨단 인프라에 대한 접근성을 제공합니다. 한국에서의 학업 결정은 개인적인 준비에도 기반합니다. 초등학교 때 대중 매체를 통해 한국어와 문화에 처음 접하게 되었고, 이는 시간이 지나면서 한국어 학습으로 발전했습니다. 이를 통해 한국 뉴스를 읽고, 현지 기술 관련 토론을 따라가며, 수업, 연구실 커뮤니케이션 및 연구에 직접 참여할 수 있습니다. 현지 데이터가 중요한 AI 연구에서 이러한 언어 능력은 실용적인 연구 도구입니다.

한국이 제 발전에 필요한 학문적, 연구적 환경을 제공하지만, 이를 이용하려면 제도적 지원이 필요합니다. 한부모 가정에서 자란 저는 재정적 수단보다는 실적 기반의 기회를 통해 성장해 왔습니다. 해외 유학은 제가 독립적으로 감당할 수 있는 범위를 벗어나며, 안정적인 지원 없이 이를 추구하면 학업 집중력이 저하될 수 있습니다. 이러한 맥락에서 글로벌 코리아 장학금(GKS)은 단순한 재정적 지원을 넘어, 진정한 학문적 관심을 의미 있는 기여로 전환할 수 있게 해주는 메커니즘입니다. GKS-G는 선진 지식을 흡수하고 이후 모국의 연구 역량을 강화할 수 있는 연구자를 양성하기 위해 설계되었다는 점에서 제 진로와 직접적으로 일치합니다.

한국에서 석사 학위를 통해 저는 신뢰할 수 있는 인간 중심 언어 기술에 대한 이론적 기초와 연구 훈련을 쌓고자 합니다. 자연어 처리, 음성 기술, 다중 모드 언어 이해에 중점을 둔 전문 연구실을 보유한 고려대학교, 경희대학교 또는 경북대학교에서 AI 프로그램을 이수하는 것을 목표로 합니다. 이러한 프로그램은 맥락 이해의 한계를 해결하는 데 필요한 첨단 연구 환경을 제공합니다. 제 주요 초점은 자연어 처리 연구실 연구에 깊이 관여하여 AI 모델이 데이터 유형 전반에 걸쳐 의미와 의도를 어떻게 해석하는지 탐구하는 것입니다. AI Expo Korea 및 K-스타트업 및 기술 컨퍼런스와 같은 한국의 학계 및 산업 생태계에 참여하여 실험하고 연구를 강화할 계획입니다. EMNLP(Empirical Methods in Natural Language Processing) 또는 ACL(Association for Computational Linguistics) 및 IEEE에서 주관하는 학회와 같은 최고 학회에 논문을 게재할 수 있는 수준의 연구를 개발하는 데 전념할 것입니다.

제 진로는 상황에 의해 형성된 능력에서 명확한 목표를 가진 방향으로 옮겨갔습니다. 초기 학업 성취, 정보 기술 전반에 걸친 탐구, 직업 경험, 특히 학부 논문은 점차적으로 제가 신뢰할 수 있는 인간 중심 언어 시스템을 발전시키는 데 집중하도록 이끌었습니다. 저는 대화형 AI를 비효율적으로 만들고 조직이 수동적 상호 작용에 의존하도록 만드는 맥락 이해의 한계를 해결하고자 합니다. 그러나 인도네시아의 연구 환경에는 이러한 기술을 개발하기 어렵게 만드는 구조적 한계가 있습니다. 한국의 연구 생태계는 더 높은 수준에서 이 연구를 수행하는 데 필요한 학문적 깊이와 인프라를 제공합니다. 대학원 학위를 통해 연구 능력을 심화하고, 인도네시아의 기술 및 연구 역량을 강화하는 지능형 시스템 개발에 기여하고자 합니다.

날짜 (yyyy-mm-dd)               지원자 성명                            서명`;

  // Study Plan - English Version
  const studyPlanEnglish = `Current Language Proficiency

I hold a TOEIC certificate with a total score of 885 (480 in Listening and 405 in Reading). My exposure to English began naturally since I was a kid, as I mostly watched English language cartoons and listened to children's songs. This continued when I entered formal schooling and I consistently earned high scores English subject. In my undergraduate program I attended several English taught classes and also regularly read international articles and journals during the process of completing my undergraduate thesis.

I hold TOPIK II Level 4 with a total score of 163 (70 in Listening, 68 in Reading, and 25 in Writing). My exposure to Korean also began naturally since I was in elementary school through media and song. Although I didn't take any formal Korean language courses, my skills developed naturally and I was able to read Hangeul by the age of ten. In my daily life, I mostly interacted with the Korean language by watching Korean dramas, movies, variety shows, and listening to K-pop songs during my free time. Currently, I am able to watch Korean media with Hangeul subtitles, read Korean articles and news, and understand Korean songs such as K-pop songs and K-drama OSTs. As a result, I have strong listening and reading skills for daily conversations and entertainment contexts. My formal learning took place for half a year before I took the 102nd PBT TOPIK II exam. I studied Korean grammar in a structured way based on the conditions and vocabulary common in daily topics and formal contexts. I focused on exam preparation using a TOPIK II Passing Recipe book and spent around 2 hours per day after work doing mock tests and studying from the book.

Before coming to Korea, I plan to focus on practical conversations that I will use right after arrival, such as immigration procedures, dormitory regulations, university admission, courses registration, purchasing daily amenities, and managing daily needs. I will practice speaking these conversations while continuing to read Hangeul subtitles in Korean media to better understand word forms and correct spelling through real conversations.

Goal of Language Proficiency and Detailed Study Plan after I Come to Korea

Condition: From my 102nd PBT TOPIK II exam result, I achieved Level 4 with a cumulative score of 163 (70 in Listening, 68 in Reading, and 25 in Writing), so my main focus is improving my writing skills. My Hangeul spelling skills are still weak. I know the words, their meanings, and how to say them when I hear or read them, but I struggle to write the spellings correctly.

Goal of Language Proficiency:
-For the 110th PBT TOPIK II Exam, my target is to achieve Level 5 with a minimum cumulative score of 200, with a specific score of >75 in Listening, >75 in Reading, and >50 in Writing.
-After taking the 110th PBT TOPIK II Exam, during the months before my master's degree begins, I will focus on vocabulary related to my major, so I can become familiar with the specific terminology used in my coursework. Although my focus will no longer be primarily on TOPIK preparation, I plan to take the 113th TOPIK exam with the goal of increasing my Listening and Reading scores by at least 5 points each and achieving a minimum score of 70 in the Writing section.

Fall Semester 2026
Goal:
-Become familiar with 35 words per week so I can use them naturally.
-Take the 110th PBT TOPIK II Exam with a target of achieving Level 5 with a minimum cumulative score of 200, with a specific score of >75 in Listening, >75 in Reading, and >50 in Writing

Study Plan:
-Focus on vocabulary used in daily life.
-Start adapting daily activities in Korea to practice speaking skills, such as grocery shopping, buying medicine, using public transportation, logistics shopping, trying online shopping, paying insurance, learning locations and how to get there, college regulations, public service regulations.
-Do intensive 3-hour daily TOPIK practice outside class using books, YouTube, and online mock tests.
-Read news every day from Naver News and KBS News. If there is a Korean word that I don't know the meaning, I will not translate it into Indonesian or English, but I will look up the definition in Korean, and if the explanation contains unfamiliar words, I will continue searching for their definitions repeatedly until I understand the meaning and write down the correct spelling.
-Read books from the library every weekend for 3 hours. Starting with children's storybooks and gradually moving to novels.
-Visit one Korean cultural or historical place per week and learn one fact or piece of knowledge then practice explaining it in Korean to Korean friends.
-Do journaling before sleep in a news-style tone using previously learned vocabulary, because the best way to learn a language is to use it and become familiar with the words.
-Listen to podcasts and news while I am on my way.
-Do some group hobbies, such as mountain trekking, K-pop events, and joining a K-Pop dance class.
-Take exercise classes provided by the college environment.
-Participate in international cultural festivals at the college.

Spring Semester 2027
Goal:
-Become familiar with 20 technical words per week.
-Take 113th PBT TOPIK II Exam with a target of increasing by 5 points in Listening and Reading scores by at least 5 points and achieving a minimum score of 70 in Writing.
-Be 80% able to speak and discuss in Korean with technical people.
-Be 70% able to write a practice research paper in Korean.

Study Plan:
-Focus on technical vocabulary and research report format used in the Artificial Intelligence major.
-Read one AI research journal and paper in Korean per day and three English papers or journals per week.
-Do journaling before sleep in a research paper tone using previously learned vocabulary to practice writing a research paper in Korean and international formats.
-Continue doing some group hobbies, such as mountain trekking, K-pop events, and joining a K-Pop dance class.
-Continue reading books from the library every weekend for 3 hours.
-Continue visiting Korean cultural or historical place per week and learn one fact or piece of knowledge then practice explaining it in Korean to Korean friends.
-Participate in social events, such as volunteering to teach English to preschool kids, because I love kids and it helps develop clear and effective explanation skills.
-Attend open talks and technology expos to practice discussion and brainstorming skills, and to build direct connections with technical people.
-Participate in international cultural festivals at the college.

Goal of Degree Study and Detailed Study Plan
Goal of Degree Study:
-Achieve a top 30% grade in each class.
-Conduct research focused on Natural Language Processing and deep learning for human-centered language systems solutions.
-Publish international research papers at venues such as EMNLP (Empirical Methods in Natural Language Processing) or conferences organized by the Association for Computational Linguistics (ACL) and IEEE.
-Participate in Korea's academic and industry ecosystem, including major forums such as AI Expo Korea and K-Startup and Tech Conference.
-Participate in volunteer activities at Artificial Intelligence events.
-Undertake a laboratory internship in human-centered language systems field.

Study Routine:
-Conduct intensive independent study for 4 hours per day.
-Analyze at least one peer-reviewed conversational AI research paper per week with emphasis on problem formulation, methodology, and experimental design.
-Conduct a structured brainstorming session after each paper review to identify weaknesses, unanswered questions, and potential extensions of the research.

Fall Semester 2027 (Year 1, Semester 1)
Goal:
Build strong theoretical foundations in artificial intelligence, deep learning, and natural language processing to support research on human-centered conversational AI and contextual understanding.

Study Plan:
-Take core coursework in Advanced Machine Learning, Probability and Statistics, Linear Algebra and Optimization, Advanced Deep Learning, Advanced Big Data Processing, and Advanced Natural Language Processing to strengthen the knowledge I previously developed during my undergraduate Information Technology studies and my thesis on a deep learning-based customer service chatbot, where I used NLP models for conversation management and contextual understanding. This coursework will also provide mathematical and computational foundations for modeling language semantics and context representation.
-Learn how to write AI conference papers and engineering research papers.
-Join an artificial intelligence research laboratory and begin research orientation under faculty supervision to study semantic representation learning and sequence modeling methods necessary for improving contextual understanding in conversational systems.
-Define a clear and focused research direction in human-centered language systems.
-Enroll in a seminar or methodology-based course focused on artificial intelligence research.
-Participate in laboratory discussions to receive feedback and insights on paper topics.

Other:
-Participate in international cultural festivals at the college.
-Join the music club as a drummer.
-Join the International Student or Global Leadership Forum to discuss global events through political, economic, and technological lenses.

Spring Semester 2028 (Year 1, Semester 2)
Goal:
Develop specialization in NLP and speech processing for conversational AI systems and begin implementing baseline models for contextual understanding.

Study Plan:
-Take core coursework in Speech Processing and Automatic Speech Recognition, Information Theory for Machine Learning, Generative Models and Large Language Models, Explainable and Trustworthy Artificial Intelligence, and AI Research Project to understand language representation, semantic modeling, and model reliability in human-centered AI.
-Continue active participation in an artificial intelligence research laboratory as a contributing graduate researcher.
-Implement and evaluate baseline and advanced conversational AI models aligned with the laboratory's research vision in human-centered language systems.
-Evaluate model performance and identify limitations in contextual interpretation and response accuracy.
-Develop a structured research draft following ACL or IEEE conference standards.
-Participate in academic workshops or seminars related to artificial intelligence and data science.
-Participate in Korea's academic and industry ecosystem, including major forums such as AI Expo Korea and the K-Startup and Tech Conference.
-Present research progress and paper analyses in regular laboratory meetings to receive feedback and direction.

Other:
-Participate in international cultural festivals at the college.
-Remain active in International Student or Global Leadership Forum to discuss global events through political, economic, and technological lenses.
-Participate in childcare volunteering to teach English during the summer break.

Fall Semester 2028 (Year 2, Semester 3)
Goal:
Conduct advanced NLP and deep learning methods research execution, develop improved conversational AI models that address contextual understanding limitations, and conduct publication-oriented work in human-centered language systems.

Study Plan:
-Take core coursework in Multimodal Learning Systems, Advanced Topics in Natural Language Processing, Advanced Speech and Audio Intelligence, Optimization for Deep Learning Systems, and Graduate Research Thesis I to support advanced context modeling and language understanding.
-Implement improved conversational AI models focusing on semantic context representation, intent interpretation, and response consistency.
-Prepare and submit an international conference paper at venues such as EMNLP, ACL, or IEEE.
-Begin a laboratory-based research internship in human-centered language systems.
-Participate in academic workshops or seminars related to artificial intelligence and data science.
-Volunteer as staff at Artificial Intelligence events.
-Present research draft regularly in laboratory meetings to receive technical feedback.

Other:
-Continue active involvement in International Student or Global Leadership Forum to maintain awareness of global technological and policy developments.

Spring Semester 2029 (Year 2, Semester 4)
Goal:
Complete and disseminate research on human-centered conversational AI and contextual understanding.

Study Plan:
-Complete thesis writing by incorporating feedback from my advisor and laboratory members, and successfully defend a Master's thesis focused on improving contextual understanding in conversational AI using NLP and deep learning methods.
-Revise and resubmit research outputs based on reviewer feedback for acceptance at an international conference or journal affiliated with ACL or IEEE.
-Continue a laboratory-based research internship in human-centered language systems.
-Participate in Korea's academic and industry ecosystem, including major forums such as AI Expo Korea and the K-Startup and Tech Conference.
-Engage in regular advisor and laboratory meetings to finalize research direction, publication strategy, and post-graduation planning.

Future Plan after Study
After graduating, I plan to take an internship as an AI Developer at a Korean R&D company that develops projects in human-centered language systems and has an Indonesian branch, such as Samsung Electronics which develops Bixby (an intelligent personal assistant), LG Electronics which develops LG AI Research, or Kakao which provides AI Services. I aim to continue my career for the next 3-5 years progressing from an intern to a Senior AI Engineer position within the company. During that time I will maintain regular visits to my former university laboratory for knowledge sharing.
Once I have gained sufficient professional knowledge, I plan to request a transfer to the Indonesian branch to join project developed in Indonesian. Through this role, I will contribute as a Senior AI Engineer to Indonesian projects and initiate collaborative projects involving laboratories from my undergraduate university, Institut Teknologi Sepuluh Nopember (ITS). My plan is to collaborate with the Smart City and Cybersecurity Laboratory from the Information Technology Department and/or the Study Center for Artificial Intelligence and Digital Technology Studies at ITS, so that ITS students can participate in these projects as interns or final-year students completing their thesis research. In addition, I plan to return to my senior high school and participate in Informatics classes as a guest teacher, sharing insights on AI development and delivering engaging talks on AI fundamentals and future advancements to provide students with motivation and perspective to take part in STEM development in Indonesia.`;

  // Study Plan - Korean Version
  const studyPlanKorean = `현재 언어 능력

저는 총점 885점(듣기 480점, 읽기 405점)의 TOEIC 자격증을 보유하고 있습니다. 어린 시절 대부분 영어 만화와 동요를 접하면서 자연스럽게 영어에 노출되기 시작했습니다. 이러한 노출은 정규 교육을 받으면서도 계속되었고, 영어 과목에서 꾸준히 높은 점수를 받았습니다. 학부 과정에서는 여러 영어 강의 과목을 수강했고, 학부 논문을 준비하는 과정에서 정기적으로 국제 논문과 저널을 읽었습니다.

저는 총점 163점(듣기 70점, 읽기 68점, 쓰기 25점)의 TOPIK II 4급을 보유하고 있습니다. 초등학교 때 미디어와 노래를 통해 한국어에도 자연스럽게 노출되기 시작했습니다. 정규 한국어 교육 과정을 수강하지 않았음에도 불구하고 실력이 자연스럽게 발전하여 열 살 무렵에는 한글을 읽을 수 있게 되었습니다. 일상생활에서는 주로 자유 시간에 한국 드라마, 영화, 예능 프로그램을 시청하고 K-Pop 노래를 들으며 한국어를 접했습니다. 현재는 한글 자막과 함께 한국 미디어를 시청하고, 한국 기사와 뉴스를 읽으며, K-Pop과 K-드라마 OST와 같은 한국 노래를 이해할 수 있습니다. 그 결과 일상 대화와 엔터테인먼트 맥락에서 듣기와 읽기 능력이 뛰어납니다. 제102회 PBT TOPIK II 시험을 보기 전 6개월 동안 공식적인 학습을 진행했습니다. 일상적인 주제와 공식적인 맥락에서 흔히 사용되는 어휘와 조건에 기반하여 한국어 문법을 체계적으로 학습했습니다. TOPIK II 합격 레시피 책을 사용하여 시험 준비에 집중했고, 퇴근 후 매일 약 2시간씩 모의고사를 풀고 책으로 공부했습니다.

한국에 오기 전에는 입국 절차, 기숙사 규정, 대학 입학, 수강 신청, 생활용품 구매, 일상생활 관리 등 도착 직후 사용하게 될 실용적인 대화에 집중할 계획입니다. 이러한 대화를 연습하는 동시에 한국 미디어에서 한글 자막을 계속 읽으면서 실제 대화를 통해 단어 형태와 정확한 철자를 더 잘 이해하도록 노력할 것입니다.

한국 도착 후 언어 능력 목표 및 상세 학습 계획

현 상황: 제102회 PBT TOPIK II 시험 결과, 누적 점수 163점(듣기 70점, 읽기 68점, 쓰기 25점)으로 4급을 취득했으므로, 제 주요 목표는 쓰기 능력을 향상시키는 것입니다. 한글 맞춤법 실력이 아직 약합니다. 단어의 의미를 알고 듣거나 읽을 때는 말할 수 있지만, 철자를 정확하게 쓰는 데 어려움을 겪고 있습니다.

언어 능력 목표:
-제110회 PBT TOPIK II 시험에서 최소 누적 점수 200점으로 5급을 달성하는 것을 목표로 하며, 구체적으로 듣기 75점 이상, 읽기 75점 이상, 쓰기 50점 이상을 목표로 합니다.
-제110회 PBT TOPIK II 시험 이후, 석사 과정이 시작되기 전 몇 달 동안은 전공 관련 어휘에 집중하여 수업에서 사용되는 특정 용어에 익숙해질 것입니다. 더 이상 주된 목표가 TOPIK 준비는 아니지만, 제113회 TOPIK 시험에 응시하여 듣기와 읽기 점수를 각각 최소 5점 이상 향상시키고 쓰기 영역에서 최소 70점을 달성하는 것을 목표로 합니다.

2026년 가을 학기

목표:
- 주당 35개의 단어에 익숙해져 자연스럽게 사용할 수 있도록 합니다.
- 제110회 PBT TOPIK II 시험에 응시하여 최소 누적 점수 200점(듣기 75점 이상, 읽기 75점 이상, 쓰기 50점 이상)으로 5급 달성을 목표로 합니다.

학습 계획:
- 일상생활에서 사용되는 어휘에 집중합니다.
- 식료품 쇼핑, 약국 이용, 대중교통 이용, 물류 쇼핑, 온라인 쇼핑 시도, 보험료 납부, 장소 위치 및 이동 방법 학습, 대학 규정, 공공 서비스 규정 등 한국에서의 일상 활동에 적응하며 말하기 능력을 연습합니다.
- 수업 외 시간에 책, YouTube, 온라인 모의고사를 활용하여 매일 3시간씩 집중적으로 TOPIK을 준비합니다.
- 네이버 뉴스와 KBS 뉴스에서 매일 뉴스를 읽습니다. 모르는 한국어 단어가 나오면 인도네시아어나 영어로 번역하지 않고 한국어로 정의를 찾아보고, 설명에 익숙하지 않은 단어가 있으면 의미를 이해하고 올바른 철자를 적을 때까지 반복해서 정의를 찾습니다.
- 주말마다 3시간씩 도서관에서 책을 읽습니다. 어린이 동화책부터 시작하여 점차 소설로 옮겨갑니다.
- 매주 한 곳의 한국 문화 유적지 또는 역사적 장소를 방문하고 하나의 사실이나 지식을 학습한 후, 한국인 친구들에게 한국어로 설명하는 연습을 합니다.
- 잠들기 전에 배운 어휘를 활용하여 뉴스 스타일의 어조로 일기를 씁니다. 언어를 배우는 가장 좋은 방법은 직접 사용하고 단어에 익숙해지는 것이기 때문입니다.
- 이동 중에 팟캐스트와 뉴스를 듣습니다.
- 등산, K-pop 행사 참여, K-pop 댄스 수업 참여와 같은 그룹 취미 활동을 합니다.
- 대학 환경에서 제공하는 운동 수업을 듣습니다.
- 대학 내 국제 문화 축제에 참여합니다.

2027년 봄 학기

목표:
- 주당 20개의 기술 용어에 익숙해집니다.
- 제113회 PBT TOPIK II 시험에 응시하여 듣기와 읽기 점수를 각각 최소 5점 이상 향상시키고 쓰기 영역에서 최소 70점을 달성합니다.
- 기술 전문가와 한국어로 대화하고 토론하는 능력을 80% 수준으로 끌어올립니다.
- 한국어로 연구 논문 초안을 작성하는 능력을 70% 수준으로 끌어올립니다.

학습 계획:
- 인공지능 전공에서 사용되는 기술 어휘 및 연구 보고서 형식에 집중합니다.
- 매일 한국어 AI 연구 저널 및 논문 1개와 주당 3개의 영문 논문 또는 저널을 읽습니다.
- 잠들기 전에 배운 어휘를 활용하여 연구 논문 스타일의 어조로 일기를 쓰며, 한국어 및 국제적인 형식의 연구 논문 작성을 연습합니다.
- 등산, K-pop 행사 참여, K-pop 댄스 수업 참여와 같은 그룹 취미 활동을 계속합니다.
- 주말마다 3시간씩 도서관에서 책을 읽는 것을 계속합니다.
- 매주 한 곳의 한국 문화 유적지 또는 역사적 장소를 방문하고 하나의 사실이나 지식을 학습한 후, 한국인 친구들에게 한국어로 설명하는 연습을 계속합니다.
- 미취학 아동을 대상으로 영어를 가르치는 봉사 활동과 같은 사회 활동에 참여합니다. 아이들을 좋아하고, 명확하고 효과적인 설명 능력을 키우는 데 도움이 되기 때문입니다.
- 오픈 토크 및 기술 박람회에 참석하여 토론 및 브레인스토밍 능력을 연습하고 기술 전문가들과 직접적인 인맥을 형성합니다.
- 대학 내 국제 문화 축제에 참여합니다.

학위 과정 목표 및 상세 학습 계획

학위 과정 목표:
- 각 과목에서 상위 30%의 성적을 달성합니다.
- 인간 중심 언어 시스템 솔루션을 위한 자연어 처리 및 딥러닝에 초점을 맞춘 연구를 수행합니다.
- EMNLP(Empirical Methods in Natural Language Processing), ACL(Association for Computational Linguistics) 또는 IEEE에서 주관하는 학회와 같은 곳에 국제 연구 논문을 게재합니다.
- AI Expo Korea 및 K-스타트업 및 기술 컨퍼런스와 같은 주요 포럼을 포함한 한국의 학계 및 산업 생태계에 참여합니다.
- 인공지능 관련 행사에서 자원봉사 활동에 참여합니다.
- 인간 중심 언어 시스템 분야에서 실험실 인턴십을 수행합니다.

학습 루틴:
- 매일 4시간 동안 집중적인 자율 학습을 수행합니다.
- 문제 공식화, 방법론, 실험 설계에 중점을 두고 주당 최소 1편의 동료 검토를 거친 대화형 AI 연구 논문을 분석합니다.
- 각 논문 검토 후 약점, 답변되지 않은 질문, 연구의 잠재적 확장 가능성을 파악하기 위해 구조화된 브레인스토밍 세션을 진행합니다.

2027년 가을 학기 (석사 1학년 1학기)

목표:
인간 중심 대화형 AI 및 맥락 이해 연구를 뒷받침하기 위해 인공지능, 딥러닝 및 자연어 처리에 대한 강력한 이론적 기초를 구축합니다.

학습 계획:
- 고급 머신러닝, 확률 및 통계, 선형대수 및 최적화, 고급 딥러닝, 고급 빅데이터 처리, 고급 자연어 처리 등의 핵심 교과목을 수강하여 학부 정보기술 학습과 대화 관리 및 맥락 이해를 위해 NLP 모델을 사용했던 딥러닝 기반 고객 서비스 챗봇에 관한 학위 논문에서 이전에 개발한 지식을 강화합니다. 이 교과 과정은 언어 의미 및 맥락 표현을 모델링하기 위한 수학적 및 계산적 기초도 제공합니다.
- AI 컨퍼런스 논문 및 공학 연구 논문 작성법을 배웁니다.
- 인공지능 연구실에 참여하고, 교수님의 지도 아래 대화형 시스템의 맥락 이해를 개선하는 데 필요한 의미 표현 학습 및 시퀀스 모델링 방법을 연구하는 연구 오리엔테이션을 시작합니다.
- 인간 중심 언어 시스템에 대한 명확하고 집중된 연구 방향을 설정합니다.
- 인공지능 연구에 초점을 맞춘 세미나 또는 방법론 기반 과정에 등록합니다.
- 논문 주제에 대한 피드백과 통찰력을 얻기 위해 연구실 토론에 참여합니다.

기타:
- 대학 내 국제 문화 축제에 참여합니다.
- 음악 동아리에 드러머로 가입합니다.
- 국제 학생 또는 글로벌 리더십 포럼에 가입하여 정치, 경제, 기술적 렌즈를 통해 글로벌 이슈를 논의합니다.

2028년 봄 학기 (석사 1학년 2학기)

목표:
대화형 AI 시스템을 위한 NLP 및 음성 처리 전문성을 개발하고 맥락 이해를 위한 기본 모델 구현을 시작합니다.

학습 계획:
- 음성 처리 및 자동 음성 인식, 머신러닝을 위한 정보 이론, 생성 모델 및 대규모 언어 모델, 설명 가능하고 신뢰할 수 있는 인공지능, AI 연구 프로젝트 등의 핵심 교과목을 수강하여 인간 중심 AI에서 언어 표현, 의미 모델링 및 모델 신뢰성을 이해합니다.
- 기여하는 대학원 연구원으로서 인공지능 연구실 활동에 계속 적극적으로 참여합니다.
- 인간 중심 언어 시스템에 대한 연구실의 비전과 일치하는 기본 및 고급 대화형 AI 모델을 구현하고 평가합니다.
- 모델 성능을 평가하고 맥락 해석 및 응답 정확성의 한계를 식별합니다.
- ACL 또는 IEEE 컨퍼런스 표준에 따라 구조화된 연구 초안을 개발합니다.
- 인공지능 및 데이터 과학 관련 학술 워크숍 또는 세미나에 참여합니다.
- AI Expo Korea 및 K-스타트업 및 기술 컨퍼런스와 같은 주요 포럼을 포함한 한국의 학계 및 산업 생태계에 참여합니다.
- 정기적인 연구실 미팅에서 연구 진행 상황과 논문 분석을 발표하여 피드백과 방향성을 얻습니다.

기타:
- 대학 내 국제 문화 축제에 참여합니다.
- 정치, 경제, 기술적 렌즈를 통해 글로벌 이슈를 논의하는 국제 학생 또는 글로벌 리더십 포럼에 계속 적극적으로 참여합니다.
- 여름 방학 동안 육아 봉사 활동(영어 교육)에 참여합니다.

2028년 가을 학기 (석사 2학년 1학기)

목표:
고급 NLP 및 딥러닝 방법 연구를 실행하고, 맥락 이해의 한계를 해결하는 개선된 대화형 AI 모델을 개발하며, 인간 중심 언어 시스템에 대한 출판 지향적인 연구를 수행합니다.

학습 계획:
- 다중 모드 학습 시스템, 자연어 처리 고급 주제, 고급 음성 및 오디오 지능, 딥러닝 시스템 최적화, 대학원 연구 논문 I 등의 핵심 교과목을 수강하여 고급 맥락 모델링 및 언어 이해를 지원합니다.
- 의미적 맥락 표현, 의도 해석 및 응답 일관성에 초점을 맞춘 개선된 대화형 AI 모델을 구현합니다.
- EMNLP, ACL 또는 IEEE와 같은 학회에 국제 컨퍼런스 논문을 준비하여 제출합니다.
- 인간 중심 언어 시스템 분야의 실험실 기반 연구 인턴십을 시작합니다.
- 인공지능 및 데이터 과학 관련 학술 워크숍 또는 세미나에 참여합니다.
- 인공지능 행사에서 스태프로 자원봉사합니다.
- 정기적인 연구실 미팅에서 연구 초안을 발표하여 기술적 피드백을 받습니다.

기타:
- 글로벌 기술 및 정책 동향에 대한 인식을 유지하기 위해 국제 학생 또는 글로벌 리더십 포럼에 계속 적극적으로 참여합니다.

2029년 봄 학기 (석사 2학년 2학기)

목표:
인간 중심 대화형 AI 및 맥락 이해에 관한 연구를 완료하고 확산시킵니다.

학습 계획:
- 지도교수님과 연구실 구성원의 피드백을 반영하여 논문 작성을 완료하고, NLP 및 딥러닝 방법을 사용하여 대화형 AI의 맥락 이해를 개선하는 데 초점을 맞춘 석사 학위 논문을 성공적으로 방어합니다.
- ACL 또는 IEEE 계열 국제 컨퍼런스나 저널에 게재하기 위해 검토자 피드백을 기반으로 연구 결과물을 수정하고 재제출합니다.
- 인간 중심 언어 시스템 분야의 실험실 기반 연구 인턴십을 계속합니다.
- AI Expo Korea 및 K-스타트업 및 기술 컨퍼런스와 같은 주요 포럼을 포함한 한국의 학계 및 산업 생태계에 참여합니다.
- 연구 방향, 출판 전략 및 졸업 후 계획을 확정하기 위해 정기적인 지도교수 및 연구실 미팅에 참여합니다.

졸업 후 계획

졸업 후, 저는 인간 중심 언어 시스템 분야의 프로젝트를 개발하고 인도네시아 지사를 두고 있는 한국 R&D 기업, 예를 들어 지능형 개인 비서 빅스비(Bixby)를 개발하는 삼성전자, LG AI 연구소를 운영하는 LG전자, 또는 AI 서비스를 제공하는 카카오에서 AI 개발자로 인턴십을 수행할 계획입니다. 향후 3-5년간 해당 기업에서 인턴에서 시니어 AI 엔지니어 직급까지 성장하며 경력을 이어갈 계획입니다. 그 기간 동안 지식 공유를 위해 모교 연구실을 정기적으로 방문할 것입니다.
충분한 전문 지식을 쌓은 후에는 인도네시아 지사로의 전근을 요청하여 인도네시아에서 개발되는 프로젝트에 참여할 계획입니다. 이 역할을 통해 시니어 AI 엔지니어로서 인도네시아 프로젝트에 기여하고, 학부 모교인 인도네시아 공과대학(ITS)의 연구실과의 협력 프로젝트를 시작할 것입니다. 정보기술학과의 스마트시티 및 사이버보안 연구실 및/또는 ITS의 인공지능 및 디지털 기술 연구 센터와 협력하여 ITS 학생들이 인턴이나 졸업 논문 연구를 수행하는 학생으로서 이러한 프로젝트에 참여할 수 있도록 하는 것이 제 계획입니다. 또한 모교 고등학교로 돌아가 정보학 수업에 특별 강사로 참여하여 AI 개발에 대한 통찰력을 공유하고 AI 기초 및 미래 발전에 대한 흥미로운 강연을 제공함으로써 학생들이 인도네시아의 STEM 발전에 참여할 수 있는 동기와 시각을 제공할 것입니다.`;

  // Filter questions based on search
  const filteredCategories = questionsData.filter(category =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.questions.some(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="App">
      <header className="app-header">
        <h1>GKS Scholarship Application</h1>
        <p>Complete GKS application materials: Essays and Interview Questions</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search questions or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Essays Section */}
      <div className="essays-section">
        <div 
          className="essays-header"
          onClick={() => setIsEssaysOpen(!isEssaysOpen)}
        >
          <span className="essays-title">My GKS Essays (영문 / 한국어)</span>
          <span className="dropdown-icon">{isEssaysOpen ? '∨' : '>'}</span>
        </div>

        {isEssaysOpen && (
          <div className="essays-container">
            {/* Personal Statement */}
            <div className="essay-item">
              <div 
                className="essay-header"
                onClick={() => setIsPersonalStatementOpen(!isPersonalStatementOpen)}
              >
                <span className="essay-title">Personal Statement | 자기소개서</span>
                <span className="dropdown-icon">{isPersonalStatementOpen ? '∨' : '>'}</span>
              </div>
              {isPersonalStatementOpen && (
                <div className="essay-content">
                  <div className="essay-language-section">
                    <h3 className="essay-language-title">English Version</h3>
                    <pre className="essay-text">{personalStatementEnglish}</pre>
                  </div>
                  <div className="essay-language-section">
                    <h3 className="essay-language-title">한국어 버전</h3>
                    <pre className="essay-text">{personalStatementKorean}</pre>
                  </div>
                </div>
              )}
            </div>

            {/* Study Plan */}
            <div className="essay-item">
              <div 
                className="essay-header"
                onClick={() => setIsStudyPlanOpen(!isStudyPlanOpen)}
              >
                <span className="essay-title">Study Plan | 학업 계획서</span>
                <span className="dropdown-icon">{isStudyPlanOpen ? '∨' : '>'}</span>
              </div>
              {isStudyPlanOpen && (
                <div className="essay-content">
                  <div className="essay-language-section">
                    <h3 className="essay-language-title">English Version</h3>
                    <pre className="essay-text">{studyPlanEnglish}</pre>
                  </div>
                  <div className="essay-language-section">
                    <h3 className="essay-language-title">한국어 버전</h3>
                    <pre className="essay-text">{studyPlanKorean}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Questions Section */}
      <div className="questions-section">
        <h2 className="section-title">GKS Interview Questions</h2>
        <div className="categories-container">
          {filteredCategories.map((category, index) => (
            <Category 
              key={index}
              category={category.category}
              questions={category.questions}
            />
          ))}
        </div>
      </div>

      <footer className="app-footer">
        <p>Total Questions: {questionsData.reduce((acc, cat) => acc + cat.questions.length, 0)}</p>
        <p>Essays: Personal Statement & Study Plan (English + 한국어)</p>
      </footer>
    </div>
  );
}

export default App;
