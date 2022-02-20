import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: 'dv6508jo',
    dataset: 'production',
    apiVersion: '2022-02-10',
    token: 'skcm3mAYHm0WyaU4nZKZVvdcv2cQXOy5sZJMcq0JRk7VwFqRlsFbXpj70vJzyKi6BpPCGl5U0C2rOToGgpYVi2zYoTScIFWQCKyO2TcQZsKQAB3LVIBQZYIZF7OaMF8XOrDo8V1Uhd7EQvoKMYxlE9l7owv7nb54VoSHT9IYt91yFZhkWham',
    useCdn: false,
})