const posts = [
    "https://www.instagram.com/reel/DWRopwvj7wH/",
    "https://www.instagram.com/reel/DQ2VRloERw3/",
    "https://www.instagram.com/reel/DPwHULXER8u/",
    "https://www.instagram.com/reel/DPdvRS7Eduf/",
    "https://www.instagram.com/reel/DPMb2y1kX-q/"

]


let currentPost = 0;

const instagramContainer =
document.getElementById("instagramPosts");

/*CRIA POSTS UMA VEZ*/

posts.forEach((post) => {

  instagramContainer.innerHTML += `

    <div class="post-card">

      <blockquote
        class="instagram-media"
        data-instgrm-permalink="${post}"
        data-instgrm-version="14">
      </blockquote>

    </div>

  `;
});


window.addEventListener("load", () => {

  if(window.instgrm){
    window.instgrm.Embeds.process();
  }

  setTimeout(() => {
    updateCarousel();
  }, 1200);

});


const cards =
document.querySelectorAll(".post-card");


function updateCarousel(){

  cards.forEach((card) => {

    card.classList.remove(
      "active",
      "left",
      "right"
    );

  });

  const left =
  (currentPost - 1 + cards.length)
  % cards.length;

  const right =
  (currentPost + 1)
  % cards.length;

  cards[currentPost]
  .classList.add("active");

  cards[left]
  .classList.add("left");

  cards[right]
  .classList.add("right");
}

document
.querySelector(".next")
.addEventListener("click", () => {

  currentPost =
  (currentPost + 1)
  % cards.length;

  updateCarousel();

});


document
.querySelector(".prev")
.addEventListener("click", () => {

  currentPost =
  (currentPost - 1 + cards.length)
  % cards.length;

  updateCarousel();

});