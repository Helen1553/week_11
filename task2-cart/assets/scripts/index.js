let discountApplied = false;  // Устанавливаем флаг для отслеживания применения скидки

// Функция для значка валюты рядом с ценой (форматирует число в строку валюты)
const toCurrency = (num) => {
    const format = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 0,
    }).format(num);
    return format;
}

// Ищем все необходимые переменные в html и переводим их значения в числовые (используя унарный плюс)
const price1 = +(document.querySelector('.price1').innerText);
document.querySelector('.price1').innerHTML = toCurrency(price1);

const price2 = +(document.querySelector('.price2').innerText);
document.querySelector('.price2').innerHTML = toCurrency(price2);

const price3 = +(document.querySelector('.price3').innerText);
document.querySelector('.price3').innerHTML = toCurrency(price3);

const price4 = +(document.querySelector('.price4').innerText);
document.querySelector('.price4').innerHTML = toCurrency(price4);

const discountText = document.querySelector('.discountText');

const taxes = document.querySelector('.taxes');

// Суммируем все цены; полученный итоговый total выводим на экран
const sum = price1 + price2 + price3 + price4;
document.querySelector('.totalcost').innerHTML = toCurrency(sum);



// Функция для расчета скидки в 20%
const getDiscount = () => {
    // Если скидка применяется:
    if (!discountApplied) {
        document.querySelector('.price1').innerHTML = toCurrency(Math.round((price1-((price1*20)/100))*100)/100);
        document.querySelector('.price2').innerHTML = toCurrency(Math.round((price2-((price2*20)/100))*100)/100);
        document.querySelector('.price3').innerHTML = toCurrency(Math.round((price3-((price3*20)/100))*100)/100);
        document.querySelector('.price4').innerHTML = toCurrency(Math.round((price4-((price4*20)/100))*100)/100);
        document.querySelector('.totalcost').innerHTML = toCurrency(Math.round((sum-((sum*20)/100))*1000)/1000);

        //Надпись на кнопке после применения скидки меняется на "Скидка применена"
        discountText.innerHTML = 'Discount applied';
        discountText.style.color = 'black';

        // При применении скидки высвечивается "Налоги включены в стоимость"
        taxes.style.color = '#4a89eeaf';
        

        discountApplied = true; // Вешаем флажок
    } else {
        // Если скидка не применяется:
        document.querySelector('.price1').innerHTML = toCurrency(price1);
        document.querySelector('.price2').innerHTML = toCurrency(price2);
        document.querySelector('.price3').innerHTML = toCurrency(price3);
        document.querySelector('.price4').innerHTML = toCurrency(price4);
        document.querySelector('.totalcost').innerHTML = toCurrency(sum); 
        discountApplied = false; // Сбрасываем флажок

        discountText.innerHTML = 'Use a discount';
        taxes.style.color = '#707070';
    }
}

// Добавляем обработчик события на кнопку
document.querySelector('.discount').addEventListener('click', getDiscount);


