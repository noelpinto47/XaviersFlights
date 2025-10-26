// Universal Authentication System
// This file should be included in all pages

// User Authentication Class
class Auth {
    constructor() {
        this.user = null;
        this.loadUser();
    }

    // Load user from localStorage
    loadUser() {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            try {
                this.user = JSON.parse(userData);
                return true;
            } catch (e) {
                console.error('Error loading user data:', e);
                this.logout();
                return false;
            }
        }
        return false;
    }

    // Login user
    login(userData) {
        this.user = {
            email: userData.email,
            name: userData.name || userData.uname || 'User',
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        return true;
    }

    // Logout user
    logout() {
        this.user = null;
        localStorage.removeItem('currentUser');
        console.log('User logged out successfully');
        return true;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.user !== null;
    }

    // Get current user
    getUser() {
        return this.user;
    }

    // Get username
    getUsername() {
        return this.user ? this.user.name : '';
    }

    // Get email
    getEmail() {
        return this.user ? this.user.email : '';
    }
}

// Create global auth instance
const auth = new Auth();

// Initialize UI based on auth state
function initializeAuthUI() {
    // Update username display
    const usernameElements = document.querySelectorAll('#usernamep, .username-display');
    usernameElements.forEach(el => {
        if (auth.isLoggedIn()) {
            el.textContent = auth.getUsername();
        } else {
            el.textContent = '';
        }
    });

    // Handle sign in/out button
    const signinButton = document.getElementById('signinbutton');
    if (signinButton) {
        if (auth.isLoggedIn()) {
            signinButton.textContent = 'Sign Out';
            signinButton.className = 'btn sign-out-button';
            
            // Remove old event listeners by replacing with clone
            const newButton = signinButton.cloneNode(true);
            signinButton.parentNode.replaceChild(newButton, signinButton);
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                logout();
            });
        } else {
            signinButton.textContent = 'Sign In/Register';
            signinButton.className = 'btn btn-info';
            
            // Remove old event listeners by replacing with clone
            const newButton = signinButton.cloneNode(true);
            signinButton.parentNode.replaceChild(newButton, signinButton);
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Navigate to register page based on current location
                const currentPath = window.location.pathname;
                let registerPath;
                
                if (currentPath.includes('/pages/')) {
                    registerPath = '../RegisterPage/index.html';
                } else {
                    registerPath = './pages/RegisterPage/index.html';
                }
                
                window.location.href = registerPath;
            });
        }
    }

    // Handle My Account link
    const myAccountLink = document.getElementById('myaccount');
    if (myAccountLink) {
        if (auth.isLoggedIn()) {
            myAccountLink.style.color = 'white';
            myAccountLink.style.pointerEvents = 'auto';
            myAccountLink.tabIndex = 0;
            
            // Set correct path based on current location
            const currentPath = window.location.pathname;
            if (currentPath.includes('/pages/')) {
                myAccountLink.href = '../AccountPage/index.html';
            } else {
                myAccountLink.href = './pages/AccountPage/index.html';
            }
        } else {
            myAccountLink.style.color = 'rgb(65, 73, 61)';
            myAccountLink.style.pointerEvents = 'none';
            myAccountLink.tabIndex = -1;
            myAccountLink.href = '#';
        }
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAuthUI);
} else {
    initializeAuthUI();
}

// Global logout function
function logout() {
    if (confirm('Are you sure you want to sign out?')) {
        auth.logout();
        // Redirect to homepage after logout
        const currentPath = window.location.pathname;
        if (currentPath.includes('/pages/')) {
            window.location.href = '../../index.html';
        } else {
            window.location.href = './index.html';
        }
    }
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.auth = auth;
    window.initializeAuthUI = initializeAuthUI;
    window.logout = logout;
}
