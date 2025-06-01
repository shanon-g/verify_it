document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('shifted');
    });

    const topicItems = document.querySelectorAll('.topic-item');

    topicItems.forEach(item => {
        item.addEventListener('click', function() {
            // Check which topic was clicked
            if (this.getAttribute('data-lang-key') === 'moonLanding') {
                createMoonLandingConversation();
            }
            
            // Close sidebar on mobile after topic selection
            const isMobileView = window.matchMedia('(max-width: 768px)').matches;
            if (isMobileView) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('mainContent').classList.remove('shifted');
            }
        });
    });
    
    // Language dropdown functionality
    const languageBtn = document.querySelector('.language-btn');
    const languageMenu = document.getElementById('languageMenu');
    
    languageBtn.addEventListener('click', () => {
        languageMenu.classList.toggle('show');
    });
    
    // Close language menu when clicking elsewhere
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.language-dropdown')) {
            languageMenu.classList.remove('show');
        }
    });
    
    // New Chat button functionality - updated to properly reset everything
    const newChatBtn = document.querySelector('.new-chat-btn');
if (newChatBtn) {
    newChatBtn.addEventListener('click', () => {
        // Clear any existing conversation
        const debateConversation = document.querySelector('.debate-conversation');
        if (debateConversation) {
            debateConversation.remove();
        }
        
        // Clear input field
        const debateInput = document.querySelector('.debate-input');
        if (debateInput) debateInput.value = '';
        
        // Restore welcome content if it's been removed
        const welcomeTitle = document.querySelector('h1[data-lang-key="welcomeTitle"]');
        if (!welcomeTitle) {
            const debateContent = document.querySelector('.debate-content');
            const welcomeTitle = document.createElement('h1');
            welcomeTitle.setAttribute('data-lang-key', 'welcomeTitle');
            welcomeTitle.textContent = 'Welcome to Debate Mode';
            
            const welcomeSubtitle = document.createElement('p');
            welcomeSubtitle.className = 'subtitle';
            welcomeSubtitle.setAttribute('data-lang-key', 'welcomeSubtitle');
            welcomeSubtitle.textContent = 'Challenge ideas, test perspectives, and refine your arguments in real time. Let\'s debate!';
            
            const inputContainer = document.querySelector('.debate-input-container');
            debateContent.insertBefore(welcomeTitle, inputContainer);
            debateContent.insertBefore(welcomeSubtitle, inputContainer);
        } else {
            // Make sure they're visible if they were hidden
            welcomeTitle.style.display = 'block';
            const subtitle = document.querySelector('.subtitle');
            if (subtitle) subtitle.style.display = 'block';
        }
        
        // Apply current language
        const currentLang = document.documentElement.lang || 'en';
        changeLanguage(currentLang);
        
        // Focus on the input field
        debateInput.focus();
    });
}
    
    // Mobile sidebar close
    document.addEventListener('click', (e) => {
        const isMobileView = window.matchMedia('(max-width: 768px)').matches;
        if (isMobileView && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('shifted');
            }
        }
    });

       // Multi-language support
    const translations = {
        'en': {
            'newChat': 'New Chat',
            'today': 'Today',
            'yesterday': 'Yesterday',
            'welcomeTitle': 'Welcome to Debate Mode',
            'welcomeSubtitle': 'Challenge ideas, test perspectives, and refine your arguments in real time. Let\'s debate!',
            'inputPlaceholder': 'Let\'s Debate!',
            'politics': 'Politics',
            'technology': 'Technology',
            'health': 'Health',
            'lifestyle': 'Lifestyle',
            'history': 'History',
            'feedback': 'Feedback'
        },
        'id': {
            'newChat': 'Chat Baru',
            'today': 'Hari Ini',
            'yesterday': 'Kemarin',
            'welcomeTitle': 'Selamat Datang di Mode Debat',
            'welcomeSubtitle': 'Tantang ide, uji perspektif, dan sempurnakan argumen Anda secara real-time. Mari berdebat!',
            'inputPlaceholder': 'Mari Berdebat!',
            'politics': 'Politik',
            'technology': 'Teknologi',
            'health': 'Kesehatan',
            'lifestyle': 'Gaya Hidup',
            'history': 'Sejarah',
            'feedback': 'Umpan Balik'
        },
        'zh': {
            'newChat': '新聊天',
            'today': '今天',
            'yesterday': '昨天',
            'welcomeTitle': '欢迎使用辩论模式',
            'welcomeSubtitle': '挑战想法，测试观点，实时完善您的论点。让我们辩论吧！',
            'inputPlaceholder': '让我们辩论！',
            'politics': '政治',
            'technology': '科技',
            'health': '健康',
            'lifestyle': '生活方式',
            'history': '历史',
            'feedback': '反馈'
        },
        'ja': {
            'newChat': '新しいチャット',
            'today': '今日',
            'yesterday': '昨日',
            'welcomeTitle': 'ディベートモードへようこそ',
            'welcomeSubtitle': 'アイデアに挑戦し、視点をテストし、リアルタイムで議論を洗練させましょう。議論しましょう！',
            'inputPlaceholder': '議論しましょう！',
            'politics': '政治',
            'technology': '技術',
            'health': '健康',
            'lifestyle': 'ライフスタイル',
            'history': '歴史',
            'feedback': 'フィードバック'
        },
        'ko': {
            'newChat': '새 채팅',
            'today': '오늘',
            'yesterday': '어제',
            'welcomeTitle': '토론 모드에 오신 것을 환영합니다',
            'welcomeSubtitle': '아이디어에 도전하고, 관점을 테스트하고, 실시간으로 논쟁을 다듬으세요. 토론합시다!',
            'inputPlaceholder': '토론합시다!',
            'politics': '정치',
            'technology': '기술',
            'health': '건강',
            'lifestyle': '라이프스타일',
            'history': '역사',
            'feedback': '피드백'
        },
        'th': {
            'newChat': 'แชทใหม่',
            'today': 'วันนี้',
            'yesterday': 'เมื่อวาน',
            'welcomeTitle': 'ยินดีต้อนรับสู่โหมดโต้วาที',
            'welcomeSubtitle': 'ท้าทายความคิด ทดสอบมุมมอง และปรับแต่งข้อโต้แย้งของคุณแบบเรียลไทม์ มาโต้วาทีกัน!',
            'inputPlaceholder': 'มาโต้วาทีกัน!',
            'politics': 'การเมือง',
            'technology': 'เทคโนโลยี',
            'health': 'สุขภาพ',
            'lifestyle': 'ไลฟ์สไตล์',
            'history': 'ประวัติศาสตร์',
            'feedback': 'ข้อเสนอแนะ'
        }
    };
    
    // Language selection with translation
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const flagImg = option.querySelector('img').getAttribute('src');
            const langText = option.querySelector('span').innerText;
            const langCode = option.getAttribute('data-lang');
            
            // Update button appearance
            document.querySelector('.language-btn img').setAttribute('src', flagImg);
            document.querySelector('.language-btn span').innerText = langText;
            
            // Update active state
            languageOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Close menu
            languageMenu.classList.remove('show');
            
            // Change language across the site
            changeLanguage(langCode);
        });
    });
    
    // Function to change language
    function changeLanguage(langCode) {
        if (!translations[langCode]) return;
        
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[langCode][key]) {
                const attrName = element.getAttribute('data-lang-attr');
                if (attrName) {
                    // For attributes like placeholder
                    element.setAttribute(attrName, translations[langCode][key]);
                } else {
                    // For text content
                    element.textContent = translations[langCode][key];
                }
            }
        });
        
        // Also update document language
        document.documentElement.lang = langCode;
    }

    const debateInput = document.querySelector('.debate-input');
    const debateSubmit = document.querySelector('.debate-submit');
    const debateContent = document.querySelector('.debate-content');
    
    function handleDebateSubmit() {
        if (!debateInput.value.trim()) return;
        
        const userQuery = debateInput.value.trim();
        
        // Create debate conversation container if it doesn't exist
        let debateConversation = document.querySelector('.debate-conversation');
        if (!debateConversation) {
            debateConversation = document.createElement('div');
            debateConversation.className = 'debate-conversation';
            
            // Clear the welcome content
            const elementsToRemove = ['h1', '.subtitle'];
            elementsToRemove.forEach(selector => {
                const element = debateContent.querySelector(selector);
                if (element) element.remove();
            });
            
            debateContent.insertBefore(debateConversation, document.querySelector('.debate-input-container'));
        }
        
        // Add user message with animation
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message message-animation';
        userMessage.textContent = userQuery;
        debateConversation.appendChild(userMessage);
        
        // Clear input
        debateInput.value = '';
        
        // Scroll to bottom
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 50);
        
        // Add typing indicator with delay
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dot.className = 'typing-dot';
            typingIndicator.appendChild(dot);
        }
        debateConversation.appendChild(typingIndicator);
        
        // Scroll to show typing indicator
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 50);
        
        // Check for specific query and respond accordingly (after delay)
        setTimeout(() => {
            // Remove typing indicator
            typingIndicator.remove();
            
            if (userQuery.toLowerCase().includes('going to get a good grade')) {
                const systemResponse = document.createElement('div');
                systemResponse.className = 'system-message message-animation';
                systemResponse.textContent = "First, according to my debate database from 5 million recorded data points with similar questions and considering your current project, you are correct—I'm positive you'll get a good grade from this. The presentation was very good, the topic was well-chosen, and your project idea is original and truly unique. You showed a clear understanding of the subject, communicated your points effectively, and kept the audience engaged. All these factors combined make me confident that you're going to get a good grade from this question!";
                debateConversation.appendChild(systemResponse);
            } else {
                // Default response for other queries
                const systemResponse = document.createElement('div');
                systemResponse.className = 'system-message message-animation';
                systemResponse.textContent = `Due to heavy traffic, your question about '${userQuery}' is currently in a queue. Please hold on while I process it and provide you with accurate, verified information shortly.`;
                debateConversation.appendChild(systemResponse);
            }
            
            // Scroll to bottom again after adding response
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 50);
        }, 2500); // 2.5 second delay for typing animation
    }

    function createMoonLandingConversation() {
    // Clear any existing conversation
    const debateContent = document.querySelector('.debate-content');
    const existingConversation = document.querySelector('.debate-conversation');
    if (existingConversation) {
        existingConversation.remove();
    }
    
    // Hide welcome content
    const elementsToHide = ['h1', '.subtitle'];
    elementsToHide.forEach(selector => {
        const element = debateContent.querySelector(selector);
        if (element) element.style.display = 'none';
    });
    
    // Create new conversation container
    const debateConversation = document.createElement('div');
    debateConversation.className = 'debate-conversation';
    debateContent.insertBefore(debateConversation, document.querySelector('.debate-input-container'));
    
    // Moon landing conversation - display all at once
    const conversation = [
        { type: 'user', text: 'The Moon landings were faked; the U.S. lacked the technology in 1969.' },
        { type: 'system', text: 'Actually, the Apollo Guidance Computer, though limited by today\'s standards, effectively navigated and landed astronauts on the Moon.' },
        { type: 'user', text: 'But why aren\'t there stars in the Moon landing photos?' },
        { type: 'system', text: 'The absence of stars is due to camera settings; the lunar surface\'s brightness required fast shutter speeds, making faint stars invisible.' },
        { type: 'user', text: 'Couldn\'t the photos have been staged on Earth?' },
        { type: 'system', text: 'Independent missions, like India\'s Chandrayaan-2, have captured images of Apollo landing sites, confirming their authenticity.' }
    ];
    
    // Add all messages at once
    conversation.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `${message.type}-message message-animation`;
        messageElement.textContent = message.text;
        debateConversation.appendChild(messageElement);
    });
    
    // Scroll to bottom once all messages are added
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 100);
}
    
    // Helper function to add a message to the conversation
    function addMessageToConversation(type, text, container) {
        const messageElement = document.createElement('div');
        messageElement.className = `${type}-message message-animation`;
        messageElement.textContent = text;
        container.appendChild(messageElement);
        
        // Scroll to new message
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 50);
    }
    
    // Event listeners for debate submission
    debateSubmit.addEventListener('click', handleDebateSubmit);
    debateInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleDebateSubmit();
        }
    });
});