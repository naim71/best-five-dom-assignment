document.getElementById("player-expense-calculate").addEventListener('click',function(){
        const perPlayerField = document.getElementById("input-box");
        const playerAmountString = perPlayerField.value;
        const playerAmount = parseFloat(playerAmountString);        

        // player expense display
       const playerExpenseField = document.getElementById("expense-field");
       const playerExpenseString = playerExpenseField.innerText;
       const playerExpense = parseFloat(playerExpenseString);
       playerExpenseField.innerText = playerAmount;

       perPlayerField.value = '';

})

document.getElementById("total-calculation").addEventListener('click',function(){
    const managerWageField = document.getElementById("manager-cost");
    const managerWageString = managerWageField.value;
    const managerWage = parseFloat(managerWageString);
    managerWageField.value='';

    const coachWageField = document.getElementById("coach-cost");
    const coachWageString = coachWageField.value;
    const coachWage = parseFloat(coachWageString);
    coachWageField.value = '';

    const playerExpenseField = document.getElementById("expense-field");
       const playerExpenseString = playerExpenseField.innerText;
       const playerExpense = parseFloat(playerExpenseString);


    const totalField = document.getElementById("total-field");
    const totalFieldString = totalField.innerText;
    const totalValue = parseFloat(totalFieldString);
    totalField.innerText = managerWage + coachWage + playerExpense;
    
    
})