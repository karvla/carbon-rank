export interface MaterialItem {
    category: String,
    productName: String,
    production: Number,
    transportDistanceKm: Number,
    maintenance: Number,
    liquidate: Number,
    lifeCycle10y: Number,
    lifeCycle70y: Number,
}

export async function loadFromCsv() : Promise<MaterialItem[]> {
    const path = './quiz_data.csv';
    const response =  await fetch(path);
    const text = await response.text();
    let lines = text.split('\n');
    lines.pop();
    const body = lines.splice(1);
    return body
        .map((line) => line.split(','))
        .map((values) => {
            return {
                category: values[0],
                productName: values[1],
                transportDistanceKm: parseInt(values[2]),
                maintenance: parseInt(values[3]),
                liquidate: parseInt(values[4]),
                lifeCycle10y: parseInt(values[5]),
                lifeCycle70y: parseInt(values[6]),
            }
        });
}

