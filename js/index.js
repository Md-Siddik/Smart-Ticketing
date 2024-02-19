const buyTickets = document.getElementById('buy-tickets');
buyTickets.addEventListener("click", function(){
    const ticketSection = document.getElementById("ticket-section").scrollIntoView({behavior: 'smooth'});
})

const seatNumber = document.getElementsByTagName('kbd');

document.getElementById('total-seat').innerText = seatNumber.length;

let totalSeat = document.getElementById('total-seat').innerText;
const ticketsView = document.getElementById('ticket-view');
const ticketDiv = document.getElementById('ticket-div');

let totalCost = document.getElementById('total-cost');
totalCost.innerText = 0;
totalCost = 0;

const newCouponCode = document.getElementById('new15');
const coupleCouponCode = document.getElementById('couple20');

let grandTotal = document.getElementById('grand-total');
grandTotal.innerText = 0;
grandTotal = 0;
let couponCode = document.getElementById('coupon-apply');
let discountAmount = 0;



let count = 0;
function bookedSeat(seatId){
    if(count < 4){
        const booked = document.getElementById(seatId.target.innerHTML);
    
        booked.classList.add('bg-lightGreen');
        count = count + 1;

        document.getElementById('ticketNum').innerText = count;
        
        totalSeat = totalSeat - 1;
        document.getElementById('total-seat').innerText = totalSeat;
        
        const ticketsView = document.getElementById('ticket-view');
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add("flex");
        ticketDiv.classList.add("justify-between");
        ticketDiv.classList.add("inter-normal");
        ticketDiv.classList.add("text-lg");
        ticketDiv.classList.add("py-4");

        const ticketParagraph1 = document.createElement('p');
        ticketParagraph1.innerText = booked.innerText;
        ticketDiv.appendChild(ticketParagraph1)
        const ticketParagraph2 = document.createElement('p');
        ticketParagraph2.innerText = 'Economoy';
        ticketDiv.appendChild(ticketParagraph2)
        const ticketParagraph3 = document.createElement('p');
        ticketParagraph3.innerText = 550;
        ticketDiv.appendChild(ticketParagraph3)
        // ticketParagraph.innerText = booked.innerText;
        ticketsView.appendChild(ticketDiv);

        totalCost = totalCost + 550;
        document.getElementById('total-cost').innerText = totalCost;
        
        return totalCost;
    }
    else {
        alert("You can't choose more than 4 seat...")
    }
}

for (let book of seatNumber) {
    book.addEventListener("click", bookedSeat);
}

couponCodeApply.addEventListener('click', function(){
    if(couponCode.value === 'NEW15'){

        let totalCost = document.getElementById('total-cost');
        let discountAmount = (totalCost.innerText/100)*15;
        let afterDiscount = totalCost.innerText - discountAmount;
        document.getElementById('grand-total').innerText = afterDiscount;
        console.log(afterDiscount);
        document.getElementById('couponForm').classList.add('hidden');
    }
    else if(couponCode.value === 'Couple 20'){
        let totalCost = document.getElementById('total-cost');
        let discountAmount = (totalCost.innerText/100)*20;
        let afterDiscount = totalCost.innerText - discountAmount;
        document.getElementById('grand-total').innerText = afterDiscount;
        console.log(afterDiscount);
        document.getElementById('couponForm').classList.add('hidden');
    }
})

const confirmTicket = document.getElementById('confirm');
confirmTicket.addEventListener('click', function(){
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
})