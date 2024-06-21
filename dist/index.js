module.exports = {
    scrollTop: (offset = null, type = 'basic') => {
        const body = document.querySelector('body');
        const button = document.createElement('div');
        button.id = 'scroll-top';
        button.classList.add(`st-${type}`);
        button.innerHTML = `
          <svg style="width:33px; height:33px; fill:#ffffff;"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>`;

        let height = null;
        if (offset) {
            height = offset
        } else {
            height = window.innerHeight;
        }

        if (window.pageYOffset > height) button.classList.add('show');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > height) {
                button.classList.add('show');
            } else {
                button.classList.remove('show');
            }
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });

        body.append(button);
    }
}
