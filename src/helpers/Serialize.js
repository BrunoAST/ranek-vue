export function serialize(obj) {
    let queryString = "";

    // Acessa o texto digitado pelo usuário no input e constrói uma query de requisição para a API. (json-server)
    for (let key in obj) {
        queryString += `&${key}=${obj[key]}`;
    }

    return queryString;
}
