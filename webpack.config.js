const path = require('path');

module.exports = {
    // multiple entry points
    // format = [output path]: [input path]
    entry: {
        './AdapterPattern/dist/bundle': './AdapterPattern/src/index.ts',
        './CommandPattern/dist/bundle': './CommandPattern/src/index.ts',
        './CompositePattern/dist/bundle': './CompositePattern/src/index.ts',
        './DecoratorPattern/dist/bundle': './DecoratorPattern/src/index.ts',
        './FacadePattern/dist/bundle': './FacadePattern/src/index.ts',
        './FactoryPattern/dist/bundle': './FactoryPattern/src/index.ts',
        './FactoryPatternSimple/dist/bundle': './FactoryPatternSimple/src/index.ts',
        './ObserverPattern/dist/bundle': './ObserverPattern/src/index.ts',
        './SingletonPattern/dist/bundle': './SingletonPattern/src/index.ts',
        './StatePattern/dist/bundle': './StatePattern/src/index.ts',
        './StrategyPattern/dist/bundle': './StrategyPattern/src/index.ts',
        './StrategyPatternAdventureGame/dist/bundle': './StrategyPatternAdventureGame/src/index.ts',
        './TemplatePattern/dist/bundle': './TemplatePattern/src/index.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname + '/')
    }
};