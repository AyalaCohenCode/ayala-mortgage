// טופס יצירת קשר: שולח את הפרטים לוואטסאפ של איילה
const WHATSAPP_NUMBER = '972548532969'; // 054-853-2969 בפורמט בינלאומי

const form = document.getElementById('leadForm');
const thanks = document.getElementById('thanks');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // לא לרענן את הדף

  const data = new FormData(form);
  const lines = [
    'שלום איילה, אשמח לשיחת ייעוץ.',
    'שם: ' + data.get('name'),
    'טלפון: ' + data.get('phone'),
    'נושא: ' + data.get('topic'),
  ];
  const message = (data.get('message') || '').trim();
  if (message) lines.push('הודעה: ' + message);

  const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener');

  form.hidden = true;
  thanks.hidden = false;
});
