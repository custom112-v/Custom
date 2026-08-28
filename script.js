// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Interactive Cart Counter
    let cartCount = 0;
    const cartCountEl = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-cart');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            cartCountEl.textContent = cartCount;
            
            // Simple visual feedback
            btn.textContent = 'Berhasil Dibeli!';
            btn.style.backgroundColor = '#10B981';
            setTimeout(() => {
                btn.textContent = 'Beli';
                btn.style.backgroundColor = '';
            }, 1500);
        });
    });

    // Simple Template Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            templateCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});