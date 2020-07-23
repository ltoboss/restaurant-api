declare const configuration: {
    public_dir: string;
    static_dir: string;
    dev: boolean;
    port: string | number;
    url: string;
    seeders_port: string | number;
    oauth: {
        clients: {
            sga: {
                name: string;
                secret: string;
                description: string;
                enabled: boolean;
            };
            app: {
                name: string;
                secret: string;
                description: string;
                enabled: boolean;
            };
        };
    };
    deleteLogDays: string | number;
    messageQueueingUrl: string;
};
export default configuration;
