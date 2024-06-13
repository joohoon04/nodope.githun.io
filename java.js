// 스크롤 이벤트 관찰자 설정
const scrollObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const scrollObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrolled');
        } else {
            entry.target.classList.remove('scrolled');
        }
    });
};

const scrollObserver = new IntersectionObserver(scrollObserverCallback, scrollObserverOptions);
const scrollElements = document.querySelectorAll('.main_content1, .main_content3');

scrollElements.forEach(element => {
    scrollObserver.observe(element);
});

// 비디오 재생 이벤트 관찰자 설정
const videoObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const videoObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
};

const videoObserver = new IntersectionObserver(videoObserverCallback, videoObserverOptions);
const videoElements = document.querySelectorAll('video');

videoElements.forEach(video => {
    videoObserver.observe(video);
});

const images = [
    'img/1 (1).png',
    'img/1 (2).png',
    'img/1 (3).png',
    'img/1 (4).png',
    'img/1 (5).png',
    'img/1 (6).png',
    'img/1 (7).png',
    'img/1 (8).png',
    'img/1 (9).png'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function getRandomSize() {
    return Math.floor(Math.random() * 150) + 50; // 50px ~ 350px 사이의 크기
}
const imageCreationProbability = 0.18;

function handleMouseMove(event) {
    const cursorArea = document.querySelector('.web');
    const header = document.querySelector('.header');
    const mainText0 = document.querySelector('.main_text0');
    
    if (!cursorArea || !header || !mainText0) return;
    
    const headerRect = header.getBoundingClientRect();
    const mainText0Rect = mainText0.getBoundingClientRect();
    
    if (event.clientY > headerRect.bottom && event.clientY < mainText0Rect.top) {
        if (Math.random() < imageCreationProbability) {
            const follower = document.createElement('img');
            follower.src = getRandomImage();
            follower.className = 'follower';

            const size = getRandomSize();
            follower.style.width = `${size}px`;
            follower.style.height = `${size}px`;
            follower.style.position = 'absolute';
            follower.style.left = `${event.clientX - size / 2}px`;
            follower.style.top = `${event.clientY - size / 2}px`;
            follower.style.pointerEvents = 'none';

            document.body.appendChild(follower);

            setTimeout(() => {
                follower.remove();
            }, 900);
        }
    }
}
document.addEventListener('mousemove', handleMouseMove);    

   // 인풋 이벤트 핸들러
document.addEventListener("DOMContentLoaded", () => {
    $(".input-placeholder").on("click keyup", function(event) {
        if (event.type === "click" || event.key === "Enter") {
            $(this).prev().removeClass("hide").trigger("focus").next().remove();
        }
    });

    $(".input-placeholder").on("focus", function(event) {
        $(event.currentTarget).nextAll("hr").first().addClass("highlight");
    }).on("blur", function(event) {
        $(event.currentTarget).nextAll("hr").first().removeClass("highlight");
    }).on("input", function() {
        var noText = true;
        $(".input").each(function(index, element) {
            if ($(element).text().trim() !== "") {
                noText = false;
                return false;
            }
        });
        $("#submit-button").toggleClass("disabled", noText);
    });

    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        if (!$(this).prop("disabled")) {
            $(this).closest('.overlap-group').find('.input-placeholder').trigger("click");
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { // 스크롤 위치가 10px을 넘으면
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 뉴스 
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id^='section']"); // id 속성이 'section'으로 시작하는 모든 섹션을 선택합니다.

    // 각 섹션에 대한 클릭 이벤트를 추가합니다.
    sections.forEach(section => {
        section.addEventListener("click", () => {
            const iframe = document.querySelector("#player iframe"); // iframe 요소를 선택합니다.

            // 선택한 섹션에 맞게 iframe의 src를 설정합니다.
            if (section.id === 'section1') {
                iframe.src = "https://www.youtube.com/embed/heImz-mkwo8?si=gZKz52pgkUUn2W1M";
            } else if (section.id === 'section2') {
                iframe.src = "https://www.youtube.com/embed/dYMJuUcNG14?si=WUhnBjfqDgn-dhwE";
            } else if (section.id === 'section3') {
                iframe.src = "https://www.youtube.com/embed/OuGb_VjApQ0?si=dClryk7Eg9ZtxYBV";
            }
        });
    });
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }
        // Close other accordion items
        document.querySelectorAll('.accordion-button').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = '0';
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('instagramForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 방지

        // 알림 표시
        var notification = document.getElementById('notification');
        notification.innerText = '폼이 성공적으로 제출되었습니다!';
        notification.style.display = 'block';

        // 5초 후에 알림 숨기기
        setTimeout(function() {
            notification.style.display = 'none';
        }, 5000);
    });
});

