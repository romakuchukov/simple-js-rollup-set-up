import node from 'rollup-plugin-node-resolve';

export default [{
  input: 'main.js',
  output: {
    name: 'Main',
    format: 'iife',
    dir: './',
    entryFileNames: 'main.min.js'
  },
  [node()]
}];
