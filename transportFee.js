function transportFee(shift) {
    switch (shift) {
        case "morning":
            return "R20"; 
        case "afternoon":
            return "R10"; 
        case "nightshift":
            return "free"; 
        default:
            return "Invalid shift";
    }
}
console.log(transportFee('morning'), 'R20');
console.log(transportFee('afternoon'), 'R10');
console.log(transportFee('nightshift'), 'free', 'for night shift return free');