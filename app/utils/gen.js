export default class Gen {

    static isDevelopment() {
        return true;
    }

    static isServer(){
        return false;
    }

    static isProduction(){
        return false;
    }

    static getBaseUrl() {
        return Gen.isDevelopment() ? 'https://quicknodeserver.herokuapp.com' : 'https://lolmenow.herokuapp.com';
    }

    static getDisplayTime(time) {
        // TODO: implement this
        return time;
    }

    static getAuth() {
        return {
            headers: {
                Authorization: ''
            }
        };
    }

    static isLogEnabled() {
        return true;
    }

    static log(...printStatement) {
        if (this.isLogEnabled() && this.isDevelopment()) {
            console.log(...printStatement);
        }
    }

    static merge(a1, a2) {
        const hash = new Map();
        a1.concat(a2).forEach((obj) => {
            hash.set(obj['_id'], Object.assign(hash.get(obj['_id']) || {}, obj));
        });
        return Array.from(hash.values());
    }
}