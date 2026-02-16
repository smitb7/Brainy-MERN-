let totalpurchaseammount = 120;

if (totalpurchaseammount > 100) {
  let discount = totalpurchaseammount * 0.1;
  let afterdiscountpayable = totalpurchaseammount - discount;

  console.log(
    "You are applicable for 10% Discount and you have to pay , " +
      afterdiscountpayable
  );
} else {
  console.log(
    "You aren't eligible for discount but we will give you 5 toffieess..🤓 ╾━╤デ╦︻ (•_- )!!"
  );
}
