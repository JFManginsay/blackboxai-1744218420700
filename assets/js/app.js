// Shared application functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication on protected pages
    const protectedPages = ['dashboard.html', 'queue-status.html', 'profile.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if(protectedPages.includes(currentPage)) {
        const studentId = localStorage.getItem('studentId');
        if(!studentId) {
            window.location.href = 'login.html';
        }
    }

    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    });

    function showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute z-10 bg-gray-800 text-white text-xs rounded py-1 px-2';
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = `${rect.top - 30}px`;
        tooltip.style.left = `${rect.left + rect.width/2 - tooltip.offsetWidth/2}px`;
        
        e.target.dataset.tooltipId = tooltip;
    }

    function hideTooltip(e) {
        if(e.target.dataset.tooltipId) {
            e.target.dataset.tooltipId.remove();
        }
    }
});

// Mock WebSocket connection
function connectWebSocket() {
    console.log('Connecting to WebSocket server...');
    // In a real app, this would connect to actual WebSocket server
    return {
        onmessage: (callback) => {
            // Simulate receiving queue updates every 5-10 seconds
            setInterval(() => {
                const mockUpdate = {
                    type: 'queue_update',
                    data: {
                        currentNumber: `A-${Math.floor(Math.random() * 5) + 15}`,
                        waitTime: `${Math.floor(Math.random() * 10) + 5} minutes`
                    }
                };
                callback({ data: JSON.stringify(mockUpdate) });
            }, Math.random() * 5000 + 5000);
        },
        close: () => console.log('WebSocket connection closed')
    };
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Play notification sound
function playNotificationSound() {
    // In a real app, this would play an actual sound
    console.log('Notification sound played');
}

// Export functions for use in other files
window.app = {
    connectWebSocket,
    formatDate,
    playNotificationSound
};
