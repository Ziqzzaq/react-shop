export type AppProps<T> = T extends (...args: any) => infer R ? R : any;
