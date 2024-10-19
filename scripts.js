function loadPage(page) {
    const content = document.getElementById('content');
    
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            content.innerHTML = data;
            history.pushState(null, '', page);
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            content.innerHTML = '<h1>Error loading content.</h1>';
        });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle back/forward navigation
window.onpopstate = function() {
    loadPage(location.pathname.split('/').pop());
};