// Script para navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Filtros de propuestas
    const filterButtons = document.querySelectorAll('.filter-btn');
    const proposalCards = document.querySelectorAll('.proposal-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Quitar clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filtrar las tarjetas
                proposalCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'flex';
                    } else {
                        if (card.getAttribute('data-category').includes(filter)) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Tabs para áreas estratégicas
    const areaTabs = document.querySelectorAll('.area-tab');
    const areaContents = document.querySelectorAll('.area-content');
    
    if (areaTabs.length > 0) {
        areaTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Quitar clase active de todos los tabs
                areaTabs.forEach(t => t.classList.remove('active'));
                // Añadir clase active al tab clickeado
                this.classList.add('active');
                
                const area = this.getAttribute('data-area');
                
                // Mostrar el contenido correspondiente
                areaContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === area) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
});
