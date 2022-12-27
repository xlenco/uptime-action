export default {
    list: [
        {
            host: "xlenco.eu.org ",
            ssl: true,
            port: 443,
            name: "xlenco's blog",
            method: "GET",
            ok: "200-299",
        },
    ],
    filedir: "./data/",
    filename: "{{@date}}.json",
    limit: 240,
    node: "GitHub Action",
};
