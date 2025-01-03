const plopConfig = (plop) => {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the Component name? (should use PascalCase)',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is the Component type?',
        default: 'none',
        choices: [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
          { name: 'Template', value: 'templates' },
          { name: 'Layout', value: 'layouts' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{type}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
    ],
  });
};
module.exports = plopConfig;
