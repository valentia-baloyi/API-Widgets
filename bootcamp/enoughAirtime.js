export default function enoughAirtime(usage, availableAirtime) {
    const usageArray = usage.split(',');
    let totalCost = 0;
    for (let i = 0; i < usageArray.length; i++) {
      const item = usageArray[i].trim();
      switch (item) {
        case 'call':
          totalCost += 1.88;
          break;
        case 'data':
          totalCost += 12;
          break;
        case 'sms':
          totalCost += 0.75;
          break;
          default:
     
          break;
      }
    }
    const airtimeLeft = availableAirtime - totalCost;
    return airtimeLeft >= 0 ? 'R' + airtimeLeft.toFixed(2) : 'R0.00';
  }