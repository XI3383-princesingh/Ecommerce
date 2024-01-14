
   export const formatIndianCurrency = (amountString:string) => {
        // Convert the string to a valid number
        const amount = parseFloat(amountString);
      
        // Check if the conversion is successful
        if (isNaN(amount)) {
          return 'Invalid number';
        }
      
        // Format the number as Indian currency
        const formattedAmount = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(amount);
      
        return formattedAmount;
      };

