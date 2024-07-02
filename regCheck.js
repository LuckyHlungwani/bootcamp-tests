function regCheck(regNo, regLocation) {
    return regNo.endsWith(regLocation);
}

console.log(regCheck('DC 55 YU GP', 'GP'));