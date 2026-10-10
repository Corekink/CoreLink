const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const oldModalSubmit = `      async function handleModalSubmit(e) {
        e.preventDefault();
        const submitBtn = document.getElementById('modal-submit-btn');
        const statusBox = document.getElementById('modal-status');
        const name = document.getElementById('modal-name').value;
        const phone = document.getElementById('modal-phone').value;
        const email = document.getElementById('modal-email').value;
        const service = document.getElementById('modal-service').value;
        const notes = document.getElementById('modal-notes').value;

        if (submitBtn) submitBtn.disabled = true;
        if (statusBox) {
          statusBox.classList.remove('hidden');
          statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-slate-800 text-[#D4AF37]';
          statusBox.textContent = 'Transmitting request to Ajman office...';
        }

        try {
          const res = await fetch('/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName: name, phone, email, service, notes })
          });
          const data = await res.json();
          if (res.ok && data.success) {
            statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
            statusBox.textContent = 'Request transmitted successfully. An administrative consultant will contact you.';
            setTimeout(() => {
              closeInquiryModal();
              document.getElementById('modal-form').reset();
            }, 2500);
          } else {
            statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-amber-500/20 text-amber-300 border border-amber-500/40';
            statusBox.textContent = data.error || 'Thank you! You can also reach our Ajman desk at +971 6 805 5093 or on WhatsApp +971 56 350 6552.';
          }
        } catch (err) {
          statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
          statusBox.textContent = 'Request received. You can also connect directly via WhatsApp at +971 56 350 6552.';
          setTimeout(() => {
            closeInquiryModal();
          }, 2500);
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      }`;

const newModalSubmit = `      async function handleModalSubmit(e) {
        e.preventDefault();
        const submitBtn = document.getElementById('modal-submit-btn');
        const statusBox = document.getElementById('modal-status');
        const nameInput = document.getElementById('modal-name');
        const phoneInput = document.getElementById('modal-phone');
        const emailInput = document.getElementById('modal-email');
        const serviceInput = document.getElementById('modal-service');
        const notesInput = document.getElementById('modal-notes');

        const name = (nameInput?.value || '').trim();
        const phone = (phoneInput?.value || '').trim();
        const email = (emailInput?.value || '').trim();
        const service = serviceInput?.value || 'Service Inquiry';
        const message = (notesInput?.value || '').trim();

        if (!name || !phone || !email || !message) {
          showStatus(statusBox, 'error', 'Please complete all required fields.');
          return false;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span><span>Sending to info@corelinkservices.ae...</span>';
        }
        showStatus(statusBox, 'loading', 'Transmitting inquiry to official desk...');

        try {
          const payload = {
            name,
            phone,
            email,
            service,
            message,
            _subject: 'New Service Request from CORE LINK Website: ' + service,
            _template: 'table',
            _captcha: 'false'
          };

          const response = await fetch('https://formsubmit.co/ajax/info@corelinkservices.ae', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const result = await response.json();

          if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
            showStatus(statusBox, 'success', 'Thank you! We will contact you shortly');
            setTimeout(() => {
              closeInquiryModal();
              document.getElementById('modal-form').reset();
              statusBox.classList.add('hidden');
            }, 2500);
          } else {
            throw new Error(result.message || 'Error transmitting request.');
          }
        } catch (err) {
          const mailtoFallback = 'mailto:info@corelinkservices.ae?subject=' + encodeURIComponent('Service Request: ' + service) + '&body=' + encodeURIComponent('Name: ' + name + '\\nPhone: ' + phone + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
          const errorHtml = '<div class="space-y-2">' +
            '<div>Could not connect. Please click below to send directly via email:</div>' +
            '<a href="' + mailtoFallback + '" class="inline-flex items-center gap-1 px-3 py-1 rounded bg-red-500/20 text-red-200 text-xs font-bold">' +
            '<span>Send Email to info@corelinkservices.ae</span>' +
            '</a>' +
            '</div>';
          showStatus(statusBox, 'error', errorHtml, true);
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Request to Ajman Office</span>';
          }
        }
      }`;

html = html.replace(oldModalSubmit, newModalSubmit);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated modal handler!');
