class AboutTab {
    constructor(obj) {
      this.about_tab = obj;
  
      // Get the custom data attribute on the Link
      this.data = obj.dataset.role;
  
      // Using the custom data attribute get the associated section
      this.section = document.querySelector(
        `.about-us-sections[data-role="${this.data}"]`
      );
  
      // Add a click event listener on this instance, calling the select method on click
      this.about_tab.addEventListener("click", this.select.bind(this));
    }
  
    select() {
      // Get all about us tabs
      let tabs = document.querySelectorAll(".about-us-tab");
  
      // iterate over tabs and remove class selected
      Array.from(tabs).forEach(tab =>
        tab.classList.remove("about-us-tab-selected")
      );
  
      // select the tab that was clicked
      this.about_tab.classList.add("about-us-tab-selected");
  
      // set all other about us sections display to none
      document
        .querySelectorAll(".about-us-sections")
        .forEach(node => (node.style.display = "none"));
  
      // set this section display to flex
      this.section.style.display = "flex";
    }
  }
  
  // grab about us sections container from the DOM
  const about_us_sections = document.querySelectorAll(".about-us-sections");
  
  // set display to none for each node in about_us_sections
  about_us_sections.forEach(node => (node.style.display = "none"));
  

  
  // grab about us tabs from the DOM
  const about_us_tabs = document.querySelectorAll(".about-us-tab");
  
  // create new instances of AboutTab from nodelist about_us_tabs
  const about_tabs = Array.from(about_us_tabs).map(node => new AboutTab(node));

  // set the first node to display flex
  about_tabs[0].select();
  