  window.onload = function() {
      const button = document.querySelector('.button');
      button.addEventListener('click', function() {
        alert("Мы всегда рады вам помочь");
      });
    }
document.addEventListener('DOMContentLoaded', () => {More actions
 const sumInput = document.querySelector('.sum');
 const timeInput = document.querySelector('.time');
 const percentP = document.querySelector('p.percent');
 const button = document.querySelector('.button');
 const resultDiv = document.querySelector('.result');

 const annualInterestRate = 20; // 20% годовых

 button.addEventListener('click', () => {
   const principal = parseFloat(sumInput.value);
   const years = parseInt(timeInput.value);

   if (isNaN(principal) || principal <= 0) {
     resultDiv.textContent = 'Пожалуйста, введите корректную сумму кредита.';
     resultDiv.style.color = 'red';
     return;
   }

   if (isNaN(years) || years <= 0) {
     resultDiv.textContent = 'Пожалуйста, введите корректный срок в годах.';
     resultDiv.style.color = 'red';
     return;
   }

   // Обновляем текст процентной ставки
   percentP.textContent = 'Ваша процентная ставка:'+ annualInterestRate + '%';

   const monthlyInterestRate = annualInterestRate / 100 / 12;
   const numberOfPayments = years * 12;

   const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
     (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

   resultDiv.style.color = 'black';More actions
   resultDiv.textContent = 'Ваш ежемесячный платеж:'+ monthlyPayment.toFixed(2) +'₽';
 });
})
