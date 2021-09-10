const input = document.querySelector(".search");
const mobileInput = document.querySelector(".search-mobile");

const icon = document.querySelector(".target");
const iconMobile = document.querySelector(".target-mobile");

const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");

const overlay = document.querySelector(".overlay");
const readMore = document.querySelectorAll(".read-more");

let i = 0;

/*search icon*/
icon.addEventListener("click", () => {
  input.classList.toggle("display");
  if (input.classList.contains("display")) {
    animation1(input);
  } else {
    animation2(input);
  }
});

/*search icon mobile*/
iconMobile.addEventListener("click", () => {
  mobileInput.classList.toggle("display-1");
  if (mobileInput.classList.contains("display-1")) {
    animation1(mobileInput);
  } else {
    animation2(mobileInput);
  }
});

/* search input animation*/
$(input).css("padding", "8px 0");
const animation1 = (myInput) => {
  $(myInput).animate(
    {
      width: 0,
      padding: "8px 0",
    },
    700
  );
};

const animation2 = (myInput) => {
  $(myInput).animate(
    {
      width: 300,
      padding: "8px 5px",
    },
    700
  );
};

/* transition */
const setTransition = (myInput) => {
  $(myInput).css("transition", ".1s ease");
};
setTransition(input);
setTransition(mobileInput);

readMore.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.margin = "10px";
    item.style.transition = ".5s ease";
  });
});

/* read more */
readMore.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.style.margin = "0px";
  });
});

/* mobile nav icon open */
bars.addEventListener("click", () => {
  overlay.classList.remove("overlay-width-none");
  overlay.classList.add("overlay-width-full");
});

/* mobile nav icon close */
times.addEventListener("click", () => {
  overlay.classList.remove("overlay-width-full");
  overlay.classList.add("overlay-width-none");
});
