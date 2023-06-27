const navLi = document.querySelectorAll(".nav ul li a");

navLi.forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({ behavior: "smooth" });

    navLi.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
    console.log(event.t);
  });
});
