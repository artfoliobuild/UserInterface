class PageTab {
  constructor(obj) {
    this.page_tab = obj;

    // Get the custom data attribute on the Link
    this.data = obj.dataset.page;

    // Using the custom data attribute get the associated page
    this.section = document.querySelector(
      `.page-tab[data-page="${this.data}"]`
    );

    // Add a click event listener on this instance, calling the select method on click
    this.page_tab.addEventListener("click", this.select.bind(this));
  }

  select() {
    // Get all page tabs
    let page_tabs = document.querySelectorAll(".page-tab");

    // iterate over tabs and remove class selected
    Array.from(page_tabs).forEach(tab => (tab.style.display = "none"));

    // select the tab that was clicked
    this.page_tab.style.display = "flex";

    // set this section display to flex
    this.section.style.display = "flex";
  }
}

const pageTabs = document.querySelectorAll("nav a");
console.log(pageTabs);
pageTabs.forEach(page => new PageTab(page));
