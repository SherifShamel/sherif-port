let ourSkills = document.querySelector(".skills");
window.onscroll = function() {

    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight-200)) 
    {
        let allSkills = document.querySelectorAll(".skill-box .skills-bar span")
        allSkills.forEach(skill => {
            
            skill.style.width = skill.dataset.progress;

        })

    }
}