"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oauth2Configuration = {
    model: require('../Application/Services/OAuth2TokenServices/OAuth2TokenServices'),
    accessTokenLifetime: 24 * 60 * 60,
    refreshTokenLifetime: (24 * 60 * 60) * 2,
};
exports.default = oauth2Configuration;
//# sourceMappingURL=oauth2.js.map