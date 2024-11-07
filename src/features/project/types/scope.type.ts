
export type scopeParametersData = {
    id: string;
    title: string;
    description: string
    media: any[]
}

export type scopes<T> = {
    status :{
        code: string,
        description: string
    }
} & T

export type scopeParameters = {
    parameters: scopeParametersData[]
}

