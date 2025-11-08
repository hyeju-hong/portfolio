$(function () {

    // gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const scrollContainer = document.querySelector("[data-scroll-container]");


    const items = document.querySelectorAll('.con2_all .con2_left ul li');
    const images = document.querySelectorAll('.img_box li');

    const headline = document.querySelector('.headline');
    const skill = document.querySelector('.skill');


    

    const imgTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro .right img',
            start: 'top 50%',
            end: 'top 50%+=1232',
            scrub: 1.5,
            pin: '.intro .right img',
            pinSpacing: true,
            pinReparent: true,
            onUpdate: (self) => {
                // 이미지 애니메이션 진행률 기준 split 클래스 적용
                if (self.progress >= 0.8) {
                    headline.classList.add('split');
                } else {
                    headline.classList.remove('split');
                }
            }
        }
    });

    imgTl.fromTo('.intro .right img',
        {
            scale: 0.4,
            transformOrigin: "right top",
            filter: 'brightness(0.7)'
        },
        {
            scale: 1,
            filter: 'brightness(1.2)',
            ease: "power4.inOut",
            duration: 3
        }
    );


    //list

    // ✅ 공통 on 적용 함수 (이미지 페이드 제거)
    function activateByIndex(index) {
        items.forEach((item, i) => {
            item.classList.toggle('on', i === index);
            const btn = item.querySelector('.btn');
            if (btn) btn.innerHTML = i === index ? '<img src="./img/chevron-up.png" alt="선택됨" />' : '<img src="./img/chevron-down.png" alt="기본" />';

            images[i]?.classList.toggle('on', i === index);
        });
    }

    // ✅ ScrollTrigger 고정 설정
    ScrollTrigger.create({
        trigger: ".con2_all",
        start: "top top+=90",
        // markers: true,

        end: () => `+=${items.length * 200}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        id: "pinScroll",
        onUpdate: self => {
            const index = Math.floor(self.progress * items.length);
            activateByIndex(index);
        }, // ✅ pin 영역 끝났을 때 마지막 on 유지
        onLeave: () => {
            activateByIndex(items.length - 1);
        },
        // ✅ 다시 위로 올라올 때 첫 번째 on으로 복귀
        onEnterBack: () => {
            activateByIndex(0);
        }
    });

    // ✅ 버튼 클릭 시 on 이동 + 스크롤 이동
    items.forEach((item, index) => {
        const btn = item.querySelector('.con2_top');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                activateByIndex(index);

                const scroll = ScrollTrigger.getById("pinScroll");
                const totalScroll = scroll.end - scroll.start;
                const perItem = totalScroll / items.length;
                const targetScroll = scroll.start + perItem * index;

                gsap.to(window, {
                    scrollTo: { y: targetScroll, autoKill: false },
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        }
    })




    //skill


    gsap.fromTo('.skill .inner h2',
        {
            xPercent: 0,
            fontSize: '160px',
            color: '#000000',
        },
        {
            xPercent: -82,
            y: '300px',
            fontSize: '110px',
            color: 'var(--txt-purple)',
            ease: 'none',
            scrollTrigger: {
                trigger: '.skill .inner h2',

                start: 'top 40%',
                end: '+=300',
                scrub: true,
                onEnter() {
                    skill.classList.toggle('on');
                },

            }
        }
    );


    const imgTrigger = ScrollTrigger.create({
        trigger: '.skill .inner .center img',
        start: 'top 70%',
        end: '+=300',
        scrub: true,
        
        onUpdate: self => {
            // 트리거 끝나면 리스트 보이게 하기
            if (self.progress === 1) {
                gsap.to('.skill .right ul li', {
                    opacity: 1,
                    // duration: 0.5,
                    stagger: 0.02,
                    // 하나씩 딜레이 주고 나타나게
                    ease: 'power2.out',
                });
            } else {
                gsap.to('.skill .right ul li', {
                    opacity: 0,
                    // duration: 0.5,
                    ease: 'power2.out',
                });
            }
        },
        onEnter() {
            // skill.classList.toggle('on');
        },
        onLeaveBack() {
            ScrollTrigger.refresh(); 
        },
        onLeave(){
            gsap.to('.skill .right ul li', {
                opacity: 0,
                // duration: 0.5,
                ease: 'power2.out',
            });
        }
    });


    gsap.fromTo('.skill .inner .center img',
        {
            left: '970px',
            top: '542px',
            borderRadius: '300px',
            position: "absolute",
            width: '132px',
            height: '132px',
        },
        {
            top: '1000px',
            left: '1170px',
            borderRadius: '100px',

            width: '300px',
            height: '300px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.skill .inner .center img',

                start: 'top 30%',
                end: '+=300',
                scrub: true,
                onEnter() {
                    skill.classList.toggle('on');
                },
            }
        }
    );

    // gsap.fromTo('.skill .right ul li',
    //     {
    //         opacity: 0,
    //     },
    //     {
    //         opacity: 1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.skill .right ul li',

    //             start: 'top 30%',
    //             end: '+=300',
    //             scrub: true,

    //         }
    //     }
    // );





    //value
    $('.txtAniBox .txtAni1').simplyScroll({
        speed: 4,
        pauseOnHover: true,
        pauseOnTouch: false,
        direction: 'forwards',
    });
    $('.txtAniBox .txtAni2').simplyScroll({
        speed: 4,
        pauseOnHover: true,
        pauseOnTouch: false,
        direction: 'backwards',
    });


    //point_cards
    //카드 돌리기

    // const visionCards = gsap.utils.toArray('.point .card');
    const visionCards = gsap.utils.toArray('.point .card');
    visionCards.forEach((card, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: point,
                start: `center 60%`,

                end: `top+=${(i + 1) * 200} 50%`,
                scrub: 1.5,
            }
        });
        tl.fromTo(card, { rotationY: 0 }, {
            rotationY: 180,
            transformOrigin: "center center",
            ease: "power2.out",


        }, i * 0.8)
    })

    function applySimplyScroll(selector, speed = 4, direction = 'forwards') {
        $(selector).simplyScroll({
            speed,
            direction,
            //멈추는 상황
            pauseOnHover: true,
            pauseOnTouch: true,
        })
    }

    // applySimplyScroll('.point .list')



    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.line li');

    
    
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index),
        });
    });
    
    function setActive(index) {
        navItems.forEach(item => item.classList.remove('on'));
        navItems[index].classList.add('on');

    }


    
    const $line = $("header .inner .line_bg");
    const maxWidth = 1000;                     // 선이 최대로 넓어질 값(px)
  
    function updateLineWidth() {
      const st        = $(window).scrollTop();                    // 현재 스크롤 위치
      const maxScroll = $(document).height() - $(window).height(); // 전체 스크롤 가능 거리
  
      // 스크롤 비율(0~1)에 맞춰 width 계산, 1351px 이상은 막아둠
      
      const newWidth = Math.min(maxWidth, (st / maxScroll) * maxWidth );

  
      $line.css("width", newWidth); // px 단위는 jQuery가 자동으로 붙여줌
    }
  
    // 최초 1회 실행 + 스크롤/리사이즈마다 갱신
    updateLineWidth();
    $(window).on("scroll resize", updateLineWidth);


})
