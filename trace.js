const trace = label => val => {
    console.log(`${label}: ${val}`);
    return val;
}

module.exports = trace;
