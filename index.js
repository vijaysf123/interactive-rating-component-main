let submitBtn = document.querySelector("#submit")
let main_wrapper = document.querySelector("#main_wrapper")
let feedback_wrapper = document.querySelector(".feedback_wrapper")
let ratings = document.querySelectorAll(".rating")

for (var i =0; i < ratings.length; i++){
    ratings[i].onclick = function () {
        var el = ratings[0];

        while (el) {
            if (el.tagName  === "DIV") {
                el.classList.remove("active")
            }
            //pass to next siblings
            el  = el.nextSibling;
        }
       this.classList.add("active")
    }
}

submitBtn.addEventListener("click", function() {
    let rated = document.querySelector("#main_wrapper > div.ratings > div.rating.active")
    let userRating = document.querySelector("#user_rating")

    main_wrapper.style.display = "none";
    feedback_wrapper.style.display = "block";
    userRating.textContent = rated.textContent;
});