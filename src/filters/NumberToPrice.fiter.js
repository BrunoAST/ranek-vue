const NumberToPrice = (value) => {
    value = Number(value);

    if (isNaN(value)) return value;

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export default NumberToPrice;
