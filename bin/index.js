#! /usr/bin/env node

const ENVIRONMENTS = [
    "typescript",
    "react",
    "react-typescript",
    "vue",
    "vue-typescript"
]

const vanilla = () => {
    console.log('index.js')
}

const typescript = () => {
    console.log('index.ts')
}

const react = () => {
    console.log('index.jsx')
}

const reactTypescript = () => {
    console.log('index.tsx')
}

const vue = () => {
    console.log('index.vue')

}

const vueTypescript = () => {
    console.log('index.vue','ts')
}

const snakeToCamel = str =>
  str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );

if ((process.argv).includes('--template')){
    let env = process.argv[process.argv.indexOf('--template')+1]
    if(!ENVIRONMENTS.includes(env)){
        throw new Error(`${env} doesnt exist on --template`)
    }
    eval(`${snakeToCamel(env)}()`)
} else {
    vanilla()
}

