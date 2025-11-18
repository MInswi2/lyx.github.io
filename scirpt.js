// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Chat functionality
    const chatButton = document.getElementById('chatButton');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    
    if (chatButton && chatPopup) {
        chatButton.addEventListener('click', function() {
            chatPopup.classList.toggle('hidden');
        });
    }
    
    if (closeChat && chatPopup) {
        closeChat.addEventListener('click', function() {
            chatPopup.classList.add('hidden');
        });
    }

    // Car brand logos fallback
    const carBrandImages = document.querySelectorAll('.car-brand-logo');
    carBrandImages.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/100x50?text=' + this.alt;
            this.classList.add('p-2');
        });
    });

    // Form validation for test drive
    const testDriveForm = document.getElementById('testDriveForm');
    if (testDriveForm) {
        testDriveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Vänligen fyll i alla obligatoriska fält');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Tack för din bokning! Vi kontaktar dig snart.');
            this.reset();
        });
    }

    // Dynamic model dropdown based on brand selection
    const brandSelect = document.getElementById('brandSelect');
    const modelSelect = document.getElementById('modelSelect');
    
    if (brandSelect && modelSelect) {
        const modelsByBrand = {
            'Volvo': ['XC60', 'XC90', 'S90', 'V90'],
            'BMW': ['3-serie', '5-serie', 'X3', 'X5'],
            'Mercedes': ['C-klass', 'E-klass', 'GLC', 'GLE'],
            'Audi': ['A4', 'A6', 'Q5', 'Q7']
        };
        
        brandSelect.addEventListener('change', function() {
            modelSelect.innerHTML = '<option>Välj modell</option>';
            
            if (this.value && modelsByBrand[this.value]) {
                modelsByBrand[this.value].forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            }
        });
    }
});
