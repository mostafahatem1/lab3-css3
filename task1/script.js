   document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const rememberMeCheckbox = document.getElementById('rememberMe');
            const welcomeMessage = document.getElementById('welcomeMessage');
            const clearBtn = document.getElementById('clearBtn');
            
            // Check if email is saved in localStorage and pre-fill
            const savedEmail = localStorage.getItem('rememberedEmail');
            if (savedEmail) {
                emailInput.value = savedEmail;
                rememberMeCheckbox.checked = true;
                welcomeMessage.textContent = `Welcome back, ${savedEmail}!`;
                welcomeMessage.style.display = 'block';
            }
            
            // Handle form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = emailInput.value;
                const password = passwordInput.value;
                
                // Simple validation
                if (!email || !password) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // If "Remember Me" is checked, save email to localStorage
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('rememberedEmail', email);
                    welcomeMessage.textContent = `Welcome back, ${email}!`;
                    welcomeMessage.style.display = 'block';
                } else {
                    // If not checked, remove any saved email
                    localStorage.removeItem('rememberedEmail');
                    welcomeMessage.style.display = 'none';
                }
                
                
                alert(`Login successful! ${rememberMeCheckbox.checked ? 'Your email has been remembered.' : ''}`);
                
                
            });
            
            // Clear saved email
            clearBtn.addEventListener('click', function() {
                localStorage.removeItem('rememberedEmail');
                emailInput.value = '';
                rememberMeCheckbox.checked = false;
                welcomeMessage.style.display = 'none';
                alert('Saved email has been cleared.');
            });
        });