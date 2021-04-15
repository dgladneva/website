    const smoothScrollFromMenu = () => {
      const menuItems = document.getElementsByClassName("navigation__item");
      console.log(menuItems);
      const getPosition = (elem) => {
        return (
          document.documentElement.scrollTop + elem.getBoundingClientRect().y
        );
      };
      const scrollToTarget = (e) => {
        let target = e.target;
        let targetId = target.getAttribute("to");
        console.log('1');
        if (target) {
          const targetTo = document.getElementById(
            targetId
          );
          const targetPosition = getPosition(targetTo);
          const offsetTargetPosition = targetPosition - 200;
          window.scrollTo({
            top: offsetTargetPosition,
            behavior: "smooth",
          });
        }
      };
  
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", scrollToTarget);
      }
    };
  
    smoothScrollFromMenu();
