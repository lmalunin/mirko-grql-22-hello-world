import axios from "axios";

export const GRAPHQL_URL = 'api';

export const FetchServices = {
    postData: (data: any) => axios.post(GRAPHQL_URL,
        {
            query: `
                query {
                    greeting
                }`
        }),
}