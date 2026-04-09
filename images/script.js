  
      document.querySelectorAll(".reviews-block").forEach((reviews-block) = {
        reviews-block.addEventListener("click", () => {
          document
            .querySelectorAll(".reviews-block")
            .forEach((c) => c.classList.remove("active"));
          reviews-block.classList.add("active");
        });
      });