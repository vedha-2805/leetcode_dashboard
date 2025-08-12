document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const section = String.fromCharCode(65 + index); // Convert to A, B, C, etc.
            showCardDetails(section, this);
        });

        // Add hover effect for card values
        const cardValue = card.querySelector('.card-value');
        const originalValue = cardValue.textContent;
        
        card.addEventListener('mouseenter', function() {
            animateValue(cardValue, 0, parseInt(originalValue), 1000);
        });
    });

    // Add click handlers to buttons
    const viewAnalyticsBtn = document.querySelector('.btn-primary');
    const refreshDataBtn = document.querySelector('.btn-secondary');

    viewAnalyticsBtn.addEventListener('click', function() {
        showAnalytics();
    });

    refreshDataBtn.addEventListener('click', function() {
        refreshData();
    });

    // Initialize dashboard
    initializeDashboard();
});

function showCardDetails(section, cardElement) {
    const cardLabel = cardElement.querySelector('.card-label').textContent;
    const cardValue = cardElement.querySelector('.card-value').textContent;
    
    // Create modal or alert with section details
    alert(`Section ${section} Details:\n\nCategory: ${cardLabel}\nCount: ${cardValue}\n\nClick OK to continue exploring the analytics.`);
    
    // Add a subtle animation to indicate selection
    cardElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        cardElement.style.transform = '';
    }, 150);
}

function showAnalytics() {
    // Simulate analytics view
    const overlay = createOverlay();
    const modal = document.createElement('div');
    modal.className = 'analytics-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Analytics Overview</h2>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p>📊 Total Sections Active: 17 (A through Q)</p>
                <p>📈 Average Performance: 85%</p>
                <p>🎯 Top Performing Section: Section C (234 points)</p>
                <p>🔥 Most Active Category: Pattern Matching</p>
                <p>⚡ Quick Stats: 1,847 total data points tracked</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Add modal styles dynamically
    addModalStyles();
}

function refreshData() {
    const refreshBtn = document.querySelector('.btn-secondary');
    const originalText = refreshBtn.innerHTML;
    
    // Show loading state
    refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
    refreshBtn.disabled = true;
    
    // Simulate data refresh
    setTimeout(() => {
        // Randomly update some card values
        const cards = document.querySelectorAll('.card-value');
        cards.forEach(card => {
            const currentValue = parseInt(card.textContent);
            const variation = Math.floor(Math.random() * 20) - 10; // -10 to +10
            const newValue = Math.max(0, currentValue + variation);
            animateValue(card, currentValue, newValue, 800);
        });
        
        // Reset button
        refreshBtn.innerHTML = originalText;
        refreshBtn.disabled = false;
        
        // Update status indicator
        const statusIndicator = document.querySelector('.status-indicator');
        statusIndicator.style.background = '#00ff88';
        
        // Show success message briefly
        showNotification('Data refreshed successfully!', 'success');
    }, 2000);
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = closeModal;
    return overlay;
}

function closeModal() {
    const modal = document.querySelector('.analytics-modal');
    const overlay = document.querySelector('.modal-overlay');
    
    if (modal) modal.remove();
    if (overlay) overlay.remove();
}

function addModalStyles() {
    if (document.querySelector('#modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .analytics-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            padding: 0;
            z-index: 1001;
            min-width: 400px;
            max-width: 90vw;
            animation: modalSlideIn 0.4s ease;
            color: white;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .modal-header h2 {
            margin: 0;
            font-size: 1.5rem;
        }
        
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        
        .close-btn:hover {
            opacity: 1;
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .modal-body p {
            margin: 1rem 0;
            font-size: 1.1rem;
            line-height: 1.6;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
            from { 
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to { 
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    
    document.head.appendChild(style);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 1002;
            animation: notificationSlide 0.3s ease;
        }
        
        .notification.success {
            background: linear-gradient(45deg, #43e97b, #38f9d7);
        }
        
        @keyframes notificationSlide {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlide 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function initializeDashboard() {
    // Add some initial animations
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Simulate real-time data updates
    setInterval(() => {
        const randomCard = Math.floor(Math.random() * 17);
        const cards = document.querySelectorAll('.card-value');
        const card = cards[randomCard];
        const currentValue = parseInt(card.textContent);
        const newValue = currentValue + (Math.random() > 0.5 ? 1 : -1);
        
        if (newValue >= 0) {
            animateValue(card, currentValue, newValue, 500);
        }
    }, 10000); // Update every 10 seconds
}
