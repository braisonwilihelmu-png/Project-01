    function toggleMenu(btn) {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('open');
    }
        /* Mobile nav toggle */
    function toggleMenu(btn) {
      document.getElementById('mobileMenu').classList.toggle('open');
    }

    /* FAQ accordion */
    function toggleFaq(trigger) {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      /* Close all open items first */
      document.querySelectorAll('.faq-item.open').forEach(function(el) {
        el.classList.remove('open');
      });

      /* Open the clicked one if it was closed */
      if (!isOpen) {
        item.classList.add('open');
      }
    }