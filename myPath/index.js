const path = {
    join(...params) {
        return (
            '/' +
            params
                .map((param) =>
                    param.replace(new RegExp('^[' + '/' + ']+'), '')
                )
                .join('/')
        );
    },
    extname(path) {
        let index = path.lastIndexOf('.');
        return path.slice(index);
    },
    basename(path) {
        let index = path.lastIndexOf('/');
        return path.slice(index);
    },
    dirname(path) {
        let index = path.lastIndexOf('/');
        return path.slice(0, index);
    },
    relative(path1, path2) {
        const out = '../';
        let result = '';
        path1 = path1.split('/');
        path2 = path2
            .split('/')
            .filter((elem) => elem != '')
            .reverse();
        for (let i in path2) {
            if (path1.includes(path2[i])) {
                const index = path1.indexOf(path2[i]);
                let count = path1.length - index - 1;
                result = out.repeat(count) + result;
                break;
            }
            result = path2[i] + '/' + result;
            if (i === path2.length - 1) {
                throw new Error('Paths are not relative');
            }
        }
        return result.slice(0, -1);
    },
};

module.exports = path;
