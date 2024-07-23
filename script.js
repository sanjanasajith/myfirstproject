document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        form.reset();
    });
});
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();

    // Define the mapping between search queries and section IDs
    const searchMap = {
        'section 1': 'section1',
        'section 2': 'section2',
        'section 3': 'section3'
    };

    // Check if the query matches a section ID
    if (searchMap[query]) {
        const sectionId = searchMap[query];
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        alert('No matching section found!');
    }
}

