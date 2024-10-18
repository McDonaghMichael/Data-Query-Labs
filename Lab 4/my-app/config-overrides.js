module.exports = function override(config, env) {
    config.module.rules = config.module.rules.filter(
        (rule) => rule.loader !== 'source-map-loader'
    );
    return config;
};
