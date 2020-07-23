if (!process.env.DEBUG || (process.env.DEBUG && process.env.DEBUG.toLowerCase() === 'false')) {
    console.debug = () => { };
}
//# sourceMappingURL=Logger.js.map