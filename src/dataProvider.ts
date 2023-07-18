// in src/dataProvider.ts
import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = 'https://order-management-alpha-z2qvz.ondigitalocean.app/api/core';
const httpClient = fetchUtils.fetchJson;

// TypeScript users must reference the type `DataProvider`
export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        console.log(resource,"resource")
        console.log(params, "params")
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.results,
            total: json.count,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.count
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}/`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) => {      
        console.log(resource)
        console.log(params.id, "params.id")
        return httpClient(`${apiUrl}/${resource}/${params.id}/`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }))
    },

    deleteMany: (resource, params) => {
        console.log(resource)
        console.log(params, "params on many")
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        console.log(stringify(query), "query")
        return httpClient(`${apiUrl}/${resource}/${params.ids}/`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};