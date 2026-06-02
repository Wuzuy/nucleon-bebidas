(function(){
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const btn = item.querySelector('.faq-question');
        const ans = item.querySelector('.faq-answer');
        btn.addEventListener('click', ()=>{
            const open = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!open));
            if(open) ans.setAttribute('hidden',''); else ans.removeAttribute('hidden');
        });
        btn.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
        });
    });
})();