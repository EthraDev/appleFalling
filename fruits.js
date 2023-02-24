let body = document.querySelector("body");

let windowSize = {
    'width': window.innerWidth,
    'height': window.innerHeight
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

let countImg = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function appleFalling() {

    while (true) {
        if (getRandomInt(30) === 5) {
            let img = document.createElement("img");
            img.setAttribute("src", "pomme.png");
            img.setAttribute("class", "falling-image");
            img.style = `top: ${-100}px; left: ${Math.random() * windowSize.width}px;`
            body.appendChild(img);
        }

        let allImage = document.querySelectorAll(".falling-image");

        for (let i = 0; i < allImage.length; i++) {
            let img = allImage[i];
            img.style.top = `${getOffset(img).top + 2}px`;

            if (getOffset(img).top > windowSize.height) {
                img.remove();
            }
        }



        await sleep(5)
    }
}

appleFalling()