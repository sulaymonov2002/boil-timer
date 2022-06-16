const boilingBtn = document.getElementById("boiling-btn");
const boilingGroup = document.getElementById("boiling-group");
const boilingTime = document.getElementById("boiling-time");

// const boilingItems = [];

const startBoilingInterval = async (element, time) => {
  for (let i = time; i >= 0; i--) {
    await new Promise((response) => {
      setTimeout(() => {
        response((element.innerText = i));
      }, 1000);
    });
    if (i === 1) {
      element.classList.add("invisibleElement");
    }
  }
  boilingGroup.removeChild(element);
};

boilingBtn.addEventListener("click", () => {
  const boilTime = boilingTime.value;
  if (boilTime <= 0) return;

  const newBoil = document.createElement("boilNumbers");
  newBoil.classList.add("card-boiler");
  newBoil.innerText = boilTime;
  boilingGroup.appendChild(newBoil);
  startBoilingInterval(newBoil, boilTime);
});
