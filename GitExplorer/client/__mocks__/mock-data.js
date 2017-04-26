/**
 * Created by bcuser on 4/18/17.
 */

const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };

        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Silvia'
                })
            };

        default:
            return {}
    }
};

export default getData;