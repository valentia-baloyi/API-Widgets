
export default function totalPhoneBill(data) {
    var calls = data.split(",").filter(function(item) {
      return item.trim().startsWith("call");
    });
    var smses = data.split(",").filter(function(item) {
      return item.trim().startsWith("sms");
    });
    var callCost = calls.length * 2.75;
    var smsCost = smses.length * 0.65;
    return "R" + (callCost + smsCost).toFixed(2);
  }