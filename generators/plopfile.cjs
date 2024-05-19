module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/component.vue.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: 'templates/stories.ts.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'templates/test.ts.hbs',
      },
    ],
  });
};
