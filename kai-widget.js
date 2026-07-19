/**
 * KAI — Floating Chat Widget Controller for Kurchika's Portfolio
 * Pure JS, smooth auto-scroll, random typing delay, capabilities help intent, and session-scoped tooltips.
 */

(function () {
  'use strict';

  /* ── Element References ─────────────────────────────────── */
  const bubble      = document.getElementById('kaiBubble');
  const widget      = document.getElementById('kaiWidget');
  const closeBtn    = document.getElementById('kaiClose');
  const chatArea    = document.getElementById('kaiChatArea');
  const inputField  = document.getElementById('kaiInput');
  const sendBtn     = document.getElementById('kaiSendBtn');
  const inputForm   = document.getElementById('kaiForm');
  const suggestions = document.getElementById('kaiSuggestions');
  const tooltip     = document.getElementById('kaiTooltip');

  /* ── State ──────────────────────────────────────────────── */
  let isOpen            = false;
  let isBotTyping       = false;
  let suggestionsShown  = true;

  /* ──────────────────────────────────────────────────────────
     1. WELCOME TOOLTIP (shows once per browser session)
  ──────────────────────────────────────────────────────────── */
  if (tooltip && !sessionStorage.getItem('kaiTooltipSeen')) {
    sessionStorage.setItem('kaiTooltipSeen', '1');

    // Fade in after 1.8s, fade out after 5s visible
    setTimeout(() => {
      tooltip.classList.add('kai-tooltip--visible');
      setTimeout(() => {
        tooltip.classList.remove('kai-tooltip--visible');
      }, 5000);
    }, 1800);
  }

  /* ──────────────────────────────────────────────────────────
     2. OPEN / CLOSE WIDGET
  ──────────────────────────────────────────────────────────── */
  function openWidget() {
    isOpen = true;
    widget.classList.add('kai-open');
    bubble.classList.add('kai-bubble--active');
    bubble.setAttribute('aria-expanded', 'true');
    // Hide tooltip immediately on open
    if (tooltip) tooltip.classList.remove('kai-tooltip--visible');
    // Focus input after transition ends
    setTimeout(() => inputField.focus(), 380);
  }

  function closeWidget() {
    isOpen = false;
    widget.classList.remove('kai-open');
    bubble.classList.remove('kai-bubble--active');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.focus();
  }

  bubble.addEventListener('click', () => isOpen ? closeWidget() : openWidget());
  closeBtn.addEventListener('click', closeWidget);

  // Escape key closes the widget
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeWidget();
  });

  /* ──────────────────────────────────────────────────────────
     3. SMOOTH AUTO-SCROLL (never jumps)
  ──────────────────────────────────────────────────────────── */
  function scrollToBottom() {
    requestAnimationFrame(() => {
      chatArea.scrollTo({ top: chatArea.scrollHeight, behavior: 'smooth' });
    });
  }

  /* ──────────────────────────────────────────────────────────
     4. AUTO-RESIZE TEXTAREA
  ──────────────────────────────────────────────────────────── */
  function autoResize() {
    inputField.style.height = 'auto';
    inputField.style.height = Math.min(inputField.scrollHeight, 80) + 'px';
  }

  /* ──────────────────────────────────────────────────────────
     5. MESSAGE RENDERING
  ──────────────────────────────────────────────────────────── */
  function appendMessage(html, role) {
    const wrapper = document.createElement('div');
    wrapper.className = `kai-msg kai-msg--${role}`;

    const avatar = document.createElement('div');
    avatar.className = 'kai-msg__avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = role === 'bot' ? '🤖' : '👤';

    const bubble_el = document.createElement('div');
    bubble_el.className = 'kai-msg__bubble';
    bubble_el.innerHTML = html;

    if (role === 'bot') {
      wrapper.appendChild(avatar);
      wrapper.appendChild(bubble_el);
    } else {
      wrapper.appendChild(bubble_el);
      wrapper.appendChild(avatar);
    }

    chatArea.appendChild(wrapper);
    scrollToBottom();
    return wrapper;
  }

  /* ──────────────────────────────────────────────────────────
     6. HIDE SUGGESTED CHIPS (after first interaction)
  ──────────────────────────────────────────────────────────── */
  function hideSuggestions() {
    if (suggestionsShown) {
      suggestionsShown = false;
      suggestions.classList.add('kai-suggestions--hidden');
    }
  }

  /* ──────────────────────────────────────────────────────────
     7. EXTENDED INTENTS (pre-processes before knowledgeBase)
        — Resume download
        — Help / Capabilities
  ──────────────────────────────────────────────────────────── */
  function getExtendedResponse(text) {
    const input = text.toLowerCase().trim();

    /* Resume Intent */
    const resumeKw = [
      'resume', 'cv', 'curriculum vitae', 'download resume',
      'get your resume', 'can i get your resume', 'get resume'
    ];
    if (resumeKw.some(k => input.includes(k))) {
      return `<div class="response-card">
  <h3>📄 Resume</h3>
  <p>Click below to download Kurchika's latest resume.</p>
  <a href="KandenaKurchikaResume.pdf"
     download="Kandena_Kurchika_Resume.pdf"
     class="kai-resume-btn"
     target="_blank"
     rel="noopener">
    ⬇ Download Resume
  </a>
</div>`;
    }

    /* Capabilities / Help Intent */
    const helpKw = [
      'what can you do', 'help', 'capabilities', 'commands',
      'how can you help', 'what do you know', 'what can i ask',
      'what can you tell', 'guide me', 'options'
    ];
    if (helpKw.some(k => input.includes(k))) {
      return `<div class="response-card">
  <h3>🤖 What I Can Help With</h3>
  <p>Here's what you can ask me about Kurchika:</p>
  <ul class="kai-capabilities">
    <li>👤 <strong>About Me</strong> &nbsp;— <em>"Who is Kurchika?"</em></li>
    <li>💻 <strong>Skills</strong> &nbsp;— <em>"What are your skills?"</em></li>
    <li>📂 <strong>Projects</strong> &nbsp;— <em>"What projects have you built?"</em></li>
    <li>🏢 <strong>Internship</strong> &nbsp;— <em>"Tell me about your internship"</em></li>
    <li>🏆 <strong>Certifications</strong> &nbsp;— <em>"What certifications do you have?"</em></li>
    <li>📧 <strong>Contact</strong> &nbsp;— <em>"How can I contact you?"</em></li>
    <li>📄 <strong>Resume</strong> &nbsp;— <em>"Download resume"</em></li>
  </ul>
</div>`;
    }

    return null; // Fall through to knowledgeBase getBotResponse
  }

  /* ──────────────────────────────────────────────────────────
     8. SEND HANDLER
        — Typing indicator with 500-700ms randomised delay
  ──────────────────────────────────────────────────────────── */
  function handleSend(message) {
    const text = message.trim();
    if (!text || isBotTyping) return;

    hideSuggestions();
    appendMessage(text, 'user');

    // Reset input
    inputField.value = '';
    inputField.style.height = 'auto';
    sendBtn.disabled = true;

    // Typing indicator
    isBotTyping = true;
    const typingEl = appendMessage(
      '<span class="kai-typing-dot" aria-hidden="true"></span>' +
      '<span class="kai-typing-dot" aria-hidden="true"></span>' +
      '<span class="kai-typing-dot" aria-hidden="true"></span>',
      'bot'
    );
    typingEl.classList.add('kai-typing');
    typingEl.setAttribute('aria-label', 'KAI is typing');

    // 500–700ms randomised delay (feels natural)
    const delay = 500 + Math.floor(Math.random() * 201);

    setTimeout(() => {
      typingEl.remove();

      const response = getExtendedResponse(text) || getBotResponse(text);
      appendMessage(response, 'bot');

      isBotTyping = false;
      sendBtn.disabled = inputField.value.trim().length === 0;
    }, delay);
  }

  function sendMessage() {
    const msg = inputField.value;
    if (!msg.trim() || isBotTyping) return;
    handleSend(msg);
  }

  /* ──────────────────────────────────────────────────────────
     9. INPUT EVENTS
  ──────────────────────────────────────────────────────────── */
  inputField.addEventListener('input', () => {
    sendBtn.disabled = inputField.value.trim().length === 0 || isBotTyping;
    autoResize();
  });

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
  });

  /* ──────────────────────────────────────────────────────────
     10. SUGGESTED CHIPS — click & keyboard
  ──────────────────────────────────────────────────────────── */
  suggestions.addEventListener('click', (e) => {
    const chip = e.target.closest('.kai-chip');
    if (!chip) return;
    handleSend(chip.dataset.q);
  });

  suggestions.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const chip = e.target.closest('.kai-chip');
      if (chip) {
        e.preventDefault();
        handleSend(chip.dataset.q);
      }
    }
  });

  // Init button state
  sendBtn.disabled = true;

})();
