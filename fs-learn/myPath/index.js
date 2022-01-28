const path = {
    join(...params) {
        return (
            '/' +
            params
                .map((param) =>
                    param.replace(new RegExp('^[' + '/' + ']+'), '')
                )
                .reduce((acc, elem) => {
                    if (elem === '..') {
                        acc.pop();
                    } else {
                        acc.push(elem);
                    }
                    return acc;
                }, [])
                .join('/')
        );
    },
    extname(path) {
        let index = path.lastIndexOf('.');
        return path.slice(index);
    },
    basename(path) {
        let index = path.lastIndexOf('/');
        return path.slice(index + 1);
    },
    dirname(path) {
        let index = path.lastIndexOf('/');
        return path.slice(0, index);
    },
    relative(path1, path2) {
        const OUT = '..';
        let result = [];
        path1 = path1.split('/');
        path2 = path2
            .split('/')
            .filter((elem) => elem != '')
            .reverse();
        for (let i in path2) {
            if (path1.includes(path2[i])) {
                const index = path1.indexOf(path2[i]);
                let count = path1.length - index - 1;
                result = [...Array(count).fill(OUT), ...result];
                break;
            }

            result = [path2[i], ...result];

            if (i == path2.length - 1) {
                throw new Error('Paths are not relative');
            }
        }
        return result.join('/');
    },
};

module.exports = path;
