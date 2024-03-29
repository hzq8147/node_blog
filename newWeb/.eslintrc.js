module.exports = {
    settings:{
        'import/resolver':{
            alias:{
                map:[
                    ['@','./src']
                ],
                extensions:['.ts','.js','.jsx','.vue']
            }
        }
    },
    extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // 自己配置的规则
        indent: [2, 4],
        'no-unused-vars': [2, {
            vars: 'all', // "local",允许声明未使用变量
            args: 'all', // 检查所有参数
        }],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                // 这里写覆盖vue文件的规则
                'no-unused-vars': [0],
            },
        },
    ],
};
