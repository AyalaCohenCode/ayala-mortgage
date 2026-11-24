// מחשבון משכנתא: מחשב תשלום חודשי לפי נוסחת שפיצר
const amountInput = document.getElementById('amt');
const yearsInput = document.getElementById('yrs');
const rateInput = document.getElementById('rate');

// הופך מספר לטקסט בשקלים, למשל 5,278 ₪
function ils(value) {
  return Math.round(value).toLocaleString('he-IL') + ' ₪';
}

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function update() {
  const amount = Number(amountInput.value);
  const years = Number(yearsInput.value);
  const rate = Number(rateInput.value);

  const months = years * 12;            // כמה תשלומים יש
  const r = rate / 100 / 12;            // ריבית חודשית
  const monthly = r === 0
    ? amount / months                   // בלי ריבית: פשוט מחלקים
    : amount * r / (1 - Math.pow(1 + r, -months));
  const total = monthly * months;       // כמה מחזירים בסך הכול
  const interest = total - amount;      // כמה מזה ריבית
  const interestPct = Math.round((interest / total) * 100);

  setText('amountText', ils(amount));
  setText('yearsText', years + ' שנים');
  setText('rateText', rate.toFixed(1) + '%');
  setText('monthlyText', ils(monthly));
  setText('totalText', ils(total));
  setText('interestText', ils(interest));
  setText('principalPct', (100 - interestPct) + '%');
  setText('interestPct', interestPct + '%');
  document.getElementById('bar').style.width = (100 - interestPct) + '%';
}

amountInput.addEventListener('input', update);
yearsInput.addEventListener('input', update);
rateInput.addEventListener('input', update);
update();
