// Simple tracking practice: these events can later be sent to GA4/GTM/Meta Pixel.
document.querySelectorAll('[data-track]').forEach(function(el){el.addEventListener('click',function(){console.log('Tracking event:',el.dataset.track);});});
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('formStatus').textContent='Message submitted for tracking practice.';console.log('Tracking event: contact_form_submit');});}
