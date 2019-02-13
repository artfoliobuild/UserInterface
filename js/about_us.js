
class AboutTabs {
    constructor(obj) {
        this.about_tab = obj
        this.data = obj.dataset.role
        this.section = document.querySelector(`data-role-${this.data}`);
    }
}

// grab about us tabs from the DOM
const about_us_tabs = document.querySelector('.about-us-tabs');

// grab about us sections container from the DOM
const about_us_sections = document.querySelectorAll('.about-us-sections');

// set display to none for each node in about_us_sections
about_us_sections.forEach(node => node.style.display = 'none');

// set the first node to display flex
about_us_sections[0].style.display = 'flex';