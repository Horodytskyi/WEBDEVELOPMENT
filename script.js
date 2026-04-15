window.onload = function() {

    var userAgentInfo = navigator.userAgent;
    localStorage.setItem('browserInfo', userAgentInfo);
    
    var footerText = document.getElementById('footer-info');
    footerText.innerHTML = localStorage.getItem('browserInfo');

    var url = 'https://jsonplaceholder.typicode.com/posts/7/comments';
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(comments) {
            var container = document.getElementById('comments-container');
            
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                
                var htmlBlock = '<div class="comment">';
                htmlBlock = htmlBlock + '<strong>' + comment.name + '</strong> (' + comment.email + ')';
                htmlBlock = htmlBlock + '<p>' + comment.body + '</p>';
                htmlBlock = htmlBlock + '</div>';
                
                container.innerHTML = container.innerHTML + htmlBlock;
            }
        });

    var modal = document.getElementById('feedback-modal');
    var closeBtn = document.querySelector('.close-btn');

    setTimeout(function() {
        modal.style.display = 'block';
    }, 60000); 
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    var body = document.body;
    var button = document.getElementById('theme-toggle');
    
    var date = new Date();
    var currentHour = date.getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
        body.className = '';
    } else {
        body.className = 'dark-theme';
    }

    button.onclick = function() {
        if (body.className == 'dark-theme') {
            body.className = '';
        } else {
            body.className = 'dark-theme';
        }
    };
};